local RunService = game:GetService("RunService")
local StatusEffect = setmetatable({}, {
    __tostring = function()
        return "StatusEffect"
    end
})
StatusEffect.__index = StatusEffect

local source = script.Parent
local deps = source.Parent.deps
local state = source.state

local utility = require(source.utility)
local signal = require(deps.fastsignal)
local janitor = require(deps.janitor)
local selectors = require(state.selectors)

local merge = utility.mergeTables
local registeredStatusEffects = {}

local nextId = 0
function generateId()
    nextId += RunService:IsServer() and 1 or -1
    return tostring(nextId)
end

function StatusEffect.new(...)
    local self = setmetatable({}, StatusEffect)
    return self:constructor(...) or self
end

function StatusEffect:__processStateChange(PreviousState, NewState)
    if NewState.IsActive and not PreviousState.IsActive then
        self:OnStart()
    elseif not NewState.IsActive and PreviousState.IsActive then
        self:OnEnd()
    end
end

function StatusEffect:constructor(Character)
    -- do checks in the constructor because we overwrite .new method on extending
    if not Character or tostring(getmetatable(Character)) ~= "Character" then
        utility.logError(`Not provided a valid character for StatusEffect constructor.`)
    end
    
    if not utility.activeHandler then
        utility.logError(`Attempted to instantiate a character before server has started.`)
    end

    self.StateChanged = signal.new()
    self.Destroyed = signal.new()
    self.DestroyOnEnd = true
    self.IsDestroyed = false

    self._id = generateId()
    self._metadata = {}
    self._character = Character
    self._state = {
        IsActive = false,
    }

    self._janitor = janitor.new()
    self._janitor:Add(self.StateChanged, "Destroy")
    self._janitor:Add(self.Destroyed, "Destroy")

    self._janitor:Add(self.StateChanged:Connect(function(...)
        self:__processStateChange(...)
    end))

    local SelectEffectData = selectors.SelectStatusEffectData(self._character, self._id)

    if RunService:IsClient() then
        local currentData = SelectEffectData(utility.activeHandler._root:getState())
        if currentData then
            print("client caught data: ", currentData)
            self:__setState(currentData.state)
        end

        local previousState
        utility.activeHandler._root:subscribe(SelectEffectData, function(Data)
            if not Data then return end

            if previousState ~= Data.state then
                previousState = Data.state
                self:__setState(Data.state)
            end
        end)
    end

    self:Construct()

    self:__replicate()
    self._character:__addStatus(self)
end

function StatusEffect:Start(Time)
    self:__availabilityCheck()

    if self._state.IsActive then
        utility.logWarning(`Cannot :Start() an active StatusEffect, try using :Stop() first`)
        return
    end

    self:__setState(merge(self:GetState(), {
        IsActive = true,
    }))
end

function StatusEffect:Stop()
    self:__availabilityCheck()

    self:__setState(merge(self:GetState(), {
        IsActive = false,
    }))

    if self.DestroyOnEnd then
        self:Destroy()
    end
end

function StatusEffect:SetMetadata(NewMetadata)
    self:__availabilityCheck()

    self._metadata = NewMetadata
    self:__replicate()
end

function StatusEffect:__replicate()
    if RunService:IsServer() then
        utility.activeHandler._root.setStatusData(self._character.Instance, self._id, self:__packDataForClient())
    end
end

function StatusEffect:Destroy()
    if RunService:IsServer() then
        utility.activeHandler._root.setStatusData(self._character.Instance, self._id, nil)
    end

    self.IsDestroyed = true
    self.Destroyed:Fire()
    self._janitor:Cleanup()
end

function StatusEffect:__availabilityCheck()
    if self.IsDestroyed then
        utility.logError(`Attempted to perform an action on a destroyed status effect! \n Suggestion: Maybe you forgot to modify .DestroyOnEnd?`)
    end
end

function StatusEffect:__packDataForClient()
    return {
        metadata = table.clone(self._metadata),
        state = table.clone(self._state),
        className = tostring(getmetatable(self)),
    }
end

function StatusEffect:GetId()
    return self._id
end

function StatusEffect:GetMetadata()
    return table.clone(self._metadata)
end

function StatusEffect:OnStart() end
function StatusEffect:OnEnd() end
function StatusEffect:Construct() end

function StatusEffect:GetState()
    return table.clone(self._state)
end

function StatusEffect:__setState(NewState)
    local previousState = self:GetState()

    self._state = NewState
    self.StateChanged:Fire(previousState, NewState)
    self:__replicate()
end

return {
    StatusEffect = StatusEffect,
    RegisterStatusEffect = function(Name)
        if registeredStatusEffects[Name] then
            utility.logError(`Attempted to register a status effect with name {Name} twice!`)
        end

        if typeof(Name) ~= "string" then
            utility.logError(`StatusEffect name should be a string.`)
        end

        local Class = setmetatable({}, {
            __tostring = function()
                return Name
            end,
            __index = StatusEffect
        })
        Class.__index = Class

        function Class.new(...)
            local self = setmetatable({}, Class)
            return self:constructor(...) or self
        end

        function Class:constructor(...)
            StatusEffect.constructor(self, ...)
        end

        registeredStatusEffects[Name] = Class
        return Class
    end,
    GetRegisteredStatusClass = function(Name)
        return registeredStatusEffects[Name]
    end
}
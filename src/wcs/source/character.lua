local RunService = game:GetService("RunService")
local source = script.Parent
local deps = source.Parent.deps
local state = source.state

local janitor = require(deps.janitor)
local signal = require(deps.fastsignal)
local utility = require(source.utility)
local selectors = require(state.selectors)
local statusEffect = require(source.statusEffect)

local Character = setmetatable({}, {
    __tostring = function()
        return "Character"
    end
})
Character.__index = Character
Character.CharacterCreated = signal.new()
Character.CharacterDestroyed = signal.new()

local currentCharMap = {}

function Character.new(Instance, __flag)
    if RunService:IsClient() and __flag ~= utility.clientCharacterIgnoreFlag then
        utility.logError([[
Attempted to manually create a character on client. 
On client side characters get created automatically and this can lead
to a possible desync
        ]])
    end

    if currentCharMap[Instance] then
        utility.logError(`Attempted to create 2 different characters over a same instance.`)
    end

    if not utility.activeHandler then
        utility.logError(`Attempted to instantiate a character before server has started.`)
    end

    if not Instance:FindFirstChildOfClass("Humanoid") then
        utility.logError(`Attempted to instantiate a character over an instance without humanoid.`)
    end

    local self = setmetatable({}, Character)
    currentCharMap[Instance] = self

    local toReturn = self:constructor(Instance) or self
    Character.CharacterCreated:Fire(self)

    return toReturn
end

function Character:constructor(Instance)
    self.Instance = Instance
    self.Humanoid = Instance:FindFirstChildOfClass("Humanoid")
    self.DamageTaken = signal.new()
    self.Destroyed = signal.new()
    self.StatusEffectAdded = signal.new()
    self.StatusEffectRemoved = signal.new()

    self._statusEffects = {}
    self._currentMoveset = {}

    self._janitor = janitor.new()
    self._janitor:Add(self.DamageTaken, "Destroy")
    self._janitor:Add(self.Destroyed, "Destroy")

    if RunService:IsClient() then
        self._janitor:Add(utility.activeHandler._root:subscribe(selectors.SelectStatusEffects(self.Instance), function(StatusEffects)
            if not StatusEffects then return end
            print(StatusEffects)
    
            for id, statusData in pairs(StatusEffects) do
                if not self._statusEffects[id] then
                    local class = statusEffect.GetRegisteredStatusClass(statusData.className)
                    if not class then
                        utility.logError(`Replication Error: Could not find a registered StatusEffect with name {statusData.className}. \n Try doing :RegisterDirectory() on the file directory.`)
                    end
    
                    local newInstance = class.new(self)
                    self._statusEffects[id] = newInstance;
                    continue
                end
            end
    
            for id, status in pairs(self._statusEffects) do
                if not (StatusEffects[id]) then
                    status:Destroy()
                    self._statusEffects[id] = nil
                end
            end
        end))
    end
 
    self._janitor:Add(function()
        for _, status in pairs(self._statusEffects) do
            status:Destroy()
        end
        table.clear(self._statusEffects)
    end)

    if RunService:IsServer() then
        utility.activeHandler._root.setCharacterData(self.Instance, self:__packDataForClient())
    end
end

function Character:Destroy()
    self._janitor:Cleanup()
    currentCharMap[self.Instance] = nil

    if RunService:IsServer() then
        utility.activeHandler._root.setCharacterData(self.Instance, nil)
    end

    self.Destroyed:Fire()
    Character.CharacterDestroyed:Fire(self)
end

function Character:GetStatusEffects()
    return table.clone(self._statusEffects)
end

function Character:Get()
    return table.clone(self._currentMoveset)
end

function Character:__packDataForClient()
    return {
        statusEffects = self._statusEffects,
        moveset = self._currentMoveset,
    }
end

function Character:__addStatus(StatusEffect)
    self.StatusEffectAdded:Fire(StatusEffect)
    self._statusEffects[StatusEffect:GetId()] = StatusEffect

    StatusEffect.Destroyed:Once(function()
        self._statusEffects[StatusEffect:GetId()] = nil
        self.StatusEffectRemoved:Fire(StatusEffect)
    end)
end

function Character.GetCharacterFromInstance(Instance)
    return currentCharMap[Instance]
end

function Character.GetCurrentCharacterMap()
    return currentCharMap
end

return Character
local RunService = game:GetService("RunService")
local source = script.Parent
local deps = source.Parent.deps

local janitor = require(deps.janitor)
local signal = require(deps.fastsignal)
local utility = require(source.utility)

local Character = {}
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
    self.statusEffects = {}
    self.currentSkillset = {}
    self.Instance = Instance
    self.Humanoid = Instance:FindFirstChildOfClass("Humanoid")

    self.DamageTaken = signal.new()
    self.Destroyed = signal.new()

    self.janitor = janitor.new()
    self.janitor:Add(self.DamageTaken, "Destroy")
    self.janitor:Add(self.Destroyed, "Destroy")

    if RunService:IsServer() then
        utility.activeHandler.root.setCharacterData(self.Instance, self:__packDataForClient())
    end
end

function Character:Destroy()
    janitor:Cleanup()
    currentCharMap[self.Instance] = nil

    if RunService:IsServer() then
        utility.activeHandler.root.setCharacterData(self.Instance, nil)
    end

    self.Destroyed:Fire()
    Character.CharacterDestroyed:Fire(self)
end

function Character:__packDataForClient()
    return {
        statusEffects = self.statusEffects,
        currentSkillset = self.currentSkillset,
    }
end

function Character.GetCharacterFromInstance(Instance)
    return currentCharMap[Instance]
end

function Character.GetCurrentCharacterMap()
    return currentCharMap
end

return Character
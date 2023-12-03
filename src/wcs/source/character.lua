local utility = require(script.Parent.utility)

local Character = {}
Character.__index = Character

local currentCharMap = {}

function Character.new(Instance)
    if currentCharMap[Instance] then
        utility.logError(`Attempted to create 2 different characters over a same instance.`)
    end

    if not utility.activeFrameworkInstance then
        utility.logError(`Attempted to instantiate a character before server has started.`)
    end

    if not Instance:FindFirstChildOfClass("Humanoid") then
        utility.logError(`Attempted to instantiate a character over an instance without humanoid.`)
    end

    local self = setmetatable({}, Character)
    currentCharMap[Instance] = self

    return self:constructor(Instance) or self
end

function Character:constructor(Instance)
    self.statusEffects = {}
    self.currentSkillset = {}
    self.Instance = Instance
    self.Humanoid = Instance:FindFirstChildOfClass("Humanoid")
end

function Character.GetCharacterFromInstance(Instance)
    return currentCharMap[Instance]
end

function Character.GetCurrentCharacterMap()
    return currentCharMap
end

function Character:__syncClient(data)
    
end

return Character
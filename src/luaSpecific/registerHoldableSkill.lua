local luaSpecific = script.Parent
local source = luaSpecific.Parent.source

local holdableSkill = require(source.holdableSkill)
local skillLib = require(source.skill)
local utility = require(source.utility)

function RegisterHoldableSkill(Name)
    if typeof(Name) ~= "string" then
        utility.logError("Not provided a valid name for RegisterSkill")
    end

    local super = holdableSkill.HoldableSkill
    local class = setmetatable({}, {
        __tostring = function()
            return Name
        end,
        __index = super,
    })
    class.__index = class

    function class.new(...)
        local self = setmetatable({}, class)
        return self:constructor(...) or self
    end

    function class:constructor(...)
        super.constructor(self, ...)
    end

    return skillLib.SkillDecorator(class) or class
end

return {
    RegisterHoldableSkill = RegisterHoldableSkill,
}
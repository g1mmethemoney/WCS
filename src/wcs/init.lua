local source = script.source

local server = require(source.server)
local character = require(source.character)
local client = require(source.client)
local statusEffectModule = require(source.statusEffect)

return {
    CreateServer = function()
        return server.new()
    end,
    CreateClient = function()
        return client.new()
    end,
    Character = character,
    RegisterStatusEffect = statusEffectModule.RegisterStatusEffect,
    StatusEffect = statusEffectModule.StatusEffect
}
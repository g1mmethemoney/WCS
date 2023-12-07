local source = script.Parent.Parent
local deps = source.Parent.deps

local reflex = require(deps.reflex)

local initialState = {}
local rootProducer = reflex.createProducer(initialState, {
    setCharacterData = function(State, Character, CharacterData)
        State = table.clone(State)
        State[Character] = CharacterData

        return State
    end,
    setStatusData = function(State, Character, StatusId, StatusData)
        State = table.clone(State)
        if not State[Character] then return State end

        local cloned = table.clone(State[Character].statusEffects)
        cloned[StatusId] = StatusData
        State[Character].statusEffects = cloned

        return State
    end
})

return rootProducer
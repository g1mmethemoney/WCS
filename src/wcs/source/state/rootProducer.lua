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
    removeCharacterData = function(State, Character, CharacterData)
        State = table.clone(State)
        State[Character] = nil

        return State
    end,
})

return rootProducer
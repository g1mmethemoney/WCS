return {
    SelectCharacterData = function(Character)
        return function(State)
            return State[Character]
        end
    end,

    SelectStatusEffects = function(Character)
        return function(State)
            if not State[Character] then return end
            return State[Character].statusEffects
        end
    end,

    SelectMoveset = function(Character)
        return function(State)
            if not State[Character] then return end
            return State[Character].moveset
        end
    end,

    SelectStatusEffectData = function(Character, Id)
        return function (State)
            if not State[Character] then return end
            return State[Character].statusEffects[Id]
        end
    end
}
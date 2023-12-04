return {
    SelectCharacterData = function(Character)
        return function(State)
            return State[Character]
        end
    end,
}
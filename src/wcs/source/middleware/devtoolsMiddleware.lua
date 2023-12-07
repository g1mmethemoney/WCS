local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local event = ReplicatedStorage:FindFirstChild("REFLEX_DEVTOOLS")

return function()
    return function (nextAction, actionName)
        return function (...)
            local state = nextAction(...)
            if RunService:IsStudio() and event then
                event:FireServer({
                    args = {...},
                    name = actionName,
                    state = state,
                })
            end

            return state
        end
    end
end
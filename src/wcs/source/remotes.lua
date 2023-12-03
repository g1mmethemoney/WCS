local RunService = game:GetService("RunService")
local actions = require(script.Parent.actions)

local events = table.clone(actions)
for index, event in pairs(events) do
    if RunService:IsServer() then
        local newRemote = Instance.new("RemoteEvent")
        newRemote.Parent = script
        newRemote.Name = event

        events[index] = newRemote
        continue
    end

    events[index] = script:WaitForChild(event)
end

return events
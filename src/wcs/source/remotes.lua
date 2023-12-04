local RunService = game:GetService("RunService")
local events = {
    "__dispatch",
    "__ready"
}

for _, event in pairs(events) do
    if typeof(event) ~= "string" then
        break
    end

    if RunService:IsServer() then
        local newRemote = Instance.new("RemoteEvent")
        newRemote.Parent = script
        newRemote.Name = event

        events[event] = newRemote
        continue
    end

    events[event] = script:WaitForChild(event)
end

return events
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local wcs = require(ReplicatedStorage.WCS)

Players.PlayerAdded:Connect(function(player)
    player.CharacterAdded:Connect(function(character)
        local wcs_char = wcs.Character.new(character)
        character:WaitForChild("Humanoid").Died:Connect(function()
            wcs_char:Destroy()
        end)

        local stun = wcs.RegisterStatusEffect("Stun")
        function stun:OnStart()
            print("status has started")
        end

        task.delay(3, function()
            local myStun = stun.new(wcs_char)
            myStun:Start()
        end)
    end)
end)

local server = wcs.CreateServer()
server:Start()
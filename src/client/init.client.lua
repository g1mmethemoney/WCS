local ReplicatedStorage = game:GetService("ReplicatedStorage")
local wcs = require(ReplicatedStorage.WCS)

local client = wcs.CreateClient()
client:Start()

wcs.Character.new(workspace)
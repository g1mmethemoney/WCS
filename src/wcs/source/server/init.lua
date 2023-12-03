local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

local utility = require(script.Parent.utility)
local character = require(script.Parent.character)
local dispatchActions = require(script.dispatchAction)

local currentInstance

local Server = {}
Server.__index = Server

function Server.new(...)
    if not currentInstance then
        utility.logWarning(`Attempted to instantiate server twice. \n Framework does not allow multiple server instances!`)

        local self = setmetatable({}, Server)
        currentInstance = self:constructor(...) or self
    end
    return currentInstance
end

function Server:constructor() 
    self.IsActive = false;
    self.syncQueue = {}
    self.ReplicationFilter = function(Player, Character)
        if Player.Character == Character.Instance then
            return true
        end

        return false
    end
end

function Server:Start()
    if self.IsActive then 
        utility.logWarning(`Attempted to :Start() server twice!`)
        return
    end
    
    self.lifecycle = RunService.Heartbeat:Connect(function()
        self:__onUpdate()
    end)
    self.IsActive = true;
    utility.activeFrameworkInstance = self;
end

function Server:__registerOperation(operation, instance, ...)
    table.insert(self.syncQueue, {operation, instance, {...}})
end

function Server:__onUpdate()
    if #self.syncQueue == 0 then
        return
    end

    for _, player in ipairs(Players:GetPlayers()) do
        local actionsToDispatch = {}

        for _, action in ipairs(self.syncQueue) do
            local operation, instance, args = action[1], action[2], action[3]
            if self.ReplicationFilter(player, instance) then
                table.insert(actionsToDispatch, {operation, instance, args})
            end
        end

        dispatchActions(player, actionsToDispatch)
    end

    table.clear(self.syncQueue)
end

return Server
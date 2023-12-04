local RunService = game:GetService("RunService")

local source = script.Parent
local deps = source.Parent.deps
local state = source.state

local utility = require(source.utility)
local remotes = require(source.remotes)
local reflex = require(deps.reflex)
local rootProducer = require(state.rootProducer)

local currentInstance

local Server = {}
Server.__index = Server

function Server.new()
    if not RunService:IsServer() then
        utility.logError(`Attempted to instantiate server handler on client side!`)
    end

    if currentInstance then
        utility.logWarning(`Attempted to instantiate server twice. \n Framework does not allow multiple server instances!`)
        return currentInstance
    end

    local self = setmetatable({}, Server)
    currentInstance = self:constructor() or self

    return currentInstance
end

function Server:constructor() 
    self.IsActive = false
    self.ReplicationFilter = function(Player, Character)
        return Player.Character == Character.Instance
    end

    self.root = rootProducer
    self.broadcaster = reflex.createBroadcaster({
        producers = {self.root},
        dispatch = function(player, actions)
            remotes.__dispatch:FireClient(player, actions)
        end
    })

    self.root:applyMiddleware(self.broadcaster.middleware)
end

function Server:Start()
    if self.IsActive then 
        utility.logWarning(`Attempted to :Start() server twice!`)
        return
    end
    
    self.IsActive = true;
    utility.activeHandler = self;

    remotes.__ready.OnServerEvent:Connect(function(player)
        self.broadcaster:start(player)
    end)

    if utility.debug then utility.logMessage(`Started server successfully`) end
end

return Server
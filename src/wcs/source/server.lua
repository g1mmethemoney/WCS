local RunService = game:GetService("RunService")

local source = script.Parent
local deps = source.Parent.deps
local state = source.state

local utility = require(source.utility)
local remotes = require(source.remotes)
local reflex = require(deps.reflex)
local rootProducer = require(state.rootProducer)

local currentInstance

local Server = setmetatable({}, {
    __tostring = function()
        return "Server"
    end
})
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

    self._root = rootProducer
    self._modulesToRegister = {}
end

function Server:RegisterDirectory(Directory)
    if typeof(Directory) ~= "Instance" then
        utility.logError(`Directory should be an instance.`)
    end

    if self.IsActive then
        utility.logWarning(`Cannot register a path after the server has started!`)
        return
    end
    
    for _, Descendant in pairs(Directory:GetDescendants()) do
        if not Descendant:IsA("ModuleScript") then continue end
        table.insert(self._modulesToRegister, Descendant)
    end
end

function Server:Start()
    if self.IsActive then 
        utility.logWarning(`Attempted to :Start() server twice!`)
        return
    end

    for _, module in pairs(self._modulesToRegister) do
        require(module)
    end
    table.clear(self._modulesToRegister)
    
    self.IsActive = true;
    utility.activeHandler = self;

    remotes.__ready.OnServerEvent:Connect(function(player)
        self._broadcaster:start(player)
    end)

    self._broadcaster = reflex.createBroadcaster({
        producers = {self._root},
        dispatch = function(player, actions)
            remotes.__dispatch:FireClient(player, actions)
        end
    })
    self._root:applyMiddleware(self._broadcaster.middleware)

    if utility.debug then utility.logMessage(`Started server successfully`) end
end

return Server
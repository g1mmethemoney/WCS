local RunService = game:GetService("RunService")

local source = script.Parent
local deps = source.Parent.deps
local state = source.state

local utility = require(source.utility)
local remotes = require(source.remotes)
local character = require(source.character)

local reflex = require(deps.reflex)
local rootProducer = require(state.rootProducer)

local middleware = source.middleware
local devToolsMiddleware = require(middleware.devtoolsMiddleware)

local currentInstance
local Client = setmetatable({}, {
    __tostring = function()
        return "Client"
    end
})
Client.__index = Client

function Client.new()
    if not RunService:IsClient() then
        utility.logError(`Attempted to instantiate client handler on server-side!`)
    end

    if currentInstance then
        utility.logWarning(`Attempted to instantiate Client twice. \n {utility.consolePrefix} does not allow multiple Client instances!`)
        return currentInstance
    end

    local self = setmetatable({}, Client)
    currentInstance = self:constructor() or self

    return currentInstance
end

function Client:constructor() 
    self.IsActive = false
    self._root = rootProducer
    self._modulesToRegister = {}
end

function Client:RegisterDirectory(Directory)
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

function Client:Start()
    if self.IsActive then 
        utility.logWarning(`Attempted to :Start() Client twice!`)
        return
    end

    for _, module in pairs(self._modulesToRegister) do
        require(module)
    end
    table.clear(self._modulesToRegister)

    self._receiver = reflex.createBroadcastReceiver({
        start = function()
            remotes.__ready:FireServer()
        end
    })
    self._root:applyMiddleware(self._receiver.middleware):applyMiddleware(devToolsMiddleware)

    remotes.__dispatch.OnClientEvent:Connect(function(actions)
        self._receiver:dispatch(actions)
    end)

    local previousAmount
    self._root:subscribe(function(state)
        local amount = utility.countKeysInDict(state)

        if previousAmount == amount then
            return
        end

        for instance, _ in pairs(state) do
            if character.GetCharacterFromInstance(instance) then
                continue
            end

            character.new(instance, utility.clientCharacterIgnoreFlag)
        end
        for instance, character in pairs(character.GetCurrentCharacterMap()) do
            if state[instance] then
                continue
            end

            character:Destroy()
        end

        previousAmount = amount
    end)

    self.IsActive = true
    utility.activeHandler = self

    if utility.debug then utility.logMessage(`Started client successfully`) end
end

return Client
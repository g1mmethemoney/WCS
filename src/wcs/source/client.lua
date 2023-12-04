local RunService = game:GetService("RunService")

local source = script.Parent
local deps = source.Parent.deps
local state = source.state

local utility = require(source.utility)
local remotes = require(source.remotes)
local character = require(source.character)

local reflex = require(deps.reflex)
local rootProducer = require(state.rootProducer)

local currentInstance
local Client = {}
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
    self.root = rootProducer
    self.receiver = reflex.createBroadcastReceiver({
        start = function()
            remotes.__ready:FireServer()
        end
    })
    self.root:applyMiddleware(self.receiver.middleware)
end

function Client:Start()
    if self.IsActive then 
        utility.logWarning(`Attempted to :Start() Client twice!`)
        return
    end

    remotes.__dispatch.OnClientEvent:Connect(function(actions)
        self.receiver:dispatch(actions)
    end)

    local previousAmount
    self.root:subscribe(function(state)
        local amount = 0
        for _, __ in pairs(state) do
            amount += 1
        end

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

        print(character.GetCurrentCharacterMap())

        previousAmount = amount
    end)

    self.IsActive = true;
    utility.activeHandler = self;

    if utility.debug then utility.logMessage(`Started client successfully`) end
end

return Client
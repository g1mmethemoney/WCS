local utility = require(script.Parent.utility)
local character = require(script.Parent.character)
local remotes = require(script.Parent.remotes)

local currentInstance
local Client = {}
Client.__index = Client

function Client.new(...)
    if not currentInstance then
        utility.logWarning(`Attempted to instantiate Client twice. \n Framework does not allow multiple Client instances! \n {debug.traceback()}`)

        local self = setmetatable({}, Client)
        currentInstance = self:constructor(...) or self
    end
    return currentInstance
end

function Client:constructor() 
    self.IsActive = false;
end

function Client:Start()
    if self.IsActive then 
        utility.logWarning(`Attempted to :Start() Client twice!`)
        return
    end
    
    remotes.__sync:connect(function(instance, data)
        self:__handleSyncRequest(instance, data)
    end)
    self.IsActive = true;
    utility.activeFrameworkInstance = self;
end

function Client:__handleSyncRequest(instance, data)

end

return Client
local prefix = "WCS"
local errorString = `--// [{prefix}]: Caught an error in your code //--`

function logError(ErrorMessage, hideTraceback)
    error(hideTraceback and `\n {errorString} \n {ErrorMessage} ` or `\n {errorString} \n {ErrorMessage} \n \n {debug.traceback()}`)
end

function logWarning(Warning, hideTraceback)
    warn(hideTraceback and `[{prefix}]: {Warning}` or `[{prefix}]: {Warning} \n \n {debug.traceback()}`)
end

function logMessage(Message)
    print(`[{prefix}]: {Message}`)
end

local deps = script.Parent.Parent.deps
local symbol = require(deps.symbol)

return {
    consolePrefix = prefix,
    logError = logError,
    logWarning = logWarning,
    logMessage = logMessage,
    activeHandler = nil,
    clientCharacterIgnoreFlag = symbol("__unique_ClientCanInstantiateCharacter"),
    debug = true,
}
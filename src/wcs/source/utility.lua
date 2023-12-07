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

function countKeysInDict(dict)
    local amount = 0
    for _, __ in pairs(dict) do
        amount += 1
    end

    return amount
end

function mergeTables(tbl1, tbl2)
    tbl1 = table.clone(tbl1)
    for i,v in pairs(tbl2) do
        tbl1[i] = v
    end

    return tbl1
end

local deps = script.Parent.Parent.deps
local symbol = require(deps.symbol)

return {
    consolePrefix = prefix,
    logError = logError,
    logWarning = logWarning,
    logMessage = logMessage,
    countKeysInDict = countKeysInDict,
    mergeTables = mergeTables,
    activeHandler = nil,
    clientCharacterIgnoreFlag = symbol("__unique_ClientCanInstantiateCharacter"),
    debug = true,
}
-- Compiled with roblox-ts v1.2.7
local TS = require(script.Parent.rbxts_include.RuntimeLib)
local exports = {}
-- Data
for _k, _v in pairs(TS.import(script, script, "Data", "Enums")) do
	exports[_k] = _v
end
-- Implementation
for _k, _v in pairs(TS.import(script, script, "Implementation", "Timer")) do
	exports[_k] = _v
end
-- Interfaces
return exports

-- Compiled with roblox-ts v1.2.7
-- * Defines the set of states a timer can be in
local TimerState
do
	local _inverse = {}
	TimerState = setmetatable({}, {
		__index = _inverse,
	})
	TimerState.NotRunning = 0
	_inverse[0] = "NotRunning"
	TimerState.Paused = 1
	_inverse[1] = "Paused"
	TimerState.Running = 2
	_inverse[2] = "Running"
end
-- * Defines the set of reasons why a timer would stop
local TimerStopCause
do
	local _inverse = {}
	TimerStopCause = setmetatable({}, {
		__index = _inverse,
	})
	TimerStopCause.Stopped = 0
	_inverse[0] = "Stopped"
	TimerStopCause.Completed = 1
	_inverse[1] = "Completed"
end
return {
	TimerState = TimerState,
	TimerStopCause = TimerStopCause,
}

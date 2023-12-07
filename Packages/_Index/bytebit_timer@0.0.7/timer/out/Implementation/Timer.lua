-- Compiled with roblox-ts v1.2.7
local TS = require(script.Parent.Parent.Parent.rbxts_include.RuntimeLib)
local RunService = TS.import(script, TS.getModule(script, "@rbxts", "services")).RunService
local _signals_tooling = TS.import(script, TS.getModule(script, "@rbxts", "signals-tooling").out)
local ConnectionManager = _signals_tooling.ConnectionManager
local Signal = _signals_tooling.Signal
local Dumpster = TS.import(script, TS.getModule(script, "@rbxts", "dumpster").Dumpster).Dumpster
local _Enums = TS.import(script, script.Parent.Parent, "Data", "Enums")
local TimerStopCause = _Enums.TimerStopCause
local TimerState = _Enums.TimerState
local function assertValidLength(lengthInSeconds)
	if lengthInSeconds <= 0 then
		error("Timer length must be greater than 0")
	end
end
local Timer
do
	Timer = setmetatable({}, {
		__tostring = function()
			return "Timer"
		end,
	})
	Timer.__index = Timer
	function Timer.new(...)
		local self = setmetatable({}, Timer)
		return self:constructor(...) or self
	end
	function Timer:constructor(lengthInSeconds)
		assertValidLength(lengthInSeconds)
		self.completed = Signal.new()
		self.lengthChanged = Signal.new()
		self.paused = Signal.new()
		self.resumed = Signal.new()
		self.started = Signal.new()
		self.stopped = Signal.new()
		self.secondReached = Signal.new()
		self.lastEmittedSeconds = -1
		self.lengthInSeconds = lengthInSeconds
		self.runningEventsConnectionManager = self:_initializeRunningEventsConnectionManager()
		self.state = TimerState.NotRunning
		self.timeLeftInSeconds = 0
		self.dumpster = Dumpster.new()
		self.dumpster:dump(self.completed, function()
			return self.completed:disconnectAll()
		end)
		self.dumpster:dump(self.lengthChanged, function()
			return self.lengthChanged:disconnectAll()
		end)
		self.dumpster:dump(self.paused, function()
			return self.paused:disconnectAll()
		end)
		self.dumpster:dump(self.resumed, function()
			return self.resumed:disconnectAll()
		end)
		self.dumpster:dump(self.started, function()
			return self.started:disconnectAll()
		end)
		self.dumpster:dump(self.stopped, function()
			return self.stopped:disconnectAll()
		end)
		self.dumpster:dump(self.secondReached, function()
			return self.secondReached:disconnectAll()
		end)
		self.dumpster:dump(self.runningEventsConnectionManager, function()
			return self.runningEventsConnectionManager:disconnectAll()
		end)
	end
	function Timer:destroy()
		if self.state ~= TimerState.NotRunning then
			self:stop()
		end
		self.dumpster:burn()
	end
	function Timer:getCurrentEndDateTime()
		if self.state ~= TimerState.Running then
			error("Cannot estimate end time when not running")
		end
		local timeLeftMillis = math.ceil(self.timeLeftInSeconds * 1000)
		local currentDateTime = DateTime.now()
		local currentEndDateTime = DateTime.fromUnixTimestampMillis(currentDateTime.UnixTimestampMillis + timeLeftMillis)
		return currentEndDateTime
	end
	function Timer:getCurrentEndTimeUtc()
		if self.state ~= TimerState.Running then
			error("Cannot estimate end time when not running")
		end
		return os.time() + self.timeLeftInSeconds
	end
	function Timer:getState()
		return self.state
	end
	function Timer:getTimeLeft()
		return self.timeLeftInSeconds
	end
	function Timer:pause()
		if self.state == TimerState.Running then
			error("Cannot pause a timer that is not running")
		end
		self.state = TimerState.Paused
		self.runningEventsConnectionManager:disconnectAll()
		self.paused:fire()
	end
	function Timer:resume()
		if self.state ~= TimerState.Paused then
			error("Cannot resume a timer that is not paused")
		end
		self.state = TimerState.Running
		self.runningEventsConnectionManager:connectAll()
		self.resumed:fire()
	end
	function Timer:runSync()
		self:start()
		local stopCause = self.stopped:Wait()
		return stopCause
	end
	function Timer:setLength(lengthInSeconds)
		assertValidLength(lengthInSeconds)
		if self.lengthInSeconds == lengthInSeconds then
			return nil
		end
		local oldLengthInSeconds = self.lengthInSeconds
		self.lengthInSeconds = lengthInSeconds
		self.lengthChanged:fire(lengthInSeconds, oldLengthInSeconds)
	end
	function Timer:start()
		if self.state == TimerState.Running then
			error("Cannot start a timer that is already running")
		end
		self.timeLeftInSeconds = self.lengthInSeconds
		self.state = TimerState.Running
		self.runningEventsConnectionManager:connectAll()
		self.started:fire()
	end
	function Timer:stop()
		if self.state == TimerState.NotRunning then
			error("Cannot stop a timer that is not running or paused")
		end
		self:_cleanUp(TimerStopCause.Stopped)
	end
	function Timer:_cleanUp(timerStopCause)
		self.lastEmittedSeconds = -1
		self.state = TimerState.NotRunning
		self.timeLeftInSeconds = 0
		self.runningEventsConnectionManager:disconnectAll()
		self.stopped:fire(timerStopCause)
	end
	function Timer:_initializeRunningEventsConnectionManager()
		local runningEventsConnectionManager = ConnectionManager.new()
		runningEventsConnectionManager:addConnectionData(RunService.Heartbeat, function(timeStep)
			if self.state ~= TimerState.Running then
				return nil
			end
			self.timeLeftInSeconds -= timeStep
			if self.timeLeftInSeconds <= 0 then
				self:_cleanUp(TimerStopCause.Completed)
				self.completed:fire()
				return nil
			end
			local timeLeftCeil = math.ceil(self.timeLeftInSeconds)
			if timeLeftCeil ~= self.lastEmittedSeconds then
				self.lastEmittedSeconds = timeLeftCeil
				self.secondReached:fire(timeLeftCeil)
			end
		end)
		return runningEventsConnectionManager
	end
end
return {
	Timer = Timer,
}

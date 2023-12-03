--[[
	FastSignal has 3 editions.

		* Adaptive
		* Deferred
		* Immediate

	Deferred FastSignal as you might have guessed, runs in deferred mode.
	It uses task.defer, and don't recycle threads, however they are
	more consistent with RBXScriptSignal behaviour in the future.

	Immediate signals are immediate, they use task.spawn, behaviour
	is a bit more undefined, and they recycle threads, this is what
	live roblox games currently can only use.

	Adaptive fixes the deciding, realistically you should have deferred
	event behaviour enabled on your game, with code working both in deferred,
	and immediate mode, if you can't, that usually means you have structural problems.

	Adaptive works by detecting which mode your game is currently using,
	and then adapting to that.

	Mixing signal behaviour is something extremely annoying to deal with,
	as order can't be relied upon anymore, so I highly recommend you stay
	away from having systems use both deferred and immediate, and staying with one.
	Preferably, use Deferred behaviour.
]]

return "Readme.lua"
local exports = {}

function exports.listenOnce(signal, callback)
	local connection
	connection = signal:Connect(function(...)
		connection:Disconnect()
		callback(...)
	end)
	return connection
end

return exports

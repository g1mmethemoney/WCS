local remotes = require(script.Parent.Parent.remotes)

return function (Player, Actions)
    for _, action in pairs(Actions) do
        remotes[action[1]]:FireClient(Player, action[2], action[3])
    end
end
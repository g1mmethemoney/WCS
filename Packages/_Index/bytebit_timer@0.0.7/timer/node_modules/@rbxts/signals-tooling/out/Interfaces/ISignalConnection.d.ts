/**
 * Defines a particular signal connection
 * Members are PascalCase to match Roblox's RBXScriptConnection
 */
export interface ISignalConnection {
	/**
	 * Whether the connection is still connected
	 */
	readonly Connected: boolean;

	/**
	 * Disconnnects the signal connection.
	 */
	Disconnect(): void;
}

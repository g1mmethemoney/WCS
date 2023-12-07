import { AnyArgs } from "../types";
import { ISignalConnection } from "./ISignalConnection";

/**
 * Defines a signal that can be connected to but not fired
 * Members are PascalCase to match Roblox's RBXScriptSignal
 */
export interface IReadOnlySignal<T extends AnyArgs = () => void> {
	/**
	 * Connects a callback function to the firing of the signal
	 * @param onFiredCallback The function to associate with the firing of the signal
	 */
	Connect(onFiredCallback: T): ISignalConnection;

	/**
	 * Waits for the signal to be fired and then returns the parameters that were supplied
	 */
	Wait(): LuaTuple<Parameters<T>>;
}

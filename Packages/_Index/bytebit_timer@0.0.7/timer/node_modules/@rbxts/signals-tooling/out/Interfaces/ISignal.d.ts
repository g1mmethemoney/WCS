import { AnyArgs } from "../types";
import { IReadOnlySignal } from "./IReadOnlySignal";
import { IDestroyable } from "@rbxts/dumpster";

/**
 * Defines a signal for creating new branches
 */
export interface ISignal<T extends AnyArgs = () => void> extends IReadOnlySignal<T>, IDestroyable {
	/**
	 * Disconnects all connections
	 */
	disconnectAll(): void;

	/**
	 * Fires the signal
	 * @param args The arguments to be used for firing the signal
	 */
	fire(...args: Parameters<T>): void;
}

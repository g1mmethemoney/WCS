import { IDestroyable } from "@rbxts/dumpster";
import { IReadOnlyTimer } from "./IReadOnlyTimer";
import { TimerStopCause } from "../Data/Enums";

export interface ITimer extends IReadOnlyTimer, IDestroyable {
	// Methods
	/**
	 * Pauses the timer
	 * @throws Throws if the timer is not currently running
	 */
	pause(): void;

	/**
	 * Resumes the timer
	 * @throws Throws if the timer is not currently paused
	 */
	resume(): void;

	/**
	 * Runs the timer and will yield until it is stopped, either prematurely or by completion
	 * @returns A value indicating what caused the timer to stop
	 * @throws Throws if the timer is already running
	 */
	runSync(): TimerStopCause;

	/**
	 * Sets the length of the timer
	 * @param lengthInSeconds The length of the timer in seconds
	 * @throws Throws if the length in seconds is <= 0
	 */
	setLength(lengthInSeconds: number): void;

	/**
	 * Starts the timer
	 * @throws Throws if the timer is already running
	 */
	start(): void;

	/**
	 * Stops the timer
	 * @throws Throws if the timer is not running or paused
	 */
	stop(): void;
}

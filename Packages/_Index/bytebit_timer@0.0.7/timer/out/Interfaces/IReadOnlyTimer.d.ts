import { IReadOnlySignal } from "@rbxts/signals-tooling";
import { TimerStopCause, TimerState } from "../Data/Enums";

export interface IReadOnlyTimer {
	// Fields
	/**
	 * Fired when the timer hits 0 seconds remaining
	 */
	readonly completed: IReadOnlySignal<() => void>;

	/**
	 * Fired when the length of the timer is changed
	 * @argument newLengthInSeconds The new length of the timer in seconds
	 * @argument oldLengthInSeconds The old length of the timer in seconds
	 */
	readonly lengthChanged: IReadOnlySignal<(newLengthInSeconds: number, oldLengthInSeconds: number) => void>;

	/**
	 * Fired when the timer is paused
	 */
	readonly paused: IReadOnlySignal<() => void>;

	/**
	 * Fired when the timer is resumed after being paused
	 */
	readonly resumed: IReadOnlySignal<() => void>;

	/**
	 * Fired when the timer is started from the beginning
	 */
	readonly started: IReadOnlySignal<() => void>;

	/**
	 * Fired when the timer is stopped
	 */
	readonly stopped: IReadOnlySignal<(stopCause: TimerStopCause) => void>;

	/**
	 * Fired every second as timer progresses
	 * Used primarily for debugging
	 */
	readonly secondReached: IReadOnlySignal<(seconds: number) => void>;

	// Methods
	/**
	 * Gets the current projected end time in UTC
	 */
	getCurrentEndDateTime(): DateTime;

	/**
	 * Gets the current projected end time in UTC
	 */
	getCurrentEndTimeUtc(): number;

	/**
	 * Gets the current state of the timer
	 */
	getState(): TimerState;

	/**
	 * Gets the amount of time left on the timer in seconds
	 */
	getTimeLeft(): number;
}

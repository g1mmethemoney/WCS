/// <reference types="@rbxts/types" />
import { ISignal } from "@rbxts/signals-tooling";
import { ITimer } from "../Interfaces/ITimer";
import { TimerStopCause, TimerState } from "../Data/Enums";
export declare class Timer implements ITimer {
    readonly completed: ISignal<() => void>;
    readonly lengthChanged: ISignal<(newLengthInSeconds: number, oldLengthInSeconds: number) => void>;
    readonly paused: ISignal<() => void>;
    readonly resumed: ISignal<() => void>;
    readonly started: ISignal<() => void>;
    readonly stopped: ISignal<(stopCause: TimerStopCause) => void>;
    readonly secondReached: ISignal<(seconds: number) => void>;
    private readonly runningEventsConnectionManager;
    private lastEmittedSeconds;
    private lengthInSeconds;
    private state;
    private timeLeftInSeconds;
    private dumpster;
    /**
     * Instantiates a new InterruptableTimer
     * @param lengthInSeconds The length of the timer in seconds
     * @throws Throws if lengthInSeconds <= 0
     */
    constructor(lengthInSeconds: number);
    destroy(): void;
    getCurrentEndDateTime(): DateTime;
    getCurrentEndTimeUtc(): number;
    getState(): TimerState;
    getTimeLeft(): number;
    pause(): void;
    resume(): void;
    runSync(): TimerStopCause;
    setLength(lengthInSeconds: number): void;
    start(): void;
    stop(): void;
    private _cleanUp;
    private _initializeRunningEventsConnectionManager;
}

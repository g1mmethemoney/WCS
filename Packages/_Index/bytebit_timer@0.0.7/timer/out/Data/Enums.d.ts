/** Defines the set of states a timer can be in */
export declare enum TimerState {
    /** The timer is not running at all  */
    NotRunning = 0,
    /** The timer has started but is currently paused  */
    Paused = 1,
    /** The timer is currently running  */
    Running = 2
}
/** Defines the set of reasons why a timer would stop */
export declare enum TimerStopCause {
    /** The timer was stopped prematurely  */
    Stopped = 0,
    /** The timer completed in its entirety  */
    Completed = 1
}

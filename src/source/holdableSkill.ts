/* eslint-disable roblox-ts/no-array-pairs */
import { RunService } from "@rbxts/services";
import { Skill, SkillProps, SkillType, _internal_SkillState } from "./skill";
import { Timer, TimerState } from "@rbxts/timer";
import { Character } from "./character";
import { logError } from "./utility";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyHoldableSkill = HoldableSkill<any, any[], any, any, any>;
export type UnknownHoldableSkill = HoldableSkill<unknown, unknown[], unknown, unknown, unknown>;

export abstract class HoldableSkill<
    StarterParams = void,
    ConstructorArguments extends unknown[] = [],
    Metadata = void,
    ServerToClientMessage = void,
    ClientToServerMessage = void,
> extends Skill<
    StarterParams,
    ConstructorArguments,
    Metadata,
    ServerToClientMessage | { __setHoldTime: number | undefined },
    ClientToServerMessage
> {
    /** Manually starting or stopping the timer will break things */
    protected readonly HoldTimer = new Timer(10);
    protected _skillType: SkillType = SkillType.Holdable;

    constructor(Character: Character);
    /**
     * @internal Reserved for internal usage
     * @hidden
     */
    constructor(Character: SkillProps);
    constructor(Props: Character | SkillProps) {
        super(Props as never);
        if (RunService.IsServer()) {
            this._janitor.Add(
                this.HoldTimer.completed.Connect(() => this.GetState().IsActive && this.End()),
                "Disconnect",
            );
        }
    }

    /** @internal @hidden */
    protected _stateDependentCallbacks(State: _internal_SkillState, PreviousState: _internal_SkillState) {
        if (PreviousState._isActive_counter === State._isActive_counter) return;

        if (!PreviousState.IsActive && State.IsActive) {
            if (this.GetState().MaxHoldTime !== undefined) this.HoldTimer.start();
            RunService.IsClient()
                ? this.OnStartClient(State.StarterParams as StarterParams)
                : this.OnStartServer(State.StarterParams as StarterParams);
            this.Started.Fire();
        } else if (PreviousState.IsActive && !State.IsActive) {
            if (this.HoldTimer.getState() === TimerState.Running) this.HoldTimer.stop();
            RunService.IsClient() ? this.OnEndClient() : this.OnEndServer();
            this.Ended.Fire();
        }
        if (State.MaxHoldTime !== PreviousState.MaxHoldTime) {
            if (State.MaxHoldTime) this.HoldTimer.setLength(State.MaxHoldTime);
        }
        if (PreviousState.IsActive === State.IsActive && this.isReplicated) {
            this.OnStartClient(State.StarterParams as StarterParams);
            this.Started.Fire();
            this.OnEndClient();
            this.Ended.Fire();
        }
    }

    /**
     * Sets the maximum hold time for the skill.
     */
    public SetMaxHoldTime(MaxHoldTime?: number) {
        if (MaxHoldTime && MaxHoldTime <= 0) {
            logError("Max Hold Time can't be lower or equal to zero");
        }

        this.SetState({ MaxHoldTime: MaxHoldTime });
        if (MaxHoldTime) this.HoldTimer.setLength(MaxHoldTime);
    }

    /**
     * Retrieves the maximum hold time.
     */
    public GetMaxHoldTime() {
        return this.GetState().MaxHoldTime;
    }
}

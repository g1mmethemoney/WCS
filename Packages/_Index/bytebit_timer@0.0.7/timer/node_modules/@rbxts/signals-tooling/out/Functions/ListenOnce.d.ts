import { IReadOnlySignal } from "../Interfaces/IReadOnlySignal";
import { AnyArgs } from "../types";
import { ISignalConnection } from "../Interfaces/ISignalConnection";

export function listenOnce<T extends AnyArgs>(signal: IReadOnlySignal<T>, callback: T): ISignalConnection;

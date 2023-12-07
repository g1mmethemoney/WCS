/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

interface ReadonlySet<T> extends Iterable<T> {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Set: unique symbol;

	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(this: ReadonlySet<T>): boolean;

	/**
	 * Performs the specified action for each (element / pair of elements) in the set
	 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each (element / pair of elements) in the array.
	 */
	forEach(this: ReadonlySet<T>, callbackfn: (value: T, value2: T, self: ReadonlySet<T>) => void): void;

	/**
	 * Returns the number of elements in the set
	 */
	size(this: ReadonlySet<T>): number;

	/**
	 * Returns a boolean for whether the given key exists in the set
	 */
	has(this: ReadonlySet<T>, value: T): boolean;
}

interface ReadonlySetConstructor {
	new <T>(): ReadonlySet<T>;
	new <T>(values: ReadonlyArray<T>): ReadonlySet<T>;
}
declare const ReadonlySet: ReadonlySetConstructor;

interface Set<T> extends ReadonlySet<T> {
	/**
	 * Adds a value to the set
	 */
	add(this: Set<T>, value: T): this;

	/**
	 * Deletes the given key from the set.
	 *
	 * Returns a boolean indicating whether or not a value was removed.
	 */
	delete(this: Set<T>, value: T): boolean;

	/**
	 * Deletes all members of the set.
	 */
	clear(this: Set<T>): void;
}

interface SetConstructor {
	new <T>(): Set<T>;
	new <T>(values: ReadonlyArray<T>): Set<T>;
}
declare const Set: SetConstructor;

/** A Set object with its `__mode` metamethod set to "k" */
interface WeakSet<T extends object> extends Set<T> {}

interface WeakSetConstructor {
	new <T extends object>(): WeakSet<T>;
	new <T extends object>(values: ReadonlyArray<T>): WeakSet<T>;
}
declare const WeakSet: WeakSetConstructor;

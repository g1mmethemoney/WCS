/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

/**
 * A Map object which cannot be written to. The Map object holds key-value pairs but doesn't remember the original insertion order of the keys (like JS would). Any value (both objects and primitive values) may be used as either a key or a value.
 * Maps are the best choice for dynamic indexing/newindexing, whereas Objects are better for explicit indexing.
 * @example
 * // ReadonlyMaps are particularly useful for defining readonly-associations with non-numeric, non-string keys.
 * new ReadonlyMap<Enum.HumanoidRigType, () => void>([
 * 	[Enum.HumanoidRigType.R6, () => {}],
 * 	[Enum.HumanoidRigType.R15, () => {}],
 * ]);
 * // Do not use Maps when you can easily index from an object:
 *
 * // TS doesn't assume "x" | "y" are the only possible fields.
 * // You could manually type this as ReadonlyMap<"x" | "y", number>
 * const point = new ReadonlyMap([["x", 5], ["y", 10]]);
 * // this is typed as possibly undefined, which isn't ideal
 * print(point.get("x"));
 *
 * // Instead use an object
 * const point = { x: 5, y: 10 } as const;
 * print(point.x);
 */
interface ReadonlyMap<K, V> extends Iterable<[K, V]> {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Map: unique symbol;

	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(this: ReadonlyMap<K, V>): boolean;

	/**
	 * Performs the specified action for each (element / pair of elements) in the Map
	 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time
	 * for each (element / pair of elements) in the array.
	 */
	forEach(this: ReadonlyMap<K, V>, callbackfn: (value: V, key: K, self: this) => void): void;

	/**
	 * Returns the number of elements in the Map
	 */
	size(this: ReadonlyMap<K, V>): number;

	/**
	 * Returns a boolean for whether the given key exists in the Map
	 */
	has(this: ReadonlyMap<K, V>, key: K): boolean;

	/**
	 * Returns the value associated with the given key
	 */
	get(this: ReadonlyMap<K, V>, key: K): V | undefined;
}

interface ReadonlyMapConstructor {
	new <K, V>(): ReadonlyMap<K, V>;
	new <K, V>(entries: ReadonlyArray<readonly [K, V]>): ReadonlyMap<K, V>;
}
declare const ReadonlyMap: ReadonlyMapConstructor;

/**
 * The Map object holds key-value pairs but doesn't remember the original insertion order of the keys (like JS would). Any value (both objects and primitive values) may be used as either a key or a value.
 * Maps are the best choice for dynamic indexing/newindexing, whereas Objects are better for explicit indexing.
 * @example
 * const playerData = new Map<Player, PlayerData>();
 *
 * function f(plr: Player) {
 * 	const data = playerData.get(plr); // `data` could be undefined
 * 	if (data) { // check to make sure `data` is defined
 * 		print(`${plr.Name} has ${data.NumItems} item${data.NumItems === 1 ? "" : "s"}`);
 * 	}
 * }
 * // Do not use Maps when you can easily explicitly index from an object:
 *
 * // TS doesn't assume "x" | "y" are the only possible fields.
 * // You could manually type this as Map<"x" | "y", number>
 * const point = new Map([["x", 5], ["y", 10]]);
 * // this is typed as possibly undefined, because "x" can be deleted
 * print(point.get("x"));
 *
 * // Instead use an object
 * const point = { x: 5, y: 10 };
 * print(point.y++);
 * point.z = 15 // error!
 */
interface Map<K, V> extends ReadonlyMap<K, V> {
	/**
	 * Associates a key with a value which can be accessed later by `Map.get`
	 */
	set(this: Map<K, V>, key: K, value: V): this;

	/**
	 * Deletes the given key from the Map.
	 *
	 * Returns a boolean indicating whether or not a value was removed.
	 */
	delete(this: Map<K, V>, key: K): boolean;

	/**
	 * Deletes all members of the Map
	 */
	clear(this: Map<K, V>): void;
}

interface MapConstructor {
	new <K, V>(): Map<K, V>;
	new <K, V>(entries: ReadonlyArray<readonly [K, V]>): Map<K, V>;
}
declare const Map: MapConstructor;

/** A Map object with its `__mode` metamethod set to "k" */
interface WeakMap<K extends object, V> extends Map<K, V> {}

interface WeakMapConstructor {
	new <K extends object, V>(): WeakMap<K, V>;
	new <K extends object, V>(entries: ReadonlyArray<readonly [K, V]>): WeakMap<K, V>;
}
declare const WeakMap: WeakMapConstructor;

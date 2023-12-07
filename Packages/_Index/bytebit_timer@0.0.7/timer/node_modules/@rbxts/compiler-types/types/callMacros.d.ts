/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

/** Throws an error if the provided value is false or nil. */
declare function assert<T>(condition: T, message?: string): asserts condition;

/**
 * Returns the type of the given object as a string. This function works similarly to Lua’s native type function, with
 * the exceptions that Roblox-defined data types like Vector3 and CFrame return their respective data types as strings.
 */
declare function typeOf(value: any): keyof CheckableTypes;

/**
 * Returns true if `typeof(value) == type`, otherwise false.
 * This function allows for type narrowing. i.e.
 * ```
 * // v is unknown
 * if (typeIs(v, "Vector3")) {
 * 	// v is a Vector3
 * 	print(v.X, v.Y, v.Z);
 * }
 * ```
 */
declare function typeIs<T extends keyof CheckableTypes>(value: any, type: T): value is CheckableTypes[T];

/**
 * Calls the function func with the given arguments in protected mode.
 *
 * opcall is an easier to use version of pcall. It returns a result object instead of multiple returns.
 */
declare function opcall<T extends Array<any>, U>(
	func: (...args: T) => U,
	...args: T
): { success: true; value: U } | { success: false; error: string };

/**
 * Returns true if `instance.ClassName == className`, otherwise false.
 */
declare function classIs<T extends keyof Instances>(instance: Instance, className: T): instance is Instances[T];

/**
 * Returns the passed argument. This function is a macro that compiles to just `arg`.
 *
 * This is useful for ensuring that a value matches the given type in areas where it is not directly possible to do so.
 * @example
 * type P = { x: number, y: number };
 * const obj = {
 *   pos: identity<P>({ x: 5, y: 10 });
 * }
 */
declare function identity<T>(arg: T): T;

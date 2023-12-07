/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

interface ArrayLike<T> {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Array: unique symbol;

	/**
	 * Gets the length of the array. This is one higher than the highest index defined in an array.
	 */
	size(): number;

	readonly [n: number]: T;
}

/** An array object which cannot be written to. */
interface ReadonlyArray<T> extends ArrayLike<T>, Iterable<T> {
	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(this: ReadonlyArray<any>): boolean;

	/**
	 * Adds all the elements of an array separated by the specified separator string.
	 * @param separator A string used to separate one element of an array from the next in the resulting String. If
	 * omitted, the array elements are separated with a comma.
	 */
	join(this: ReadonlyArray<defined>, separator?: string): string;

	/**
	 * Moves elements to array a2. Returns the destination table a2.
	 * @param f The beginning of the specified portion of a1.
	 * @param e The end of the specified portion of a1.
	 * @param t The beginning of the specified portion of a2.
	 * @param a2 The target array.
	 */
	move(this: ReadonlyArray<defined>, f: number, e: number, t: number, a2: Array<T>): Array<T>;

	/**
	 * Moves elements to array a2. Returns the destination table a2. The destination range can overlap with the source
	 * range.
	 * @param f The beginning of the specified portion of a1.
	 * @param e The end of the specified portion of a1.
	 * @param t The beginning of the specified portion of a2.
	 * @param a2 The target array, or the current array if unspecified.
	 */
	move(this: Array<defined>, f: number, e: number, t: number, a2?: Array<T>): Array<T>;

	/**
	 * Returns whether an array includes a certain element.
	 * @param searchElement The element to search for.
	 * @param fromIndex The position in this array at which to begin searching for searchElement.
	 */
	includes(this: ReadonlyArray<defined>, searchElement: T, fromIndex?: number): boolean;

	/**
	 * Returns the index of the first occurrence of a value in an array, else returns -1.
	 * @param searchElement The value to locate in the array.
	 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at
	 * index 0.
	 */
	indexOf(this: ReadonlyArray<defined>, searchElement: T, fromIndex?: number): number;

	/**
	 * Returns whether **all** the members of an array satisfy the specified test.
	 * Returns true for empty Arrays.
	 * @param callback A function that accepts up to three arguments. The every method calls the callback function for
	 * each element in array1 until the callback returns false, or until the end of the array.
	 */
	every(
		this: ReadonlyArray<defined>,
		callback: (value: T, index: number, array: ReadonlyArray<T>) => boolean | undefined,
	): boolean;

	/**
	 * Returns whether the specified callback function returns true for any element of an array.
	 * Returns false for empty Arrays.
	 * @param callback A function that accepts up to three arguments. The some method calls the callback function for
	 * each element in array1 until the callback returns true, or until the end of the array.
	 */
	some(
		this: ReadonlyArray<defined>,
		callback: (value: T, index: number, array: ReadonlyArray<T>) => boolean | undefined,
	): boolean;

	/**
	 * Performs the specified action for each element in an array.
	 * @param callback  A function that accepts up to three arguments. forEach calls the callback function one time for
	 * each element in the array.
	 */
	forEach(this: ReadonlyArray<defined>, callback: (value: T, index: number, array: ReadonlyArray<T>) => void): void;

	/**
	 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
	 * @param callback A function that accepts up to three arguments. The map method calls the callback function one
	 * time for each element in the array.
	 */
	map<U extends defined>(
		this: ReadonlyArray<defined>,
		callback: (value: T, index: number, array: ReadonlyArray<T>) => U,
	): Array<U>;

	/**
	 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
	 * Undefined values will not be included, so keep in mind this does not create a 1:1 map.
	 * @param callback A function that accepts up to three arguments. The map method calls the callback function one
	 * time for each element in the array.
	 * @example
	 * // Gets an Array of all existing characters
	 * const characters = playerlist.mapFiltered(plr => plr.Character);
	 */
	mapFiltered<U>(
		this: ReadonlyArray<defined>,
		callback: (value: T, index: number, array: ReadonlyArray<T>) => U,
	): Array<NonNullable<U>>;

	/**
	 * Removes all undefined values from the array safely
	 */
	filterUndefined(this: undefined extends T ? ReadonlyArray<T> : never): Array<NonNullable<T>>;

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 * @param callback A function that accepts up to three arguments. The filter method calls the callback function one
	 * time for each element in the array.
	 */
	filter<S extends T>(
		this: ReadonlyArray<defined>,
		callback: (value: T, index: number, array: ReadonlyArray<T>) => value is S,
	): Array<S>;

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 * @param callback A function that accepts up to three arguments. The filter method calls the callback function one
	 * time for each element in the array.
	 */
	filter(
		this: ReadonlyArray<defined>,
		callback: (value: T, index: number, array: ReadonlyArray<T>) => boolean | undefined,
	): Array<T>;

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function
	 * is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callback A function that accepts up to four arguments. The reduce method calls the callback function one
	 * time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The
	 * first call to the callback function provides this value as an argument instead of an array value.
	 */
	reduce(
		this: ReadonlyArray<defined>,
		callback: (accumulator: T, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => T,
	): T;

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function
	 * is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callback A function that accepts up to four arguments. The reduce method calls the callback function one
	 * time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The
	 * first call to the callback function provides this value as an argument instead of an array value.
	 */
	reduce<U>(
		this: ReadonlyArray<defined>,
		callback: (accumulator: U, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => U,
		initialValue: U,
	): U;

	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 * @param predicate find calls predicate once for each element of the array, in ascending
	 * order, until it finds one where predicate returns true. If such an element is found, find
	 * immediately returns that element value. Otherwise, find returns undefined.
	 */
	find<S extends T>(
		this: ReadonlyArray<defined>,
		predicate: (value: T, index: number, obj: ReadonlyArray<T>) => value is S,
	): S | undefined;
	find(
		this: ReadonlyArray<defined>,
		predicate: (value: T, index: number, obj: ReadonlyArray<T>) => boolean | undefined,
	): T | undefined;

	/**
	 * Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it
	 * returns -1, indicating no element passed the test.
	 * @param predicate findIndex calls predicate once for each element of the array, in ascending
	 * order, until it finds one where predicate returns true. If such an element is found, find
	 * immediately returns the index at which it was found. Otherwise, find returns -1.
	 */
	findIndex(
		this: ReadonlyArray<defined>,
		predicate: (value: T, index: number, obj: ReadonlyArray<T>) => boolean | undefined,
	): number;
}

interface Array<T> extends ReadonlyArray<T> {
	/**
	 * Appends new elements to an array and returns the new length of the array.
	 * @param items New elements of the Array.
	 */
	push(this: Array<defined>, ...items: Array<T>): number;

	/**
	 * Removes the last element from an array and returns it.
	 */
	pop(this: Array<defined>): T | undefined;

	/**
	 * Removes the first element from an array and returns it.
	 */
	shift(this: Array<defined>): T | undefined;

	/**
	 * Inserts new elements at the start of an array and returns the new length of the array.
	 * @param items  Elements to insert at the start of the Array.
	 */
	unshift(this: Array<defined>, ...items: Array<T>): number;

	/**
	 * Inserts `value` into the array at `index` and shifts array members forwards if needed.
	 */
	insert(this: Array<defined>, index: number, value: T): void;

	/**
	 * Removes the array member at `index` and returns it and shifts array members backwards if needed.
	 */
	remove(this: Array<defined>, index: number): T | undefined;

	/**
	 * Removes a value at `index` from this array, replacing it with the last value in this array and popping the last
	 * value.
	 * Returns the value removed from `index` in this way if it exists, otherwise `undefined`.
	 * @param index The index to remove from this array and return
	 */
	unorderedRemove(this: Array<defined>, index: number): T | undefined;

	/**
	 * Sorts list elements in a given order, in-place, from `list[1]` to `list[#list]`, so that
	 * (`!comp(list[i+1], list[i])` will be true after the sort). Alias to Lua's `table.sort`.
	 * @param compareFunction A function that defines the sort order. Returns true when the first element must come
	 * before the second. If omitted, the array is sorted according to the `<` operator.
	 */
	sort(this: Array<defined>, compareFunction?: (a: T, b: T) => boolean): Array<T>;

	/** Deletes all values in the Array */
	clear(this: Array<T>): void;

	[n: number]: T;
}

interface ArrayConstructor {
	/** Instantiates a new empty array. */
	new <T>(): Array<T>;

	/**
	 * Instantiates a new preallocated array.
	 * If length is provided, there will be allocated `length` amount of nil's into the new array.
	 * If value is provided, instead of nil, the value will be allocated instead.
	 * Note that this does not affect the `length` property of the array if no `value` is provided.
	 * it only keeps it from needing to resize to this `length` later.
	 *
	 * This is the same as `table.create` in Lua.
	 *
	 * @param length The length of the array to allocate
	 * @param value The value that the array will be filled with (amount based on `length`)
	 */
	new <T>(length: number): Array<T>;
	new <T>(length: number, value: T): Array<T>;
}

declare const Array: ArrayConstructor;

interface TemplateStringsArray extends Array<string> {}

type ReadVoxelsArray<T> = Array<Array<Array<T>>> & {
	Size: Vector3;
};

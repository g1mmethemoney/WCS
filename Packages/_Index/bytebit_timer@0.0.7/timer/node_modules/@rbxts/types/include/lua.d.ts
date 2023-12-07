/// <reference no-default-lib="true"/>
/// <reference path="generated/None.d.ts" />
/// <reference types="@rbxts/compiler-types" />

// LUA API

/** A table that is shared between all scripts of the same context level. */
interface _G {}
declare const _G: _G;

/** A string containing the current interpreter version. */
declare const _VERSION: string;

/** Performs an operation on the Lua garbage collector based on the specified option. Roblox's Lua sandbox only allows the "count" option to be used, so none of the other standard options are available. The "count" option returns the total memory in use by Lua (in kilobytes). */
declare function collectgarbage(option: "count"): number;

/** Terminates the last protected function called and outputs message as an error message. If the function containing the error is not called in a protected function (pcall), then the script which called the function will terminate. The error function itself never returns and acts like a script error. The level argument specifies how to get the error position. With level 1 (the default), the error position is where the error function was called. Level 2 points the error to where the function that called error was called; and so on. Passing a level 0 avoids the addition of error position information to the message. */
declare function error(message?: unknown, level?: number): never;

/** Returns the current environment in use by the function. If provided with a function, the environment of the function will be returned as an array. If provided with an integer, getfenv will provide the environment of the function at the provided stack level: Level 1 is the function calling getfenv. If stack is 0, getfenv returns the global environment of the current script. When using getfenv to get the current environment of a script, it will return the same table every time within the specific thread. */
declare function getfenv(stack: number): { script: LuaSourceContainer };

/** Returns the metatable of the specified object if it has one, otherwise returns nil. If the object does have a metatable, but the metatable has a __metatable field set, the value of __metatable will be returned instead. */
declare function getmetatable(object: object): unknown;

/** Prints a list of parameters to console. */
declare function print(...params: Array<unknown>): void;

/** Checks whether v1 is equal to v2, without invoking any metamethod. */
declare function rawequal(v1: unknown, v2: unknown): boolean;

/** Gets the real value of table[index], without invoking any metamethod. */
declare function rawget(t: unknown, index: unknown): unknown;

/** Sets the real value of table[index] to a given value, without invoking any metamethod. */
declare function rawset(t: unknown, index: unknown, value: unknown): void;

/** Returns all arguments after argument number index. */
declare function select(index: number, ...args: Array<unknown>): LuaTuple<Array<unknown>>;

/** Returns the total number of arguments that were passed after the cmd argument. */
declare function select(cmd: "#", ...args: Array<unknown>): number;

/** Attempts to convert the arg into a number with a specified base to interpret the value in. If it cannot be converted, this function returns nil. The base may be any integer between 2 and 36, inclusive. In bases above 10, the letter 'A' (in either upper or lower case) represents 10, 'B' represents 11, and so forth, with 'Z' representing 35. In base 10 (the default), the number may have a decimal part, as well as an optional exponent part. In other bases, only unsigned integers are accepted. */
declare function tonumber(arg: unknown, base?: number): number | undefined;

/** Receives an argument of any type and converts it to a string in a reasonable format. If the metatable of e has a "__tostring" field, then tostring calls the corresponding value with e as an argument and uses the result of the call as its result. For complete control of how numbers are converted, use string.format. */
declare function tostring(value: unknown): string;

/** Calls the function func with the given arguments in protected mode. This means that any error inside func is not propagated; instead, pcall catches the error and returns a status code. Its first result is the status code (a boolean), which is true if the call succeeds without errors. In such case, pcall also returns all results from the call, after this first result. In case of any error, pcall returns false plus the error message. */
declare function pcall<T extends Array<any>, U>(
	func: (...args: T) => U,
): LuaTuple<
	U extends [infer A]
		? [true, A] | [false, string]
		: U extends [infer A, infer B]
		? [true, A, B] | [false, string, undefined]
		: U extends [infer A, infer B, infer C]
		? [true, A, B, C] | [false, string, undefined, undefined]
		: U extends [infer A, infer B, infer C, infer D]
		? [true, A, B, C, D] | [false, string, undefined, undefined, undefined]
		: U extends [infer A, infer B, infer C, infer D, infer E]
		? [true, A, B, C, D, E] | [false, string, undefined, undefined, undefined, undefined]
		: U extends [infer A, infer B, infer C, infer D, infer E, infer F]
		? [true, A, B, C, D, E, F] | [false, string, undefined, undefined, undefined, undefined, undefined]
		: [true, U] | [false, string]
>;

/** Calls the function func with the given arguments in protected mode. This means that any error inside func is not propagated; instead, pcall catches the error and returns a status code. Its first result is the status code (a boolean), which is true if the call succeeds without errors. In such case, pcall also returns all results from the call, after this first result. In case of any error, pcall returns false plus the error message. */
declare function pcall<T extends Array<any>, U>(
	func: (...args: T) => U,
	...args: T
): LuaTuple<
	U extends [infer A]
		? [true, A] | [false, string]
		: U extends [infer A, infer B]
		? [true, A, B] | [false, string, undefined]
		: U extends [infer A, infer B, infer C]
		? [true, A, B, C] | [false, string, undefined, undefined]
		: U extends [infer A, infer B, infer C, infer D]
		? [true, A, B, C, D] | [false, string, undefined, undefined, undefined]
		: U extends [infer A, infer B, infer C, infer D, infer E]
		? [true, A, B, C, D, E] | [false, string, undefined, undefined, undefined, undefined]
		: U extends [infer A, infer B, infer C, infer D, infer E, infer F]
		? [true, A, B, C, D, E, F] | [false, string, undefined, undefined, undefined, undefined, undefined]
		: [true, U] | [false, string]
>;

/** Calls the function func with the given arguments in protected mode. This means that any error inside func is not propagated; instead, xpcall catches the error and returns a status code. Its first result is the status code (a boolean), which is true if the call succeeds without errors. In such case, xpcall also returns all results from the call, after this first result. In case of any error, pcall returns false plus the error message. */
declare function xpcall<T extends Array<unknown>, U, V>(
	func: (...args: T) => U,
	errHandler: (err: unknown) => V,
	...args: T
): LuaTuple<
	U extends LuaTuple<[...infer W]>
		? [true, ...W] | [false, V extends LuaTuple<[infer A, ...Array<unknown>]> ? A : V]
		: [true, U] | [false, V extends LuaTuple<[infer A, ...Array<unknown>]> ? A : V]
>;

interface LuaMetatable<T> {
	__index?: (self: T, index: unknown) => void;
	__newindex?: (self: T, index: unknown, value: unknown) => void;
	__add?: (self: T, other: T) => T;
	__sub?: (self: T, other: T) => T;
	__mul?: (self: T, other: T) => T;
	__div?: (self: T, other: T) => T;
	__mod?: (self: T, other: T) => T;
	__pow?: (self: T, other: T) => T;
	__unm?: (self: T) => T;
	__eq?: (self: T, other: T) => boolean;
	__lt?: (self: T, other: T) => boolean;
	__le?: (self: T, other: T) => boolean;
	__call?: (self: T, ...args: Array<unknown>) => void;
	__concat?: (self: T, ...args: Array<unknown>) => string;
	__tostring?: (self: T) => string;
	__len?: (self: T) => number;
	__mode?: "k" | "v" | "kv";
	__metatable?: string;
}

/** Sets the metatable for the given table. If `metatable` is nil, the metatable of the given table is removed. If the original metatable has a "__metatable" field, this will raise an error. This function returns the table t, which was passed to the function. */
declare function setmetatable<T extends object>(object: T, metatable: LuaMetatable<T>): T;

/** An object the represents a date or time. Used with `os.date` and `os.time`. */
interface DateTable {
	/** The year. */
	year: number;
	/** The month. [1, 12] */
	month: number;
	/** The day. [1, 31] */
	day: number;

	/** The hour. [0, 23] */
	hour?: number;
	/** The minute. [0, 59] */
	min?: number;
	/** The second. [0, 59] */
	sec?: number;
	/** Whether this object represents a daylight savings time. */
	isdst?: boolean;
	/** The number of days into the year. [1, 366] */
	yday?: number;
	/** The day of the week. [1, 7] */
	wday?: number;
}

declare namespace os {
	/** Returns the number of seconds of CPU time for the program. It's typical use is to benchmark a piece of code. */
	function clock(): number;
	/** Returns the current number of seconds since Jan 1, 1970 in the UTC timezone. */
	function time(): number;
	/** Returns the number of seconds past Jan 1, 1970 in the UTC timezone for a given dateTable object. */
	function time(dateTable: DateTable): number;
	/**
	 * Formats the given formatString with date/time information based on the given time.
	 *
	 * If the formatString is `*t`, it will use local time and return a DateTable.
	 *
	 * If the formatString is `!*t`, it will use UTC time and return a DateTable.
	 *
	 * Otherwise, it will format the string with the given specifiers (specifiers are based on the C function strftime)
	 *
	 * The following specifiers are supported:
	 *
	 * | Specifier | Meaning | Example |
	 * | --- | --- | --- |
	 * | %a | Abbreviated weekday name | Wed |
	 * | %A | Full weekday name * | Wednesday |
	 * | %b | Abbreviated month name * | Sep |
	 * | %B | Full month name * | September |
	 * | %c | Date and time * |  09/16/98 23:48:10 |
	 * | %d | Day of the month | 16 |
	 * | %H | Hour, using 24-hour clock | 23 |
	 * | %I | Hour, using 12-hour clock | 11 |
	 * | %j | Day of year | 259 |
	 * | %m | Month | 09 |
	 * | %M | Minute | 48 |
	 * | %p | Either "am" or "pm" | pm |
	 * | %S | Second | 10 |
	 * | %U | Week number (first Sunday as the first day of week one) | 37 |
	 * | %w | Weekday | 3 |
	 * | %W | Week number (first Monday as the first day of week one) | 37 |
	 * | %x | Date * | 09/16/98 |
	 * | %X | Time * | 23:48:10 |
	 * | %y | Two-digit year | 98 |
	 * | %Y | Full year | 1998 |
	 * | %z | ISO 8601 offset from UTC in timezone (1 minute = 1, 1 hour = 100) | -0400 |
	 * | %Z | Timezone name or abbreviation * | Eastern Daylight Time |
	 * | %% | The % character | % |
	 * | --- | --- | --- |
	 *
	 * \* indicates the value can vary depending on the current locale.
	 * @param formatString The string to format with either specifiers given, or the type of DateTable to return.
	 * @param time The timestamp to format the formatString from. Defaults to os.time
	 */
	function date<T extends string>(
		formatString: T,
		time?: number,
	): string extends T ? string | Required<DateTable> : T extends "*t" | "!*t" ? Required<DateTable> : string;
	function difftime(t2: number, t1: number): number;
}

declare namespace TS {
	type ConcatTuple<T extends Array<Array<any>>> = [
		...T[0],
		...T[1],
		...T[2],
		...T[3],
		...T[4],
		...T[5],
		...T[6],
		...T[7],
		...T[8],
		...T[9],
		...T[10],
		...T[11],
		...T[12],
		...T[13],
		...T[14],
		...T[15],
		...T[16],
		...T[17],
		...T[18],
		...T[19]
	];

	type Flat<T extends Array<any>> = ConcatTuple<
		[...{ [K in keyof T]: T[K] extends Array<any> ? T[K] : [T[K]] }, ...Array<[]>]
	>;

	type InfoFlags<T extends Array<any>> = TS.Flat<
		{
			[K in keyof T]: T[K] extends "s"
				? string
				: T[K] extends "l"
				? number
				: T[K] extends "n"
				? string | undefined
				: T[K] extends "a"
				? [number, boolean]
				: T[K] extends "f"
				? Callback
				: never;
		}
	>;
}

declare namespace debug {
	function traceback(message?: string, level?: number): string;
	function traceback(thread: thread, message?: string, level?: number): string;
	function profilebegin(profileName: string): void;
	function profileend(): void;

	/**
	 * Allows programmatic inspection of the call stack.
	 *
	 * - `thread` (thread) - Optional. A thread as returned by `coroutine.create`. To use the current thread, omit this
	 * entirely (don’t pass `nil`).
	 * - `functionOrLevel` - Either a `function` or `number` to describe the point at which information from the call
	 * stack information should be returned.
	 *   - A value of `1` represents the function which is calling `debug.info`. `2` represents the function that called
	 * that function, and so on. Out-of-bounds values will result in no values returned.
	 * - `options` - A string that represents the information to be returned. It must contain exactly 0 or 1 of each of
	 * the following characters and no others: `slnaf`
	 *   - `s` - `string`. The function source identifier, equal to the full name of the script the function is defined
	 * in
	 *   - `l` - `number`. If `functionOrLevel` is a function, the line the function is defined on. If `functionOrLevel`
	 * is a number (examining a stack frame), the line number of the function call
	 *   - `n` - `string`. The name of the function, may be nil for anonymous functions and C functions without an
	 * assigned debug name.
	 *   - `a` - `number`, `boolean`. Arity of the function, which refers to the parameter count and whether the function
	 * is variadic.
	 *   - `f` - `function`. The function which was inspected.
	 *
	 * This function differs from `debug.traceback` in that it guarantees the format of the data it returns. This is
	 * useful not only for general logging and filtering purposes, but also for sending the data to systems expecting
	 * structured input, such as crash aggregation.
	 *
	 * This function is similar to `debug.getinfo`, an unavailable part of the standard Lua library which serves a
	 * similar purpose.
	 */
	function info<T extends string>(
		thread: thread,
		functionOrLevel: Callback | number,
		options: T,
	): T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer _}`
		? LuaTuple<TS.InfoFlags<[A, B, C, D, E]>>
		: T extends `${infer A}${infer B}${infer C}${infer D}${infer _}`
		? LuaTuple<TS.InfoFlags<[A, B, C, D]>>
		: T extends `${infer A}${infer B}${infer C}${infer _}`
		? LuaTuple<TS.InfoFlags<[A, B, C]>>
		: T extends `${infer A}${infer B}${infer _}`
		? LuaTuple<TS.InfoFlags<[A, B]>>
		: T extends `${infer A}${infer _}`
		? LuaTuple<TS.InfoFlags<[A]>>
		: LuaTuple<[unknown, unknown, unknown, unknown, unknown]>;
	function info<T extends string>(
		functionOrLevel: Callback | number,
		options: T,
	): T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer _}`
		? LuaTuple<TS.InfoFlags<[A, B, C, D, E]>>
		: T extends `${infer A}${infer B}${infer C}${infer D}${infer _}`
		? LuaTuple<TS.InfoFlags<[A, B, C, D]>>
		: T extends `${infer A}${infer B}${infer C}${infer _}`
		? LuaTuple<TS.InfoFlags<[A, B, C]>>
		: T extends `${infer A}${infer B}${infer _}`
		? LuaTuple<TS.InfoFlags<[A, B]>>
		: T extends `${infer A}${infer _}`
		? LuaTuple<TS.InfoFlags<[A]>>
		: LuaTuple<[unknown, unknown, unknown, unknown, unknown]>;
}

interface String {
	/** Returns the internal numerical codes of the characters `s[i]`, `s[i+1]`, `...`, `s[j]`. The default value for i is 1; the default value for j is i. These indices are corrected following the same rules of function string.sub. */
	byte(this: string, i?: number, j?: number): LuaTuple<Array<number>>;

	/** Looks for the first match of pattern in the string s. If it finds a match, then find returns the indices of s where this occurrence starts and ends, as well as any matches after that. Otherwise, it returns nil. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative. A value of true as a fourth, optional argument plain turns off the pattern matching facilities, so the function does a plain "find substring" operation, with no characters in the pattern being considered "magic". Note that if `plain` is given, then `init` must be given as well. */
	find(
		this: string,
		pattern: string,
		init?: number,
		plain?: boolean,
	): LuaTuple<[number, number, ...Array<string | number>] | Array<undefined>>;
	// A capture may be a number when we use `()` to capture the location

	/** Returns a formatted version of its variable number of arguments following the description given in its first argument (which must be a string). */
	format(this: string, ...args: Array<number | string>): string;

	/** Returns an iterator function that, each time it is called, returns the next captures from pattern over the string s. */
	gmatch(this: string, pattern: string): IterableFunction<LuaTuple<Array<string | number>>>;
	// A capture may be a number when we use `()` to capture the location

	/** Returns a copy of s in which all (or the first n, if given) occurrences of the pattern have been replaced by a replacement string specified by repl, which can be a string, a table, or a function. gsub also returns, as its second value, the total number of matches that occurred. */
	gsub(this: string, pattern: string, repl: string, n?: number): LuaTuple<[string, number]>;
	gsub(this: string, pattern: string, repl: number, n?: number): LuaTuple<[string, number]>;
	gsub(
		this: string,
		pattern: string,
		repl: (value: string) => string | number | undefined,
		n?: number,
	): LuaTuple<[string, number]>;
	gsub(this: string, pattern: string, repl: Map<string, string | number>, n?: number): LuaTuple<[string, number]>;
	gsub(
		this: string,
		pattern: string,
		repl: { [index: string]: string | number },
		n?: number,
	): LuaTuple<[string, number]>;

	/** Receives a string and returns a copy of this string with all uppercase letters changed to lowercase. */
	lower(this: string): string;

	/** Looks for the first match of pattern in the string s. If a match is found it is returned. Otherwise, this returns nil. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative. */
	match(this: string, pattern: string, init?: number): LuaTuple<Array<string | number> | Array<undefined>>;
	// A capture may be a number when we use `()` to capture the location

	/** Returns a string that is the concatenation of n copies of the string s separated by the string sep. */
	rep(this: string, n: number): string;

	/** Returns a string that is the string s reversed. */
	reverse(this: string): string;

	/** Returns an array of substrings, separated by each `sep`.
	 * Does not handle Lua character classes, thus, the separator string will be interpreted literally.
	 */
	split(this: string, sep: string): Array<string>;

	/** Returns the substring of s that starts at i and continues until j; i and j can be negative. If j is absent, then it is assumed to be equal to -1 (which is the same as the string length). */
	sub(this: string, i: number, j?: number): string;

	/** Receives a string and returns a copy of this string with all lowercase letters changed to uppercase. All other characters are left unchanged. */
	upper(this: string): string;
}

declare namespace string {
	/** Receives zero or more integers. Returns a string with length equal to the number of arguments, in which each character has the internal numerical code equal to its corresponding argument. */
	function char(...args: Array<number>): string;

	/**
	 * Returns a binary string containing the values packed (that is, serialized in binary form) according to the format string fmt.
	 *
	 * Follows the format convention of [lua 5.3's](https://www.lua.org/manual/5.3/manual.html#6.4.2)
	 *
	 * Note that you cannot save binary strings in DataStores currently.
	 * @param fmt The format string to use
	 * @param value The values to pack
	 */
	function pack(fmt: string, ...value: Array<unknown>): string;

	/**
	 * Returns the size of a string resulting from string.pack with the given format. The format string cannot have the variable-length options 's' or 'z'.
	 * @param fmt The format string to check
	 */
	function packsize(fmt: string): number;

	/**
	 * Returns the values packed in string s (see string.pack) according to the format string fmt. An optional pos marks where to start reading in s (default is 1). After the read values, this function also returns the index of the first unread byte in s.
	 */
	function unpack(fmt: string, s: string, pos?: number): LuaTuple<Array<unknown>>;

	/** Returns the internal numerical codes of the characters `s[i]`, `s[i+1]`, `...`, `s[j]`. The default value for i is 1; the default value for j is i. These indices are corrected following the same rules of function string.sub. */
	function byte(str: string, i?: number, j?: number): LuaTuple<Array<number>>;

	/** Looks for the first match of pattern in the string s. If it finds a match, then find returns the indices of s where this occurrence starts and ends, as well as any matches after that. Otherwise, it returns nil. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative. A value of true as a fourth, optional argument plain turns off the pattern matching facilities, so the function does a plain "find substring" operation, with no characters in the pattern being considered "magic". Note that if `plain` is given, then `init` must be given as well. */
	function find(
		str: string,
		pattern: string,
		init?: number,
		plain?: boolean,
	): LuaTuple<[number, number, ...Array<string | number>] | Array<undefined>>;
	// A capture may be a number when we use `()` to capture the location

	/** Returns a formatted version of its variable number of arguments following the description given in its first argument (which must be a string). */
	function format(str: string, ...args: Array<number | string>): string;

	/** Returns an iterator function that, each time it is called, returns the next captures from pattern over the string s. */
	function gmatch(str: string, pattern: string): IterableFunction<LuaTuple<Array<string | number>>>;
	// A capture may be a number when we use `()` to capture the location

	/** Returns a copy of s in which all (or the first n, if given) occurrences of the pattern have been replaced by a replacement string specified by repl, which can be a string, a table, or a function. gsub also returns, as its second value, the total number of matches that occurred. */
	function gsub(str: string, pattern: string, repl: string, n?: number): LuaTuple<[string, number]>;
	function gsub(str: string, pattern: string, repl: number, n?: number): LuaTuple<[string, number]>;
	function gsub(
		str: string,
		pattern: string,
		repl: (value: string) => string | number | undefined,
		n?: number,
	): LuaTuple<[string, number]>;
	function gsub(
		str: string,
		pattern: string,
		repl: Map<string, string | number>,
		n?: number,
	): LuaTuple<[string, number]>;
	function gsub(
		str: string,
		pattern: string,
		repl: { [index: string]: string | number },
		n?: number,
	): LuaTuple<[string, number]>;

	/** Receives a string and returns a copy of this string with all uppercase letters changed to lowercase. */
	function lower(str: string): string;

	/** Looks for the first match of pattern in the string s. If a match is found it is returned. Otherwise, this returns nil. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative. */
	function match(str: string, pattern: string, init?: number): LuaTuple<Array<string | number> | Array<undefined>>;
	// A capture may be a number when we use `()` to capture the location

	/** Returns a string that is the concatenation of n copies of the string s separated by the string sep. */
	function rep(str: string, n: number): string;

	/** Returns a string that is the string s reversed. */
	function reverse(str: string): string;

	/** Returns an array of substrings, separated by each `sep`.
	 * Does not handle Lua character classes, thus, the separator string will be interpreted literally.
	 */
	function split(str: string, sep: string): Array<string>;

	/** Returns the substring of s that starts at i and continues until j; i and j can be negative. If j is absent, then it is assumed to be equal to -1 (which is the same as the string length). */
	function sub(str: string, i: number, j?: number): string;

	/** Receives a string and returns a copy of this string with all lowercase letters changed to uppercase. All other characters are left unchanged. */
	function upper(str: string): string;
}

declare namespace math {
	/** The number π is a mathematical constant. Originally defined as the ratio of a circle's circumference to its diameter, it now has various equivalent definitions and appears in many formulas in all areas of mathematics and physics. It is approximately equal to 3.14159. */
	const pi: number;

	/** The value HUGE_VAL, a value larger than or equal to any other numerical value. */
	const huge: number;

	/** Returns the absolute value of x. */
	function abs(n: number): number;

	/** Returns the arc cosine of x. */
	function acos(n: number): number;

	/** Returns the arc sine of x. */
	function asin(n: number): number;

	/** Returns the arc tangent of x (in radians). */
	function atan(n: number): number;

	/** Returns the arc tangent of y/x (in radians), but uses the signs of both parameters to find the quadrant of the result. It also handles correctly the case of x being zero. */
	function atan2(y: number, x: number): number;

	/** Returns the smallest integer larger than or equal to x. */
	function ceil(n: number): number;

	/** Returns the cosine of x (assumed to be in radians). */
	function cos(n: number): number;

	/** Returns the hyperbolic cosine of x. */
	function cosh(n: number): number;

	/** Returns the angle x (given in radians) in degrees. */
	function deg(n: number): number;

	/** Returns the value e^x. */
	function exp(n: number): number;

	/** Returns the largest integer smaller than or equal to x. */
	function floor(n: number): number;

	/** Returns the remainder of the division of x by y that rounds the quotient towards zero. */
	function fmod(x: number, y: number): number;

	/** Returns m and e such that x = m*2^e, e is an integer and the absolute value of m is in the range [0.5, 1) (or zero when x is zero). */
	function frexp(n: number): LuaTuple<[number, number]>;

	/** Returns m*2^e (e should be an integer). */
	function ldexp(m: number, e: number): number;

	/** Returns the natural logarithm of x. If base is provided, returns the logarithm of x with respect to base, which is equivalent to log(x) / log(base) */
	function log(x: number, base?: number): number;

	/** Returns the base-10 logarithm of x. */
	function log10(n: number): number;

	/** Returns the maximum value among the numbers passed to the function. */
	function max(...n: Array<number>): number;

	/** Returns the minimum value among the numbers passed to the function. */
	function min(...n: Array<number>): number;

	/** Returns two numbers, the integral part of x and the fractional part of x. */
	function modf(n: number): LuaTuple<[number, number]>;

	/** Returns x^y. (You can also use the expression x^y to compute this value.) */
	function pow(x: number, y: number): number;

	/** Returns the angle x (given in degrees) in radians. */
	function rad(n: number): number;

	/** This function is an interface to the simple pseudo-random generator function rand provided by ANSI C. (No guarantees can be given for its statistical properties.) Returns a uniform pseudo-random real number in the range [0,1). */
	function random(): number;

	/** This function is an interface to the simple pseudo-random generator function rand provided by ANSI C. (No guarantees can be given for its statistical properties.) Returns a uniform pseudo-random integer in the range [1, m]. */
	function random(max: number): number;

	/** This function is an interface to the simple pseudo-random generator function rand provided by ANSI C. (No guarantees can be given for its statistical properties.) Returns a uniform pseudo-random integer in the range [m, n]. */
	function random(min: number, max: number): number;

	/** Sets x as the seed for the pseudo-random generator: equal seeds produce equal sequences of numbers. */
	function randomseed(seed: number): number;

	/** Rounds n to the nearest integer.
	 *
	 * This uses rounding away from 0, so -0.5 will become -1, likewise 0.5 will become 1.
	 */
	function round(n: number): number;

	/** Returns -1 if `x < 0`, 0 if `x == 0`, or 1 if `x > 0`. */
	function sign(n: number): number;

	/** Returns the sine of x (assumed to be in radians). */
	function sin(n: number): number;

	/** Returns the hyperbolic sine of x. */
	function sinh(n: number): number;

	/** Returns the square root of x. (You can also use the expression `x^0.5` to compute this value.) */
	function sqrt(n: number): number;

	/** Returns the tangent of x (assumed to be in radians). */
	function tan(n: number): number;

	/** Returns the hyperbolic tangent of x. */
	function tanh(n: number): number;
}

/**
 * Unless otherwise stated, all functions accept numeric arguments in the range `(-2^51, +2^51)`;
 * each argument is normalized to the remainder of its division by `2^32` and truncated to an integer
 * (in some unspecified way), so that its final value falls in the range `[0, 2^32 - 1]`.
 * Similarly, all results are in the range `[0, 2^32 - 1]`.
 * Note that `bit32.bnot(0)` is `0xFFFFFFFF`, which is different from -1.
 */
declare namespace bit32 {
	/**
	 * Returns the number `x` shifted `displacement` bits to the right. The number `displacement` may be any representable integer.
	 * Negative displacements shift to the left. This shift operation is what is called arithmetic shift.
	 * Vacant bits on the left are filled with copies of the higher bit of `x`; vacant bits on the right are filled
	 * with zeros. In particular, displacements with absolute values higher than 31 result in zero or `0xFFFFFFFF`
	 * (all original bits are shifted out).
	 */
	function arshift(x: number, displacement: number): number;

	/** Returns the bitwise _and_ of its operands. */
	function band(...operands: Array<number>): number;

	/**
	 * Returns the bitwise negation of `x`. For any integer `x`, the following identity holds:
	 *
	 * `assert(bit32.bnot(x) == (-1 - x) % 2^32)`
	 */
	function bnot(x: number): number;

	/** Returns the bitwise _or_ of its operands. */
	function bor(...operands: Array<number>): number;

	/** Returns a boolean signaling whether the bitwise _and_ of its operands is different from zero. */
	function btest(...operands: Array<number>): boolean;

	/** Returns the bitwise _exclusive or_ of its operands. */
	function bxor(...operands: Array<number>): number;

	/**
	 * Returns the unsigned number formed by the bits `field` to `field + width - 1` from `n`.
	 * Bits are numbered from 0 (least significant) to 31 (most significant).
	 * All accessed bits must be in the range `[0, 31]`.
	 *
	 * The default for `width` is 1.
	 */
	function extract(n: number, field: number, width?: number): number;

	/**
	 * Returns a copy of `n` with the bits `field` to `field + width - 1` replaced by the value `v`.
	 *
	 * See `bit32.extract` for details about `field` and `width`.
	 */
	function replace(n: number, v: number, field: number, width?: number): number;

	/**
	 * Returns the number `x` rotated `displacement` bits to the left. The number `displacement` may be any representable integer.
	 *
	 * For any valid displacement, the following identity holds:
	 *
	 * `assert(bit32.lrotate(x, displacement) == bit32.lrotate(x, displacement % 32))`
	 *
	 * In particular, negative displacements rotate to the right.
	 */
	function lrotate(x: number, displacement: number): number;

	/**
	 * Returns the number `x` shifted `displacement` bits to the left. The number `displacement` may be any representable integer.
	 * Negative displacements shift to the right. In any direction, vacant bits are filled with zeros.
	 * In particular, displacements with absolute values higher than 31 result in zero (all bits are shifted out).
	 *
	 * For positive displacements, the following equality holds:
	 *
	 * `assert(bit32.lshift(b, displacement) == (b * 2^displacement) % 2^32)`
	 */
	function lshift(x: number, displacement: number): number;

	/**
	 * Returns the number `x` rotated `displacement` bits to the right. The number `displacement` may be any representable integer.
	 *
	 * For any valid displacement, the following identity holds:
	 *
	 * `assert(bit32.rrotate(x, displacement) == bit32.rrotate(x, displacement % 32))`
	 *
	 * In particular, negative displacements rotate to the left.
	 */
	function rrotate(x: number, displacement: number): number;

	/**
	 * Returns the number `x` shifted `displacement` bits to the right. The number `displacement` may be any representable integer.
	 * Negative displacements shift to the left. In any direction, vacant bits are filled with zeros.
	 * In particular, displacements with absolute values higher than 31 result in zero (all bits are shifted out).
	 *
	 * For positive displacements, the following equality holds:
	 *
	 * `assert(bit32.rshift(b, displacement) == math.floor(b % 2^32 / 2^displacement))`
	 *
	 * This shift operation is what is called logical shift.
	 */
	function rshift(x: number, displacement: number): number;
}

declare namespace table {
	/** Sorts list elements in a given order, in-place, from `list[1]` to `list[#list]`. Comp is a function that receives two list elements and returns true when the first element must come before the second in the final order (so that `not comp(list[i+1],list[i])` will be true after the sort). */
	function sort<T>(t: Array<T>, comp?: (a: T, b: T) => boolean): void;
	/** Makes the table read-only and prohibits all further modifications */
	function freeze(t: object): void;
	/** Returns whether or not `t` is frozen */
	function isfrozen<T extends object>(t: T): t is Readonly<T>;
}

type thread = {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_thread: unique symbol;
};

declare namespace coroutine {
	/** Creates a new coroutine, with body f. f must be a Lua function. */
	function create(f: Callback): thread;

	/** Starts or continues the execution of coroutine co. The first time you resume a coroutine, it starts running its body. The values val1, ... are passed as the arguments to the body function. If the coroutine has yielded, resume restarts it; the values val1, ... are passed as the results from the yield. If the coroutine runs without any errors, resume returns true plus any values passed to yield (if the coroutine yields) or any values returned by the body function (if the coroutine terminates). If there is any error, resume returns false plus the error message. */
	function resume(co: thread, ...params: Array<unknown>): LuaTuple<[success: boolean, ...result: Array<unknown>]>;

	/** Returns the running coroutine. */
	function running(): thread;

	/** Returns the status of coroutine co, as a string: 'running', if the coroutine is running (that is, it called status); 'suspended', if the coroutine is suspended in a call to yield, or if it has not started running yet; 'normal' if the coroutine is active but not running (that is, it has resumed another coroutine); and 'dead' if the coroutine has finished its body function, or if it has stopped with an error. */
	function status(co: thread): string;

	/** Creates a new coroutine, with body f. f must be a Lua function. Returns a function that resumes the coroutine each time it is called. Any arguments passed to the function behave as the extra arguments to resume. Returns the same values returned by resume, except the first boolean. In case of error, propagates the error. */
	function wrap<T extends Callback>(f: T): T;

	/** Suspends the execution of the calling coroutine. Any arguments to yield are passed as extra results to resume. */
	function yield(...params: Array<unknown>): LuaTuple<Array<unknown>>;
}

declare function next<T extends ReadonlyArray<any>>(
	object: T,
	index?: number,
): T extends readonly [infer A]
	? LuaTuple<[number, A]>
	: T extends readonly [infer A, infer B]
	? LuaTuple<[number, A | B]>
	: T extends readonly [infer A, infer B, infer C]
	? LuaTuple<[number, A | B | C]>
	: T extends readonly [infer A, infer B, infer C, infer D]
	? LuaTuple<[number, A | B | C | D]>
	: T extends readonly [infer A, infer B, infer C, infer D, infer E]
	? LuaTuple<[number, A | B | C | D | E]>
	: T extends readonly [infer A, infer B, infer C, infer D, infer E, infer F]
	? LuaTuple<[number, A | B | C | D | E | F]>
	: T extends ReadonlyArray<infer U>
	? LuaTuple<[number, U]>
	: LuaTuple<[unknown, unknown]>;
declare function next<T extends ReadonlyArray<any>>(
	object: T,
	index?: number,
): T extends [infer A]
	? LuaTuple<[number, A]>
	: T extends [infer A, infer B]
	? LuaTuple<[number, A | B]>
	: T extends [infer A, infer B, infer C]
	? LuaTuple<[number, A | B | C]>
	: T extends [infer A, infer B, infer C, infer D]
	? LuaTuple<[number, A | B | C | D]>
	: T extends [infer A, infer B, infer C, infer D, infer E]
	? LuaTuple<[number, A | B | C | D | E]>
	: T extends [infer A, infer B, infer C, infer D, infer E, infer F]
	? LuaTuple<[number, A | B | C | D | E | F]>
	: T extends ReadonlyArray<infer U>
	? LuaTuple<[number, U]>
	: LuaTuple<[unknown, unknown]>;
declare function next<T>(object: ReadonlyArray<T>, index?: number): LuaTuple<[number, T]>;
declare function next<T>(object: ReadonlySet<T>, index?: T): LuaTuple<[T, true]>;
declare function next<K, V>(object: ReadonlyMap<K, V>, index?: K): LuaTuple<[K, V]>;
declare function next<T extends object>(object: T, index?: keyof T): LuaTuple<[keyof T, T[keyof T]]>;
declare function next(object: object, index?: unknown): LuaTuple<[unknown, unknown]>;

declare function pairs<T>(object: ReadonlyArray<T>): IterableFunction<LuaTuple<[number, Exclude<T, undefined>]>>;
declare function pairs<T>(object: ReadonlySet<T>): IterableFunction<LuaTuple<[T, true]>>;
declare function pairs<K, V>(
	object: ReadonlyMap<K, V>,
): IterableFunction<LuaTuple<[Exclude<K, undefined>, Exclude<V, undefined>]>>;
declare function pairs<T extends object>(
	object: T,
): object extends Required<T>
	? IterableFunction<LuaTuple<[unknown, defined]>>
	: IterableFunction<LuaTuple<[keyof T, Exclude<T[keyof T], undefined>]>>;

declare function ipairs<T>(object: ReadonlyArray<T>): IterableFunction<LuaTuple<[number, Exclude<T, undefined>]>>;

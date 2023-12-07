/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>
/// <reference path="Array.d.ts" />
/// <reference path="callMacros.d.ts" />
/// <reference path="idMacros.d.ts" />
/// <reference path="Iterable.d.ts" />
/// <reference path="Map.d.ts" />
/// <reference path="Promise.d.ts" />
/// <reference path="Set.d.ts" />
/// <reference path="String.d.ts" />
/// <reference path="Symbol.d.ts" />
/// <reference path="typeUtils.d.ts" />

/**
 * **DO NOT USE!**
 *
 * This type only exists because TypeScript requires it!
 *
 * **Use `boolean` instead!**
 */
interface Boolean {}

/**
 * **DO NOT USE!**
 *
 * This type only exists because TypeScript requires it!
 * @hidden
 * @deprecated
 */
interface IArguments {}

/**
 * **DO NOT USE!**
 *
 * This type only exists because TypeScript requires it!
 *
 * **Use `number` instead!**
 */
interface Number {}

/**
 * **DO NOT USE!**
 *
 * This type only exists because TypeScript requires it!
 *
 * **Use `object` instead!**
 * @hidden
 * @deprecated
 */
interface Object {}

/**
 * **DO NOT USE!**
 *
 * This type only exists because TypeScript requires it!
 * @hidden
 * @deprecated
 */
interface RegExp {}

/**
 * **DO NOT USE!**
 *
 * This type only exists because TypeScript requires it!
 *
 * **Use `Callback` instead!**
 *
 * For example,`(a: string, b: number) => boolean` represents a function that takes a `string` and a `number` and
 * returns a `boolean`.
 *
 * More generally, `(a: A, b: B, c: C) => R`, where `A`, `B`, and `C` are different function argument types and `R` is
 * the return type.
 *
 * You can use `void` as a return type for functions that do not return anything: `() => void`
 * @hidden
 * @deprecated
 */
interface Function {
	/**
	 * **DO NOT USE!**
	 *
	 * This type only exists because TypeScript requires it!
	 * @hidden
	 * @deprecated
	 */
	prototype: never;
}

/**
 * **DO NOT USE!**
 *
 * **Use `Callback` instead!**
 *
 * This type only exists because TypeScript requires it!
 * @hidden
 * @deprecated
 */
interface CallableFunction extends Function {}

/**
 * **DO NOT USE!**
 *
 * **Use `Callback` instead!**
 *
 * This type only exists because TypeScript requires it!
 * @hidden
 * @deprecated
 */
interface NewableFunction extends Function {}

/** unknown - undefined = defined */
type defined = {};

/** Convert string literal type to uppercase */
type Uppercase<S extends string> = intrinsic;

/** Convert string literal type to lowercase */
type Lowercase<S extends string> = intrinsic;

/** Convert first character of string literal type to uppercase */
type Capitalize<S extends string> = intrinsic;

/** Convert first character of string literal type to lowercase */
type Uncapitalize<S extends string> = intrinsic;

/** Marker for contextual 'this' type */
interface ThisType<T> {}

/** A function type which is assignable to any other function type (and any function is assignable to). */
type Callback = (...args: Array<any>) => any;

type LuaTuple<T extends Array<any>> = T & {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_LuaTuple: unique symbol;
};

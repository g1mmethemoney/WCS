/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

// Based on roblox-lua-promise v3.1.0
// https://eryn.io/roblox-lua-promise/

interface PromiseLike<T> {
	/**
	 * Chains onto an existing Promise and returns a new Promise.
	 * > Within the failure handler, you should never assume that the rejection value is a string. Some rejections within the Promise library are represented by Error objects. If you want to treat it as a string for debugging, you should call `tostring` on it first.
	 *
	 * Return a Promise from the success or failure handler and it will be chained onto.
	 */
	then<TResult1 = T, TResult2 = never>(
		this: Promise<T>,
		onResolved?: ((value: T) => TResult1 | Promise<TResult1>) | void,
		onRejected?: ((reason: any) => TResult2 | Promise<TResult2>) | void,
	): Promise<TResult1 | TResult2>;
}

/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
	/**
	 * Chains onto an existing Promise and returns a new Promise.
	 * > Within the failure handler, you should never assume that the rejection value is a string. Some rejections within the Promise library are represented by Error objects. If you want to treat it as a string for debugging, you should call `tostring` on it first.
	 *
	 * Return a Promise from the success or failure handler and it will be chained onto.
	 */
	then<TResult1 = T, TResult2 = never>(
		this: Promise<T>,
		onResolved?: ((value: T) => TResult1 | Promise<TResult1>) | void,
		onRejected?: ((reason: any) => TResult2 | Promise<TResult2>) | void,
	): Promise<TResult1 | TResult2>;

	/**
	 * Chains onto an existing Promise and returns a new Promise.
	 * > Within the failure handler, you should never assume that the rejection value is a string. Some rejections within the Promise library are represented by Error objects. If you want to treat it as a string for debugging, you should call `tostring` on it first.
	 *
	 * Return a Promise from the success or failure handler and it will be chained onto.
	 */
	andThen<TResult1 = T, TResult2 = never>(
		this: Promise<T>,
		onResolved?: ((value: T) => TResult1 | Promise<TResult1>) | void,
		onRejected?: ((reason: any) => TResult2 | Promise<TResult2>) | void,
	): Promise<TResult1 | TResult2>;

	/**
	 * Shorthand for `Promise:andThen(nil, failureHandler)`.
	 *
	 * Returns a Promise that resolves if the `failureHandler` worked without encountering an additional error.
	 */
	catch<TResult = never>(
		this: Promise<T>,
		onRejected?: ((reason: any) => TResult | Promise<TResult>) | void,
	): Promise<T | TResult>;

	/**
	 * Similar to [Promise.andThen](https://eryn.io/roblox-lua-promise/lib/#andthen), except the return value is the same as the value passed to the handler. In other words, you can insert a `:tap` into a Promise chain without affecting the value that downstream Promises receive.
	 * ```lua
	 * getTheValue()
	 *     :tap(print)
	 *     :andThen(function(theValue))
	 *         print("Got", theValue, "even though print returns nil!")
	 *     end)
	 * ```
	 * If you return a Promise from the tap handler callback, its value will be discarded but `tap` will still wait until it resolves before passing the original value through.
	 */
	tap(this: Promise<T>, tapHandler: (value: T) => void): Promise<T>;

	/**
	 * Set a handler that will be called regardless of the promise's fate. The handler is called when the promise is resolved, rejected, _or_ cancelled.
	 *
	 * Returns a new promise chained from this promise.
	 *
	 * > If the Promise is cancelled, any Promises chained off of it with `andThen` won't run. Only Promises chained with `finally` or `done` will run in the case of cancellation.
	 * ```lua
	 * local thing = createSomething()
	 *
	 * doSomethingWith(thing)
	 *     :andThen(function()
	 *     print("It worked!")
	 *         -- do something..
	 *     end)
	 *     :catch(function()
	 *         warn("Oh no it failed!")
	 *     end)
	 *     :finally(function()
	 *         -- either way, destroy thing
	 *
	 *         thing:Destroy()
	 *     end)
	 * ```
	 */
	finally<TResult = never>(
		this: Promise<T>,
		onSettled?: (() => TResult | Promise<TResult>) | void,
	): Promise<T | TResult>;

	/**
	 * Set a handler that will be called only if the Promise resolves or is cancelled. This method is similar to `finally`, except it doesn't catch rejections.
	 *
	 * > `done` should be reserved specifically when you want to perform some operation after the Promise is finished (like `finally`), but you don't want to consume rejections (like in [this example](https://eryn.io/roblox-lua-promise/lib/Examples.html#cancellable-animation-sequence)). You should use `andThen` instead if you only care about the Resolved case.
	 *
	 * > Like `finally`, if the Promise is cancelled, any Promises chained off of it with `andThen` won't run. Only Promises chained with `done` and `finally` will run in the case of cancellation.
	 *
	 * Returns a new promise chained from this promise.
	 */
	done<TResult = never>(this: Promise<T>, doneHandler: (status: Promise.Status) => TResult): Promise<TResult>;

	/**
	 * Attaches an `andThen` handler to this Promise that calls the given callback with the predefined arguments. The resolved value is discarded.
	 * ```lua
	 * promise:andThenCall(someFunction, "some", "arguments")
	 * ```
	 * This is sugar for
	 * ```lua
	 * promise:andThen(function()
	 *     return someFunction("some", "arguments")
	 * end)
	 * ```
	 */
	andThenCall<P extends Array<any>, R>(this: Promise<T>, callback: (...args: P) => R, ...args: P): Promise<R>;

	/**
	 * Same as `andThenCall`, except for `finally`.
	 *
	 * Attaches a `finally` handler to this Promise that calls the given callback with the predefined arguments.
	 */
	finallyCall<P extends Array<any>, R>(this: Promise<T>, callback: (...args: P) => R, ...args: P): Promise<R>;

	/**
	 * Same as `andThenCall`, except for `done`.
	 *
	 * Attaches a `done` handler to this Promise that calls the given callback with the predefined arguments.
	 */
	doneCall<P extends Array<any>, R>(this: Promise<T>, callback: (...args: P) => R, ...args: P): Promise<R>;

	/**
	 * Attaches an `andThen` handler to this Promise that discards the resolved value and returns the given value from it.
	 * ```lua
	 * promise:andThenReturn("value")
	 * ```
	 * This is sugar for
	 * ```lua
	 * promise:andThen(function()
	 *     return "value"
	 * end)
	 * ```
	 * > Promises are eager, so if you pass a Promise to `andThenReturn`, it will begin executing before `andThenReturn` is reached in the chain. Likewise, if you pass a Promise created from [Promise.reject](https://eryn.io/roblox-lua-promise/lib/#reject) into `andThenReturn`, it's possible that this will trigger the unhandled rejection warning. If you need to return a Promise, it's usually best practice to use [Promise.andThen](https://eryn.io/roblox-lua-promise/lib/#andthen).
	 */
	andThenReturn<U>(this: Promise<T>, value: U): Promise<U>;

	/**
	 * Attaches a `finally` handler to this Promise that discards the resolved value and returns the given value from it.
	 * ```lua
	 * promise:finallyReturn("value")
	 * ```
	 * This is sugar for
	 * ```lua
	 * promise:finally(function()
	 *     return "value"
	 * end)
	 * ```
	 */
	finallyReturn<U>(this: Promise<T>, value: U): Promise<U>;

	/**
	 * Attaches a `done` handler to this Promise that discards the resolved value and returns the given value from it.
	 * ```lua
	 * promise:doneReturn("value")
	 * ```
	 * This is sugar for
	 * ```lua
	 * promise:done(function()
	 *     return "value"
	 * end)
	 * ```
	 */
	doneReturn<U>(this: Promise<T>, value: U): Promise<U>;

	/**
	 * Returns a new Promise that resolves if the chained Promise resolves within `seconds` seconds, or rejects if execution time exceeds `seconds`. The chained Promise will be cancelled if the timeout is reached.
	 *
	 * Rejects with `rejectionValue` if it is non-nil. If a `rejectionValue` is not given, it will reject with a `Promise.Error(Promise.Error.Kind.TimedOut)`. This can be checked with `Error.isKind`.
	 * ```lua
	 * getSomething():timeout(5):andThen(function(something)
	 *     -- got something and it only took at max 5 seconds
	 * end):catch(function(e)
	 *     -- Either getting something failed or the time was exceeded.
	 *
	 *     if Promise.Error.isKind(e, Promise.Error.Kind.TimedOut) then
	 *         warn("Operation timed out!")
	 *     else
	 *         warn("Operation encountered an error!")
	 *     end
	 * end)
	 * ```
	 * Sugar for:
	 * ```lua
	 * Promise.race({
	 *     Promise.delay(seconds):andThen(function()
	 *         return Promise.reject(rejectionValue == nil and Promise.Error.new({ kind = Promise.Error.Kind.TimedOut }) or rejectionValue)
	 *     end),
	 *     promise
	 * })
	 * ```
	 */
	timeout(this: Promise<T>, seconds: number, rejectionValue?: any): Promise<T>;

	/**
	 * Cancels this promise, preventing the promise from resolving or rejecting. Does not do anything if the promise is already settled.
	 *
	 * Cancellations will propagate upwards and downwards through chained promises.
	 *
	 * Promises will only be cancelled if all of their consumers are also cancelled. This is to say that if you call `andThen` twice on the same promise, and you cancel only one of the child promises, it will not cancel the parent promise until the other child promise is also cancelled.
	 * ```lua
	 * promise:cancel()
	 * ```
	 */
	cancel(this: Promise<T>): void;

	/**
	 * Chains a Promise from this one that is resolved if this Promise is already resolved, and rejected if it is not resolved at the time of calling `:now()`. This can be used to ensure your `andThen` handler occurs on the same frame as the root Promise execution.
	 * ```lua
	 * doSomething()
	 *     :now()
	 *     :andThen(function(value)
	 *         print("Got", value, "synchronously.")
	 *     end)
	 * ```
	 * If this Promise is still running, Rejected, or Cancelled, the Promise returned from `:now()` will reject with the `rejectionValue` if passed, otherwise with a `Promise.Error(Promise.Error.Kind.NotResolvedInTime)`. This can be checked with `Error.isKind`.
	 */
	now(this: Promise<T>, rejectionValue?: any): Promise<T>;

	/**
	 * Yields the current thread until the given Promise completes. Returns true if the Promise resolved, followed by the values that the promise resolved or rejected with.
	 * > If the Promise gets cancelled, this function will return `false`, which is indistinguishable from a rejection. If you need to differentiate, you should use [Promise.awaitStatus](https://eryn.io/roblox-lua-promise/lib/#awaitstatus) instead.
	 */
	await(this: Promise<T>): LuaTuple<[true, T] | [false, unknown]>;

	/**
	 * Yields the current thread until the given Promise completes. Returns the Promise's status, followed by the values that the promise resolved or rejected with.
	 */
	awaitStatus(this: Promise<T>): LuaTuple<[Promise.Status, unknown]>;

	/**
	 * Yields the current thread until the given Promise completes. Returns the values that the promise resolved with.
	 * ```lua
	 * local worked = pcall(function()
	 *     print("got", getTheValue():expect())
	 * end)
	 *
	 * if not worked then
	 *     warn("it failed")
	 * end
	 * ```
	 * This is essentially sugar for:
	 * ```lua
	 * select(2, assert(promise:await()))
	 * ```
	 * **Errors** if the Promise rejects or gets cancelled.
	 */
	expect(this: Promise<T>): T;

	/** Returns the current Promise status. */
	getStatus(this: Promise<T>): Promise.Status;
}

interface PromiseConstructor {
	readonly Status: {
		/** The Promise is executing, and not settled yet. */
		readonly Started: "Started";
		/** The Promise finished successfully. */
		readonly Resolved: "Resolved";
		/** The Promise was rejected. */
		readonly Rejected: "Rejected";
		/** The Promise was cancelled before it finished. */
		readonly Cancelled: "Cancelled";
	};

	/**
	 * Construct a new Promise that will be resolved or rejected with the given callbacks.
	 *
	 * If you `resolve` with a Promise, it will be chained onto.
	 *
	 * You can safely yield within the executor function and it will not block the creating thread.
	 *
	 * ```lua
	 * local myFunction()
	 *     return Promise.new(function(resolve, reject, onCancel)
	 *         wait(1)
	 *         resolve("Hello world!")
	 *     end)
	 * end
	 *
	 * myFunction():andThen(print)
	 * ```
	 * You do not need to use `pcall` within a Promise. Errors that occur during execution will be caught and turned into a rejection automatically. If error() is called with a table, that table will be the rejection value. Otherwise, string errors will be converted into `Promise.Error(Promise.Error.Kind.ExecutionError)` objects for tracking debug information.
	 *
	 * You may register an optional cancellation hook by using the `onCancel` argument:
	 * - This should be used to abort any ongoing operations leading up to the promise being settled.
	 * - Call the `onCancel` function with a function callback as its only argument to set a hook which will in turn be called when/if the promise is cancelled.
	 * - `onCancel` returns `true` if the Promise was already cancelled when you called `onCancel`.
	 * - Calling `onCancel` with no argument will not override a previously set cancellation hook, but it will still return `true` if the Promise is currently cancelled.
	 * - You can set the cancellation hook at any time before resolving.
	 * - When a promise is cancelled, calls to `resolve` or `reject` will be ignored, regardless of if you set a cancellation hook or not.
	 */
	new <T>(
		executor: (
			resolve: (value: T | Promise<T>) => void,
			reject: (reason?: unknown) => void,
			onCancel: (abortHandler?: () => void) => boolean,
		) => void,
	): Promise<T>;

	/**
	 * The same as [Promise.new](https://eryn.io/roblox-lua-promise/lib/#new), except execution begins after the next `Heartbeat` event.
	 *
	 * This is a spiritual replacement for `spawn`, but it does not suffer from the same issues as `spawn`.
	 *
	 * ```lua
	 * local function waitForChild(instance, childName, timeout)
	 *     return Promise.defer(function(resolve, reject)
	 *         local child = instance:WaitForChild(childName, timeout)
	 *         if child then
	 *             resolve(child)
	 *         else
	 *             reject(child)
	 *         end
	 *     end)
	 * end
	 * ```
	 */
	defer: <T>(
		executor: (
			resolve: (value: T | [T] | [Promise<T>]) => void,
			reject: (reason?: unknown) => void,
			onCancel: (abortHandler?: () => void) => boolean,
		) => void,
	) => Promise<T>;

	/**
	 * Begins a Promise chain, calling a function and returning a Promise resolving with its return value. If the function errors, the returned Promise will be rejected with the error. You can safely yield within the Promise.try callback.
	 *
	 * > `Promise.try` is similar to [Promise.promisify](https://eryn.io/roblox-lua-promise/lib/#promisify), except the callback is invoked immediately instead of returning a new function.
	 */
	try: <T>(callback: () => T) => Promise<T>;

	/**
	 * Wraps a function that yields into one that returns a Promise.
	 *
	 * Any errors that occur while executing the function will be turned into rejections.
	 *
	 * > `Promise.promisify` is similar to [Promise.try](https://eryn.io/roblox-lua-promise/lib/#try), except the callback is returned as a callable function instead of being invoked immediately.
	 */
	promisify: <T extends Array<any>, U>(callback: (...args: T) => U) => (...args: T) => Promise<U>;

	/** Creates an immediately resolved Promise with the given value. */
	resolve: <T>(value: T) => Promise<T>;

	/**
	 * Creates an immediately rejected Promise with the given value.
	 *
	 * > Someone needs to consume this rejection (i.e. `:catch()` it), otherwise it will emit an unhandled Promise rejection warning on the next frame. Thus, you should not create and store rejected Promises for later use. Only create them on-demand as needed.
	 */
	reject: (value: unknown) => Promise<unknown>;

	/**
	 * Accepts an array of Promises and returns a new promise that:
	 * - is resolved after all input promises resolve.
	 * - is rejected if _any_ input promises reject.
	 *
	 * Note: Only the first return value from each promise will be present in the resulting array.
	 *
	 * After any input Promise rejects, all other input Promises that are still pending will be cancelled if they have no other consumers.
	 *
	 * ```lua
	 * local promises = {
	 *     returnsAPromise("example 1"),
	 *     returnsAPromise("example 2"),
	 *     returnsAPromise("example 3"),
	 * }
	 *
	 * return Promise.all(promises)
	 * ```
	 */
	all: <T extends Array<unknown>>(values: readonly [...T]) => Promise<{ [P in keyof T]: Awaited<T[P]> }>;

	/**
	 * Accepts an array of Promises and returns a new Promise that resolves with an array of in-place Statuses when all input Promises have settled. This is equivalent to mapping `promise:finally` over the array of Promises.
	 *
	 * ```lua
	 * local promises = {
	 *     returnsAPromise("example 1"),
	 *     returnsAPromise("example 2"),
	 *     returnsAPromise("example 3"),
	 * }
	 *
	 * return Promise.allSettled(promises)
	 * ```
	 */
	allSettled: <T>(promises: Array<Promise<T>>) => Promise<Array<Promise.Status>>;

	/**
	 * Accepts an array of Promises and returns a new promise that is resolved or rejected as soon as any Promise in the array resolves or rejects.
	 *
	 * > If the first Promise to settle from the array settles with a rejection, the resulting Promise from race will reject.
	 * > If you instead want to tolerate rejections, and only care about at least one Promise resolving, you should use [Promise.any](https://eryn.io/roblox-lua-promise/lib/#any) or [Promise.some](https://eryn.io/roblox-lua-promise/lib/#some) instead.
	 *
	 * All other Promises that don't win the race will be cancelled if they have no other consumers.
	 *
	 * ```lua
	 * local promises = {
	 *     returnsAPromise("example 1"),
	 *     returnsAPromise("example 2"),
	 *     returnsAPromise("example 3"),
	 * }
	 *
	 * return Promise.race(promises)
	 * ```
	 */
	race: <T>(promises: Array<Promise<T>>) => Promise<T>;

	/**
	 * Accepts an array of Promises and returns a Promise that is resolved as soon as `count` Promises are resolved from the input array. The resolved array values are in the order that the Promises resolved in. When this Promise resolves, all other pending Promises are cancelled if they have no other consumers.
	 *
	 * `count` 0 results in an empty array. The resultant array will never have more than count elements.
	 *
	 * ```lua
	 * local promises = {
	 *     returnsAPromise("example 1"),
	 *     returnsAPromise("example 2"),
	 *     returnsAPromise("example 3"),
	 * }
	 *
	 * return Promise.some(promises, 2) -- Only resolves with first 2 promises to resolve
	 * ```
	 */
	some: <T>(promises: Array<Promise<T>>, count: number) => Promise<Array<T>>;

	/**
	 * Accepts an array of Promises and returns a Promise that is resolved as soon as _any_ of the input Promises resolves. It will reject only if _all_ input Promises reject. As soon as one Promises resolves, all other pending Promises are cancelled if they have no other consumers.
	 *
	 * Resolves directly with the value of the first resolved Promise. This is essentially [Promise.some](https://eryn.io/roblox-lua-promise/lib/#some) with `1` count, except the Promise resolves with the value directly instead of an array with one element.
	 * ```lua
	 * local promises = {
	 *     returnsAPromise("example 1"),
	 *     returnsAPromise("example 2"),
	 *     returnsAPromise("example 3"),
	 * }
	 *
	 * return Promise.any(promises) -- Resolves with first value to resolve (only rejects if all 3 rejected)
	 * ```
	 */
	any: <T>(promises: Array<Promise<T>>) => Promise<T>;

	/**
	 * Returns a Promise that resolves after `seconds` seconds have passed. The Promise resolves with the actual amount of time that was waited.
	 *
	 * This function is **not** a wrapper around `wait`. `Promise.delay` uses a custom scheduler which provides more accurate timing. As an optimization, cancelling this Promise instantly removes the task from the scheduler.
	 *
	 * > Passing `NaN`, infinity, or a number less than 1/60 is equivalent to passing 1/60.
	 */
	delay: (seconds: number) => Promise<number>;

	/**
	 * Iterates serially over the given an array of values, calling the predicate callback on each value before continuing.
	 *
	 * If the predicate returns a Promise, we wait for that Promise to resolve before moving on to the next item in the array.
	 *
	 * > `Promise.each` is similar to `Promise.all`, except the Promises are ran in order instead of all at once.
	 * > But because Promises are eager, by the time they are created, they're already running. Thus, we need a way to defer creation of each Promise until a later time.
	 * > The predicate function exists as a way for us to operate on our data instead of creating a new closure for each Promise. If you would prefer, you can pass in an array of functions, and in the predicate, call the function and return its return value.
	 *
	 * ```lua
	 * Promise.each({
	 *     "foo",
	 *     "bar",
	 *     "baz",
	 *     "qux"
	 * }, function(value, index)
	 *     return Promise.delay(1):andThen(function()
	 *         print(("%d) Got %s!"):format(index, value))
	 *     end)
	 * end)
	 *
	 * --[[
	 *     (1 second passes)
	 *     > 1) Got foo!
	 *     (1 second passes)
	 *     > 2) Got bar!
	 *     (1 second passes)
	 *     > 3) Got baz!
	 *     (1 second passes)
	 *     > 4) Got qux!
	 * ]]
	 * ```
	 *
	 * If the Promise a predicate returns rejects, the Promise from `Promise.each` is also rejected with the same value.
	 *
	 * If the array of values contains a Promise, when we get to that point in the list, we wait for the Promise to resolve before calling the predicate with the value.
	 *
	 * If a Promise in the array of values is already Rejected when `Promise.each` is called, `Promise.each` rejects with that value immediately (the predicate callback will never be called even once). If a Promise in the list is already Cancelled when `Promise.each` is called, `Promise.each` rejects with `Promise.Error(Promise.Error.Kind.AlreadyCancelled)`. If a Promise in the array of values is Started at first, but later rejects, `Promise.each` will reject with that value and iteration will not continue once iteration encounters that value.
	 *
	 * Returns a Promise containing an array of the returned/resolved values from the predicate for each item in the array of values.
	 *
	 * If this Promise returned from `Promise.each` rejects or is cancelled for any reason, the following are true:
	 * - Iteration will not continue.
	 * - Any Promises within the array of values will now be cancelled if they have no other consumers.
	 * - The Promise returned from the currently active predicate will be cancelled if it hasn't resolved yet.
	 */
	each: <T, U>(
		list: Array<T | Promise<T>>,
		predicate: (value: T, index: number) => U | Promise<U>,
	) => Promise<Array<U>>;

	/**
	 * Repeatedly calls a Promise-returning function up to `times` number of times, until the returned Promise resolves.
	 *
	 * If the amount of retries is exceeded, the function will return the latest rejected Promise.
	 * ```lua
	 * local function canFail(a, b, c)
	 *     return Promise.new(function(resolve, reject)
	 *         -- do something that can fail
	 *
	 *         local failed, thing = doSomethingThatCanFail(a, b, c)
	 *
	 *         if failed then
	 *             reject("it failed")
	 *         else
	 *             resolve(thing)
	 *         end
	 *     end)
	 * end
	 *
	 * local MAX_RETRIES = 10
	 * local value = Promise.retry(canFail, MAX_RETRIES, "foo", "bar", "baz") -- args to send to canFail
	 * ```
	 */
	retry: <P extends Array<any>, T>(callback: (...args: P) => Promise<T>, times: number, ...args: P) => Promise<T>;

	/**
	 * Converts an event into a Promise which resolves the next time the event fires.
	 *
	 * The optional `predicate` callback, if passed, will receive the event arguments and should return `true` or `false`, based on if this fired event should resolve the Promise or not. If `true`, the Promise resolves. If `false`, nothing happens and the predicate will be rerun the next time the event fires.
	 *
	 * The Promise will resolve with the event arguments.
	 *
	 * > This function will work given any object with a `Connect` method. This includes all Roblox events.
	 * ```lua
	 * -- Creates a Promise which only resolves when `somePart` is touched by a part named `"Something specific"`.
	 * return Promise.fromEvent(somePart.Touched, function(part)
	 *     return part.Name == "Something specific"
	 * end)
	 * ```
	 */
	fromEvent<T>(this: void, event: RBXScriptSignal<(value: T) => void>, predicate?: (value: T) => boolean): Promise<T>;
	fromEvent(this: void, event: RBXScriptSignal<() => void>, predicate?: () => boolean): Promise<void>;
	fromEvent<T>(
		this: void,
		event: { Connect: (callback: (value: T) => void) => void },
		predicate?: (value: T) => boolean,
	): Promise<T>;

	/** Checks whether the given object is a Promise via duck typing. This only checks if the object is a table and has an `andThen` method. */
	is: (object: unknown) => object is Promise<unknown>;

	/**
	 * Folds an array of values or promises into a single value. The array is traversed sequentially.
	 *
	 * The reducer function can return a promise or value directly. Each iteration receives the resolved value from the previous, and the first receives your defined initial value.
	 *
	 * The folding will stop at the first rejection encountered.
	 * ```lua
	 * local basket = {"blueberry", "melon", "pear", "melon"}
	 * Promise.fold(basket, function(cost, fruit)
	 *   if fruit == "blueberry" then
	 *     return cost -- blueberries are free!
	 *   else
	 *     -- call a function that returns a promise with the fruit price
	 *     return fetchPrice(fruit):andThen(function(fruitCost)
	 *       return cost + fruitCost
	 *     end)
	 *   end
	 * end, 0)
	 * ```
	 */
	fold: <T, U>(
		list: Array<T | Promise<T>>,
		reducer: (accumulator: U, value: T, index: number) => U | Promise<U>,
		initialValue: U,
	) => Promise<U>;
}

declare namespace Promise {
	export type Status = PromiseConstructor["Status"][keyof PromiseConstructor["Status"]];
}

declare const Promise: PromiseConstructor;

/// <reference no-default-lib="true"/>

// MACRO MATH API

declare interface CFrame {
	/** macro for CFrame * CFrame */
	mul(this: CFrame, cf: CFrame): CFrame;
	/** macro for CFrame * Vector3 */
	mul(this: CFrame, v3: Vector3): Vector3;
	/** macro for CFrame + Vector3 */
	add(this: CFrame, v3: Vector3): CFrame;
	/** macro for CFrame - Vector3 */
	sub(this: CFrame, v3: Vector3): CFrame;
}

declare interface UDim {
	/** macro for UDim + UDim */
	add(this: UDim, udim: UDim): UDim;
	/** macro for UDim - UDim */
	sub(this: UDim, udim: UDim): UDim;
}

declare interface UDim2 {
	/** macro for UDim2 + UDim2 */
	add(this: UDim2, udim2: UDim2): UDim2;
	/** macro for UDim2 - UDim2 */
	sub(this: UDim2, udim2: UDim2): UDim2;
}

declare interface Vector2 {
	/** macro for Vector2 + Vector2 */
	add(this: Vector2, v2: Vector2): Vector2;
	/** macro for Vector2 - Vector2 */
	sub(this: Vector2, v2: Vector2): Vector2;
	/** macro for Vector2 * Vector2 */
	mul(this: Vector2, v2: Vector2): Vector2;
	/** macro for Vector2 * number */
	mul(this: Vector2, n: number): Vector2;
	/** macro for Vector2 / Vector2 */
	div(this: Vector2, v2: Vector2): Vector2;
	/** macro for Vector2 / number */
	div(this: Vector2, n: number): Vector2;
}

declare interface Vector2int16 {
	/** macro for Vector2int16 + Vector2int16 */
	add(this: Vector2int16, v2: Vector2int16): Vector2int16;
	/** macro for Vector2int16 - Vector2int16 */
	sub(this: Vector2int16, v2: Vector2int16): Vector2int16;
	/** macro for Vector2int16 * Vector2int16 */
	mul(this: Vector2int16, v2: Vector2int16): Vector2int16;
	/** macro for Vector2int16 / Vector2int16 */
	div(this: Vector2int16, v2: Vector2int16): Vector2int16;
}

declare interface Vector3 {
	/** macro for Vector3 + Vector3 */
	add(this: Vector3, v3: Vector3): Vector3;
	/** macro for Vector3 - Vector3 */
	sub(this: Vector3, v3: Vector3): Vector3;
	/** macro for Vector3 * Vector3 */
	mul(this: Vector3, v3: Vector3): Vector3;
	/** macro for Vector3 * number */
	mul(this: Vector3, n: number): Vector3;
	/** macro for Vector3 / Vector3 */
	div(this: Vector3, v3: Vector3): Vector3;
	/** macro for Vector3 / number */
	div(this: Vector3, n: number): Vector3;
}

declare interface Vector3int16 {
	/** macro for Vector2int16 + Vector2int16 */
	add(this: Vector3int16, v3: Vector3int16): Vector3int16;
	/** macro for Vector2int16 - Vector2int16 */
	sub(this: Vector3int16, v3: Vector3int16): Vector3int16;
	/** macro for Vector2int16 * Vector2int16 */
	mul(this: Vector3int16, v3: Vector3int16): Vector3int16;
	/** macro for Vector2int16 / Vector2int16 */
	div(this: Vector3int16, v3: Vector3int16): Vector3int16;
}

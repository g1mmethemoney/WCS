/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

interface Symbol {}

interface SymbolConstructor {
	readonly iterator: symbol;
	readonly asyncIterator: symbol;
}
declare const Symbol: SymbolConstructor;

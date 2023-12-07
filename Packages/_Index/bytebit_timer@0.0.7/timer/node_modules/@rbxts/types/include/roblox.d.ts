/// <reference no-default-lib="true"/>
/// <reference path="lua.d.ts" />
/// <reference path="macro_math.d.ts" />
/// <reference path="generated/enums.d.ts" />
/// <reference path="generated/None.d.ts" />
/// <reference types="@rbxts/compiler-types" />

// ROBLOX API
/**
 * Intersecting a type with this allows access to Roblox's `Instance.Changed` event.
 *
 * @example
 * function f(p: Part) {
 * 	(p as Part & ChangedSignal).Changed.Connect(changedPropertyName => {})
 * }
 */
type ChangedSignal = {
	/**
	 * If you want to detect changes of a single property only, you should use [Instance.GetPropertyChangedSignal](https://developer.roblox.com/api-reference/function/Instance/GetPropertyChangedSignal) instead!
	 *
	 * The Changed event fires right after most properties change on objects. It is possible to find the present value of a changed property by using `object[property]`. To get the value of a property before it changes, you must have stored the value of the property before it changed.
	 *
	 * If you are only interested in listening to the change of a specific property, consider using the `GetPropertyChangedSignal` method instead to get an event that only fires when a given property changes.
	 *
	 * This event does not fire for physics-related changes, like when the `CFrame`, `Velocity`, `RotVelocity`, `Position`, `Orientation` and `CFrame` properties of a `BasePart` change due to gravity. To detect changes in these properties, consider using a physics-based event like `RunService.Stepped` or `BasePart.Touched`. A while-true-do loop can also work.
	 *
	 * For "-Value" objects, this event behaves differently: it only fires when the `Value` property changes. See individual pages for `IntValue`, `StringValue`, etc for more information. To detect other changes in these objects, you must use `GetPropertyChangedSignal` instead.
	 */
	readonly Changed: RBXScriptSignal<(changedPropertyName: string) => void>;
};

type Tweenable = number | boolean | CFrame | Rect | Color3 | UDim | UDim2 | Vector2 | Vector2int16 | Vector3;

interface EmoteDictionary {
	/** When these arrays have more than one emote id in them, it will randomly select one of the emotes to play from the list. */
	[emoteName: string]: Array<number>;
}

type EquippedEmotes = Array<{ Name: string; Slot: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }>;

interface UserInfo {
	Id: number;
	Username: string;
	DisplayName: string;
}

interface GroupInfo {
	Name: string;
	Id: number;
	Owner: {
		Name: string;
		Id: number;
	};
	EmblemUrl: string;
	Description: string;
	Roles: Array<{
		Name: string;
		Rank: number;
	}>;
}

interface GetGroupsAsyncResult {
	Name: string;
	Id: number;
	EmblemUrl: string;
	Description: string;
	Rank: number;
	Role: string;
	IsPrimary: boolean;
	IsInClan: boolean;
}

type HttpHeaders = Record<string, string> | Map<string, string>;
interface RequestAsyncRequest {
	Url: string;
	Method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";
	Body?: string;
	Headers?: HttpHeaders;
}

interface RequestAsyncResponse {
	Success: boolean;
	StatusCode: number;
	StatusMessage: string;
	Headers: Record<string, string>;
	Body: string;
}

interface SetInfo {
	AssetSetId: string;
	CategoryId: string;
	CreatorName: string;
	Description: string;
	ImageAssetId: string;
	Name: string;
	SetType: string;
}

interface CollectionInfo {
	AssetId: string;
	AssetSetId: string;
	AssetVersionId: string;
	IsTrusted: boolean;
	Name: string;
	CreatorName: string;
}

interface FreeSearchResult {
	CurrentStartIndex: string;
	Results: Array<{
		AssetId: string;
		AssetVersionId: string;
		CreatorName: string;
		Name: string;
	}>;
	TotalCount: string;
}

interface LocalizationEntry {
	Key: string;
	Source: string;
	Context: string;
	Example: string;
	Values: Map<string, string>;
}

interface LogInfo {
	message: string;
	messageType: Enum.MessageType;
	timestamp: number;
}

interface ReceiptInfo {
	/** the id of the player making the purchase */
	PlayerId: number;
	/** the specific place where the purchase was made */
	PlaceIdWherePurchased: number;
	/** a unique identifier for the purchase, should be used to prevent granting an item multiple times for one purchase */
	PurchaseId: string;
	/** the id of the purchased product */
	ProductId: number;
	/** the type of currency used (Tix, Robux) */
	CurrencyType: Enum.CurrencyType;
	/** the amount of currency spent on the product for this purchase */
	CurrencySpent: number;
}

interface ProductInfo {
	/** The name shown on the asset's page */
	Name: string;
	/** The description as shown on the asset's page
	 * May be `undefined` if the description is empty.
	 */
	Description: string | undefined;
	/** The cost of purchasing the asset using Robux */
	PriceInRobux: number;
	/** Timestamp of when the asset was created, e.g. `2018-08-01T17:55:11.98Z` */
	Created: string;
	/** Timestamp of when the asset was last updated by its creator, e.g. `2018-08-01T17:55:11.98Z` */
	Updated: string;
	/** Indicates whether the item is marked as 13+ in catalog */
	ContentRatingTypeId: number;
	/** The minimum Builder's Club subscription necessary to purchase the item */
	MinimumMembershipLevel: number;
	/** Describes whether the asset can be taken for free */
	IsPublicDomain: boolean;
	/** Describes whether the asset is a User Product, Developer Product, or Game Pass */
	ProductType: "User Product" | "Developer Product" | "Game Pass";
	/** A table of information describing the creator of the asset */
	Creator: {
		/** Either `User` or `Group` */
		CreatorType: "User" | "Group";
		/** The ID of the creator user or group */
		CreatorTargetId: number;
		/** The name/username of the creator */
		Name: string;
	};
	IconImageAssetId: number;
	TargetId: number;
}

interface BadgeInfo {
	/** The name of the badge. */
	Name: string;
	/** The description of the badge. */
	Description: string;
	/** The asset ID of the image for this badge. */
	IconImageId: number;
	/** Indicates whether this badge is available to be awarded. */
	IsEnabled: boolean;
}

interface BundleInfo {
	/** What kind of Bundle this is */
	BundleType: "BodyParts" | "AvatarAnimations";

	/** The Description of the Bundle */
	Description: string;

	/** The Bundle Id */
	Id: number;

	/** An array of all assets contained within this bundle */
	Items: Array<{
		/** The Id of the individual item */
		Id: number;
		/** The name of the individual asset */
		Name: string;
		/** What type the individual asset is */
		Type: "Asset" | "UserOutfit";
	}>;

	/** The name of the Bundle */
	Name: string;
}

type TeleportData = string | number | boolean | Array<unknown> | Map<unknown, unknown>;

type PlayerJoinInfo = {
	/** Data passed along with the players. As this is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users’ score or in-game currency). */
	TeleportData?: TeleportData;
} & (
	| {
			SourceGameId: undefined;
			SourcePlaceId: undefined;
			Members: undefined;
	  }
	| {
			/** The DataModel.GameId of the game the Player was teleported from. Only present if the player was teleported to the current place. */
			SourceGameId: number;
			/** The DataModel.PlaceId of the place the Player was teleported from. Only present if the player was teleported to the current place. */
			SourcePlaceId: number;
			/** An array containing the UserIds teleported alongside the Player. Only present if the player was teleported in using TeleportService:TeleportPartyAsync. */
			Members: Array<number>;
	  }
);

interface BoundActionInfo {
	inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType | string>;
	priorityLevel: number;
	stackOrder: number;
}

declare const enum AssetTypeId {
	Image = 1,
	TeeShirt = 2,
	Audio = 3,
	Mesh = 4,
	Lua = 5,
	Hat = 8,
	Place = 9,
	Model = 10,
	Shirt = 11,
	Pants = 12,
	Decal = 13,
	Head = 17,
	Face = 18,
	Gear = 19,
	Badge = 21,
	Animation = 24,
	Torso = 27,
	RightArm = 28,
	LeftArm = 29,
	LeftLeg = 30,
	RightLeg = 31,
	Package = 32,
	GamePass = 34,
	Plugin = 38,
	MeshPart = 40,
	HairAccessory = 41,
	FaceAccessory = 42,
	NeckAccessory = 43,
	ShoulderAccessory = 44,
	FrontAccessory = 45,
	BackAccessory = 46,
	WaistAccessory = 47,
	ClimbAnimation = 48,
	DeathAnimation = 49,
	FallAnimation = 50,
	IdleAnimation = 51,
	JumpAnimation = 52,
	RunAnimation = 53,
	SwimAnimation = 54,
	WalkAnimation = 55,
	PoseAnimation = 56,
	EarAccessory = 57,
	EyeAccessory = 58,
}

interface AssetProductInfo extends ProductInfo {
	/** If InfoType was Asset, this is the ID of the given asset. */
	AssetId: number;
	/** The [type of asset](https://developer.roblox.com/articles/Asset-types) (e.g. place, model, shirt). In TypeScript, you should compare this value to a member of the `AssetTypeId` const enum. */
	AssetTypeId: AssetTypeId;
	/** Describes whether the asset is purchasable */
	IsForSale: boolean;
	/** Describes whether the asset is a "limited item" that is no longer (if ever) sold */
	IsLimited: boolean;
	/** Describes whether the asset is a "limited unique" ("Limited U") item that only has a fixed number sold */
	IsLimitedUnique: boolean;
	/** Describes whether the asset is marked as "new" in the catalog */
	IsNew: boolean;
	/** The remaining number of items a limited unique item may be sold */
	Remaining: number;
	/** The number of items the asset has been sold */
	Sales: number;
}

interface DeveloperProductInfo extends ProductInfo {
	/** If the InfoType was Product, this is the product's ID */
	ProductId: number;
}

interface AgentParameters {
	/** Humanoid radius. Used to determine the minimum separation from obstacles. */
	AgentRadius?: number;
	/** Humanoid height.
	 * Empty space smaller than this value, like the space under stairs, will be marked as non-traversable.
	 */
	AgentHeight?: number;
	/** Sets whether off-mesh links for jumping are allowed. */
	AgentCanJump?: boolean;
	/** Determines the spacing between intermediate waypoints in path. */
	WaypointSpacing?: number;
	/** Table of materials or defined PathfindingModifiers and their "cost" for traversal. Useful for making the agent prefer certain materials/regions over others. */
	Costs?: { [K in Enum.Material["Name"]]?: number } & { [index: string]: number };
}

interface CollisionGroupInfo {
	id: number;
	mask: number;
	name: string;
}

declare const enum LocationType {
	MobileWebsite = 0,
	MobileInGame = 1,
	Website = 2,
	Studio = 3,
	InGame = 4,
	XBoxApp = 5,
	TeamCreate = 6,
}

interface FriendOnlineInfoBase {
	/** The UserId of the friend. */
	VisitorId: number;
	/** The user name of the friend. */
	UserName: string;
	/** When the user was last online. */
	LastOnline: string;
	/** If the friend is currently online. */
	IsOnline: boolean;
	/** The name of the friends current location. */
	LastLocation: string;
}

interface FriendOnlineInfoWebsite extends FriendOnlineInfoBase {
	/** A numeric enum of the friends last location.
	 * In TS, you can check this value against the `LocationType` const enum
	 */
	LocationType: LocationType.MobileWebsite | LocationType.Website | LocationType.XBoxApp;
}

interface FriendOnlineInfoGame extends FriendOnlineInfoBase {
	/** A numeric enum of the friends last location.
	 * In TS, you can check this value against the `LocationType` const enum
	 */
	LocationType: LocationType.MobileInGame | LocationType.InGame | LocationType.TeamCreate;
	/** The placeId of the friends last location. Check the `LocationType` to determine whether this property exists. */
	PlaceId: number;
	/** The DataModel / JobId of the friends last location.
	 * Check the `LocationType` to determine whether this property exists.
	 */
	GameId: string;
}

interface FriendOnlineInfoStudio extends FriendOnlineInfoBase {
	/** A numeric enum of the friends last location.
	 * In TS, you can check this value against the `LocationType` const enum
	 */
	LocationType: LocationType.Studio;
	/** The placeId of the friends last location. Check the `LocationType` to determine whether this property exists. */
	PlaceId: number;
}

type FriendOnlineInfo = FriendOnlineInfoWebsite | FriendOnlineInfoGame | FriendOnlineInfoStudio;

/** A dictionary of an id and name containing information about what type an asset is */
type AssetType =
	| { id: AssetTypeId.Image; name: "Image" }
	| { id: AssetTypeId.TeeShirt; name: "TeeShirt" }
	| { id: AssetTypeId.Audio; name: "Audio" }
	| { id: AssetTypeId.Mesh; name: "Mesh" }
	| { id: AssetTypeId.Lua; name: "Lua" }
	| { id: AssetTypeId.Hat; name: "Hat" }
	| { id: AssetTypeId.Place; name: "Place" }
	| { id: AssetTypeId.Model; name: "Model" }
	| { id: AssetTypeId.Shirt; name: "Shirt" }
	| { id: AssetTypeId.Pants; name: "Pants" }
	| { id: AssetTypeId.Decal; name: "Decal" }
	| { id: AssetTypeId.Head; name: "Head" }
	| { id: AssetTypeId.Face; name: "Face" }
	| { id: AssetTypeId.Gear; name: "Gear" }
	| { id: AssetTypeId.Badge; name: "Badge" }
	| { id: AssetTypeId.Animation; name: "Animation" }
	| { id: AssetTypeId.Torso; name: "Torso" }
	| { id: AssetTypeId.RightArm; name: "RightArm" }
	| { id: AssetTypeId.LeftArm; name: "LeftArm" }
	| { id: AssetTypeId.LeftLeg; name: "LeftLeg" }
	| { id: AssetTypeId.RightLeg; name: "RightLeg" }
	| { id: AssetTypeId.Package; name: "Package" }
	| { id: AssetTypeId.GamePass; name: "GamePass" }
	| { id: AssetTypeId.Plugin; name: "Plugin" }
	| { id: AssetTypeId.MeshPart; name: "MeshPart" }
	| { id: AssetTypeId.HairAccessory; name: "HairAccessory" }
	| { id: AssetTypeId.FaceAccessory; name: "FaceAccessory" }
	| { id: AssetTypeId.NeckAccessory; name: "NeckAccessory" }
	| { id: AssetTypeId.ShoulderAccessory; name: "ShoulderAccessory" }
	| { id: AssetTypeId.FrontAccessory; name: "FrontAccessory" }
	| { id: AssetTypeId.BackAccessory; name: "BackAccessory" }
	| { id: AssetTypeId.WaistAccessory; name: "WaistAccessory" }
	| { id: AssetTypeId.ClimbAnimation; name: "ClimbAnimation" }
	| { id: AssetTypeId.DeathAnimation; name: "DeathAnimation" }
	| { id: AssetTypeId.FallAnimation; name: "FallAnimation" }
	| { id: AssetTypeId.IdleAnimation; name: "IdleAnimation" }
	| { id: AssetTypeId.JumpAnimation; name: "JumpAnimation" }
	| { id: AssetTypeId.RunAnimation; name: "RunAnimation" }
	| { id: AssetTypeId.SwimAnimation; name: "SwimAnimation" }
	| { id: AssetTypeId.WalkAnimation; name: "WalkAnimation" }
	| { id: AssetTypeId.PoseAnimation; name: "PoseAnimation" }
	| { id: AssetTypeId.EarAccessory; name: "EarAccessory" }
	| { id: AssetTypeId.EyeAccessory; name: "EyeAccessory" };

/** Information about a player's avatar in dictionary form */
interface CharacterAppearanceInfo {
	/** Describes the BrickColor values for each limb */
	bodyColors: {
		/** The BrickColor value of the leftArm */
		leftArmColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the torso */
		torsoColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the rightArm */
		rightArmColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the head */
		headColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the leftLeg */
		leftLegColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the rightLeg */
		rightLegColorId: keyof BrickColorsByNumber;
	};

	/** The assets currently equipped by the Player (hats, body parts, etc, excluding gear) */
	assets: Array<{
		/** The asset ID of the equipped asset */
		id: number;

		/** A table with `name` and `id` fields, each describing the kind of asset equipped ("Hat", "Face", etc.). In TypeScript, the `id` can be compared to a member of the `AssetTypeId` const enum. */
		assetType: AssetType;

		/** The name of the equipped asset */
		name: string;
	}>;

	/** Describes whether default pants are applied */
	defaultPantsApplied: boolean;

	/** Describes whether default shirt are applied */
	defaultShirtApplied: boolean;

	/** What kind of avatar it is */
	playerAvatarType: "R6" | "R15";

	/** A dictionary of scaling properties */
	scales: {
		bodyType: number;
		head: number;
		height: number;
		proportion: number;
		depth: number;
		width: number;
	};
}

interface MakeSystemMessageConfig {
	Text: string;
	Color?: Color3;
	Font?: Enum.Font;
	TextSize?: number;
}

interface SendNotificationConfig {
	Title: string;
	Text: string;
	Icon?: string;
	Duration?: number;
	Callback?: BindableFunction;
	Button1?: string;
	Button2?: string;
}

interface PolicyInfo {
	/** Whether the player can interact with paid random item generators. */
	ArePaidRandomItemsRestricted: boolean;
	/** See [here](https://devforum.roblox.com/t/about-our-upcoming-global-compliance-system/461447) for details. */
	IsSubjectToChinaPolicies: boolean;
	/** Which external link references are allowed in a country/region. */
	AllowedExternalLinkReferences: Array<string>;
}

/**
 * RBXScriptConnection, also known as a Connection,
 * is a special object returned by the Connect method of an Event (RBXScriptSignal).
 * This is used primarily to disconnect a listener from an Event.
 */
interface RBXScriptConnection {
	/**
	 * Describes whether or not the connection is still alive.
	 * This will become false if connection:Disconnect() is called.
	 */
	Connected: boolean;
	/** Disconnects the connection from the event. */
	Disconnect(this: RBXScriptConnection): void;
}

/**
 * RBXScriptSignal, more commonly known as an Event, is a special kind of Roblox object.
 * It provides a way for user-defined functions, called listeners, to be called when something happens in the game.
 * When a certain event happens, the Event is fired, calling any listeners that are connected to the Event.
 * An Event may also pass arguments to each listener, to provide extra information about the event that occurred.
 */
interface RBXScriptSignal<T extends Callback = Callback> {
	/**
	 * Establishes a function to be called whenever the event is raised.
	 * Returns a RBXScriptConnection object associated with the connection.
	 * @param callback The function to be called whenever the event is fired.
	 */
	Connect(this: RBXScriptSignal, callback: T): RBXScriptConnection;

	ConnectParallel(this: RBXScriptSignal, callback: T): RBXScriptConnection;

	/**
	 * Yields the current thread until this signal is fired. Returns what was fired to the signal.
	 */
	Wait(this: RBXScriptSignal): LuaTuple<Parameters<T>>;
}

// generated in generated/None.d.ts
interface Instances {}
interface CreatableInstances {}

// InstanceConstructor
interface InstanceConstructor {
	/**
	 * Creates an new object of type val. The parent argument is optional;
	 * If it is supplied, the object will be parented to that object.
	 * Performance note: When the Parent of an object is set,
	 * Roblox begins listening to a variety of different property changes for replication,
	 * rendering and physics.
	 * Therefore, it is recommended to set the Parent property last when creating new objects.
	 * As such, you should avoid using the second argument (parent) of this function.
	 * You can read [this thread on the developer forum](https://devforum.roblox.com/t/psa-dont-use-instance-new-with-parent-argument/30296) for more information.
	 */
	new <T extends keyof CreatableInstances>(className: T, parent?: Instance): CreatableInstances[T];
}

declare const Instance: InstanceConstructor;

/**
 * Axes is a datatype used for the ArcHandles class to control what rotation axes are currently enabled.
 */
interface Axes {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Axes: unique symbol;
	/** Whether the X axis is enabled */
	readonly X: boolean;
	/** Whether the Y axis is enabled */
	readonly Y: boolean;
	/** Whether the Z axis is enabled */
	readonly Z: boolean;
	/** Whether the top face is included */
	readonly Top: boolean;
	/** Whether the bottom face is included */
	readonly Bottom: boolean;
	/** Whether the left face is included */
	readonly Left: boolean;
	/** Whether the right face is included */
	readonly Right: boolean;
	/** Whether the back face is included */
	readonly Back: boolean;
	/** Whether the front face is included */
	readonly Front: boolean;
}

type AxesConstructor = new (...axes: Array<Enum.Axis | Enum.NormalId>) => Axes;
declare const Axes: AxesConstructor;

interface BrickColor<Number extends number = any, Name extends string = any> {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_BrickColor: unique symbol;
	/** The unique number that identifies the BrickColor */
	readonly Number: number extends Number ? keyof BrickColorsByNumber : Number;
	/** The name associated with the BrickColor */
	readonly Name: string extends Name ? BrickColorsByNumber[keyof BrickColorsByNumber] : Name;
	/** The Color3 associated with the BrickColor */
	readonly Color: Color3;
	/** The red component (between 0 and 1) */
	readonly r: number;
	/** The green component (between 0 and 1) */
	readonly g: number;
	/** The blue component (between 0 and 1) */
	readonly b: number;
}

interface BrickColorsByNumber {
	1: "White";
	2: "Grey";
	3: "Light yellow";
	5: "Brick yellow";
	6: "Light green (Mint)";
	9: "Light reddish violet";
	11: "Pastel Blue";
	12: "Light orange brown";
	18: "Nougat";
	21: "Bright red";
	22: "Med. reddish violet";
	23: "Bright blue";
	24: "Bright yellow";
	25: "Earth orange";
	26: "Black";
	27: "Dark grey";
	28: "Dark green";
	29: "Medium green";
	36: "Lig. Yellowich orange";
	37: "Bright green";
	38: "Dark orange";
	39: "Light bluish violet";
	40: "Transparent";
	41: "Tr. Red";
	42: "Tr. Lg blue";
	43: "Tr. Blue";
	44: "Tr. Yellow";
	45: "Light blue";
	47: "Tr. Flu. Reddish orange";
	48: "Tr. Green";
	49: "Tr. Flu. Green";
	50: "Phosph. White";
	100: "Light red";
	101: "Medium red";
	102: "Medium blue";
	103: "Light grey";
	104: "Bright violet";
	105: "Br. yellowish orange";
	106: "Bright orange";
	107: "Bright bluish green";
	108: "Earth yellow";
	110: "Bright bluish violet";
	111: "Tr. Brown";
	112: "Medium bluish violet";
	113: "Tr. Medi. reddish violet";
	115: "Med. yellowish green";
	116: "Med. bluish green";
	118: "Light bluish green";
	119: "Br. yellowish green";
	120: "Lig. yellowish green";
	121: "Med. yellowish orange";
	123: "Br. reddish orange";
	124: "Bright reddish violet";
	125: "Light orange";
	126: "Tr. Bright bluish violet";
	127: "Gold";
	128: "Dark nougat";
	131: "Silver";
	133: "Neon orange";
	134: "Neon green";
	135: "Sand blue";
	136: "Sand violet";
	137: "Medium orange";
	138: "Sand yellow";
	140: "Earth blue";
	141: "Earth green";
	143: "Tr. Flu. Blue";
	145: "Sand blue metallic";
	146: "Sand violet metallic";
	147: "Sand yellow metallic";
	148: "Dark grey metallic";
	149: "Black metallic";
	150: "Light grey metallic";
	151: "Sand green";
	153: "Sand red";
	154: "Dark red";
	157: "Tr. Flu. Yellow";
	158: "Tr. Flu. Red";
	168: "Gun metallic";
	176: "Red flip/flop";
	178: "Yellow flip/flop";
	179: "Silver flip/flop";
	180: "Curry";
	190: "Fire Yellow";
	191: "Flame yellowish orange";
	192: "Reddish brown";
	193: "Flame reddish orange";
	194: "Medium stone grey";
	195: "Royal blue";
	196: "Dark Royal blue";
	198: "Bright reddish lilac";
	199: "Dark stone grey";
	200: "Lemon metalic";
	208: "Light stone grey";
	209: "Dark Curry";
	210: "Faded green";
	211: "Turquoise";
	212: "Light Royal blue";
	213: "Medium Royal blue";
	216: "Rust";
	217: "Brown";
	218: "Reddish lilac";
	219: "Lilac";
	220: "Light lilac";
	221: "Bright purple";
	222: "Light purple";
	223: "Light pink";
	224: "Light brick yellow";
	225: "Warm yellowish orange";
	226: "Cool yellow";
	232: "Dove blue";
	268: "Medium lilac";
	301: "Slime green";
	302: "Smoky grey";
	303: "Dark blue";
	304: "Parsley green";
	305: "Steel blue";
	306: "Storm blue";
	307: "Lapis";
	308: "Dark indigo";
	309: "Sea green";
	310: "Shamrock";
	311: "Fossil";
	312: "Mulberry";
	313: "Forest green";
	314: "Cadet blue";
	315: "Electric blue";
	316: "Eggplant";
	317: "Moss";
	318: "Artichoke";
	319: "Sage green";
	320: "Ghost grey";
	321: "Lilac";
	322: "Plum";
	323: "Olivine";
	324: "Laurel green";
	325: "Quill grey";
	327: "Crimson";
	328: "Mint";
	329: "Baby blue";
	330: "Carnation pink";
	331: "Persimmon";
	332: "Maroon";
	333: "Gold";
	334: "Daisy orange";
	335: "Pearl";
	336: "Fog";
	337: "Salmon";
	338: "Terra Cotta";
	339: "Cocoa";
	340: "Wheat";
	341: "Buttermilk";
	342: "Mauve";
	343: "Sunrise";
	344: "Tawny";
	345: "Rust";
	346: "Cashmere";
	347: "Khaki";
	348: "Lily white";
	349: "Seashell";
	350: "Burgundy";
	351: "Cork";
	352: "Burlap";
	353: "Beige";
	354: "Oyster";
	355: "Pine Cone";
	356: "Fawn brown";
	357: "Hurricane grey";
	358: "Cloudy grey";
	359: "Linen";
	360: "Copper";
	361: "Dirt brown";
	362: "Bronze";
	363: "Flint";
	364: "Dark taupe";
	365: "Burnt Sienna";
	1001: "Institutional white";
	1002: "Mid gray";
	1003: "Really black";
	1004: "Really red";
	1005: "Deep orange";
	1006: "Alder";
	1007: "Dusty Rose";
	1008: "Olive";
	1009: "New Yeller";
	1010: "Really blue";
	1011: "Navy blue";
	1012: "Deep blue";
	1013: "Cyan";
	1014: "CGA brown";
	1015: "Magenta";
	1016: "Pink";
	1017: "Deep orange";
	1018: "Teal";
	1019: "Toothpaste";
	1020: "Lime green";
	1021: "Camo";
	1022: "Grime";
	1023: "Lavender";
	1024: "Pastel light blue";
	1025: "Pastel orange";
	1026: "Pastel violet";
	1027: "Pastel blue-green";
	1028: "Pastel green";
	1029: "Pastel yellow";
	1030: "Pastel brown";
	1031: "Royal purple";
	1032: "Hot pink";
}

interface BrickColorsByPalette {
	0: 141;
	1: 301;
	2: 107;
	3: 26;
	4: 1012;
	5: 303;
	6: 1011;
	7: 304;
	8: 28;
	9: 1018;
	10: 302;
	11: 305;
	12: 306;
	13: 307;
	14: 308;
	15: 1021;
	16: 309;
	17: 310;
	18: 1019;
	19: 135;
	20: 102;
	21: 23;
	22: 1010;
	23: 312;
	24: 313;
	25: 37;
	26: 1022;
	27: 1020;
	28: 1027;
	29: 311;
	30: 315;
	31: 1023;
	32: 1031;
	33: 316;
	34: 151;
	35: 317;
	36: 318;
	37: 319;
	38: 1024;
	39: 314;
	40: 1013;
	41: 1006;
	42: 321;
	43: 322;
	44: 104;
	45: 1008;
	46: 119;
	47: 323;
	48: 324;
	49: 325;
	50: 320;
	51: 11;
	52: 1026;
	53: 1016;
	54: 1032;
	55: 1015;
	56: 327;
	57: 1005;
	58: 1009;
	59: 29;
	60: 328;
	61: 1028;
	62: 208;
	63: 45;
	64: 329;
	65: 330;
	66: 331;
	67: 1004;
	68: 21;
	69: 332;
	70: 333;
	71: 24;
	72: 334;
	73: 226;
	74: 1029;
	75: 335;
	76: 336;
	77: 342;
	78: 343;
	79: 338;
	80: 1007;
	81: 339;
	82: 133;
	83: 106;
	84: 340;
	85: 341;
	86: 1001;
	87: 1;
	88: 9;
	89: 1025;
	90: 337;
	91: 344;
	92: 345;
	93: 1014;
	94: 105;
	95: 346;
	96: 347;
	97: 348;
	98: 349;
	99: 1030;
	100: 125;
	101: 101;
	102: 350;
	103: 192;
	104: 351;
	105: 352;
	106: 353;
	107: 354;
	108: 1002;
	109: 5;
	110: 18;
	111: 217;
	112: 355;
	113: 356;
	114: 153;
	115: 357;
	116: 358;
	117: 359;
	118: 360;
	119: 38;
	120: 361;
	121: 362;
	122: 199;
	123: 194;
	124: 363;
	125: 364;
	126: 365;
	127: 1003;
}

interface BrickColorConstructor {
	/** Returns a random BrickColor. */
	random: () => BrickColor;

	/** Returns a White BrickColor */
	White: () => BrickColor<1, "White">;
	/** Returns a Gray BrickColor */
	Gray: () => BrickColor<194, "Medium stone grey">;
	/** Returns a DarkGray BrickColor */
	DarkGray: () => BrickColor<199, "Dark stone grey">;
	/** Returns a Black BrickColor */
	Black: () => BrickColor<26, "Black">;
	/** Returns a Red BrickColor */
	Red: () => BrickColor<21, "Bright red">;
	/** Returns a Yellow BrickColor */
	Yellow: () => BrickColor<24, "Bright yellow">;
	/** Returns a Green BrickColor */
	Green: () => BrickColor<28, "Dark green">;
	/** Returns a Blue BrickColor */
	Blue: () => BrickColor<23, "Bright blue">;

	/** Constructs a BrickColor from its name. */
	new <T extends BrickColorsByNumber[keyof BrickColorsByNumber]>(val: T): BrickColor<
		{ [K in keyof BrickColorsByNumber]: T extends BrickColorsByNumber[K] ? K : never }[keyof BrickColorsByNumber],
		T
	>;

	/** Constructs a BrickColor from its numerical index. */
	new <T extends keyof BrickColorsByNumber>(val: T): BrickColor<T, BrickColorsByNumber[T]>;

	/** Constructs a BrickColor from its numerical index. */
	new (val: number): BrickColor;

	/** Constructs the closest BrickColor that can be matched to the specified RGB components. */
	new (r: number, g: number, b: number): BrickColor;

	/** Constructs the closest BrickColor that can be matched to the specified Color3. */
	new (color: Color3): BrickColor;

	/** Constructs a BrickColor from its palette index. */
	palette: {
		<T extends keyof BrickColorsByPalette>(paletteValue: T): BrickColor<
			BrickColorsByPalette[T],
			BrickColorsByNumber[BrickColorsByPalette[T]]
		>;
		(paletteValue: number): BrickColor;
	};
}

declare const BrickColor: BrickColorConstructor;

// CatalogSearchParams
interface CatalogSearchParams {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CatalogSearchParams: unique symbol;
	SearchKeyword: string;
	CategoryFilter: Enum.CatalogCategoryFilter;
	SortType: Enum.CatalogSortType;
	BundleTypes: string;
	AssetTypes: string;
}

interface CatalogSearchParamsConstructor {
	new (): CatalogSearchParams;
}

declare const CatalogSearchParams: CatalogSearchParamsConstructor;

// CFrame
interface CFrame {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CFrame: unique symbol;
	/** The 3D position of the CFrame */
	readonly Position: Vector3;
	/** The x-coordinate of the position */
	readonly X: number;
	/** The y-coordinate of the position */
	readonly Y: number;
	/** The z-coordinate of the position */
	readonly Z: number;
	/** The forward-direction component of the CFrame’s orientation. */
	readonly LookVector: Vector3;
	/** The right-direction component of the CFrame’s orientation. */
	readonly RightVector: Vector3;
	/** The up-direction component of the CFrame’s orientation. */
	readonly UpVector: Vector3;
	/** Equivalent to the first/top row of the rotation matrix, or `Vector3.new(r00, r10, r20)` */
	readonly XVector: Vector3;
	/** Equivalent to the second/middle row of the rotation matrix, or `Vector3.new(r01, r11, r21)` */
	readonly YVector: Vector3;
	/** Equivalent to the third/bottom row of the rotation matrix, or `Vector3.new(r02, r12, r22)` */
	readonly ZVector: Vector3;
	/** Returns the inverse of this CFrame */
	Inverse(this: CFrame): CFrame;
	/** Returns a CFrame interpolated between this CFrame and the goal by the fraction alpha */
	Lerp(this: CFrame, goal: CFrame, alpha: number): CFrame;
	/** Returns a CFrame transformed from Object to World space. Equivalent to `[CFrame * cf]` */
	ToWorldSpace(this: CFrame, cf: CFrame): CFrame;
	/** Returns a CFrame transformed from World to Object space. Equivalent to `[CFrame:inverse() * cf]` */
	ToObjectSpace(this: CFrame, cf: CFrame): CFrame;
	/** Returns a Vector3 transformed from Object to World space. Equivalent to `[CFrame * v3]` */
	PointToWorldSpace(this: CFrame, v3: Vector3): Vector3;
	/** Returns a Vector3 transformed from World to Object space. Equivalent to `[CFrame:inverse() * v3]` */
	PointToObjectSpace(this: CFrame, v3: Vector3): Vector3;
	/** Returns a Vector3 rotated from Object to World space. Equivalent to `[(CFrame - CFrame.p) *v3]` */
	VectorToWorldSpace(this: CFrame, v3: Vector3): Vector3;
	/** Returns a Vector3 rotated from World to Object space. Equivalent to `[(CFrame:inverse() - CFrame:inverse().p) * v3]` */
	VectorToObjectSpace(this: CFrame, v3: Vector3): Vector3;
	/** Returns the values: x, y, z, R00, R01, R02, R10, R11, R12, R20, R21, R22, where R00-R22 represent the 3x3 rotation matrix of the CFrame, and xyz represent the position of the CFrame. */
	GetComponents(
		this: CFrame,
	): LuaTuple<[number, number, number, number, number, number, number, number, number, number, number, number]>;
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, Y, X order */
	ToEulerAnglesXYZ(this: CFrame): LuaTuple<[number, number, number]>;
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order */
	ToEulerAnglesYXZ(this: CFrame): LuaTuple<[number, number, number]>;
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order (Equivalent to toEulerAnglesYXZ) */
	ToOrientation(this: CFrame): LuaTuple<[number, number, number]>;
	/** Returns a tuple of a Vector3 and a number which represent the rotation of the CFrame in the axis-angle representation */
	ToAxisAngle(this: CFrame): LuaTuple<[Vector3, number]>;
}

interface CFrameConstructor {
	/** Equivalent to fromEulerAnglesXYZ */
	Angles: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a rotated CFrame from a Unit Vector3 and a rotation in radians */
	fromAxisAngle: (unit: Vector3, rotation: number) => CFrame;
	/** Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, Y, X order. */
	fromEulerAnglesXYZ: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, X, Y order. */
	fromEulerAnglesYXZ: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a CFrame from a translation and the columns of a rotation matrix. If vz is excluded,
	 * the third column is calculated as `[vx:Cross(vy).Unit]`.
	 */
	fromMatrix: (pos: Vector3, vX: Vector3, vY: Vector3, vZ?: Vector3) => CFrame;
	/** Equivalent to fromEulerAnglesYXZ */
	fromOrientation: (rX: number, rY: number, rZ: number) => CFrame;
	/**
	 * Creates a new CFrame located at `at` and facing towards `lookAt`, optionally specifying the upward direction (by default, (0, 1, 0)).
	 *
	 * This function replaces the `CFrame.new(Vector3, Vector3)` constructor which accomplished a similar task. This function allows you to specify the `up` Vector, using the same default as the old constructor.
	 */
	lookAt: (at: Vector3, lookAt: Vector3, up?: Vector3) => CFrame;
	/** Creates a CFrame from a Vector3 */
	new (pos: Vector3): CFrame;
	/** Creates a CFrame from position (x, y, z). */
	new (x: number, y: number, z: number): CFrame;
	/** Creates a blank identity CFrame. */
	new (): CFrame;
	/** Creates a CFrame from position (x, y, z) and quaternion (qX, qY, qZ, qW) */
	new (x: number, y: number, z: number, qX: number, qY: number, qZ: number, qW: number): CFrame;
	/** Creates a CFrame from position (x, y, z) with an orientation specified by the rotation matrix `[[R00 R01 R02] [R10 R11 R12] [R20 R21 R22]]` */
	new (
		x: number,
		y: number,
		z: number,
		R00: number,
		R01: number,
		R02: number,
		R10: number,
		R11: number,
		R12: number,
		R20: number,
		R21: number,
		R22: number,
	): CFrame;
	/** Creates a CFrame located at pos with it’s lookVector pointing towards the lookAt position. */
	new (pos: Vector3, lookAt: Vector3): CFrame;
}

declare const CFrame: CFrameConstructor;

interface Color3 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Color3: unique symbol;
	/** The red value of the color (between 0 and 1) */
	readonly R: number;
	/** The green value of the color (between 0 and 1) */
	readonly G: number;
	/** The blue value of the color (between 0 and 1) */
	readonly B: number;
	/** Returns a Color3 interpolated between two Color3 objects. Alpha is a number from 0 to 1. */
	Lerp(this: Color3, goal: Color3, alpha: number): Color3;
	/** Returns the [hue, saturation, and value](https://en.wikipedia.org/wiki/HSL_and_HSV) of a Color3. This function is the inverse operation of the `Color3.fromHSV` constructor. */
	ToHSV(): LuaTuple<[number, number, number]>;
}

interface Color3Constructor {
	/** Creates a Color3 with the given red, green, and blue. The numbers can range from 0 to 255. */
	fromRGB: (r?: number, g?: number, b?: number) => Color3;
	/** Creates a Color3 with the given hue, saturation, and value. The numbers can range from 0 to 1. */
	fromHSV: (hue: number, sat: number, val: number) => Color3;
	/** Returns the hue, saturation, and value of a Color3. */
	toHSV: (color: Color3) => LuaTuple<[number, number, number]>;
	/** Returns a Color3 with the given red, green, and blue values. The numbers can range from 0 to 1, defaulting to 0 */
	new (red?: number, green?: number, blue?: number): Color3;
}

declare const Color3: Color3Constructor;

// ColorSequence
interface ColorSequence {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ColorSequence: unique symbol;
	readonly Keypoints: ReadonlyArray<ColorSequenceKeypoint>;
}
interface ColorSequenceConstructor {
	new (color: Color3): ColorSequence;
	new (c0: Color3, c1: Color3): ColorSequence;
	new (colors: ReadonlyArray<ColorSequenceKeypoint>): ColorSequence;
}
declare const ColorSequence: ColorSequenceConstructor;

// ColorSequenceKeypoint
interface ColorSequenceKeypoint {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ColorSequenceKeypoint: unique symbol;
	readonly Time: number;
	readonly Value: Color3;
}
type ColorSequenceKeypointConstructor = new (time: number, color: Color3) => ColorSequenceKeypoint;
declare const ColorSequenceKeypoint: ColorSequenceKeypointConstructor;

/**
 * Describes a time value, returned from many of DateTime's methods and used for some of DateTime's constructors
 */
interface TimeValueTable {
	/** Range: 1400-9999 */
	Year: number;

	/** Range: 1-12 */
	Month: number;

	/** Range: 1-31 */
	Day: number;

	/** Range: 0-23 */
	Hour: number;

	/** Range: 0-59 */
	Minute: number;

	/**
	 * Range: 0-60
	 * Usually 0–59, sometimes 60 to accommodate leap seconds in certain systems.
	 */
	Second: number;

	/** Range: 0-999 */
	Millisecond: number;
}

/**
 * A DateTime represents a moment in time using a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).
 * It can be used to easily format dates and times in specific locales.
 * When converted to a string, a string conversion of the stored timestamp integer is returned.
 * They do not store timezone values; rather, timezones are considered when constructing and using DateTime objects.
 * DateTime objects are equal if and only if their `UnixTimestampMillis` properties are equal.
 */
interface DateTime {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_DateTime: unique symbol;

	/**
	 * The number of seconds since January 1st, 1970 at 00:00 UTC (the Unix epoch).
	 * For more information, see [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).
	 * Range is -17,987,443,200–253,402,300,799, approximately years 1400–9999.
	 */
	readonly UnixTimestamp: number;

	/**
	 * The number of milliseconds since January 1st, 1970 at 00:00 UTC (the Unix epoch).
	 * For more information, see [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).
	 * Range is -17,987,443,200,000 to 253,402,300,799,999, approximately years 1400–9999.
	 */
	readonly UnixTimestampMillis: number;

	/** Converts the value of this DateTime object to Universal Coordinated Time (UTC) */
	ToUniversalTime(): TimeValueTable;

	/** Converts the value of this DateTime object to local time */
	ToLocalTime(): TimeValueTable;

	/**
	 * Formats a date as a [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time string.
	 * An example ISO 8601 date-time string would be `2020-01-02T10:30:45Z`, which represents January 2nd 2020 at 10:30 AM, 45 seconds.
	 */
	ToIsoDate(): string;

	/**
	 * Generates a string from the DateTime value interpreted as Universal Coordinated Time (UTC) and a format string.
	 * The format string should contain tokens, which will replace to certain date/time values described by the DateTime object.
	 * For details on all the available tokens, see [DateTime Format Strings](https://developer.roblox.com/articles/datetime-format-strings).
	 * @param format
	 * @param locale
	 */
	FormatUniversalTime(format: string, locale: string): string;

	/**
	 * Generates a string from the DateTime value interpreted as local time and a format string.
	 * The format string should contain tokens, which will replace to certain date/time values described by the DateTime object.
	 * For details on all the available tokens, see [DateTime Format Strings](https://developer.roblox.com/articles/datetime-format-strings).
	 * @param format
	 * @param locale
	 */
	FormatLocalTime(format: string, locale: string): string;
}

interface DateTimeConstructor {
	/** Creates a new DateTime representing the current moment in time */
	now: () => DateTime;

	/**
	 * Creates a new DateTime object from the given [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time), or the number of seconds since January 1st, 1970 at 00:00 (UTC).
	 * @param unixTimestamp
	 */
	fromUnixTimestamp: (unixTimestamp: number) => DateTime;

	/**
	 * Creates a new DateTime object from the given [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time), or the number of milliseconds since January 1st, 1970 at 00:00 (UTC).
	 * @param unixTimestampMillis
	 */
	fromUnixTimestampMillis: (unixTimestampMillis: number) => DateTime;

	/**
	 * Creates a new DateTime using the given units from a UTC time
	 * - Date units (year, month, day) that produce an invalid date will raise an error. For example, January 32nd or February 29th on a non-leap year.
	 * - Time units (hour, minute, second, millisecond) that are outside their normal range are valid. For example, 90 minutes will cause the hour to roll over by 1; -10 seconds will cause the minute value to roll back by 1.
	 * - Non-integer values are rounded down. For example, providing 2.5 hours will be equivalent to providing 2 hours, not 2 hours 30 minutes.
	 * - Omitted values are assumed to be their lowest value in their normal range, except for year which defaults to 1970.
	 * @param year Defaults to 1970
	 * @param month Defaults to 1
	 * @param day Defaults to 1
	 * @param hour Defaults to 0
	 * @param minute Defaults to 0
	 * @param second Defaults to 0
	 * @param millisecond Defaults to 0
	 */
	fromUniversalTime: (
		year?: number,
		month?: number,
		day?: number,
		hour?: number,
		minute?: number,
		second?: number,
		millisecond?: number,
	) => DateTime;

	/**
	 * Creates a new DateTime using the given units from a local time
	 * - Date units (year, month, day) that produce an invalid date will raise an error. For example, January 32nd or February 29th on a non-leap year.
	 * - Time units (hour, minute, second, millisecond) that are outside their normal range are valid. For example, 90 minutes will cause the hour to roll over by 1; -10 seconds will cause the minute value to roll back by 1.
	 * - Non-integer values are rounded down. For example, providing 2.5 hours will be equivalent to providing 2 hours, not 2 hours 30 minutes.
	 * - Omitted values are assumed to be their lowest value in their normal range, except for year which defaults to 1970.
	 * @param year Defaults to 1970
	 * @param month Defaults to 1
	 * @param day Defaults to 1
	 * @param hour Defaults to 0
	 * @param minute Defaults to 0
	 * @param second Defaults to 0
	 * @param millisecond Defaults to 0
	 */
	fromLocalTime: (
		year?: number,
		month?: number,
		day?: number,
		hour?: number,
		minute?: number,
		second?: number,
		millisecond?: number,
	) => DateTime;

	/**
	 * Creates a DateTime from an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time string in UTC time.
	 * If the string parsing fails, returns nil.
	 * An example ISO 8601 date-time string would be `2020-01-02T10:30:45Z`, which represents January nd 2020 at 10:30 AM, 45 seconds.
	 * @param isoDate
	 */
	fromIsoDate: (isoDate: string) => DateTime | undefined;
}

declare const DateTime: DateTimeConstructor;

// DockWidgetPluginGuiInfo
interface DockWidgetPluginGuiInfo {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_DockWidgetPluginGuiInfo: unique symbol;
	readonly InitialDockState: Enum.InitialDockState;
	readonly InitialEnabled: boolean;
	readonly InitialEnabledShouldOverrideRestore: boolean;
	readonly FloatingXSize: number;
	readonly FloatingYSize: number;
	readonly MinWidth: number;
	readonly MinHeight: number;
}
type DockWidgetPluginGuiInfoConstructor = new (
	initDockState?: Enum.InitialDockState,
	initEnabled?: boolean,
	overrideEnabledRestore?: boolean,
	floatXSize?: number,
	floatYSize?: number,
	minWidth?: number,
	minHeight?: number,
) => DockWidgetPluginGuiInfo;
declare const DockWidgetPluginGuiInfo: DockWidgetPluginGuiInfoConstructor;

// Faces
interface Faces {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Faces: unique symbol;
	readonly Top: boolean;
	readonly Bottom: boolean;
	readonly Back: boolean;
	readonly Front: boolean;
	readonly Right: boolean;
	readonly Left: boolean;
}
type FacesConstructor = new (...ids: Array<Enum.NormalId>) => Faces;
declare const Faces: FacesConstructor;

// NumberRange
interface NumberRange {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NumberRange: unique symbol;
	readonly Min: number;
	readonly Max: number;
}
interface NumberRangeConstructor {
	new (value: number): NumberRange;
	new (minimum: number, maximum: number): NumberRange;
}
declare const NumberRange: NumberRangeConstructor;

// NumberSequence
interface NumberSequence {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NumberSequence: unique symbol;
	/** An array containing keypoint values for the NumberSequence. */
	readonly Keypoints: ReadonlyArray<NumberSequenceKeypoint>;
}
interface NumberSequenceConstructor {
	/** Creates a sequence of two keypoints with n for each value */
	new (n: number): NumberSequence;
	/** Creates a sequence of two keypoints with n0 and n1 as the value */
	new (n0: number, n1: number): NumberSequence;
	/** Creates a sequence with a given array containing keypoint values for the NumberSequence. */
	new (keypoints: ReadonlyArray<NumberSequenceKeypoint>): NumberSequence;
}
declare const NumberSequence: NumberSequenceConstructor;

// NumberSequenceKeypoint
interface NumberSequenceKeypoint {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NumberSequenceKeypoint: unique symbol;
	readonly Envelope: number;
	readonly Time: number;
	readonly Value: number;
}
interface NumberSequenceKeypointConstructor {
	/** Creates a keypoint with a specified time, value, and envelope if specified. */
	new (time: number, value: number, envelope?: number): NumberSequenceKeypoint;
}
declare const NumberSequenceKeypoint: NumberSequenceKeypointConstructor;

// OverlapParams
interface OverlapParams {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_OverlapParams: unique symbol;
	/**
	 * An array of objects whose descendants will be used in filtering.
	 */
	FilterDescendantsInstances: Array<Instance>;
	/**
	 * `RaycastFilterType.Whitelist` or `RaycastFilterType.Blacklist`. Determines how the `FilterDescendantInstances` is
	 * used. `Blacklist` will skip the `FilterDescendantInstances`, and `Whitelist` will exclusively include them.
	 */
	FilterType: Enum.RaycastFilterType;
	/**
	 * The maximum amount of parts to be returned by the query. The process simply early outs once this is met.
	 * (0 is infinite)
	 */
	MaxParts: number;
	/**
	 * The collision group the region check is performed on. Parts set to not collide with this group will be ignored.
	 */
	CollisionGroup: string;
}
type OverlapParamsConstructor = new () => OverlapParams;
declare const OverlapParams: OverlapParamsConstructor;

// PathWaypoint
interface PathWaypoint {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PathWaypoint: unique symbol;
	readonly Action: Enum.PathWaypointAction;
	readonly Position: Vector3;
}
type PathWaypointConstructor = new (position?: Vector3, action?: Enum.PathWaypointAction) => PathWaypoint;
declare const PathWaypoint: PathWaypointConstructor;

// PhysicalProperties
interface PhysicalProperties {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PhysicalProperties: unique symbol;
	readonly Density: number;
	readonly Friction: number;
	readonly Elasticity: number;
	readonly FrictionWeight: number;
	readonly ElasticityWeight: number;
}
interface PhysicalPropertiesConstructor {
	new (density: number, friction: number, elasticity: number): PhysicalProperties;
	new (
		density: number,
		friction: number,
		elasticity: number,
		frictionWeight: number,
		elasticityWeight: number,
	): PhysicalProperties;
	new (material: Enum.Material): PhysicalProperties;
}
declare const PhysicalProperties: PhysicalPropertiesConstructor;

// Random
interface Random {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Random: unique symbol;
	NextInteger(this: Random, min: number, max: number): number;
	NextNumber(this: Random): number;
	NextNumber(this: Random, min: number, max: number): number;
	Clone(this: Random): Random;
}

interface RandomConstructor {
	new (seed: number): Random;
	new (): Random;
}

declare const Random: RandomConstructor;

// Ray
interface Ray {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Ray: unique symbol;
	readonly Origin: Vector3;
	readonly Direction: Vector3;
	readonly Unit: Ray;
	ClosestPoint(this: Ray, point: Vector3): Vector3;
	Distance(this: Ray, point: Vector3): number;
}

type RayConstructor = new (origin?: Vector3, direction?: Vector3) => Ray;

declare const Ray: RayConstructor;

// RaycastParams
interface RaycastParams {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_RaycastParams: unique symbol;
	/** An array of objects whose descendants will be used in filtering raycasting candidates. */
	FilterDescendantsInstances: Array<Instance>;
	/**
	 * Determines how the `FilterDescendantsInstances` list will be used, depending on the
	 * [RaycastFilterType](https://developer.roblox.com/api-reference/enum/RaycastFilterType) provided.
	 *
	 * - `Enum.RaycastFilterType.Whitelist` — Only [BaseParts](https://developer.roblox.com/api-reference/class/BasePart)
	 * which are descendants of objects in the filter list will be considered in the raycast operation.
	 * - `Enum.RaycastFilterType.Blacklist` — Every [BasePart](https://developer.roblox.com/api-reference/class/BasePart)
	 * in the game will be considered except those that are descendants of objects in the filter list.
	 */
	FilterType: Enum.RaycastFilterType;
	/**
	 * Determines whether the water material is considered when raycasting against
	 * [Terrain](https://developer.roblox.com/api-reference/class/Terrain).
	 */
	IgnoreWater: boolean;
	/**
	 * Specifies a [collision group](https://developer.roblox.com/articles/Collision-Filtering) for the raycasting
	 * operation. Parts in collision groups that are set to **not** collide with this group will be ignored. If this
	 * property is omitted, the raycast will assume the **Default** collision group.
	 */
	CollisionGroup: string;
}

type RaycastParamsConstructor = new () => RaycastParams;

declare const RaycastParams: RaycastParamsConstructor;

// RaycastResult
interface RaycastResult {
	readonly Instance: BasePart;
	readonly Material: Enum.Material;
	readonly Normal: Vector3;
	readonly Position: Vector3;
}

// Rect
interface Rect {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Rect: unique symbol;
	readonly Min: Vector2;
	readonly Max: Vector2;
	readonly Width: number;
	readonly Height: number;
}
interface RectConstructor {
	new (min?: Vector2, max?: Vector2): Rect;
	new (minX: number, minY: number, maxX: number, maxY: number): Rect;
}

declare const Rect: RectConstructor;

// Region3
interface Region3 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Region3: unique symbol;
	readonly CFrame: CFrame;
	readonly Size: Vector3;
	ExpandToGrid(this: Region3, resolution: number): Region3;
}

type Region3Constructor = new (min?: Vector3, max?: Vector3) => Region3;

declare const Region3: Region3Constructor;

// Region3int16
interface Region3int16 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Region3int16: unique symbol;
	readonly Min: Vector3int16;
	readonly Max: Vector3int16;
}

type Region3int16Constructor = new (min?: Vector3int16, max?: Vector3int16) => Region3int16;

declare const Region3int16: Region3int16Constructor;

// TweenInfo
interface TweenInfo {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_TweenInfo: unique symbol;
	readonly Time: number;
	readonly EasingStyle: Enum.EasingStyle;
	readonly EasingDirection: Enum.EasingDirection;
	readonly RepeatCount: number;
	readonly Reverses: boolean;
	readonly DelayTime: number;
}

type TweenInfoConstructor = new (
	time?: number,
	easingStyle?: Enum.EasingStyle,
	easingDirection?: Enum.EasingDirection,
	repeatCount?: number,
	reverses?: boolean,
	delayTime?: number,
) => TweenInfo;

declare const TweenInfo: TweenInfoConstructor;

// UDim
interface UDim {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UDim: unique symbol;
	readonly Scale: number;
	readonly Offset: number;
}

type UDimConstructor = new (scale?: number, offset?: number) => UDim;

declare const UDim: UDimConstructor;

// UDim2
interface UDim2 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UDim2: unique symbol;
	readonly X: UDim;
	readonly Y: UDim;
	readonly Width: UDim;
	readonly Height: UDim;
	Lerp(this: UDim2, goal: UDim2, alpha: number): UDim2;
}

interface UDim2Constructor {
	new (xScale: number, xOffset: number, yScale: number, yOffset: number): UDim2;
	new (xDim: UDim, yDim: UDim): UDim2;
	new (): UDim2;
	fromOffset: (x?: number, y?: number) => UDim2;
	fromScale: (x?: number, y?: number) => UDim2;
}

declare const UDim2: UDim2Constructor;

// Vector2
interface Vector2 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector2: unique symbol;
	readonly X: number;
	readonly Y: number;
	/** A normalized copy of the vector - has a magnitude of 1. */
	readonly Unit: Vector2;
	/** The length of the vector */
	readonly Magnitude: number;
	/** Returns a scalar dot product of the two vectors */
	Dot(this: Vector2, other: Vector2): number;
	/** Returns a Vector2 linearly interpolated between this Vector2 and the goal by the fraction alpha */
	Lerp(this: Vector2, goal: Vector2, alpha: number): Vector2;
	/** Returns the cross product of the two vectors */
	Cross(this: Vector2, other: Vector2): number;
}

type Vector2Constructor = new (x?: number, y?: number) => Vector2;

declare const Vector2: Vector2Constructor;

// Vector2int16
interface Vector2int16 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector2int16: unique symbol;
	readonly X: number;
	readonly Y: number;
}

type Vector2int16Constructor = new (x?: number, y?: number) => Vector2int16;

declare const Vector2int16: Vector2int16Constructor;

// Vector3
interface Vector3 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector3: unique symbol;
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
	/** A normalized copy of the vector - one which has the same direction as the original but a magnitude of 1. */
	readonly Unit: Vector3;
	/** The length of the vector */
	readonly Magnitude: number;
	/** Returns a Vector3 linearly interpolated between this Vector3 and the goal by the fraction alpha. */
	Lerp(this: Vector3, goal: Vector3, alpha: number): Vector3;
	/** Returns a scalar dot product of the two vectors. */
	Dot(this: Vector3, other: Vector3): number;
	/** Returns the cross product of the two vectors. */
	Cross(this: Vector3, other: Vector3): Vector3;
	/** Returns true if the other Vector3 falls within the epsilon radius of this Vector3. */
	FuzzyEq(this: Vector3, other: Vector3, epsilon?: number): boolean;
}

interface Vector3Constructor {
	FromNormalId: (norm: Enum.NormalId) => Vector3;
	FromAxis: (axis: Enum.Axis) => Vector3;
	new (x?: number, y?: number, z?: number): Vector3;
}

declare const Vector3: Vector3Constructor;

// Vector3int16
interface Vector3int16 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector3int16: unique symbol;
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
}

type Vector3int16Constructor = new (x?: number, y?: number, z?: number) => Vector3int16;

declare const Vector3int16: Vector3int16Constructor;

// unusable internal studio classes
interface QFont {}
interface QDir {}

// built-in globals
declare const game: DataModel;
declare const script: LuaSourceContainer;
declare const shared: object;

type DelayedCallback =
	/**
	 * @param delayedTime The amount of time in seconds which elapsed since the function invoking this callback was called
	 * @param gameTime The total time Roblox Lua has been running
	 */
	(delayedTime: number, gameTime: number) => void;

// built-in functions

/** Schedules a function to be executed after delayTime seconds have passed, without yielding the current thread. This function allows multiple Lua threads to be executed in parallel from the same stack. The delay will have a minimum duration of 29 milliseconds, but this minimum may be higher depending on the target framerate and various throttling conditions. If the delayTime parameter is not specified, the minimum duration will be used. */
declare function delay(delayTime: number, callback: DelayedCallback): void;
/**
 * Returns how much time has elapsed since the current instance of Roblox was started.
 * In Roblox Studio, this begins counting up from the moment Roblox Studio starts running, not just when opening a place.
 * @deprecated use os.clock() instead.
 */
declare function elapsedTime(): number;
/** Runs the supplied ModuleScript if it has not been run already, and returns what the ModuleScript returned (in both cases).

If the ModuleScript the user wants to use has been uploaded to Roblox (with the instance’s name being ‘MainModule’), it can be loaded by using the require function on the asset ID of the ModuleScript, though only on the server. */
declare function require(moduleScript: ModuleScript | number): unknown;
/** Runs the specified callback function in a separate thread, without yielding the current thread.
The function will be executed the next time Roblox’s Task Scheduler runs an update cycle. This delay will take at least 29 milliseconds but can arbitrarily take longer, depending on the target framerate and various throttling conditions. */
declare function spawn(callback: DelayedCallback): void;
declare function tick(): number;
/** Time since the game started running. Will be 0 in Studio when not running the game. */
declare function time(): number;
declare function UserSettings(): UserSettings;
/** Returns the current version of Roblox as a string. The integers in the version string are separated by periods, and each integers represent the following, in order:

Generation - The current generation of the application shell that is hosting the client.
Version - The current release version of Roblox.
Patch - The current patch number for this version of Roblox.
Commit - The ID of the last internal commit that was accepted into this version of the client. */
declare function version(): string;
/** Yields the current thread until the specified amount of seconds have elapsed.
The delay will have a minimum duration of 29 milliseconds, but this minimum may be higher depending on the target framerate and various throttling conditions. If the seconds parameter is not specified, the minimum duration will be used.
This function returns:

Actual time yielded (in seconds)
Total time since the software was initialized (in seconds) */
declare function wait(seconds?: number): LuaTuple<[number, number]>;
/** Behaves identically to Lua’s print function, except the output is styled as a warning, with yellow text and a timestamp.
This function accepts any number of arguments, and will attempt to convert them into strings which will then be joined together with spaces between them. */
declare function warn(...params: Array<unknown>): void;

// math functions
declare namespace math {
	/** Returns a perlin noise value between -0.5 and 0.5. If you leave arguments out, they will be interpreted as zero, so math.noise(1.158) is equivalent to math.noise(1.158, 0, 0) and math.noise(1.158, 5.723) is equivalent to math.noise(1.158, 5.723, 0).
	 * The function uses a perlin noise algorithm to assign fixed values to coordinates. For example, math.noise(1.158, 5.723) will always return 0.48397532105446 and math.noise(1.158, 6) will always return 0.15315161645412.
	 * If x, y and z are all integers, the return value will be 0. For fractional values of x, y and z, the return value will gradually fluctuate between -0.5 and 0.5. For coordinates that are close to each other, the return values will also be close to each other. */
	function noise(x?: number, y?: number, z?: number): number;

	/** Returns a number between min and max, inclusive. */
	function clamp(n: number, min: number, max: number): number;
}

declare namespace utf8 {
	/** Receives zero or more codepoints as integers, converts each one to its corresponding UTF-8 byte sequence and returns a string with the concatenation of all these sequences. */
	function char(...codepoints: Array<number>): string;
	/** Returns an iterator function that will iterate over all codepoints in string str. It raises an error if it meets any invalid byte sequence. */
	function codes(str: string): IterableFunction<LuaTuple<[number, number]>>;
	/** Returns the codepoints (as integers) from all codepoints in the provided string (str) that start between byte positions i and j (both included). The default for i is 0 and for j is i. It raises an error if it meets any invalid byte sequence. Similar to `string.byte`.*/
	function codepoint(str: string, i?: number, j?: number): LuaTuple<Array<number>>;
	/** Returns the number of UTF-8 codepoints in the string str that start between positions i and j (both inclusive). The default for i is 0 and for j is -1. If it finds any invalid byte sequence, returns a false value plus the position of the first invalid byte. */
	function len(s: string, i?: number, j?: number): LuaTuple<[number, undefined] | [false, number]>;
	/** Returns the position (in bytes) where the encoding of the n-th codepoint of s (counting from byte position i) starts. A negative n gets characters before position i. The default for i is 0 when n is non-negative and #s + 1 otherwise, so that utf8.offset(s, -n) gets the offset of the n-th character from the end of the string. If the specified character is neither in the subject nor right after its end, the function returns nil. */
	function offset(s: string, n: number, i?: number): number | undefined;
	/** Returns an iterator function that will iterate the grapheme clusters of the string. */
	function graphemes(s: string, i?: number, j?: number): IterableFunction<LuaTuple<[number, number]>>;
	/** Converts the input string to Normal Form C, which tries to convert decomposed characters into composed characters. */
	function nfcnormalize(str: string): string;
	/** Converts the input string to Normal Form D, which tries to break up composed characters into decomposed characters. */
	function nfdnormalize(str: string): string;
	/** The pattern which matches exactly one UTF-8 byte sequence, assuming that the subject is a valid UTF-8 string. */
	const charpattern: "[%z\x01-\x7F\xC2-\xF4][\x80-\xBF]*";
}

declare namespace task {
	/** Queues the calling script to be run during the parallel execution phase of the frame. */
	function desynchronize(): void;
	/** Yields the calling script and queues it for serial execution following the completion of the parallel execution phase of the frame. */
	function synchronize(): void;
	/** Defers the passed thread or function to be resumed at the end of the current resumption cycle. */
	function defer<T extends Array<any>>(callback: (...args: T) => void, ...args: T): void;
	function defer(thread: thread, ...args: Array<unknown>): void;
	/** Delays the passed thread or function until the given duration has elapsed. Resumes on engine Heartbeat. */
	function delay<T extends Array<any>>(duration: number, callback: (...args: T) => void, ...args: T): void;
	function delay(duration: number, thread: thread, ...args: Array<unknown>): void;
	/** Resumes the passed thread or function instantly using the engine's scheduler. */
	function spawn<T extends Array<any>>(callback: (...args: T) => void, ...args: T): void;
	function spawn(thread: thread, ...args: Array<unknown>): void;
	/** Delay the current thread until the given duration has elasped. Resumes on engine Heartbeat. */
	function wait(duration?: number): number;
}

interface GettableCores {
	AvatarContextMenuEnabled: boolean;
	PointsNotificationsActive: boolean;
	BadgesNotificationsActive: boolean;
	ChatActive: boolean;
	ChatWindowSize: UDim2;
	ChatWindowPosition: UDim2;
	ChatBarDisabled: boolean;
	GetBlockedUserIds: Array<number>;
	PlayerBlockedEvent: BindableEvent;
	PlayerUnblockedEvent: BindableEvent;
	PlayerMutedEvent: BindableEvent;
	PlayerUnmutedEvent: BindableEvent;
	PlayerFriendedEvent: BindableEvent;
	PlayerUnfriendedEvent: BindableEvent;
	DeveloperConsoleVisible: boolean;
	VRRotationIntensity: "Low" | "High" | "Smooth";
}

interface SettableCores {
	ChatActive: boolean;
	PointsNotificationsActive: boolean;
	BadgesNotificationsActive: boolean;
	ResetButtonCallback: boolean | BindableEvent;
	ChatMakeSystemMessage: MakeSystemMessageConfig;
	ChatWindowSize: UDim2;
	ChatWindowPosition: UDim2;
	ChatBarDisabled: boolean;
	SendNotification: SendNotificationConfig;
	TopbarEnabled: boolean;
	DevConsoleVisible: boolean;
	PromptSendFriendRequest: Player;
	PromptUnfriend: Player;
	PromptBlockPlayer: Player;
	PromptUnblockPlayer: Player;
	AvatarContextMenuEnabled: boolean;
	AddAvatarContextMenuOption: Enum.AvatarContextMenuOption | [string, BindableFunction];
	RemoveAvatarContextMenuOption: Enum.AvatarContextMenuOption | [string, BindableFunction];
	CoreGuiChatConnections:
		| { [name: string]: BindableEvent | BindableFunction }
		| Map<string, BindableEvent | BindableFunction>;
	VREnableControllerModels: boolean;
	VRLaserPointerMode: "Disabled" | "Pointer" | "Navigation" | "Hidden";
}

// type
interface CheckablePrimitives {
	nil: undefined;
	boolean: boolean;
	string: string;
	number: number;
	table: object;
	userdata: unknown;
	function: Callback;
	thread: thread;
	vector: Vector3;
}

/**
 * Returns the type of its only argument, coded as a string.
 * Roblox datatypes will return "userdata" when passed to this function. You should use Roblox's `typeOf()` function if you want to differentiate between Roblox datatypes.
 */
declare function type(value: unknown): keyof CheckablePrimitives;

/** The strings which can be returned by typeOf and their corresponding types */
interface CheckableTypes extends CheckablePrimitives {
	Axes: Axes;
	BrickColor: BrickColor;
	CFrame: CFrame;
	Color3: Color3;
	ColorSequence: ColorSequence;
	ColorSequenceKeypoint: ColorSequenceKeypoint;
	DateTime: DateTime;
	DockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo;
	Enum: Enum;
	EnumItem: EnumItem;
	Enums: Enums;
	Faces: Faces;
	Instance: Instance;
	NumberRange: NumberRange;
	NumberSequence: NumberSequence;
	NumberSequenceKeypoint: NumberSequenceKeypoint;
	PathWaypoint: PathWaypoint;
	PhysicalProperties: PhysicalProperties;
	RBXScriptConnection: RBXScriptConnection;
	RBXScriptSignal: RBXScriptSignal;
	Random: Random;
	Ray: Ray;
	RaycastParams: RaycastParams;
	RaycastResult: RaycastResult;
	Rect: Rect;
	Region3: Region3;
	Region3int16: Region3int16;
	TweenInfo: TweenInfo;
	UDim: UDim;
	UDim2: UDim2;
	Vector2: Vector2;
	Vector2int16: Vector2int16;
	Vector3: Vector3;
	Vector3int16: Vector3int16;
}

/** Returns the type of the given object as a string. This function works similarly to Lua’s native type function, with the exceptions that Roblox-defined data types like Vector3 and CFrame return their respective data types as strings. */
declare function typeOf(value: unknown): Exclude<keyof CheckableTypes, "vector">;

/**
 * Returns true if `typeof(value) == type`, otherwise false.
 * This function allows for type narrowing. i.e.
```
// v is unknown
if (typeIs(v, "Vector3")) {
	print(v.X, v.Y, v.Z);
}
```
 **/
declare function typeIs<T extends keyof CheckableTypes>(value: unknown, type: T): value is CheckableTypes[T];

/**
 * Calls the function func with the given arguments in protected mode.
 *
 * opcall is an easier to use version of pcall. It returns a result object instead of multiple returns.
 **/
declare function opcall<T extends Array<any>, U>(
	func: (...args: T) => U,
	...args: T
): { success: true; value: U } | { success: false; error: string };

/**
 * Returns true if `instance.ClassName == Q`, otherwise false.
 * This function allows for ClassName narrowing. i.e.
 * @example
 * if (classIs(o, "LocalScript")) {
 * // o is a LocalScript
 * }
 * if (classIs(o, "Script")) {
 * // o is a Script & { ClassName: "Script" }
 * // Notice how it specifies the ClassName property here.
 * // This is because a `LocalScript` is-a `Script`, but `o` refers to
 * // an instance for which `ClassName` is "Script"
 * }
 * @param instance
 * @param className
 */
declare function classIs<T extends keyof Instances>(instance: Instance, className: T): instance is Instances[T];

// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!

/// <reference no-default-lib="true"/>
/// <reference path="../roblox.d.ts" />

// GENERATED ROBLOX ENUMS

type Enums = typeof Enum;

interface EnumItem {
	Name: string;
	Value: number;
	EnumType: Enum;
}

interface Enum {
	GetEnumItems(this: defined): Array<EnumItem>;
}

declare namespace Enum {
	type EnumType<T extends { Name: string }> = { GetEnumItems(this: defined): Array<T> } & { [K in T["Name"]]: Extract<T, { Name: K }> };
	export function GetEnums(this: Enums): Array<Enum>;

	export namespace ABTestLoadingStatus {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<ABTestLoadingStatus>;
		}

		export const None: None;

		export interface Pending {
			Name: "Pending";
			Value: 1;
			EnumType: EnumType<ABTestLoadingStatus>;
		}

		export const Pending: Pending;

		export interface Initialized {
			Name: "Initialized";
			Value: 2;
			EnumType: EnumType<ABTestLoadingStatus>;
		}

		export const Initialized: Initialized;

		export interface Error {
			Name: "Error";
			Value: 3;
			EnumType: EnumType<ABTestLoadingStatus>;
		}

		export const Error: Error;

		export interface TimedOut {
			Name: "TimedOut";
			Value: 4;
			EnumType: EnumType<ABTestLoadingStatus>;
		}

		export const TimedOut: TimedOut;

		export interface ShutOff {
			Name: "ShutOff";
			Value: 5;
			EnumType: EnumType<ABTestLoadingStatus>;
		}

		export const ShutOff: ShutOff;

		export function GetEnumItems(this: defined): Array<ABTestLoadingStatus>
	}
	export type ABTestLoadingStatus = ABTestLoadingStatus.None | ABTestLoadingStatus.Pending | ABTestLoadingStatus.Initialized | ABTestLoadingStatus.Error | ABTestLoadingStatus.TimedOut | ABTestLoadingStatus.ShutOff;
	export namespace AccessoryType {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<AccessoryType>;
		}

		export const Unknown: Unknown;

		export interface Hat {
			Name: "Hat";
			Value: 1;
			EnumType: EnumType<AccessoryType>;
		}

		export const Hat: Hat;

		export interface Hair {
			Name: "Hair";
			Value: 2;
			EnumType: EnumType<AccessoryType>;
		}

		export const Hair: Hair;

		export interface Face {
			Name: "Face";
			Value: 3;
			EnumType: EnumType<AccessoryType>;
		}

		export const Face: Face;

		export interface Neck {
			Name: "Neck";
			Value: 4;
			EnumType: EnumType<AccessoryType>;
		}

		export const Neck: Neck;

		export interface Shoulder {
			Name: "Shoulder";
			Value: 5;
			EnumType: EnumType<AccessoryType>;
		}

		export const Shoulder: Shoulder;

		export interface Front {
			Name: "Front";
			Value: 6;
			EnumType: EnumType<AccessoryType>;
		}

		export const Front: Front;

		export interface Back {
			Name: "Back";
			Value: 7;
			EnumType: EnumType<AccessoryType>;
		}

		export const Back: Back;

		export interface Waist {
			Name: "Waist";
			Value: 8;
			EnumType: EnumType<AccessoryType>;
		}

		export const Waist: Waist;

		export interface TShirt {
			Name: "TShirt";
			Value: 9;
			EnumType: EnumType<AccessoryType>;
		}

		export const TShirt: TShirt;

		export interface Shirt {
			Name: "Shirt";
			Value: 10;
			EnumType: EnumType<AccessoryType>;
		}

		export const Shirt: Shirt;

		export interface Pants {
			Name: "Pants";
			Value: 11;
			EnumType: EnumType<AccessoryType>;
		}

		export const Pants: Pants;

		export interface Jacket {
			Name: "Jacket";
			Value: 12;
			EnumType: EnumType<AccessoryType>;
		}

		export const Jacket: Jacket;

		export interface Sweater {
			Name: "Sweater";
			Value: 13;
			EnumType: EnumType<AccessoryType>;
		}

		export const Sweater: Sweater;

		export interface Shorts {
			Name: "Shorts";
			Value: 14;
			EnumType: EnumType<AccessoryType>;
		}

		export const Shorts: Shorts;

		export interface LeftShoe {
			Name: "LeftShoe";
			Value: 15;
			EnumType: EnumType<AccessoryType>;
		}

		export const LeftShoe: LeftShoe;

		export interface RightShoe {
			Name: "RightShoe";
			Value: 16;
			EnumType: EnumType<AccessoryType>;
		}

		export const RightShoe: RightShoe;

		export interface DressSkirt {
			Name: "DressSkirt";
			Value: 17;
			EnumType: EnumType<AccessoryType>;
		}

		export const DressSkirt: DressSkirt;

		export function GetEnumItems(this: defined): Array<AccessoryType>
	}
	export type AccessoryType = AccessoryType.Unknown | AccessoryType.Hat | AccessoryType.Hair | AccessoryType.Face | AccessoryType.Neck | AccessoryType.Shoulder | AccessoryType.Front | AccessoryType.Back | AccessoryType.Waist | AccessoryType.TShirt | AccessoryType.Shirt | AccessoryType.Pants | AccessoryType.Jacket | AccessoryType.Sweater | AccessoryType.Shorts | AccessoryType.LeftShoe | AccessoryType.RightShoe | AccessoryType.DressSkirt;
	export namespace ActionType {
		export interface Nothing {
			Name: "Nothing";
			Value: 0;
			EnumType: EnumType<ActionType>;
		}

		export const Nothing: Nothing;

		export interface Pause {
			Name: "Pause";
			Value: 1;
			EnumType: EnumType<ActionType>;
		}

		export const Pause: Pause;

		export interface Lose {
			Name: "Lose";
			Value: 2;
			EnumType: EnumType<ActionType>;
		}

		export const Lose: Lose;

		export interface Draw {
			Name: "Draw";
			Value: 3;
			EnumType: EnumType<ActionType>;
		}

		export const Draw: Draw;

		export interface Win {
			Name: "Win";
			Value: 4;
			EnumType: EnumType<ActionType>;
		}

		export const Win: Win;

		export function GetEnumItems(this: defined): Array<ActionType>
	}
	export type ActionType = ActionType.Nothing | ActionType.Pause | ActionType.Lose | ActionType.Draw | ActionType.Win;
	export namespace ActuatorRelativeTo {
		export interface Attachment0 {
			Name: "Attachment0";
			Value: 0;
			EnumType: EnumType<ActuatorRelativeTo>;
		}

		export const Attachment0: Attachment0;

		export interface Attachment1 {
			Name: "Attachment1";
			Value: 1;
			EnumType: EnumType<ActuatorRelativeTo>;
		}

		export const Attachment1: Attachment1;

		export interface World {
			Name: "World";
			Value: 2;
			EnumType: EnumType<ActuatorRelativeTo>;
		}

		export const World: World;

		export function GetEnumItems(this: defined): Array<ActuatorRelativeTo>
	}
	export type ActuatorRelativeTo = ActuatorRelativeTo.Attachment0 | ActuatorRelativeTo.Attachment1 | ActuatorRelativeTo.World;
	export namespace ActuatorType {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<ActuatorType>;
		}

		export const None: None;

		export interface Motor {
			Name: "Motor";
			Value: 1;
			EnumType: EnumType<ActuatorType>;
		}

		export const Motor: Motor;

		export interface Servo {
			Name: "Servo";
			Value: 2;
			EnumType: EnumType<ActuatorType>;
		}

		export const Servo: Servo;

		export function GetEnumItems(this: defined): Array<ActuatorType>
	}
	export type ActuatorType = ActuatorType.None | ActuatorType.Motor | ActuatorType.Servo;
	export namespace AdornCullingMode {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<AdornCullingMode>;
		}

		export const Automatic: Automatic;

		export interface Never {
			Name: "Never";
			Value: 1;
			EnumType: EnumType<AdornCullingMode>;
		}

		export const Never: Never;

		export function GetEnumItems(this: defined): Array<AdornCullingMode>
	}
	export type AdornCullingMode = AdornCullingMode.Automatic | AdornCullingMode.Never;
	export namespace AlignType {
		export interface Parallel {
			Name: "Parallel";
			Value: 0;
			EnumType: EnumType<AlignType>;
		}

		export const Parallel: Parallel;

		export interface Perpendicular {
			Name: "Perpendicular";
			Value: 1;
			EnumType: EnumType<AlignType>;
		}

		export const Perpendicular: Perpendicular;

		export function GetEnumItems(this: defined): Array<AlignType>
	}
	export type AlignType = AlignType.Parallel | AlignType.Perpendicular;
	export namespace AlphaMode {
		export interface Overlay {
			Name: "Overlay";
			Value: 0;
			EnumType: EnumType<AlphaMode>;
		}

		export const Overlay: Overlay;

		export interface Transparency {
			Name: "Transparency";
			Value: 1;
			EnumType: EnumType<AlphaMode>;
		}

		export const Transparency: Transparency;

		export function GetEnumItems(this: defined): Array<AlphaMode>
	}
	export type AlphaMode = AlphaMode.Overlay | AlphaMode.Transparency;
	export namespace AnalyticsEconomyAction {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<AnalyticsEconomyAction>;
		}

		export const Default: Default;

		export interface Acquire {
			Name: "Acquire";
			Value: 1;
			EnumType: EnumType<AnalyticsEconomyAction>;
		}

		export const Acquire: Acquire;

		export interface Spend {
			Name: "Spend";
			Value: 2;
			EnumType: EnumType<AnalyticsEconomyAction>;
		}

		export const Spend: Spend;

		export function GetEnumItems(this: defined): Array<AnalyticsEconomyAction>
	}
	export type AnalyticsEconomyAction = AnalyticsEconomyAction.Default | AnalyticsEconomyAction.Acquire | AnalyticsEconomyAction.Spend;
	export namespace AnalyticsLogLevel {
		export interface Trace {
			Name: "Trace";
			Value: 0;
			EnumType: EnumType<AnalyticsLogLevel>;
		}

		export const Trace: Trace;

		export interface Debug {
			Name: "Debug";
			Value: 1;
			EnumType: EnumType<AnalyticsLogLevel>;
		}

		export const Debug: Debug;

		export interface Information {
			Name: "Information";
			Value: 2;
			EnumType: EnumType<AnalyticsLogLevel>;
		}

		export const Information: Information;

		export interface Warning {
			Name: "Warning";
			Value: 3;
			EnumType: EnumType<AnalyticsLogLevel>;
		}

		export const Warning: Warning;

		export interface Error {
			Name: "Error";
			Value: 4;
			EnumType: EnumType<AnalyticsLogLevel>;
		}

		export const Error: Error;

		export interface Fatal {
			Name: "Fatal";
			Value: 5;
			EnumType: EnumType<AnalyticsLogLevel>;
		}

		export const Fatal: Fatal;

		export function GetEnumItems(this: defined): Array<AnalyticsLogLevel>
	}
	export type AnalyticsLogLevel = AnalyticsLogLevel.Trace | AnalyticsLogLevel.Debug | AnalyticsLogLevel.Information | AnalyticsLogLevel.Warning | AnalyticsLogLevel.Error | AnalyticsLogLevel.Fatal;
	export namespace AnalyticsProgressionStatus {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<AnalyticsProgressionStatus>;
		}

		export const Default: Default;

		export interface Begin {
			Name: "Begin";
			Value: 1;
			EnumType: EnumType<AnalyticsProgressionStatus>;
		}

		export const Begin: Begin;

		export interface Complete {
			Name: "Complete";
			Value: 2;
			EnumType: EnumType<AnalyticsProgressionStatus>;
		}

		export const Complete: Complete;

		export interface Abandon {
			Name: "Abandon";
			Value: 3;
			EnumType: EnumType<AnalyticsProgressionStatus>;
		}

		export const Abandon: Abandon;

		export interface Fail {
			Name: "Fail";
			Value: 4;
			EnumType: EnumType<AnalyticsProgressionStatus>;
		}

		export const Fail: Fail;

		export function GetEnumItems(this: defined): Array<AnalyticsProgressionStatus>
	}
	export type AnalyticsProgressionStatus = AnalyticsProgressionStatus.Default | AnalyticsProgressionStatus.Begin | AnalyticsProgressionStatus.Complete | AnalyticsProgressionStatus.Abandon | AnalyticsProgressionStatus.Fail;
	export namespace AnimationPriority {
		export interface Idle {
			Name: "Idle";
			Value: 0;
			EnumType: EnumType<AnimationPriority>;
		}

		export const Idle: Idle;

		export interface Movement {
			Name: "Movement";
			Value: 1;
			EnumType: EnumType<AnimationPriority>;
		}

		export const Movement: Movement;

		export interface Action {
			Name: "Action";
			Value: 2;
			EnumType: EnumType<AnimationPriority>;
		}

		export const Action: Action;

		export interface Core {
			Name: "Core";
			Value: 1000;
			EnumType: EnumType<AnimationPriority>;
		}

		export const Core: Core;

		export function GetEnumItems(this: defined): Array<AnimationPriority>
	}
	export type AnimationPriority = AnimationPriority.Idle | AnimationPriority.Movement | AnimationPriority.Action | AnimationPriority.Core;
	export namespace AnimatorRetargetingMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<AnimatorRetargetingMode>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<AnimatorRetargetingMode>;
		}

		export const Disabled: Disabled;

		export interface Enabled {
			Name: "Enabled";
			Value: 2;
			EnumType: EnumType<AnimatorRetargetingMode>;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: defined): Array<AnimatorRetargetingMode>
	}
	export type AnimatorRetargetingMode = AnimatorRetargetingMode.Default | AnimatorRetargetingMode.Disabled | AnimatorRetargetingMode.Enabled;
	export namespace AppShellActionType {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<AppShellActionType>;
		}

		export const None: None;

		export interface OpenApp {
			Name: "OpenApp";
			Value: 1;
			EnumType: EnumType<AppShellActionType>;
		}

		export const OpenApp: OpenApp;

		export interface TapChatTab {
			Name: "TapChatTab";
			Value: 2;
			EnumType: EnumType<AppShellActionType>;
		}

		export const TapChatTab: TapChatTab;

		export interface TapConversationEntry {
			Name: "TapConversationEntry";
			Value: 3;
			EnumType: EnumType<AppShellActionType>;
		}

		export const TapConversationEntry: TapConversationEntry;

		export interface TapAvatarTab {
			Name: "TapAvatarTab";
			Value: 4;
			EnumType: EnumType<AppShellActionType>;
		}

		export const TapAvatarTab: TapAvatarTab;

		export interface ReadConversation {
			Name: "ReadConversation";
			Value: 5;
			EnumType: EnumType<AppShellActionType>;
		}

		export const ReadConversation: ReadConversation;

		export interface TapGamePageTab {
			Name: "TapGamePageTab";
			Value: 6;
			EnumType: EnumType<AppShellActionType>;
		}

		export const TapGamePageTab: TapGamePageTab;

		export interface TapHomePageTab {
			Name: "TapHomePageTab";
			Value: 7;
			EnumType: EnumType<AppShellActionType>;
		}

		export const TapHomePageTab: TapHomePageTab;

		export interface GamePageLoaded {
			Name: "GamePageLoaded";
			Value: 8;
			EnumType: EnumType<AppShellActionType>;
		}

		export const GamePageLoaded: GamePageLoaded;

		export interface HomePageLoaded {
			Name: "HomePageLoaded";
			Value: 9;
			EnumType: EnumType<AppShellActionType>;
		}

		export const HomePageLoaded: HomePageLoaded;

		export interface AvatarEditorPageLoaded {
			Name: "AvatarEditorPageLoaded";
			Value: 10;
			EnumType: EnumType<AppShellActionType>;
		}

		export const AvatarEditorPageLoaded: AvatarEditorPageLoaded;

		export function GetEnumItems(this: defined): Array<AppShellActionType>
	}
	export type AppShellActionType = AppShellActionType.None | AppShellActionType.OpenApp | AppShellActionType.TapChatTab | AppShellActionType.TapConversationEntry | AppShellActionType.TapAvatarTab | AppShellActionType.ReadConversation | AppShellActionType.TapGamePageTab | AppShellActionType.TapHomePageTab | AppShellActionType.GamePageLoaded | AppShellActionType.HomePageLoaded | AppShellActionType.AvatarEditorPageLoaded;
	export namespace AppShellFeature {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<AppShellFeature>;
		}

		export const None: None;

		export interface Chat {
			Name: "Chat";
			Value: 1;
			EnumType: EnumType<AppShellFeature>;
		}

		export const Chat: Chat;

		export interface AvatarEditor {
			Name: "AvatarEditor";
			Value: 2;
			EnumType: EnumType<AppShellFeature>;
		}

		export const AvatarEditor: AvatarEditor;

		export interface GamePage {
			Name: "GamePage";
			Value: 3;
			EnumType: EnumType<AppShellFeature>;
		}

		export const GamePage: GamePage;

		export interface HomePage {
			Name: "HomePage";
			Value: 4;
			EnumType: EnumType<AppShellFeature>;
		}

		export const HomePage: HomePage;

		export interface More {
			Name: "More";
			Value: 5;
			EnumType: EnumType<AppShellFeature>;
		}

		export const More: More;

		export interface Landing {
			Name: "Landing";
			Value: 6;
			EnumType: EnumType<AppShellFeature>;
		}

		export const Landing: Landing;

		export function GetEnumItems(this: defined): Array<AppShellFeature>
	}
	export type AppShellFeature = AppShellFeature.None | AppShellFeature.Chat | AppShellFeature.AvatarEditor | AppShellFeature.GamePage | AppShellFeature.HomePage | AppShellFeature.More | AppShellFeature.Landing;
	export namespace AppUpdateStatus {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<AppUpdateStatus>;
		}

		export const Unknown: Unknown;

		export interface NotSupported {
			Name: "NotSupported";
			Value: 1;
			EnumType: EnumType<AppUpdateStatus>;
		}

		export const NotSupported: NotSupported;

		export interface Failed {
			Name: "Failed";
			Value: 2;
			EnumType: EnumType<AppUpdateStatus>;
		}

		export const Failed: Failed;

		export interface NotAvailable {
			Name: "NotAvailable";
			Value: 3;
			EnumType: EnumType<AppUpdateStatus>;
		}

		export const NotAvailable: NotAvailable;

		export interface Available {
			Name: "Available";
			Value: 4;
			EnumType: EnumType<AppUpdateStatus>;
		}

		export const Available: Available;

		export function GetEnumItems(this: defined): Array<AppUpdateStatus>
	}
	export type AppUpdateStatus = AppUpdateStatus.Unknown | AppUpdateStatus.NotSupported | AppUpdateStatus.Failed | AppUpdateStatus.NotAvailable | AppUpdateStatus.Available;
	export namespace ApplyStrokeMode {
		export interface Contextual {
			Name: "Contextual";
			Value: 0;
			EnumType: EnumType<ApplyStrokeMode>;
		}

		export const Contextual: Contextual;

		export interface Border {
			Name: "Border";
			Value: 1;
			EnumType: EnumType<ApplyStrokeMode>;
		}

		export const Border: Border;

		export function GetEnumItems(this: defined): Array<ApplyStrokeMode>
	}
	export type ApplyStrokeMode = ApplyStrokeMode.Contextual | ApplyStrokeMode.Border;
	export namespace AspectType {
		export interface FitWithinMaxSize {
			Name: "FitWithinMaxSize";
			Value: 0;
			EnumType: EnumType<AspectType>;
		}

		export const FitWithinMaxSize: FitWithinMaxSize;

		export interface ScaleWithParentSize {
			Name: "ScaleWithParentSize";
			Value: 1;
			EnumType: EnumType<AspectType>;
		}

		export const ScaleWithParentSize: ScaleWithParentSize;

		export function GetEnumItems(this: defined): Array<AspectType>
	}
	export type AspectType = AspectType.FitWithinMaxSize | AspectType.ScaleWithParentSize;
	export namespace AssetFetchStatus {
		export interface Success {
			Name: "Success";
			Value: 0;
			EnumType: EnumType<AssetFetchStatus>;
		}

		export const Success: Success;

		export interface Failure {
			Name: "Failure";
			Value: 1;
			EnumType: EnumType<AssetFetchStatus>;
		}

		export const Failure: Failure;

		export function GetEnumItems(this: defined): Array<AssetFetchStatus>
	}
	export type AssetFetchStatus = AssetFetchStatus.Success | AssetFetchStatus.Failure;
	export namespace AssetType {
		export interface Image {
			Name: "Image";
			Value: 1;
			EnumType: EnumType<AssetType>;
		}

		export const Image: Image;

		export interface TShirt {
			Name: "TShirt";
			Value: 2;
			EnumType: EnumType<AssetType>;
		}

		export const TShirt: TShirt;

		export interface Audio {
			Name: "Audio";
			Value: 3;
			EnumType: EnumType<AssetType>;
		}

		export const Audio: Audio;

		export interface Mesh {
			Name: "Mesh";
			Value: 4;
			EnumType: EnumType<AssetType>;
		}

		export const Mesh: Mesh;

		export interface Lua {
			Name: "Lua";
			Value: 5;
			EnumType: EnumType<AssetType>;
		}

		export const Lua: Lua;

		export interface Hat {
			Name: "Hat";
			Value: 8;
			EnumType: EnumType<AssetType>;
		}

		export const Hat: Hat;

		export interface Place {
			Name: "Place";
			Value: 9;
			EnumType: EnumType<AssetType>;
		}

		export const Place: Place;

		export interface Model {
			Name: "Model";
			Value: 10;
			EnumType: EnumType<AssetType>;
		}

		export const Model: Model;

		export interface Shirt {
			Name: "Shirt";
			Value: 11;
			EnumType: EnumType<AssetType>;
		}

		export const Shirt: Shirt;

		export interface Pants {
			Name: "Pants";
			Value: 12;
			EnumType: EnumType<AssetType>;
		}

		export const Pants: Pants;

		export interface Decal {
			Name: "Decal";
			Value: 13;
			EnumType: EnumType<AssetType>;
		}

		export const Decal: Decal;

		export interface Head {
			Name: "Head";
			Value: 17;
			EnumType: EnumType<AssetType>;
		}

		export const Head: Head;

		export interface Face {
			Name: "Face";
			Value: 18;
			EnumType: EnumType<AssetType>;
		}

		export const Face: Face;

		export interface Gear {
			Name: "Gear";
			Value: 19;
			EnumType: EnumType<AssetType>;
		}

		export const Gear: Gear;

		export interface Badge {
			Name: "Badge";
			Value: 21;
			EnumType: EnumType<AssetType>;
		}

		export const Badge: Badge;

		export interface Animation {
			Name: "Animation";
			Value: 24;
			EnumType: EnumType<AssetType>;
		}

		export const Animation: Animation;

		export interface Torso {
			Name: "Torso";
			Value: 27;
			EnumType: EnumType<AssetType>;
		}

		export const Torso: Torso;

		export interface RightArm {
			Name: "RightArm";
			Value: 28;
			EnumType: EnumType<AssetType>;
		}

		export const RightArm: RightArm;

		export interface LeftArm {
			Name: "LeftArm";
			Value: 29;
			EnumType: EnumType<AssetType>;
		}

		export const LeftArm: LeftArm;

		export interface LeftLeg {
			Name: "LeftLeg";
			Value: 30;
			EnumType: EnumType<AssetType>;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg {
			Name: "RightLeg";
			Value: 31;
			EnumType: EnumType<AssetType>;
		}

		export const RightLeg: RightLeg;

		export interface Package {
			Name: "Package";
			Value: 32;
			EnumType: EnumType<AssetType>;
		}

		export const Package: Package;

		export interface GamePass {
			Name: "GamePass";
			Value: 34;
			EnumType: EnumType<AssetType>;
		}

		export const GamePass: GamePass;

		export interface Plugin {
			Name: "Plugin";
			Value: 38;
			EnumType: EnumType<AssetType>;
		}

		export const Plugin: Plugin;

		export interface MeshPart {
			Name: "MeshPart";
			Value: 40;
			EnumType: EnumType<AssetType>;
		}

		export const MeshPart: MeshPart;

		export interface HairAccessory {
			Name: "HairAccessory";
			Value: 41;
			EnumType: EnumType<AssetType>;
		}

		export const HairAccessory: HairAccessory;

		export interface FaceAccessory {
			Name: "FaceAccessory";
			Value: 42;
			EnumType: EnumType<AssetType>;
		}

		export const FaceAccessory: FaceAccessory;

		export interface NeckAccessory {
			Name: "NeckAccessory";
			Value: 43;
			EnumType: EnumType<AssetType>;
		}

		export const NeckAccessory: NeckAccessory;

		export interface ShoulderAccessory {
			Name: "ShoulderAccessory";
			Value: 44;
			EnumType: EnumType<AssetType>;
		}

		export const ShoulderAccessory: ShoulderAccessory;

		export interface FrontAccessory {
			Name: "FrontAccessory";
			Value: 45;
			EnumType: EnumType<AssetType>;
		}

		export const FrontAccessory: FrontAccessory;

		export interface BackAccessory {
			Name: "BackAccessory";
			Value: 46;
			EnumType: EnumType<AssetType>;
		}

		export const BackAccessory: BackAccessory;

		export interface WaistAccessory {
			Name: "WaistAccessory";
			Value: 47;
			EnumType: EnumType<AssetType>;
		}

		export const WaistAccessory: WaistAccessory;

		export interface ClimbAnimation {
			Name: "ClimbAnimation";
			Value: 48;
			EnumType: EnumType<AssetType>;
		}

		export const ClimbAnimation: ClimbAnimation;

		export interface DeathAnimation {
			Name: "DeathAnimation";
			Value: 49;
			EnumType: EnumType<AssetType>;
		}

		export const DeathAnimation: DeathAnimation;

		export interface FallAnimation {
			Name: "FallAnimation";
			Value: 50;
			EnumType: EnumType<AssetType>;
		}

		export const FallAnimation: FallAnimation;

		export interface IdleAnimation {
			Name: "IdleAnimation";
			Value: 51;
			EnumType: EnumType<AssetType>;
		}

		export const IdleAnimation: IdleAnimation;

		export interface JumpAnimation {
			Name: "JumpAnimation";
			Value: 52;
			EnumType: EnumType<AssetType>;
		}

		export const JumpAnimation: JumpAnimation;

		export interface RunAnimation {
			Name: "RunAnimation";
			Value: 53;
			EnumType: EnumType<AssetType>;
		}

		export const RunAnimation: RunAnimation;

		export interface SwimAnimation {
			Name: "SwimAnimation";
			Value: 54;
			EnumType: EnumType<AssetType>;
		}

		export const SwimAnimation: SwimAnimation;

		export interface WalkAnimation {
			Name: "WalkAnimation";
			Value: 55;
			EnumType: EnumType<AssetType>;
		}

		export const WalkAnimation: WalkAnimation;

		export interface PoseAnimation {
			Name: "PoseAnimation";
			Value: 56;
			EnumType: EnumType<AssetType>;
		}

		export const PoseAnimation: PoseAnimation;

		export interface EarAccessory {
			Name: "EarAccessory";
			Value: 57;
			EnumType: EnumType<AssetType>;
		}

		export const EarAccessory: EarAccessory;

		export interface EyeAccessory {
			Name: "EyeAccessory";
			Value: 58;
			EnumType: EnumType<AssetType>;
		}

		export const EyeAccessory: EyeAccessory;

		export interface EmoteAnimation {
			Name: "EmoteAnimation";
			Value: 61;
			EnumType: EnumType<AssetType>;
		}

		export const EmoteAnimation: EmoteAnimation;

		export interface Video {
			Name: "Video";
			Value: 62;
			EnumType: EnumType<AssetType>;
		}

		export const Video: Video;

		export interface TShirtAccessory {
			Name: "TShirtAccessory";
			Value: 64;
			EnumType: EnumType<AssetType>;
		}

		export const TShirtAccessory: TShirtAccessory;

		export interface ShirtAccessory {
			Name: "ShirtAccessory";
			Value: 65;
			EnumType: EnumType<AssetType>;
		}

		export const ShirtAccessory: ShirtAccessory;

		export interface PantsAccessory {
			Name: "PantsAccessory";
			Value: 66;
			EnumType: EnumType<AssetType>;
		}

		export const PantsAccessory: PantsAccessory;

		export interface JacketAccessory {
			Name: "JacketAccessory";
			Value: 67;
			EnumType: EnumType<AssetType>;
		}

		export const JacketAccessory: JacketAccessory;

		export interface SweaterAccessory {
			Name: "SweaterAccessory";
			Value: 68;
			EnumType: EnumType<AssetType>;
		}

		export const SweaterAccessory: SweaterAccessory;

		export interface ShortsAccessory {
			Name: "ShortsAccessory";
			Value: 69;
			EnumType: EnumType<AssetType>;
		}

		export const ShortsAccessory: ShortsAccessory;

		export interface LeftShoeAccessory {
			Name: "LeftShoeAccessory";
			Value: 70;
			EnumType: EnumType<AssetType>;
		}

		export const LeftShoeAccessory: LeftShoeAccessory;

		export interface RightShoeAccessory {
			Name: "RightShoeAccessory";
			Value: 71;
			EnumType: EnumType<AssetType>;
		}

		export const RightShoeAccessory: RightShoeAccessory;

		export interface DressSkirtAccessory {
			Name: "DressSkirtAccessory";
			Value: 72;
			EnumType: EnumType<AssetType>;
		}

		export const DressSkirtAccessory: DressSkirtAccessory;

		export function GetEnumItems(this: defined): Array<AssetType>
	}
	export type AssetType = AssetType.Image | AssetType.TShirt | AssetType.Audio | AssetType.Mesh | AssetType.Lua | AssetType.Hat | AssetType.Place | AssetType.Model | AssetType.Shirt | AssetType.Pants | AssetType.Decal | AssetType.Head | AssetType.Face | AssetType.Gear | AssetType.Badge | AssetType.Animation | AssetType.Torso | AssetType.RightArm | AssetType.LeftArm | AssetType.LeftLeg | AssetType.RightLeg | AssetType.Package | AssetType.GamePass | AssetType.Plugin | AssetType.MeshPart | AssetType.HairAccessory | AssetType.FaceAccessory | AssetType.NeckAccessory | AssetType.ShoulderAccessory | AssetType.FrontAccessory | AssetType.BackAccessory | AssetType.WaistAccessory | AssetType.ClimbAnimation | AssetType.DeathAnimation | AssetType.FallAnimation | AssetType.IdleAnimation | AssetType.JumpAnimation | AssetType.RunAnimation | AssetType.SwimAnimation | AssetType.WalkAnimation | AssetType.PoseAnimation | AssetType.EarAccessory | AssetType.EyeAccessory | AssetType.EmoteAnimation | AssetType.Video | AssetType.TShirtAccessory | AssetType.ShirtAccessory | AssetType.PantsAccessory | AssetType.JacketAccessory | AssetType.SweaterAccessory | AssetType.ShortsAccessory | AssetType.LeftShoeAccessory | AssetType.RightShoeAccessory | AssetType.DressSkirtAccessory;
	export namespace AssetTypeVerification {
		export interface Default {
			Name: "Default";
			Value: 1;
			EnumType: EnumType<AssetTypeVerification>;
		}

		export const Default: Default;

		export interface ClientOnly {
			Name: "ClientOnly";
			Value: 2;
			EnumType: EnumType<AssetTypeVerification>;
		}

		export const ClientOnly: ClientOnly;

		export interface Always {
			Name: "Always";
			Value: 3;
			EnumType: EnumType<AssetTypeVerification>;
		}

		export const Always: Always;

		export function GetEnumItems(this: defined): Array<AssetTypeVerification>
	}
	export type AssetTypeVerification = AssetTypeVerification.Default | AssetTypeVerification.ClientOnly | AssetTypeVerification.Always;
	export namespace AutoIndentRule {
		export interface Off {
			Name: "Off";
			Value: 0;
			EnumType: EnumType<AutoIndentRule>;
		}

		export const Off: Off;

		export interface Absolute {
			Name: "Absolute";
			Value: 1;
			EnumType: EnumType<AutoIndentRule>;
		}

		export const Absolute: Absolute;

		export interface Relative {
			Name: "Relative";
			Value: 2;
			EnumType: EnumType<AutoIndentRule>;
		}

		export const Relative: Relative;

		export function GetEnumItems(this: defined): Array<AutoIndentRule>
	}
	export type AutoIndentRule = AutoIndentRule.Off | AutoIndentRule.Absolute | AutoIndentRule.Relative;
	export namespace AutomaticSize {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<AutomaticSize>;
		}

		export const None: None;

		export interface X {
			Name: "X";
			Value: 1;
			EnumType: EnumType<AutomaticSize>;
		}

		export const X: X;

		export interface Y {
			Name: "Y";
			Value: 2;
			EnumType: EnumType<AutomaticSize>;
		}

		export const Y: Y;

		export interface XY {
			Name: "XY";
			Value: 3;
			EnumType: EnumType<AutomaticSize>;
		}

		export const XY: XY;

		export function GetEnumItems(this: defined): Array<AutomaticSize>
	}
	export type AutomaticSize = AutomaticSize.None | AutomaticSize.X | AutomaticSize.Y | AutomaticSize.XY;
	export namespace AvatarAssetType {
		export interface TShirt {
			Name: "TShirt";
			Value: 2;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const TShirt: TShirt;

		export interface Hat {
			Name: "Hat";
			Value: 8;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const Hat: Hat;

		export interface HairAccessory {
			Name: "HairAccessory";
			Value: 41;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const HairAccessory: HairAccessory;

		export interface FaceAccessory {
			Name: "FaceAccessory";
			Value: 42;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const FaceAccessory: FaceAccessory;

		export interface NeckAccessory {
			Name: "NeckAccessory";
			Value: 43;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const NeckAccessory: NeckAccessory;

		export interface ShoulderAccessory {
			Name: "ShoulderAccessory";
			Value: 44;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const ShoulderAccessory: ShoulderAccessory;

		export interface FrontAccessory {
			Name: "FrontAccessory";
			Value: 45;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const FrontAccessory: FrontAccessory;

		export interface BackAccessory {
			Name: "BackAccessory";
			Value: 46;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const BackAccessory: BackAccessory;

		export interface WaistAccessory {
			Name: "WaistAccessory";
			Value: 47;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const WaistAccessory: WaistAccessory;

		export interface Shirt {
			Name: "Shirt";
			Value: 11;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const Shirt: Shirt;

		export interface Pants {
			Name: "Pants";
			Value: 12;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const Pants: Pants;

		export interface Gear {
			Name: "Gear";
			Value: 19;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const Gear: Gear;

		export interface Head {
			Name: "Head";
			Value: 17;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const Head: Head;

		export interface Face {
			Name: "Face";
			Value: 18;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const Face: Face;

		export interface Torso {
			Name: "Torso";
			Value: 27;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const Torso: Torso;

		export interface RightArm {
			Name: "RightArm";
			Value: 28;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const RightArm: RightArm;

		export interface LeftArm {
			Name: "LeftArm";
			Value: 29;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const LeftArm: LeftArm;

		export interface LeftLeg {
			Name: "LeftLeg";
			Value: 30;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg {
			Name: "RightLeg";
			Value: 31;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const RightLeg: RightLeg;

		export interface ClimbAnimation {
			Name: "ClimbAnimation";
			Value: 48;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const ClimbAnimation: ClimbAnimation;

		export interface FallAnimation {
			Name: "FallAnimation";
			Value: 50;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const FallAnimation: FallAnimation;

		export interface IdleAnimation {
			Name: "IdleAnimation";
			Value: 51;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const IdleAnimation: IdleAnimation;

		export interface JumpAnimation {
			Name: "JumpAnimation";
			Value: 52;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const JumpAnimation: JumpAnimation;

		export interface RunAnimation {
			Name: "RunAnimation";
			Value: 53;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const RunAnimation: RunAnimation;

		export interface SwimAnimation {
			Name: "SwimAnimation";
			Value: 54;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const SwimAnimation: SwimAnimation;

		export interface WalkAnimation {
			Name: "WalkAnimation";
			Value: 55;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const WalkAnimation: WalkAnimation;

		export interface EmoteAnimation {
			Name: "EmoteAnimation";
			Value: 61;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const EmoteAnimation: EmoteAnimation;

		export interface TShirtAccessory {
			Name: "TShirtAccessory";
			Value: 64;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const TShirtAccessory: TShirtAccessory;

		export interface ShirtAccessory {
			Name: "ShirtAccessory";
			Value: 65;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const ShirtAccessory: ShirtAccessory;

		export interface PantsAccessory {
			Name: "PantsAccessory";
			Value: 66;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const PantsAccessory: PantsAccessory;

		export interface JacketAccessory {
			Name: "JacketAccessory";
			Value: 67;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const JacketAccessory: JacketAccessory;

		export interface SweaterAccessory {
			Name: "SweaterAccessory";
			Value: 68;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const SweaterAccessory: SweaterAccessory;

		export interface ShortsAccessory {
			Name: "ShortsAccessory";
			Value: 69;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const ShortsAccessory: ShortsAccessory;

		export interface LeftShoeAccessory {
			Name: "LeftShoeAccessory";
			Value: 70;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const LeftShoeAccessory: LeftShoeAccessory;

		export interface RightShoeAccessory {
			Name: "RightShoeAccessory";
			Value: 71;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const RightShoeAccessory: RightShoeAccessory;

		export interface DressSkirtAccessory {
			Name: "DressSkirtAccessory";
			Value: 72;
			EnumType: EnumType<AvatarAssetType>;
		}

		export const DressSkirtAccessory: DressSkirtAccessory;

		export function GetEnumItems(this: defined): Array<AvatarAssetType>
	}
	export type AvatarAssetType = AvatarAssetType.TShirt | AvatarAssetType.Hat | AvatarAssetType.HairAccessory | AvatarAssetType.FaceAccessory | AvatarAssetType.NeckAccessory | AvatarAssetType.ShoulderAccessory | AvatarAssetType.FrontAccessory | AvatarAssetType.BackAccessory | AvatarAssetType.WaistAccessory | AvatarAssetType.Shirt | AvatarAssetType.Pants | AvatarAssetType.Gear | AvatarAssetType.Head | AvatarAssetType.Face | AvatarAssetType.Torso | AvatarAssetType.RightArm | AvatarAssetType.LeftArm | AvatarAssetType.LeftLeg | AvatarAssetType.RightLeg | AvatarAssetType.ClimbAnimation | AvatarAssetType.FallAnimation | AvatarAssetType.IdleAnimation | AvatarAssetType.JumpAnimation | AvatarAssetType.RunAnimation | AvatarAssetType.SwimAnimation | AvatarAssetType.WalkAnimation | AvatarAssetType.EmoteAnimation | AvatarAssetType.TShirtAccessory | AvatarAssetType.ShirtAccessory | AvatarAssetType.PantsAccessory | AvatarAssetType.JacketAccessory | AvatarAssetType.SweaterAccessory | AvatarAssetType.ShortsAccessory | AvatarAssetType.LeftShoeAccessory | AvatarAssetType.RightShoeAccessory | AvatarAssetType.DressSkirtAccessory;
	export namespace AvatarContextMenuOption {
		export interface Friend {
			Name: "Friend";
			Value: 0;
			EnumType: EnumType<AvatarContextMenuOption>;
		}

		export const Friend: Friend;

		export interface Chat {
			Name: "Chat";
			Value: 1;
			EnumType: EnumType<AvatarContextMenuOption>;
		}

		export const Chat: Chat;

		export interface Emote {
			Name: "Emote";
			Value: 2;
			EnumType: EnumType<AvatarContextMenuOption>;
		}

		export const Emote: Emote;

		export interface InspectMenu {
			Name: "InspectMenu";
			Value: 3;
			EnumType: EnumType<AvatarContextMenuOption>;
		}

		export const InspectMenu: InspectMenu;

		export function GetEnumItems(this: defined): Array<AvatarContextMenuOption>
	}
	export type AvatarContextMenuOption = AvatarContextMenuOption.Friend | AvatarContextMenuOption.Chat | AvatarContextMenuOption.Emote | AvatarContextMenuOption.InspectMenu;
	export namespace AvatarItemType {
		export interface Asset {
			Name: "Asset";
			Value: 1;
			EnumType: EnumType<AvatarItemType>;
		}

		export const Asset: Asset;

		export interface Bundle {
			Name: "Bundle";
			Value: 2;
			EnumType: EnumType<AvatarItemType>;
		}

		export const Bundle: Bundle;

		export function GetEnumItems(this: defined): Array<AvatarItemType>
	}
	export type AvatarItemType = AvatarItemType.Asset | AvatarItemType.Bundle;
	export namespace AvatarPromptResult {
		export interface Success {
			Name: "Success";
			Value: 1;
			EnumType: EnumType<AvatarPromptResult>;
		}

		export const Success: Success;

		export interface PermissionDenied {
			Name: "PermissionDenied";
			Value: 2;
			EnumType: EnumType<AvatarPromptResult>;
		}

		export const PermissionDenied: PermissionDenied;

		export interface Failed {
			Name: "Failed";
			Value: 3;
			EnumType: EnumType<AvatarPromptResult>;
		}

		export const Failed: Failed;

		export function GetEnumItems(this: defined): Array<AvatarPromptResult>
	}
	export type AvatarPromptResult = AvatarPromptResult.Success | AvatarPromptResult.PermissionDenied | AvatarPromptResult.Failed;
	export namespace Axis {
		export interface X {
			Name: "X";
			Value: 0;
			EnumType: EnumType<Axis>;
		}

		export const X: X;

		export interface Y {
			Name: "Y";
			Value: 1;
			EnumType: EnumType<Axis>;
		}

		export const Y: Y;

		export interface Z {
			Name: "Z";
			Value: 2;
			EnumType: EnumType<Axis>;
		}

		export const Z: Z;

		export function GetEnumItems(this: defined): Array<Axis>
	}
	export type Axis = Axis.X | Axis.Y | Axis.Z;
	export namespace BinType {
		export interface Script {
			Name: "Script";
			Value: 0;
			EnumType: EnumType<BinType>;
		}

		export const Script: Script;

		export interface GameTool {
			Name: "GameTool";
			Value: 1;
			EnumType: EnumType<BinType>;
		}

		export const GameTool: GameTool;

		export interface Grab {
			Name: "Grab";
			Value: 2;
			EnumType: EnumType<BinType>;
		}

		export const Grab: Grab;

		export interface Clone {
			Name: "Clone";
			Value: 3;
			EnumType: EnumType<BinType>;
		}

		export const Clone: Clone;

		export interface Hammer {
			Name: "Hammer";
			Value: 4;
			EnumType: EnumType<BinType>;
		}

		export const Hammer: Hammer;

		export function GetEnumItems(this: defined): Array<BinType>
	}
	export type BinType = BinType.Script | BinType.GameTool | BinType.Grab | BinType.Clone | BinType.Hammer;
	export namespace BodyPart {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<BodyPart>;
		}

		export const Head: Head;

		export interface Torso {
			Name: "Torso";
			Value: 1;
			EnumType: EnumType<BodyPart>;
		}

		export const Torso: Torso;

		export interface LeftArm {
			Name: "LeftArm";
			Value: 2;
			EnumType: EnumType<BodyPart>;
		}

		export const LeftArm: LeftArm;

		export interface RightArm {
			Name: "RightArm";
			Value: 3;
			EnumType: EnumType<BodyPart>;
		}

		export const RightArm: RightArm;

		export interface LeftLeg {
			Name: "LeftLeg";
			Value: 4;
			EnumType: EnumType<BodyPart>;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg {
			Name: "RightLeg";
			Value: 5;
			EnumType: EnumType<BodyPart>;
		}

		export const RightLeg: RightLeg;

		export function GetEnumItems(this: defined): Array<BodyPart>
	}
	export type BodyPart = BodyPart.Head | BodyPart.Torso | BodyPart.LeftArm | BodyPart.RightArm | BodyPart.LeftLeg | BodyPart.RightLeg;
	export namespace BodyPartR15 {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<BodyPartR15>;
		}

		export const Head: Head;

		export interface UpperTorso {
			Name: "UpperTorso";
			Value: 1;
			EnumType: EnumType<BodyPartR15>;
		}

		export const UpperTorso: UpperTorso;

		export interface LowerTorso {
			Name: "LowerTorso";
			Value: 2;
			EnumType: EnumType<BodyPartR15>;
		}

		export const LowerTorso: LowerTorso;

		export interface LeftFoot {
			Name: "LeftFoot";
			Value: 3;
			EnumType: EnumType<BodyPartR15>;
		}

		export const LeftFoot: LeftFoot;

		export interface LeftLowerLeg {
			Name: "LeftLowerLeg";
			Value: 4;
			EnumType: EnumType<BodyPartR15>;
		}

		export const LeftLowerLeg: LeftLowerLeg;

		export interface LeftUpperLeg {
			Name: "LeftUpperLeg";
			Value: 5;
			EnumType: EnumType<BodyPartR15>;
		}

		export const LeftUpperLeg: LeftUpperLeg;

		export interface RightFoot {
			Name: "RightFoot";
			Value: 6;
			EnumType: EnumType<BodyPartR15>;
		}

		export const RightFoot: RightFoot;

		export interface RightLowerLeg {
			Name: "RightLowerLeg";
			Value: 7;
			EnumType: EnumType<BodyPartR15>;
		}

		export const RightLowerLeg: RightLowerLeg;

		export interface RightUpperLeg {
			Name: "RightUpperLeg";
			Value: 8;
			EnumType: EnumType<BodyPartR15>;
		}

		export const RightUpperLeg: RightUpperLeg;

		export interface LeftHand {
			Name: "LeftHand";
			Value: 9;
			EnumType: EnumType<BodyPartR15>;
		}

		export const LeftHand: LeftHand;

		export interface LeftLowerArm {
			Name: "LeftLowerArm";
			Value: 10;
			EnumType: EnumType<BodyPartR15>;
		}

		export const LeftLowerArm: LeftLowerArm;

		export interface LeftUpperArm {
			Name: "LeftUpperArm";
			Value: 11;
			EnumType: EnumType<BodyPartR15>;
		}

		export const LeftUpperArm: LeftUpperArm;

		export interface RightHand {
			Name: "RightHand";
			Value: 12;
			EnumType: EnumType<BodyPartR15>;
		}

		export const RightHand: RightHand;

		export interface RightLowerArm {
			Name: "RightLowerArm";
			Value: 13;
			EnumType: EnumType<BodyPartR15>;
		}

		export const RightLowerArm: RightLowerArm;

		export interface RightUpperArm {
			Name: "RightUpperArm";
			Value: 14;
			EnumType: EnumType<BodyPartR15>;
		}

		export const RightUpperArm: RightUpperArm;

		export interface RootPart {
			Name: "RootPart";
			Value: 15;
			EnumType: EnumType<BodyPartR15>;
		}

		export const RootPart: RootPart;

		export interface Unknown {
			Name: "Unknown";
			Value: 17;
			EnumType: EnumType<BodyPartR15>;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: defined): Array<BodyPartR15>
	}
	export type BodyPartR15 = BodyPartR15.Head | BodyPartR15.UpperTorso | BodyPartR15.LowerTorso | BodyPartR15.LeftFoot | BodyPartR15.LeftLowerLeg | BodyPartR15.LeftUpperLeg | BodyPartR15.RightFoot | BodyPartR15.RightLowerLeg | BodyPartR15.RightUpperLeg | BodyPartR15.LeftHand | BodyPartR15.LeftLowerArm | BodyPartR15.LeftUpperArm | BodyPartR15.RightHand | BodyPartR15.RightLowerArm | BodyPartR15.RightUpperArm | BodyPartR15.RootPart | BodyPartR15.Unknown;
	export namespace BorderMode {
		export interface Outline {
			Name: "Outline";
			Value: 0;
			EnumType: EnumType<BorderMode>;
		}

		export const Outline: Outline;

		export interface Middle {
			Name: "Middle";
			Value: 1;
			EnumType: EnumType<BorderMode>;
		}

		export const Middle: Middle;

		export interface Inset {
			Name: "Inset";
			Value: 2;
			EnumType: EnumType<BorderMode>;
		}

		export const Inset: Inset;

		export function GetEnumItems(this: defined): Array<BorderMode>
	}
	export type BorderMode = BorderMode.Outline | BorderMode.Middle | BorderMode.Inset;
	export namespace BreakReason {
		export interface Other {
			Name: "Other";
			Value: 0;
			EnumType: EnumType<BreakReason>;
		}

		export const Other: Other;

		export interface Error {
			Name: "Error";
			Value: 1;
			EnumType: EnumType<BreakReason>;
		}

		export const Error: Error;

		export interface UserBreakpoint {
			Name: "UserBreakpoint";
			Value: 3;
			EnumType: EnumType<BreakReason>;
		}

		export const UserBreakpoint: UserBreakpoint;

		export interface SpecialBreakpoint {
			Name: "SpecialBreakpoint";
			Value: 2;
			EnumType: EnumType<BreakReason>;
		}

		export const SpecialBreakpoint: SpecialBreakpoint;

		export function GetEnumItems(this: defined): Array<BreakReason>
	}
	export type BreakReason = BreakReason.Other | BreakReason.Error | BreakReason.UserBreakpoint | BreakReason.SpecialBreakpoint;
	export namespace BreakpointRemoveReason {
		export interface Requested {
			Name: "Requested";
			Value: 0;
			EnumType: EnumType<BreakpointRemoveReason>;
		}

		export const Requested: Requested;

		export interface ScriptChanged {
			Name: "ScriptChanged";
			Value: 1;
			EnumType: EnumType<BreakpointRemoveReason>;
		}

		export const ScriptChanged: ScriptChanged;

		export interface ScriptRemoved {
			Name: "ScriptRemoved";
			Value: 2;
			EnumType: EnumType<BreakpointRemoveReason>;
		}

		export const ScriptRemoved: ScriptRemoved;

		export function GetEnumItems(this: defined): Array<BreakpointRemoveReason>
	}
	export type BreakpointRemoveReason = BreakpointRemoveReason.Requested | BreakpointRemoveReason.ScriptChanged | BreakpointRemoveReason.ScriptRemoved;
	export namespace BulkMoveMode {
		export interface FireAllEvents {
			Name: "FireAllEvents";
			Value: 0;
			EnumType: EnumType<BulkMoveMode>;
		}

		export const FireAllEvents: FireAllEvents;

		export interface FireCFrameChanged {
			Name: "FireCFrameChanged";
			Value: 1;
			EnumType: EnumType<BulkMoveMode>;
		}

		export const FireCFrameChanged: FireCFrameChanged;

		export function GetEnumItems(this: defined): Array<BulkMoveMode>
	}
	export type BulkMoveMode = BulkMoveMode.FireAllEvents | BulkMoveMode.FireCFrameChanged;
	export namespace BundleType {
		export interface BodyParts {
			Name: "BodyParts";
			Value: 1;
			EnumType: EnumType<BundleType>;
		}

		export const BodyParts: BodyParts;

		export interface Animations {
			Name: "Animations";
			Value: 2;
			EnumType: EnumType<BundleType>;
		}

		export const Animations: Animations;

		export function GetEnumItems(this: defined): Array<BundleType>
	}
	export type BundleType = BundleType.BodyParts | BundleType.Animations;
	export namespace Button {
		export interface Jump {
			Name: "Jump";
			Value: 32;
			EnumType: EnumType<Button>;
		}

		export const Jump: Jump;

		export interface Dismount {
			Name: "Dismount";
			Value: 8;
			EnumType: EnumType<Button>;
		}

		export const Dismount: Dismount;

		export function GetEnumItems(this: defined): Array<Button>
	}
	export type Button = Button.Jump | Button.Dismount;
	export namespace ButtonStyle {
		export interface Custom {
			Name: "Custom";
			Value: 0;
			EnumType: EnumType<ButtonStyle>;
		}

		export const Custom: Custom;

		export interface RobloxButtonDefault {
			Name: "RobloxButtonDefault";
			Value: 1;
			EnumType: EnumType<ButtonStyle>;
		}

		export const RobloxButtonDefault: RobloxButtonDefault;

		export interface RobloxButton {
			Name: "RobloxButton";
			Value: 2;
			EnumType: EnumType<ButtonStyle>;
		}

		export const RobloxButton: RobloxButton;

		export interface RobloxRoundButton {
			Name: "RobloxRoundButton";
			Value: 3;
			EnumType: EnumType<ButtonStyle>;
		}

		export const RobloxRoundButton: RobloxRoundButton;

		export interface RobloxRoundDefaultButton {
			Name: "RobloxRoundDefaultButton";
			Value: 4;
			EnumType: EnumType<ButtonStyle>;
		}

		export const RobloxRoundDefaultButton: RobloxRoundDefaultButton;

		export interface RobloxRoundDropdownButton {
			Name: "RobloxRoundDropdownButton";
			Value: 5;
			EnumType: EnumType<ButtonStyle>;
		}

		export const RobloxRoundDropdownButton: RobloxRoundDropdownButton;

		export function GetEnumItems(this: defined): Array<ButtonStyle>
	}
	export type ButtonStyle = ButtonStyle.Custom | ButtonStyle.RobloxButtonDefault | ButtonStyle.RobloxButton | ButtonStyle.RobloxRoundButton | ButtonStyle.RobloxRoundDefaultButton | ButtonStyle.RobloxRoundDropdownButton;
	export namespace CageType {
		export interface Inner {
			Name: "Inner";
			Value: 0;
			EnumType: EnumType<CageType>;
		}

		export const Inner: Inner;

		export interface Outer {
			Name: "Outer";
			Value: 1;
			EnumType: EnumType<CageType>;
		}

		export const Outer: Outer;

		export function GetEnumItems(this: defined): Array<CageType>
	}
	export type CageType = CageType.Inner | CageType.Outer;
	export namespace CameraMode {
		export interface Classic {
			Name: "Classic";
			Value: 0;
			EnumType: EnumType<CameraMode>;
		}

		export const Classic: Classic;

		export interface LockFirstPerson {
			Name: "LockFirstPerson";
			Value: 1;
			EnumType: EnumType<CameraMode>;
		}

		export const LockFirstPerson: LockFirstPerson;

		export function GetEnumItems(this: defined): Array<CameraMode>
	}
	export type CameraMode = CameraMode.Classic | CameraMode.LockFirstPerson;
	export namespace CameraPanMode {
		export interface Classic {
			Name: "Classic";
			Value: 0;
			EnumType: EnumType<CameraPanMode>;
		}

		export const Classic: Classic;

		export interface EdgeBump {
			Name: "EdgeBump";
			Value: 1;
			EnumType: EnumType<CameraPanMode>;
		}

		export const EdgeBump: EdgeBump;

		export function GetEnumItems(this: defined): Array<CameraPanMode>
	}
	export type CameraPanMode = CameraPanMode.Classic | CameraPanMode.EdgeBump;
	export namespace CameraType {
		export interface Fixed {
			Name: "Fixed";
			Value: 0;
			EnumType: EnumType<CameraType>;
		}

		export const Fixed: Fixed;

		export interface Watch {
			Name: "Watch";
			Value: 2;
			EnumType: EnumType<CameraType>;
		}

		export const Watch: Watch;

		export interface Attach {
			Name: "Attach";
			Value: 1;
			EnumType: EnumType<CameraType>;
		}

		export const Attach: Attach;

		export interface Track {
			Name: "Track";
			Value: 3;
			EnumType: EnumType<CameraType>;
		}

		export const Track: Track;

		export interface Follow {
			Name: "Follow";
			Value: 4;
			EnumType: EnumType<CameraType>;
		}

		export const Follow: Follow;

		export interface Custom {
			Name: "Custom";
			Value: 5;
			EnumType: EnumType<CameraType>;
		}

		export const Custom: Custom;

		export interface Scriptable {
			Name: "Scriptable";
			Value: 6;
			EnumType: EnumType<CameraType>;
		}

		export const Scriptable: Scriptable;

		export interface Orbital {
			Name: "Orbital";
			Value: 7;
			EnumType: EnumType<CameraType>;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: defined): Array<CameraType>
	}
	export type CameraType = CameraType.Fixed | CameraType.Watch | CameraType.Attach | CameraType.Track | CameraType.Follow | CameraType.Custom | CameraType.Scriptable | CameraType.Orbital;
	export namespace CatalogCategoryFilter {
		export interface None {
			Name: "None";
			Value: 1;
			EnumType: EnumType<CatalogCategoryFilter>;
		}

		export const None: None;

		export interface Featured {
			Name: "Featured";
			Value: 2;
			EnumType: EnumType<CatalogCategoryFilter>;
		}

		export const Featured: Featured;

		export interface Collectibles {
			Name: "Collectibles";
			Value: 3;
			EnumType: EnumType<CatalogCategoryFilter>;
		}

		export const Collectibles: Collectibles;

		export interface CommunityCreations {
			Name: "CommunityCreations";
			Value: 4;
			EnumType: EnumType<CatalogCategoryFilter>;
		}

		export const CommunityCreations: CommunityCreations;

		export interface Premium {
			Name: "Premium";
			Value: 5;
			EnumType: EnumType<CatalogCategoryFilter>;
		}

		export const Premium: Premium;

		export interface Recommended {
			Name: "Recommended";
			Value: 6;
			EnumType: EnumType<CatalogCategoryFilter>;
		}

		export const Recommended: Recommended;

		export function GetEnumItems(this: defined): Array<CatalogCategoryFilter>
	}
	export type CatalogCategoryFilter = CatalogCategoryFilter.None | CatalogCategoryFilter.Featured | CatalogCategoryFilter.Collectibles | CatalogCategoryFilter.CommunityCreations | CatalogCategoryFilter.Premium | CatalogCategoryFilter.Recommended;
	export namespace CatalogSortType {
		export interface Relevance {
			Name: "Relevance";
			Value: 1;
			EnumType: EnumType<CatalogSortType>;
		}

		export const Relevance: Relevance;

		export interface PriceHighToLow {
			Name: "PriceHighToLow";
			Value: 2;
			EnumType: EnumType<CatalogSortType>;
		}

		export const PriceHighToLow: PriceHighToLow;

		export interface PriceLowToHigh {
			Name: "PriceLowToHigh";
			Value: 3;
			EnumType: EnumType<CatalogSortType>;
		}

		export const PriceLowToHigh: PriceLowToHigh;

		export interface RecentlyUpdated {
			Name: "RecentlyUpdated";
			Value: 4;
			EnumType: EnumType<CatalogSortType>;
		}

		export const RecentlyUpdated: RecentlyUpdated;

		export interface MostFavorited {
			Name: "MostFavorited";
			Value: 5;
			EnumType: EnumType<CatalogSortType>;
		}

		export const MostFavorited: MostFavorited;

		export function GetEnumItems(this: defined): Array<CatalogSortType>
	}
	export type CatalogSortType = CatalogSortType.Relevance | CatalogSortType.PriceHighToLow | CatalogSortType.PriceLowToHigh | CatalogSortType.RecentlyUpdated | CatalogSortType.MostFavorited;
	export namespace CellBlock {
		export interface Solid {
			Name: "Solid";
			Value: 0;
			EnumType: EnumType<CellBlock>;
		}

		export const Solid: Solid;

		export interface VerticalWedge {
			Name: "VerticalWedge";
			Value: 1;
			EnumType: EnumType<CellBlock>;
		}

		export const VerticalWedge: VerticalWedge;

		export interface CornerWedge {
			Name: "CornerWedge";
			Value: 2;
			EnumType: EnumType<CellBlock>;
		}

		export const CornerWedge: CornerWedge;

		export interface InverseCornerWedge {
			Name: "InverseCornerWedge";
			Value: 3;
			EnumType: EnumType<CellBlock>;
		}

		export const InverseCornerWedge: InverseCornerWedge;

		export interface HorizontalWedge {
			Name: "HorizontalWedge";
			Value: 4;
			EnumType: EnumType<CellBlock>;
		}

		export const HorizontalWedge: HorizontalWedge;

		export function GetEnumItems(this: defined): Array<CellBlock>
	}
	export type CellBlock = CellBlock.Solid | CellBlock.VerticalWedge | CellBlock.CornerWedge | CellBlock.InverseCornerWedge | CellBlock.HorizontalWedge;
	export namespace CellMaterial {
		export interface Empty {
			Name: "Empty";
			Value: 0;
			EnumType: EnumType<CellMaterial>;
		}

		export const Empty: Empty;

		export interface Grass {
			Name: "Grass";
			Value: 1;
			EnumType: EnumType<CellMaterial>;
		}

		export const Grass: Grass;

		export interface Sand {
			Name: "Sand";
			Value: 2;
			EnumType: EnumType<CellMaterial>;
		}

		export const Sand: Sand;

		export interface Brick {
			Name: "Brick";
			Value: 3;
			EnumType: EnumType<CellMaterial>;
		}

		export const Brick: Brick;

		export interface Granite {
			Name: "Granite";
			Value: 4;
			EnumType: EnumType<CellMaterial>;
		}

		export const Granite: Granite;

		export interface Asphalt {
			Name: "Asphalt";
			Value: 5;
			EnumType: EnumType<CellMaterial>;
		}

		export const Asphalt: Asphalt;

		export interface Iron {
			Name: "Iron";
			Value: 6;
			EnumType: EnumType<CellMaterial>;
		}

		export const Iron: Iron;

		export interface Aluminum {
			Name: "Aluminum";
			Value: 7;
			EnumType: EnumType<CellMaterial>;
		}

		export const Aluminum: Aluminum;

		export interface Gold {
			Name: "Gold";
			Value: 8;
			EnumType: EnumType<CellMaterial>;
		}

		export const Gold: Gold;

		export interface WoodPlank {
			Name: "WoodPlank";
			Value: 9;
			EnumType: EnumType<CellMaterial>;
		}

		export const WoodPlank: WoodPlank;

		export interface WoodLog {
			Name: "WoodLog";
			Value: 10;
			EnumType: EnumType<CellMaterial>;
		}

		export const WoodLog: WoodLog;

		export interface Gravel {
			Name: "Gravel";
			Value: 11;
			EnumType: EnumType<CellMaterial>;
		}

		export const Gravel: Gravel;

		export interface CinderBlock {
			Name: "CinderBlock";
			Value: 12;
			EnumType: EnumType<CellMaterial>;
		}

		export const CinderBlock: CinderBlock;

		export interface MossyStone {
			Name: "MossyStone";
			Value: 13;
			EnumType: EnumType<CellMaterial>;
		}

		export const MossyStone: MossyStone;

		export interface Cement {
			Name: "Cement";
			Value: 14;
			EnumType: EnumType<CellMaterial>;
		}

		export const Cement: Cement;

		export interface RedPlastic {
			Name: "RedPlastic";
			Value: 15;
			EnumType: EnumType<CellMaterial>;
		}

		export const RedPlastic: RedPlastic;

		export interface BluePlastic {
			Name: "BluePlastic";
			Value: 16;
			EnumType: EnumType<CellMaterial>;
		}

		export const BluePlastic: BluePlastic;

		export interface Water {
			Name: "Water";
			Value: 17;
			EnumType: EnumType<CellMaterial>;
		}

		export const Water: Water;

		export function GetEnumItems(this: defined): Array<CellMaterial>
	}
	export type CellMaterial = CellMaterial.Empty | CellMaterial.Grass | CellMaterial.Sand | CellMaterial.Brick | CellMaterial.Granite | CellMaterial.Asphalt | CellMaterial.Iron | CellMaterial.Aluminum | CellMaterial.Gold | CellMaterial.WoodPlank | CellMaterial.WoodLog | CellMaterial.Gravel | CellMaterial.CinderBlock | CellMaterial.MossyStone | CellMaterial.Cement | CellMaterial.RedPlastic | CellMaterial.BluePlastic | CellMaterial.Water;
	export namespace CellOrientation {
		export interface NegZ {
			Name: "NegZ";
			Value: 0;
			EnumType: EnumType<CellOrientation>;
		}

		export const NegZ: NegZ;

		export interface X {
			Name: "X";
			Value: 1;
			EnumType: EnumType<CellOrientation>;
		}

		export const X: X;

		export interface Z {
			Name: "Z";
			Value: 2;
			EnumType: EnumType<CellOrientation>;
		}

		export const Z: Z;

		export interface NegX {
			Name: "NegX";
			Value: 3;
			EnumType: EnumType<CellOrientation>;
		}

		export const NegX: NegX;

		export function GetEnumItems(this: defined): Array<CellOrientation>
	}
	export type CellOrientation = CellOrientation.NegZ | CellOrientation.X | CellOrientation.Z | CellOrientation.NegX;
	export namespace CenterDialogType {
		export interface UnsolicitedDialog {
			Name: "UnsolicitedDialog";
			Value: 1;
			EnumType: EnumType<CenterDialogType>;
		}

		export const UnsolicitedDialog: UnsolicitedDialog;

		export interface PlayerInitiatedDialog {
			Name: "PlayerInitiatedDialog";
			Value: 2;
			EnumType: EnumType<CenterDialogType>;
		}

		export const PlayerInitiatedDialog: PlayerInitiatedDialog;

		export interface ModalDialog {
			Name: "ModalDialog";
			Value: 3;
			EnumType: EnumType<CenterDialogType>;
		}

		export const ModalDialog: ModalDialog;

		export interface QuitDialog {
			Name: "QuitDialog";
			Value: 4;
			EnumType: EnumType<CenterDialogType>;
		}

		export const QuitDialog: QuitDialog;

		export function GetEnumItems(this: defined): Array<CenterDialogType>
	}
	export type CenterDialogType = CenterDialogType.UnsolicitedDialog | CenterDialogType.PlayerInitiatedDialog | CenterDialogType.ModalDialog | CenterDialogType.QuitDialog;
	export namespace ChatCallbackType {
		export interface OnCreatingChatWindow {
			Name: "OnCreatingChatWindow";
			Value: 1;
			EnumType: EnumType<ChatCallbackType>;
		}

		export const OnCreatingChatWindow: OnCreatingChatWindow;

		export interface OnClientSendingMessage {
			Name: "OnClientSendingMessage";
			Value: 2;
			EnumType: EnumType<ChatCallbackType>;
		}

		export const OnClientSendingMessage: OnClientSendingMessage;

		export interface OnClientFormattingMessage {
			Name: "OnClientFormattingMessage";
			Value: 3;
			EnumType: EnumType<ChatCallbackType>;
		}

		export const OnClientFormattingMessage: OnClientFormattingMessage;

		export interface OnServerReceivingMessage {
			Name: "OnServerReceivingMessage";
			Value: 17;
			EnumType: EnumType<ChatCallbackType>;
		}

		export const OnServerReceivingMessage: OnServerReceivingMessage;

		export function GetEnumItems(this: defined): Array<ChatCallbackType>
	}
	export type ChatCallbackType = ChatCallbackType.OnCreatingChatWindow | ChatCallbackType.OnClientSendingMessage | ChatCallbackType.OnClientFormattingMessage | ChatCallbackType.OnServerReceivingMessage;
	export namespace ChatColor {
		export interface Blue {
			Name: "Blue";
			Value: 0;
			EnumType: EnumType<ChatColor>;
		}

		export const Blue: Blue;

		export interface Green {
			Name: "Green";
			Value: 1;
			EnumType: EnumType<ChatColor>;
		}

		export const Green: Green;

		export interface Red {
			Name: "Red";
			Value: 2;
			EnumType: EnumType<ChatColor>;
		}

		export const Red: Red;

		export interface White {
			Name: "White";
			Value: 3;
			EnumType: EnumType<ChatColor>;
		}

		export const White: White;

		export function GetEnumItems(this: defined): Array<ChatColor>
	}
	export type ChatColor = ChatColor.Blue | ChatColor.Green | ChatColor.Red | ChatColor.White;
	export namespace ChatMode {
		export interface Menu {
			Name: "Menu";
			Value: 0;
			EnumType: EnumType<ChatMode>;
		}

		export const Menu: Menu;

		export interface TextAndMenu {
			Name: "TextAndMenu";
			Value: 1;
			EnumType: EnumType<ChatMode>;
		}

		export const TextAndMenu: TextAndMenu;

		export function GetEnumItems(this: defined): Array<ChatMode>
	}
	export type ChatMode = ChatMode.Menu | ChatMode.TextAndMenu;
	export namespace ChatPrivacyMode {
		export interface AllUsers {
			Name: "AllUsers";
			Value: 0;
			EnumType: EnumType<ChatPrivacyMode>;
		}

		export const AllUsers: AllUsers;

		export interface NoOne {
			Name: "NoOne";
			Value: 1;
			EnumType: EnumType<ChatPrivacyMode>;
		}

		export const NoOne: NoOne;

		export interface Friends {
			Name: "Friends";
			Value: 2;
			EnumType: EnumType<ChatPrivacyMode>;
		}

		export const Friends: Friends;

		export function GetEnumItems(this: defined): Array<ChatPrivacyMode>
	}
	export type ChatPrivacyMode = ChatPrivacyMode.AllUsers | ChatPrivacyMode.NoOne | ChatPrivacyMode.Friends;
	export namespace ChatStyle {
		export interface Classic {
			Name: "Classic";
			Value: 0;
			EnumType: EnumType<ChatStyle>;
		}

		export const Classic: Classic;

		export interface Bubble {
			Name: "Bubble";
			Value: 1;
			EnumType: EnumType<ChatStyle>;
		}

		export const Bubble: Bubble;

		export interface ClassicAndBubble {
			Name: "ClassicAndBubble";
			Value: 2;
			EnumType: EnumType<ChatStyle>;
		}

		export const ClassicAndBubble: ClassicAndBubble;

		export function GetEnumItems(this: defined): Array<ChatStyle>
	}
	export type ChatStyle = ChatStyle.Classic | ChatStyle.Bubble | ChatStyle.ClassicAndBubble;
	export namespace ClientAnimatorThrottlingMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<ClientAnimatorThrottlingMode>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<ClientAnimatorThrottlingMode>;
		}

		export const Disabled: Disabled;

		export interface Enabled {
			Name: "Enabled";
			Value: 2;
			EnumType: EnumType<ClientAnimatorThrottlingMode>;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: defined): Array<ClientAnimatorThrottlingMode>
	}
	export type ClientAnimatorThrottlingMode = ClientAnimatorThrottlingMode.Default | ClientAnimatorThrottlingMode.Disabled | ClientAnimatorThrottlingMode.Enabled;
	export namespace CollisionFidelity {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<CollisionFidelity>;
		}

		export const Default: Default;

		export interface Hull {
			Name: "Hull";
			Value: 1;
			EnumType: EnumType<CollisionFidelity>;
		}

		export const Hull: Hull;

		export interface Box {
			Name: "Box";
			Value: 2;
			EnumType: EnumType<CollisionFidelity>;
		}

		export const Box: Box;

		export interface PreciseConvexDecomposition {
			Name: "PreciseConvexDecomposition";
			Value: 3;
			EnumType: EnumType<CollisionFidelity>;
		}

		export const PreciseConvexDecomposition: PreciseConvexDecomposition;

		export function GetEnumItems(this: defined): Array<CollisionFidelity>
	}
	export type CollisionFidelity = CollisionFidelity.Default | CollisionFidelity.Hull | CollisionFidelity.Box | CollisionFidelity.PreciseConvexDecomposition;
	export namespace CommandPermission {
		export interface Plugin {
			Name: "Plugin";
			Value: 0;
			EnumType: EnumType<CommandPermission>;
		}

		export const Plugin: Plugin;

		export interface LocalUser {
			Name: "LocalUser";
			Value: 1;
			EnumType: EnumType<CommandPermission>;
		}

		export const LocalUser: LocalUser;

		export function GetEnumItems(this: defined): Array<CommandPermission>
	}
	export type CommandPermission = CommandPermission.Plugin | CommandPermission.LocalUser;
	export namespace ComputerCameraMovementMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<ComputerCameraMovementMode>;
		}

		export const Default: Default;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<ComputerCameraMovementMode>;
		}

		export const Follow: Follow;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<ComputerCameraMovementMode>;
		}

		export const Classic: Classic;

		export interface Orbital {
			Name: "Orbital";
			Value: 3;
			EnumType: EnumType<ComputerCameraMovementMode>;
		}

		export const Orbital: Orbital;

		export interface CameraToggle {
			Name: "CameraToggle";
			Value: 4;
			EnumType: EnumType<ComputerCameraMovementMode>;
		}

		export const CameraToggle: CameraToggle;

		export function GetEnumItems(this: defined): Array<ComputerCameraMovementMode>
	}
	export type ComputerCameraMovementMode = ComputerCameraMovementMode.Default | ComputerCameraMovementMode.Follow | ComputerCameraMovementMode.Classic | ComputerCameraMovementMode.Orbital | ComputerCameraMovementMode.CameraToggle;
	export namespace ComputerMovementMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<ComputerMovementMode>;
		}

		export const Default: Default;

		export interface KeyboardMouse {
			Name: "KeyboardMouse";
			Value: 1;
			EnumType: EnumType<ComputerMovementMode>;
		}

		export const KeyboardMouse: KeyboardMouse;

		export interface ClickToMove {
			Name: "ClickToMove";
			Value: 2;
			EnumType: EnumType<ComputerMovementMode>;
		}

		export const ClickToMove: ClickToMove;

		export function GetEnumItems(this: defined): Array<ComputerMovementMode>
	}
	export type ComputerMovementMode = ComputerMovementMode.Default | ComputerMovementMode.KeyboardMouse | ComputerMovementMode.ClickToMove;
	export namespace ConnectionError {
		export interface OK {
			Name: "OK";
			Value: 0;
			EnumType: EnumType<ConnectionError>;
		}

		export const OK: OK;

		export interface DisconnectErrors {
			Name: "DisconnectErrors";
			Value: 256;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectErrors: DisconnectErrors;

		export interface DisconnectBadhash {
			Name: "DisconnectBadhash";
			Value: 257;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectBadhash: DisconnectBadhash;

		export interface DisconnectSecurityKeyMismatch {
			Name: "DisconnectSecurityKeyMismatch";
			Value: 258;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectSecurityKeyMismatch: DisconnectSecurityKeyMismatch;

		export interface DisconnectNewSecurityKeyMismatch {
			Name: "DisconnectNewSecurityKeyMismatch";
			Value: 272;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectNewSecurityKeyMismatch: DisconnectNewSecurityKeyMismatch;

		export interface DisconnectProtocolMismatch {
			Name: "DisconnectProtocolMismatch";
			Value: 259;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectProtocolMismatch: DisconnectProtocolMismatch;

		export interface DisconnectReceivePacketError {
			Name: "DisconnectReceivePacketError";
			Value: 260;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectReceivePacketError: DisconnectReceivePacketError;

		export interface DisconnectReceivePacketStreamError {
			Name: "DisconnectReceivePacketStreamError";
			Value: 261;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectReceivePacketStreamError: DisconnectReceivePacketStreamError;

		export interface DisconnectSendPacketError {
			Name: "DisconnectSendPacketError";
			Value: 262;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectSendPacketError: DisconnectSendPacketError;

		export interface DisconnectIllegalTeleport {
			Name: "DisconnectIllegalTeleport";
			Value: 263;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectIllegalTeleport: DisconnectIllegalTeleport;

		export interface DisconnectDuplicatePlayer {
			Name: "DisconnectDuplicatePlayer";
			Value: 264;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectDuplicatePlayer: DisconnectDuplicatePlayer;

		export interface DisconnectDuplicateTicket {
			Name: "DisconnectDuplicateTicket";
			Value: 265;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectDuplicateTicket: DisconnectDuplicateTicket;

		export interface DisconnectTimeout {
			Name: "DisconnectTimeout";
			Value: 266;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectTimeout: DisconnectTimeout;

		export interface DisconnectLuaKick {
			Name: "DisconnectLuaKick";
			Value: 267;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectLuaKick: DisconnectLuaKick;

		export interface DisconnectOnRemoteSysStats {
			Name: "DisconnectOnRemoteSysStats";
			Value: 268;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectOnRemoteSysStats: DisconnectOnRemoteSysStats;

		export interface DisconnectHashTimeout {
			Name: "DisconnectHashTimeout";
			Value: 269;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectHashTimeout: DisconnectHashTimeout;

		export interface DisconnectCloudEditKick {
			Name: "DisconnectCloudEditKick";
			Value: 270;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectCloudEditKick: DisconnectCloudEditKick;

		export interface DisconnectPlayerless {
			Name: "DisconnectPlayerless";
			Value: 271;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectPlayerless: DisconnectPlayerless;

		export interface DisconnectEvicted {
			Name: "DisconnectEvicted";
			Value: 273;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectEvicted: DisconnectEvicted;

		export interface DisconnectDevMaintenance {
			Name: "DisconnectDevMaintenance";
			Value: 274;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectDevMaintenance: DisconnectDevMaintenance;

		export interface DisconnectRobloxMaintenance {
			Name: "DisconnectRobloxMaintenance";
			Value: 275;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectRobloxMaintenance: DisconnectRobloxMaintenance;

		export interface DisconnectRejoin {
			Name: "DisconnectRejoin";
			Value: 276;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectRejoin: DisconnectRejoin;

		export interface DisconnectConnectionLost {
			Name: "DisconnectConnectionLost";
			Value: 277;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectConnectionLost: DisconnectConnectionLost;

		export interface DisconnectIdle {
			Name: "DisconnectIdle";
			Value: 278;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectIdle: DisconnectIdle;

		export interface DisconnectRaknetErrors {
			Name: "DisconnectRaknetErrors";
			Value: 279;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectRaknetErrors: DisconnectRaknetErrors;

		export interface DisconnectWrongVersion {
			Name: "DisconnectWrongVersion";
			Value: 280;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectWrongVersion: DisconnectWrongVersion;

		export interface DisconnectBySecurityPolicy {
			Name: "DisconnectBySecurityPolicy";
			Value: 281;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectBySecurityPolicy: DisconnectBySecurityPolicy;

		export interface DisconnectBlockedIP {
			Name: "DisconnectBlockedIP";
			Value: 282;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectBlockedIP: DisconnectBlockedIP;

		export interface DisconnectClientFailure {
			Name: "DisconnectClientFailure";
			Value: 284;
			EnumType: EnumType<ConnectionError>;
		}

		export const DisconnectClientFailure: DisconnectClientFailure;

		export interface PlacelaunchErrors {
			Name: "PlacelaunchErrors";
			Value: 512;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchErrors: PlacelaunchErrors;

		export interface PlacelaunchDisabled {
			Name: "PlacelaunchDisabled";
			Value: 515;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchDisabled: PlacelaunchDisabled;

		export interface PlacelaunchError {
			Name: "PlacelaunchError";
			Value: 516;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchError: PlacelaunchError;

		export interface PlacelaunchGameEnded {
			Name: "PlacelaunchGameEnded";
			Value: 517;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchGameEnded: PlacelaunchGameEnded;

		export interface PlacelaunchGameFull {
			Name: "PlacelaunchGameFull";
			Value: 518;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchGameFull: PlacelaunchGameFull;

		export interface PlacelaunchUserLeft {
			Name: "PlacelaunchUserLeft";
			Value: 522;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchUserLeft: PlacelaunchUserLeft;

		export interface PlacelaunchRestricted {
			Name: "PlacelaunchRestricted";
			Value: 523;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchRestricted: PlacelaunchRestricted;

		export interface PlacelaunchUnauthorized {
			Name: "PlacelaunchUnauthorized";
			Value: 524;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchUnauthorized: PlacelaunchUnauthorized;

		export interface PlacelaunchFlooded {
			Name: "PlacelaunchFlooded";
			Value: 525;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchFlooded: PlacelaunchFlooded;

		export interface PlacelaunchHashExpired {
			Name: "PlacelaunchHashExpired";
			Value: 526;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchHashExpired: PlacelaunchHashExpired;

		export interface PlacelaunchHashException {
			Name: "PlacelaunchHashException";
			Value: 527;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchHashException: PlacelaunchHashException;

		export interface PlacelaunchPartyCannotFit {
			Name: "PlacelaunchPartyCannotFit";
			Value: 528;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchPartyCannotFit: PlacelaunchPartyCannotFit;

		export interface PlacelaunchHttpError {
			Name: "PlacelaunchHttpError";
			Value: 529;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchHttpError: PlacelaunchHttpError;

		export interface PlacelaunchCustomMessage {
			Name: "PlacelaunchCustomMessage";
			Value: 610;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchCustomMessage: PlacelaunchCustomMessage;

		export interface PlacelaunchOtherError {
			Name: "PlacelaunchOtherError";
			Value: 611;
			EnumType: EnumType<ConnectionError>;
		}

		export const PlacelaunchOtherError: PlacelaunchOtherError;

		export interface TeleportErrors {
			Name: "TeleportErrors";
			Value: 768;
			EnumType: EnumType<ConnectionError>;
		}

		export const TeleportErrors: TeleportErrors;

		export interface TeleportFailure {
			Name: "TeleportFailure";
			Value: 769;
			EnumType: EnumType<ConnectionError>;
		}

		export const TeleportFailure: TeleportFailure;

		export interface TeleportGameNotFound {
			Name: "TeleportGameNotFound";
			Value: 770;
			EnumType: EnumType<ConnectionError>;
		}

		export const TeleportGameNotFound: TeleportGameNotFound;

		export interface TeleportGameEnded {
			Name: "TeleportGameEnded";
			Value: 771;
			EnumType: EnumType<ConnectionError>;
		}

		export const TeleportGameEnded: TeleportGameEnded;

		export interface TeleportGameFull {
			Name: "TeleportGameFull";
			Value: 772;
			EnumType: EnumType<ConnectionError>;
		}

		export const TeleportGameFull: TeleportGameFull;

		export interface TeleportUnauthorized {
			Name: "TeleportUnauthorized";
			Value: 773;
			EnumType: EnumType<ConnectionError>;
		}

		export const TeleportUnauthorized: TeleportUnauthorized;

		export interface TeleportFlooded {
			Name: "TeleportFlooded";
			Value: 774;
			EnumType: EnumType<ConnectionError>;
		}

		export const TeleportFlooded: TeleportFlooded;

		export interface TeleportIsTeleporting {
			Name: "TeleportIsTeleporting";
			Value: 775;
			EnumType: EnumType<ConnectionError>;
		}

		export const TeleportIsTeleporting: TeleportIsTeleporting;

		export function GetEnumItems(this: defined): Array<ConnectionError>
	}
	export type ConnectionError = ConnectionError.OK | ConnectionError.DisconnectErrors | ConnectionError.DisconnectBadhash | ConnectionError.DisconnectSecurityKeyMismatch | ConnectionError.DisconnectNewSecurityKeyMismatch | ConnectionError.DisconnectProtocolMismatch | ConnectionError.DisconnectReceivePacketError | ConnectionError.DisconnectReceivePacketStreamError | ConnectionError.DisconnectSendPacketError | ConnectionError.DisconnectIllegalTeleport | ConnectionError.DisconnectDuplicatePlayer | ConnectionError.DisconnectDuplicateTicket | ConnectionError.DisconnectTimeout | ConnectionError.DisconnectLuaKick | ConnectionError.DisconnectOnRemoteSysStats | ConnectionError.DisconnectHashTimeout | ConnectionError.DisconnectCloudEditKick | ConnectionError.DisconnectPlayerless | ConnectionError.DisconnectEvicted | ConnectionError.DisconnectDevMaintenance | ConnectionError.DisconnectRobloxMaintenance | ConnectionError.DisconnectRejoin | ConnectionError.DisconnectConnectionLost | ConnectionError.DisconnectIdle | ConnectionError.DisconnectRaknetErrors | ConnectionError.DisconnectWrongVersion | ConnectionError.DisconnectBySecurityPolicy | ConnectionError.DisconnectBlockedIP | ConnectionError.DisconnectClientFailure | ConnectionError.PlacelaunchErrors | ConnectionError.PlacelaunchDisabled | ConnectionError.PlacelaunchError | ConnectionError.PlacelaunchGameEnded | ConnectionError.PlacelaunchGameFull | ConnectionError.PlacelaunchUserLeft | ConnectionError.PlacelaunchRestricted | ConnectionError.PlacelaunchUnauthorized | ConnectionError.PlacelaunchFlooded | ConnectionError.PlacelaunchHashExpired | ConnectionError.PlacelaunchHashException | ConnectionError.PlacelaunchPartyCannotFit | ConnectionError.PlacelaunchHttpError | ConnectionError.PlacelaunchCustomMessage | ConnectionError.PlacelaunchOtherError | ConnectionError.TeleportErrors | ConnectionError.TeleportFailure | ConnectionError.TeleportGameNotFound | ConnectionError.TeleportGameEnded | ConnectionError.TeleportGameFull | ConnectionError.TeleportUnauthorized | ConnectionError.TeleportFlooded | ConnectionError.TeleportIsTeleporting;
	export namespace ConnectionState {
		export interface Connected {
			Name: "Connected";
			Value: 0;
			EnumType: EnumType<ConnectionState>;
		}

		export const Connected: Connected;

		export interface Disconnected {
			Name: "Disconnected";
			Value: 1;
			EnumType: EnumType<ConnectionState>;
		}

		export const Disconnected: Disconnected;

		export function GetEnumItems(this: defined): Array<ConnectionState>
	}
	export type ConnectionState = ConnectionState.Connected | ConnectionState.Disconnected;
	export namespace ContextActionPriority {
		export interface Low {
			Name: "Low";
			Value: 1000;
			EnumType: EnumType<ContextActionPriority>;
		}

		export const Low: Low;

		export interface Medium {
			Name: "Medium";
			Value: 2000;
			EnumType: EnumType<ContextActionPriority>;
		}

		export const Medium: Medium;

		export interface Default {
			Name: "Default";
			Value: 2000;
			EnumType: EnumType<ContextActionPriority>;
		}

		export const Default: Default;

		export interface High {
			Name: "High";
			Value: 3000;
			EnumType: EnumType<ContextActionPriority>;
		}

		export const High: High;

		export function GetEnumItems(this: defined): Array<ContextActionPriority>
	}
	export type ContextActionPriority = ContextActionPriority.Low | ContextActionPriority.Medium | ContextActionPriority.Default | ContextActionPriority.High;
	export namespace ContextActionResult {
		export interface Pass {
			Name: "Pass";
			Value: 1;
			EnumType: EnumType<ContextActionResult>;
		}

		export const Pass: Pass;

		export interface Sink {
			Name: "Sink";
			Value: 0;
			EnumType: EnumType<ContextActionResult>;
		}

		export const Sink: Sink;

		export function GetEnumItems(this: defined): Array<ContextActionResult>
	}
	export type ContextActionResult = ContextActionResult.Pass | ContextActionResult.Sink;
	export namespace ControlMode {
		export interface MouseLockSwitch {
			Name: "MouseLockSwitch";
			Value: 1;
			EnumType: EnumType<ControlMode>;
		}

		export const MouseLockSwitch: MouseLockSwitch;

		export interface Classic {
			Name: "Classic";
			Value: 0;
			EnumType: EnumType<ControlMode>;
		}

		export const Classic: Classic;

		export function GetEnumItems(this: defined): Array<ControlMode>
	}
	export type ControlMode = ControlMode.MouseLockSwitch | ControlMode.Classic;
	export namespace CoreGuiType {
		export interface PlayerList {
			Name: "PlayerList";
			Value: 0;
			EnumType: EnumType<CoreGuiType>;
		}

		export const PlayerList: PlayerList;

		export interface Health {
			Name: "Health";
			Value: 1;
			EnumType: EnumType<CoreGuiType>;
		}

		export const Health: Health;

		export interface Backpack {
			Name: "Backpack";
			Value: 2;
			EnumType: EnumType<CoreGuiType>;
		}

		export const Backpack: Backpack;

		export interface Chat {
			Name: "Chat";
			Value: 3;
			EnumType: EnumType<CoreGuiType>;
		}

		export const Chat: Chat;

		export interface All {
			Name: "All";
			Value: 4;
			EnumType: EnumType<CoreGuiType>;
		}

		export const All: All;

		export interface EmotesMenu {
			Name: "EmotesMenu";
			Value: 5;
			EnumType: EnumType<CoreGuiType>;
		}

		export const EmotesMenu: EmotesMenu;

		export function GetEnumItems(this: defined): Array<CoreGuiType>
	}
	export type CoreGuiType = CoreGuiType.PlayerList | CoreGuiType.Health | CoreGuiType.Backpack | CoreGuiType.Chat | CoreGuiType.All | CoreGuiType.EmotesMenu;
	export namespace CreateOutfitFailure {
		export interface InvalidName {
			Name: "InvalidName";
			Value: 1;
			EnumType: EnumType<CreateOutfitFailure>;
		}

		export const InvalidName: InvalidName;

		export interface OutfitLimitReached {
			Name: "OutfitLimitReached";
			Value: 2;
			EnumType: EnumType<CreateOutfitFailure>;
		}

		export const OutfitLimitReached: OutfitLimitReached;

		export interface Other {
			Name: "Other";
			Value: 3;
			EnumType: EnumType<CreateOutfitFailure>;
		}

		export const Other: Other;

		export function GetEnumItems(this: defined): Array<CreateOutfitFailure>
	}
	export type CreateOutfitFailure = CreateOutfitFailure.InvalidName | CreateOutfitFailure.OutfitLimitReached | CreateOutfitFailure.Other;
	export namespace CreatorType {
		export interface User {
			Name: "User";
			Value: 0;
			EnumType: EnumType<CreatorType>;
		}

		export const User: User;

		export interface Group {
			Name: "Group";
			Value: 1;
			EnumType: EnumType<CreatorType>;
		}

		export const Group: Group;

		export function GetEnumItems(this: defined): Array<CreatorType>
	}
	export type CreatorType = CreatorType.User | CreatorType.Group;
	export namespace CurrencyType {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<CurrencyType>;
		}

		export const Default: Default;

		export interface Robux {
			Name: "Robux";
			Value: 1;
			EnumType: EnumType<CurrencyType>;
		}

		export const Robux: Robux;

		export interface Tix {
			Name: "Tix";
			Value: 2;
			EnumType: EnumType<CurrencyType>;
		}

		export const Tix: Tix;

		export function GetEnumItems(this: defined): Array<CurrencyType>
	}
	export type CurrencyType = CurrencyType.Default | CurrencyType.Robux | CurrencyType.Tix;
	export namespace CustomCameraMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<CustomCameraMode>;
		}

		export const Default: Default;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<CustomCameraMode>;
		}

		export const Follow: Follow;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<CustomCameraMode>;
		}

		export const Classic: Classic;

		export function GetEnumItems(this: defined): Array<CustomCameraMode>
	}
	export type CustomCameraMode = CustomCameraMode.Default | CustomCameraMode.Follow | CustomCameraMode.Classic;
	export namespace DataStoreRequestType {
		export interface GetAsync {
			Name: "GetAsync";
			Value: 0;
			EnumType: EnumType<DataStoreRequestType>;
		}

		export const GetAsync: GetAsync;

		export interface SetIncrementAsync {
			Name: "SetIncrementAsync";
			Value: 1;
			EnumType: EnumType<DataStoreRequestType>;
		}

		export const SetIncrementAsync: SetIncrementAsync;

		export interface UpdateAsync {
			Name: "UpdateAsync";
			Value: 2;
			EnumType: EnumType<DataStoreRequestType>;
		}

		export const UpdateAsync: UpdateAsync;

		export interface GetSortedAsync {
			Name: "GetSortedAsync";
			Value: 3;
			EnumType: EnumType<DataStoreRequestType>;
		}

		export const GetSortedAsync: GetSortedAsync;

		export interface SetIncrementSortedAsync {
			Name: "SetIncrementSortedAsync";
			Value: 4;
			EnumType: EnumType<DataStoreRequestType>;
		}

		export const SetIncrementSortedAsync: SetIncrementSortedAsync;

		export interface OnUpdate {
			Name: "OnUpdate";
			Value: 5;
			EnumType: EnumType<DataStoreRequestType>;
		}

		export const OnUpdate: OnUpdate;

		export function GetEnumItems(this: defined): Array<DataStoreRequestType>
	}
	export type DataStoreRequestType = DataStoreRequestType.GetAsync | DataStoreRequestType.SetIncrementAsync | DataStoreRequestType.UpdateAsync | DataStoreRequestType.GetSortedAsync | DataStoreRequestType.SetIncrementSortedAsync | DataStoreRequestType.OnUpdate;
	export namespace DebuggerEndReason {
		export interface ClientRequest {
			Name: "ClientRequest";
			Value: 0;
			EnumType: EnumType<DebuggerEndReason>;
		}

		export const ClientRequest: ClientRequest;

		export interface Timeout {
			Name: "Timeout";
			Value: 1;
			EnumType: EnumType<DebuggerEndReason>;
		}

		export const Timeout: Timeout;

		export interface InvalidHost {
			Name: "InvalidHost";
			Value: 2;
			EnumType: EnumType<DebuggerEndReason>;
		}

		export const InvalidHost: InvalidHost;

		export interface Disconnected {
			Name: "Disconnected";
			Value: 3;
			EnumType: EnumType<DebuggerEndReason>;
		}

		export const Disconnected: Disconnected;

		export interface ServerShutdown {
			Name: "ServerShutdown";
			Value: 4;
			EnumType: EnumType<DebuggerEndReason>;
		}

		export const ServerShutdown: ServerShutdown;

		export interface ServerProtocolMismatch {
			Name: "ServerProtocolMismatch";
			Value: 5;
			EnumType: EnumType<DebuggerEndReason>;
		}

		export const ServerProtocolMismatch: ServerProtocolMismatch;

		export interface ConfigurationFailed {
			Name: "ConfigurationFailed";
			Value: 6;
			EnumType: EnumType<DebuggerEndReason>;
		}

		export const ConfigurationFailed: ConfigurationFailed;

		export interface RpcError {
			Name: "RpcError";
			Value: 7;
			EnumType: EnumType<DebuggerEndReason>;
		}

		export const RpcError: RpcError;

		export function GetEnumItems(this: defined): Array<DebuggerEndReason>
	}
	export type DebuggerEndReason = DebuggerEndReason.ClientRequest | DebuggerEndReason.Timeout | DebuggerEndReason.InvalidHost | DebuggerEndReason.Disconnected | DebuggerEndReason.ServerShutdown | DebuggerEndReason.ServerProtocolMismatch | DebuggerEndReason.ConfigurationFailed | DebuggerEndReason.RpcError;
	export namespace DebuggerFrameType {
		export interface C {
			Name: "C";
			Value: 0;
			EnumType: EnumType<DebuggerFrameType>;
		}

		export const C: C;

		export interface Lua {
			Name: "Lua";
			Value: 1;
			EnumType: EnumType<DebuggerFrameType>;
		}

		export const Lua: Lua;

		export function GetEnumItems(this: defined): Array<DebuggerFrameType>
	}
	export type DebuggerFrameType = DebuggerFrameType.C | DebuggerFrameType.Lua;
	export namespace DebuggerPauseReason {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<DebuggerPauseReason>;
		}

		export const Unknown: Unknown;

		export interface Requested {
			Name: "Requested";
			Value: 1;
			EnumType: EnumType<DebuggerPauseReason>;
		}

		export const Requested: Requested;

		export interface Breakpoint {
			Name: "Breakpoint";
			Value: 2;
			EnumType: EnumType<DebuggerPauseReason>;
		}

		export const Breakpoint: Breakpoint;

		export interface Exception {
			Name: "Exception";
			Value: 3;
			EnumType: EnumType<DebuggerPauseReason>;
		}

		export const Exception: Exception;

		export interface SingleStep {
			Name: "SingleStep";
			Value: 4;
			EnumType: EnumType<DebuggerPauseReason>;
		}

		export const SingleStep: SingleStep;

		export interface Entrypoint {
			Name: "Entrypoint";
			Value: 5;
			EnumType: EnumType<DebuggerPauseReason>;
		}

		export const Entrypoint: Entrypoint;

		export function GetEnumItems(this: defined): Array<DebuggerPauseReason>
	}
	export type DebuggerPauseReason = DebuggerPauseReason.Unknown | DebuggerPauseReason.Requested | DebuggerPauseReason.Breakpoint | DebuggerPauseReason.Exception | DebuggerPauseReason.SingleStep | DebuggerPauseReason.Entrypoint;
	export namespace DebuggerStatus {
		export interface Success {
			Name: "Success";
			Value: 0;
			EnumType: EnumType<DebuggerStatus>;
		}

		export const Success: Success;

		export interface Timeout {
			Name: "Timeout";
			Value: 1;
			EnumType: EnumType<DebuggerStatus>;
		}

		export const Timeout: Timeout;

		export interface ConnectionLost {
			Name: "ConnectionLost";
			Value: 2;
			EnumType: EnumType<DebuggerStatus>;
		}

		export const ConnectionLost: ConnectionLost;

		export interface InvalidResponse {
			Name: "InvalidResponse";
			Value: 3;
			EnumType: EnumType<DebuggerStatus>;
		}

		export const InvalidResponse: InvalidResponse;

		export interface InternalError {
			Name: "InternalError";
			Value: 4;
			EnumType: EnumType<DebuggerStatus>;
		}

		export const InternalError: InternalError;

		export interface InvalidState {
			Name: "InvalidState";
			Value: 5;
			EnumType: EnumType<DebuggerStatus>;
		}

		export const InvalidState: InvalidState;

		export interface RpcError {
			Name: "RpcError";
			Value: 6;
			EnumType: EnumType<DebuggerStatus>;
		}

		export const RpcError: RpcError;

		export interface InvalidArgument {
			Name: "InvalidArgument";
			Value: 7;
			EnumType: EnumType<DebuggerStatus>;
		}

		export const InvalidArgument: InvalidArgument;

		export function GetEnumItems(this: defined): Array<DebuggerStatus>
	}
	export type DebuggerStatus = DebuggerStatus.Success | DebuggerStatus.Timeout | DebuggerStatus.ConnectionLost | DebuggerStatus.InvalidResponse | DebuggerStatus.InternalError | DebuggerStatus.InvalidState | DebuggerStatus.RpcError | DebuggerStatus.InvalidArgument;
	export namespace DevCameraOcclusionMode {
		export interface Zoom {
			Name: "Zoom";
			Value: 0;
			EnumType: EnumType<DevCameraOcclusionMode>;
		}

		export const Zoom: Zoom;

		export interface Invisicam {
			Name: "Invisicam";
			Value: 1;
			EnumType: EnumType<DevCameraOcclusionMode>;
		}

		export const Invisicam: Invisicam;

		export function GetEnumItems(this: defined): Array<DevCameraOcclusionMode>
	}
	export type DevCameraOcclusionMode = DevCameraOcclusionMode.Zoom | DevCameraOcclusionMode.Invisicam;
	export namespace DevComputerCameraMovementMode {
		export interface UserChoice {
			Name: "UserChoice";
			Value: 0;
			EnumType: EnumType<DevComputerCameraMovementMode>;
		}

		export const UserChoice: UserChoice;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<DevComputerCameraMovementMode>;
		}

		export const Classic: Classic;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<DevComputerCameraMovementMode>;
		}

		export const Follow: Follow;

		export interface Orbital {
			Name: "Orbital";
			Value: 3;
			EnumType: EnumType<DevComputerCameraMovementMode>;
		}

		export const Orbital: Orbital;

		export interface CameraToggle {
			Name: "CameraToggle";
			Value: 4;
			EnumType: EnumType<DevComputerCameraMovementMode>;
		}

		export const CameraToggle: CameraToggle;

		export function GetEnumItems(this: defined): Array<DevComputerCameraMovementMode>
	}
	export type DevComputerCameraMovementMode = DevComputerCameraMovementMode.UserChoice | DevComputerCameraMovementMode.Classic | DevComputerCameraMovementMode.Follow | DevComputerCameraMovementMode.Orbital | DevComputerCameraMovementMode.CameraToggle;
	export namespace DevComputerMovementMode {
		export interface UserChoice {
			Name: "UserChoice";
			Value: 0;
			EnumType: EnumType<DevComputerMovementMode>;
		}

		export const UserChoice: UserChoice;

		export interface KeyboardMouse {
			Name: "KeyboardMouse";
			Value: 1;
			EnumType: EnumType<DevComputerMovementMode>;
		}

		export const KeyboardMouse: KeyboardMouse;

		export interface ClickToMove {
			Name: "ClickToMove";
			Value: 2;
			EnumType: EnumType<DevComputerMovementMode>;
		}

		export const ClickToMove: ClickToMove;

		export interface Scriptable {
			Name: "Scriptable";
			Value: 3;
			EnumType: EnumType<DevComputerMovementMode>;
		}

		export const Scriptable: Scriptable;

		export function GetEnumItems(this: defined): Array<DevComputerMovementMode>
	}
	export type DevComputerMovementMode = DevComputerMovementMode.UserChoice | DevComputerMovementMode.KeyboardMouse | DevComputerMovementMode.ClickToMove | DevComputerMovementMode.Scriptable;
	export namespace DevTouchCameraMovementMode {
		export interface UserChoice {
			Name: "UserChoice";
			Value: 0;
			EnumType: EnumType<DevTouchCameraMovementMode>;
		}

		export const UserChoice: UserChoice;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<DevTouchCameraMovementMode>;
		}

		export const Classic: Classic;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<DevTouchCameraMovementMode>;
		}

		export const Follow: Follow;

		export interface Orbital {
			Name: "Orbital";
			Value: 3;
			EnumType: EnumType<DevTouchCameraMovementMode>;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: defined): Array<DevTouchCameraMovementMode>
	}
	export type DevTouchCameraMovementMode = DevTouchCameraMovementMode.UserChoice | DevTouchCameraMovementMode.Classic | DevTouchCameraMovementMode.Follow | DevTouchCameraMovementMode.Orbital;
	export namespace DevTouchMovementMode {
		export interface UserChoice {
			Name: "UserChoice";
			Value: 0;
			EnumType: EnumType<DevTouchMovementMode>;
		}

		export const UserChoice: UserChoice;

		export interface Thumbstick {
			Name: "Thumbstick";
			Value: 1;
			EnumType: EnumType<DevTouchMovementMode>;
		}

		export const Thumbstick: Thumbstick;

		export interface DPad {
			Name: "DPad";
			Value: 2;
			EnumType: EnumType<DevTouchMovementMode>;
		}

		export const DPad: DPad;

		export interface Thumbpad {
			Name: "Thumbpad";
			Value: 3;
			EnumType: EnumType<DevTouchMovementMode>;
		}

		export const Thumbpad: Thumbpad;

		export interface ClickToMove {
			Name: "ClickToMove";
			Value: 4;
			EnumType: EnumType<DevTouchMovementMode>;
		}

		export const ClickToMove: ClickToMove;

		export interface Scriptable {
			Name: "Scriptable";
			Value: 5;
			EnumType: EnumType<DevTouchMovementMode>;
		}

		export const Scriptable: Scriptable;

		export interface DynamicThumbstick {
			Name: "DynamicThumbstick";
			Value: 6;
			EnumType: EnumType<DevTouchMovementMode>;
		}

		export const DynamicThumbstick: DynamicThumbstick;

		export function GetEnumItems(this: defined): Array<DevTouchMovementMode>
	}
	export type DevTouchMovementMode = DevTouchMovementMode.UserChoice | DevTouchMovementMode.Thumbstick | DevTouchMovementMode.DPad | DevTouchMovementMode.Thumbpad | DevTouchMovementMode.ClickToMove | DevTouchMovementMode.Scriptable | DevTouchMovementMode.DynamicThumbstick;
	export namespace DeveloperMemoryTag {
		export interface Internal {
			Name: "Internal";
			Value: 0;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const Internal: Internal;

		export interface HttpCache {
			Name: "HttpCache";
			Value: 1;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const HttpCache: HttpCache;

		export interface Instances {
			Name: "Instances";
			Value: 2;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const Instances: Instances;

		export interface Signals {
			Name: "Signals";
			Value: 3;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const Signals: Signals;

		export interface LuaHeap {
			Name: "LuaHeap";
			Value: 4;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const LuaHeap: LuaHeap;

		export interface Script {
			Name: "Script";
			Value: 5;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const Script: Script;

		export interface PhysicsCollision {
			Name: "PhysicsCollision";
			Value: 6;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const PhysicsCollision: PhysicsCollision;

		export interface PhysicsParts {
			Name: "PhysicsParts";
			Value: 7;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const PhysicsParts: PhysicsParts;

		export interface GraphicsSolidModels {
			Name: "GraphicsSolidModels";
			Value: 8;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const GraphicsSolidModels: GraphicsSolidModels;

		export interface GraphicsMeshParts {
			Name: "GraphicsMeshParts";
			Value: 9;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const GraphicsMeshParts: GraphicsMeshParts;

		export interface GraphicsParticles {
			Name: "GraphicsParticles";
			Value: 10;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const GraphicsParticles: GraphicsParticles;

		export interface GraphicsParts {
			Name: "GraphicsParts";
			Value: 11;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const GraphicsParts: GraphicsParts;

		export interface GraphicsSpatialHash {
			Name: "GraphicsSpatialHash";
			Value: 12;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const GraphicsSpatialHash: GraphicsSpatialHash;

		export interface GraphicsTerrain {
			Name: "GraphicsTerrain";
			Value: 13;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const GraphicsTerrain: GraphicsTerrain;

		export interface GraphicsTexture {
			Name: "GraphicsTexture";
			Value: 14;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const GraphicsTexture: GraphicsTexture;

		export interface GraphicsTextureCharacter {
			Name: "GraphicsTextureCharacter";
			Value: 15;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const GraphicsTextureCharacter: GraphicsTextureCharacter;

		export interface Sounds {
			Name: "Sounds";
			Value: 16;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const Sounds: Sounds;

		export interface StreamingSounds {
			Name: "StreamingSounds";
			Value: 17;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const StreamingSounds: StreamingSounds;

		export interface TerrainVoxels {
			Name: "TerrainVoxels";
			Value: 18;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const TerrainVoxels: TerrainVoxels;

		export interface Gui {
			Name: "Gui";
			Value: 20;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const Gui: Gui;

		export interface Animation {
			Name: "Animation";
			Value: 21;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const Animation: Animation;

		export interface Navigation {
			Name: "Navigation";
			Value: 22;
			EnumType: EnumType<DeveloperMemoryTag>;
		}

		export const Navigation: Navigation;

		export function GetEnumItems(this: defined): Array<DeveloperMemoryTag>
	}
	export type DeveloperMemoryTag = DeveloperMemoryTag.Internal | DeveloperMemoryTag.HttpCache | DeveloperMemoryTag.Instances | DeveloperMemoryTag.Signals | DeveloperMemoryTag.LuaHeap | DeveloperMemoryTag.Script | DeveloperMemoryTag.PhysicsCollision | DeveloperMemoryTag.PhysicsParts | DeveloperMemoryTag.GraphicsSolidModels | DeveloperMemoryTag.GraphicsMeshParts | DeveloperMemoryTag.GraphicsParticles | DeveloperMemoryTag.GraphicsParts | DeveloperMemoryTag.GraphicsSpatialHash | DeveloperMemoryTag.GraphicsTerrain | DeveloperMemoryTag.GraphicsTexture | DeveloperMemoryTag.GraphicsTextureCharacter | DeveloperMemoryTag.Sounds | DeveloperMemoryTag.StreamingSounds | DeveloperMemoryTag.TerrainVoxels | DeveloperMemoryTag.Gui | DeveloperMemoryTag.Animation | DeveloperMemoryTag.Navigation;
	export namespace DeviceType {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<DeviceType>;
		}

		export const Unknown: Unknown;

		export interface Desktop {
			Name: "Desktop";
			Value: 1;
			EnumType: EnumType<DeviceType>;
		}

		export const Desktop: Desktop;

		export interface Tablet {
			Name: "Tablet";
			Value: 2;
			EnumType: EnumType<DeviceType>;
		}

		export const Tablet: Tablet;

		export interface Phone {
			Name: "Phone";
			Value: 3;
			EnumType: EnumType<DeviceType>;
		}

		export const Phone: Phone;

		export function GetEnumItems(this: defined): Array<DeviceType>
	}
	export type DeviceType = DeviceType.Unknown | DeviceType.Desktop | DeviceType.Tablet | DeviceType.Phone;
	export namespace DialogBehaviorType {
		export interface SinglePlayer {
			Name: "SinglePlayer";
			Value: 0;
			EnumType: EnumType<DialogBehaviorType>;
		}

		export const SinglePlayer: SinglePlayer;

		export interface MultiplePlayers {
			Name: "MultiplePlayers";
			Value: 1;
			EnumType: EnumType<DialogBehaviorType>;
		}

		export const MultiplePlayers: MultiplePlayers;

		export function GetEnumItems(this: defined): Array<DialogBehaviorType>
	}
	export type DialogBehaviorType = DialogBehaviorType.SinglePlayer | DialogBehaviorType.MultiplePlayers;
	export namespace DialogPurpose {
		export interface Quest {
			Name: "Quest";
			Value: 0;
			EnumType: EnumType<DialogPurpose>;
		}

		export const Quest: Quest;

		export interface Help {
			Name: "Help";
			Value: 1;
			EnumType: EnumType<DialogPurpose>;
		}

		export const Help: Help;

		export interface Shop {
			Name: "Shop";
			Value: 2;
			EnumType: EnumType<DialogPurpose>;
		}

		export const Shop: Shop;

		export function GetEnumItems(this: defined): Array<DialogPurpose>
	}
	export type DialogPurpose = DialogPurpose.Quest | DialogPurpose.Help | DialogPurpose.Shop;
	export namespace DialogTone {
		export interface Neutral {
			Name: "Neutral";
			Value: 0;
			EnumType: EnumType<DialogTone>;
		}

		export const Neutral: Neutral;

		export interface Friendly {
			Name: "Friendly";
			Value: 1;
			EnumType: EnumType<DialogTone>;
		}

		export const Friendly: Friendly;

		export interface Enemy {
			Name: "Enemy";
			Value: 2;
			EnumType: EnumType<DialogTone>;
		}

		export const Enemy: Enemy;

		export function GetEnumItems(this: defined): Array<DialogTone>
	}
	export type DialogTone = DialogTone.Neutral | DialogTone.Friendly | DialogTone.Enemy;
	export namespace DominantAxis {
		export interface Width {
			Name: "Width";
			Value: 0;
			EnumType: EnumType<DominantAxis>;
		}

		export const Width: Width;

		export interface Height {
			Name: "Height";
			Value: 1;
			EnumType: EnumType<DominantAxis>;
		}

		export const Height: Height;

		export function GetEnumItems(this: defined): Array<DominantAxis>
	}
	export type DominantAxis = DominantAxis.Width | DominantAxis.Height;
	export namespace DraftStatusCode {
		export interface OK {
			Name: "OK";
			Value: 0;
			EnumType: EnumType<DraftStatusCode>;
		}

		export const OK: OK;

		export interface DraftOutdated {
			Name: "DraftOutdated";
			Value: 1;
			EnumType: EnumType<DraftStatusCode>;
		}

		export const DraftOutdated: DraftOutdated;

		export interface ScriptRemoved {
			Name: "ScriptRemoved";
			Value: 2;
			EnumType: EnumType<DraftStatusCode>;
		}

		export const ScriptRemoved: ScriptRemoved;

		export interface DraftCommitted {
			Name: "DraftCommitted";
			Value: 3;
			EnumType: EnumType<DraftStatusCode>;
		}

		export const DraftCommitted: DraftCommitted;

		export function GetEnumItems(this: defined): Array<DraftStatusCode>
	}
	export type DraftStatusCode = DraftStatusCode.OK | DraftStatusCode.DraftOutdated | DraftStatusCode.ScriptRemoved | DraftStatusCode.DraftCommitted;
	export namespace DraggerCoordinateSpace {
		export interface Object {
			Name: "Object";
			Value: 0;
			EnumType: EnumType<DraggerCoordinateSpace>;
		}

		export const Object: Object;

		export interface World {
			Name: "World";
			Value: 1;
			EnumType: EnumType<DraggerCoordinateSpace>;
		}

		export const World: World;

		export function GetEnumItems(this: defined): Array<DraggerCoordinateSpace>
	}
	export type DraggerCoordinateSpace = DraggerCoordinateSpace.Object | DraggerCoordinateSpace.World;
	export namespace DraggerMovementMode {
		export interface Geometric {
			Name: "Geometric";
			Value: 0;
			EnumType: EnumType<DraggerMovementMode>;
		}

		export const Geometric: Geometric;

		export interface Physical {
			Name: "Physical";
			Value: 1;
			EnumType: EnumType<DraggerMovementMode>;
		}

		export const Physical: Physical;

		export function GetEnumItems(this: defined): Array<DraggerMovementMode>
	}
	export type DraggerMovementMode = DraggerMovementMode.Geometric | DraggerMovementMode.Physical;
	export namespace EasingDirection {
		export interface In {
			Name: "In";
			Value: 0;
			EnumType: EnumType<EasingDirection>;
		}

		export const In: In;

		export interface Out {
			Name: "Out";
			Value: 1;
			EnumType: EnumType<EasingDirection>;
		}

		export const Out: Out;

		export interface InOut {
			Name: "InOut";
			Value: 2;
			EnumType: EnumType<EasingDirection>;
		}

		export const InOut: InOut;

		export function GetEnumItems(this: defined): Array<EasingDirection>
	}
	export type EasingDirection = EasingDirection.In | EasingDirection.Out | EasingDirection.InOut;
	export namespace EasingStyle {
		export interface Linear {
			Name: "Linear";
			Value: 0;
			EnumType: EnumType<EasingStyle>;
		}

		export const Linear: Linear;

		export interface Sine {
			Name: "Sine";
			Value: 1;
			EnumType: EnumType<EasingStyle>;
		}

		export const Sine: Sine;

		export interface Back {
			Name: "Back";
			Value: 2;
			EnumType: EnumType<EasingStyle>;
		}

		export const Back: Back;

		export interface Quad {
			Name: "Quad";
			Value: 3;
			EnumType: EnumType<EasingStyle>;
		}

		export const Quad: Quad;

		export interface Quart {
			Name: "Quart";
			Value: 4;
			EnumType: EnumType<EasingStyle>;
		}

		export const Quart: Quart;

		export interface Quint {
			Name: "Quint";
			Value: 5;
			EnumType: EnumType<EasingStyle>;
		}

		export const Quint: Quint;

		export interface Bounce {
			Name: "Bounce";
			Value: 6;
			EnumType: EnumType<EasingStyle>;
		}

		export const Bounce: Bounce;

		export interface Elastic {
			Name: "Elastic";
			Value: 7;
			EnumType: EnumType<EasingStyle>;
		}

		export const Elastic: Elastic;

		export interface Exponential {
			Name: "Exponential";
			Value: 8;
			EnumType: EnumType<EasingStyle>;
		}

		export const Exponential: Exponential;

		export interface Circular {
			Name: "Circular";
			Value: 9;
			EnumType: EnumType<EasingStyle>;
		}

		export const Circular: Circular;

		export interface Cubic {
			Name: "Cubic";
			Value: 10;
			EnumType: EnumType<EasingStyle>;
		}

		export const Cubic: Cubic;

		export function GetEnumItems(this: defined): Array<EasingStyle>
	}
	export type EasingStyle = EasingStyle.Linear | EasingStyle.Sine | EasingStyle.Back | EasingStyle.Quad | EasingStyle.Quart | EasingStyle.Quint | EasingStyle.Bounce | EasingStyle.Elastic | EasingStyle.Exponential | EasingStyle.Circular | EasingStyle.Cubic;
	export namespace ElasticBehavior {
		export interface WhenScrollable {
			Name: "WhenScrollable";
			Value: 0;
			EnumType: EnumType<ElasticBehavior>;
		}

		export const WhenScrollable: WhenScrollable;

		export interface Always {
			Name: "Always";
			Value: 1;
			EnumType: EnumType<ElasticBehavior>;
		}

		export const Always: Always;

		export interface Never {
			Name: "Never";
			Value: 2;
			EnumType: EnumType<ElasticBehavior>;
		}

		export const Never: Never;

		export function GetEnumItems(this: defined): Array<ElasticBehavior>
	}
	export type ElasticBehavior = ElasticBehavior.WhenScrollable | ElasticBehavior.Always | ElasticBehavior.Never;
	export namespace EnviromentalPhysicsThrottle {
		export interface DefaultAuto {
			Name: "DefaultAuto";
			Value: 0;
			EnumType: EnumType<EnviromentalPhysicsThrottle>;
		}

		export const DefaultAuto: DefaultAuto;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<EnviromentalPhysicsThrottle>;
		}

		export const Disabled: Disabled;

		export interface Always {
			Name: "Always";
			Value: 2;
			EnumType: EnumType<EnviromentalPhysicsThrottle>;
		}

		export const Always: Always;

		export interface Skip2 {
			Name: "Skip2";
			Value: 3;
			EnumType: EnumType<EnviromentalPhysicsThrottle>;
		}

		export const Skip2: Skip2;

		export interface Skip4 {
			Name: "Skip4";
			Value: 4;
			EnumType: EnumType<EnviromentalPhysicsThrottle>;
		}

		export const Skip4: Skip4;

		export interface Skip8 {
			Name: "Skip8";
			Value: 5;
			EnumType: EnumType<EnviromentalPhysicsThrottle>;
		}

		export const Skip8: Skip8;

		export interface Skip16 {
			Name: "Skip16";
			Value: 6;
			EnumType: EnumType<EnviromentalPhysicsThrottle>;
		}

		export const Skip16: Skip16;

		export function GetEnumItems(this: defined): Array<EnviromentalPhysicsThrottle>
	}
	export type EnviromentalPhysicsThrottle = EnviromentalPhysicsThrottle.DefaultAuto | EnviromentalPhysicsThrottle.Disabled | EnviromentalPhysicsThrottle.Always | EnviromentalPhysicsThrottle.Skip2 | EnviromentalPhysicsThrottle.Skip4 | EnviromentalPhysicsThrottle.Skip8 | EnviromentalPhysicsThrottle.Skip16;
	export namespace ExplosionType {
		export interface NoCraters {
			Name: "NoCraters";
			Value: 0;
			EnumType: EnumType<ExplosionType>;
		}

		export const NoCraters: NoCraters;

		export interface Craters {
			Name: "Craters";
			Value: 1;
			EnumType: EnumType<ExplosionType>;
		}

		export const Craters: Craters;

		export function GetEnumItems(this: defined): Array<ExplosionType>
	}
	export type ExplosionType = ExplosionType.NoCraters | ExplosionType.Craters;
	export namespace FieldOfViewMode {
		export interface Vertical {
			Name: "Vertical";
			Value: 0;
			EnumType: EnumType<FieldOfViewMode>;
		}

		export const Vertical: Vertical;

		export interface Diagonal {
			Name: "Diagonal";
			Value: 1;
			EnumType: EnumType<FieldOfViewMode>;
		}

		export const Diagonal: Diagonal;

		export interface MaxAxis {
			Name: "MaxAxis";
			Value: 2;
			EnumType: EnumType<FieldOfViewMode>;
		}

		export const MaxAxis: MaxAxis;

		export function GetEnumItems(this: defined): Array<FieldOfViewMode>
	}
	export type FieldOfViewMode = FieldOfViewMode.Vertical | FieldOfViewMode.Diagonal | FieldOfViewMode.MaxAxis;
	export namespace FillDirection {
		export interface Horizontal {
			Name: "Horizontal";
			Value: 0;
			EnumType: EnumType<FillDirection>;
		}

		export const Horizontal: Horizontal;

		export interface Vertical {
			Name: "Vertical";
			Value: 1;
			EnumType: EnumType<FillDirection>;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: defined): Array<FillDirection>
	}
	export type FillDirection = FillDirection.Horizontal | FillDirection.Vertical;
	export namespace FilterResult {
		export interface Rejected {
			Name: "Rejected";
			Value: 1;
			EnumType: EnumType<FilterResult>;
		}

		export const Rejected: Rejected;

		export interface Accepted {
			Name: "Accepted";
			Value: 0;
			EnumType: EnumType<FilterResult>;
		}

		export const Accepted: Accepted;

		export function GetEnumItems(this: defined): Array<FilterResult>
	}
	export type FilterResult = FilterResult.Rejected | FilterResult.Accepted;
	export namespace Font {
		export interface Legacy {
			Name: "Legacy";
			Value: 0;
			EnumType: EnumType<Font>;
		}

		export const Legacy: Legacy;

		export interface Arial {
			Name: "Arial";
			Value: 1;
			EnumType: EnumType<Font>;
		}

		export const Arial: Arial;

		export interface ArialBold {
			Name: "ArialBold";
			Value: 2;
			EnumType: EnumType<Font>;
		}

		export const ArialBold: ArialBold;

		export interface SourceSans {
			Name: "SourceSans";
			Value: 3;
			EnumType: EnumType<Font>;
		}

		export const SourceSans: SourceSans;

		export interface SourceSansBold {
			Name: "SourceSansBold";
			Value: 4;
			EnumType: EnumType<Font>;
		}

		export const SourceSansBold: SourceSansBold;

		export interface SourceSansSemibold {
			Name: "SourceSansSemibold";
			Value: 16;
			EnumType: EnumType<Font>;
		}

		export const SourceSansSemibold: SourceSansSemibold;

		export interface SourceSansLight {
			Name: "SourceSansLight";
			Value: 5;
			EnumType: EnumType<Font>;
		}

		export const SourceSansLight: SourceSansLight;

		export interface SourceSansItalic {
			Name: "SourceSansItalic";
			Value: 6;
			EnumType: EnumType<Font>;
		}

		export const SourceSansItalic: SourceSansItalic;

		export interface Bodoni {
			Name: "Bodoni";
			Value: 7;
			EnumType: EnumType<Font>;
		}

		export const Bodoni: Bodoni;

		export interface Garamond {
			Name: "Garamond";
			Value: 8;
			EnumType: EnumType<Font>;
		}

		export const Garamond: Garamond;

		export interface Cartoon {
			Name: "Cartoon";
			Value: 9;
			EnumType: EnumType<Font>;
		}

		export const Cartoon: Cartoon;

		export interface Code {
			Name: "Code";
			Value: 10;
			EnumType: EnumType<Font>;
		}

		export const Code: Code;

		export interface Highway {
			Name: "Highway";
			Value: 11;
			EnumType: EnumType<Font>;
		}

		export const Highway: Highway;

		export interface SciFi {
			Name: "SciFi";
			Value: 12;
			EnumType: EnumType<Font>;
		}

		export const SciFi: SciFi;

		export interface Arcade {
			Name: "Arcade";
			Value: 13;
			EnumType: EnumType<Font>;
		}

		export const Arcade: Arcade;

		export interface Fantasy {
			Name: "Fantasy";
			Value: 14;
			EnumType: EnumType<Font>;
		}

		export const Fantasy: Fantasy;

		export interface Antique {
			Name: "Antique";
			Value: 15;
			EnumType: EnumType<Font>;
		}

		export const Antique: Antique;

		export interface Gotham {
			Name: "Gotham";
			Value: 17;
			EnumType: EnumType<Font>;
		}

		export const Gotham: Gotham;

		export interface GothamSemibold {
			Name: "GothamSemibold";
			Value: 18;
			EnumType: EnumType<Font>;
		}

		export const GothamSemibold: GothamSemibold;

		export interface GothamBold {
			Name: "GothamBold";
			Value: 19;
			EnumType: EnumType<Font>;
		}

		export const GothamBold: GothamBold;

		export interface GothamBlack {
			Name: "GothamBlack";
			Value: 20;
			EnumType: EnumType<Font>;
		}

		export const GothamBlack: GothamBlack;

		export interface AmaticSC {
			Name: "AmaticSC";
			Value: 21;
			EnumType: EnumType<Font>;
		}

		export const AmaticSC: AmaticSC;

		export interface Bangers {
			Name: "Bangers";
			Value: 22;
			EnumType: EnumType<Font>;
		}

		export const Bangers: Bangers;

		export interface Creepster {
			Name: "Creepster";
			Value: 23;
			EnumType: EnumType<Font>;
		}

		export const Creepster: Creepster;

		export interface DenkOne {
			Name: "DenkOne";
			Value: 24;
			EnumType: EnumType<Font>;
		}

		export const DenkOne: DenkOne;

		export interface Fondamento {
			Name: "Fondamento";
			Value: 25;
			EnumType: EnumType<Font>;
		}

		export const Fondamento: Fondamento;

		export interface FredokaOne {
			Name: "FredokaOne";
			Value: 26;
			EnumType: EnumType<Font>;
		}

		export const FredokaOne: FredokaOne;

		export interface GrenzeGotisch {
			Name: "GrenzeGotisch";
			Value: 27;
			EnumType: EnumType<Font>;
		}

		export const GrenzeGotisch: GrenzeGotisch;

		export interface IndieFlower {
			Name: "IndieFlower";
			Value: 28;
			EnumType: EnumType<Font>;
		}

		export const IndieFlower: IndieFlower;

		export interface JosefinSans {
			Name: "JosefinSans";
			Value: 29;
			EnumType: EnumType<Font>;
		}

		export const JosefinSans: JosefinSans;

		export interface Jura {
			Name: "Jura";
			Value: 30;
			EnumType: EnumType<Font>;
		}

		export const Jura: Jura;

		export interface Kalam {
			Name: "Kalam";
			Value: 31;
			EnumType: EnumType<Font>;
		}

		export const Kalam: Kalam;

		export interface LuckiestGuy {
			Name: "LuckiestGuy";
			Value: 32;
			EnumType: EnumType<Font>;
		}

		export const LuckiestGuy: LuckiestGuy;

		export interface Merriweather {
			Name: "Merriweather";
			Value: 33;
			EnumType: EnumType<Font>;
		}

		export const Merriweather: Merriweather;

		export interface Michroma {
			Name: "Michroma";
			Value: 34;
			EnumType: EnumType<Font>;
		}

		export const Michroma: Michroma;

		export interface Nunito {
			Name: "Nunito";
			Value: 35;
			EnumType: EnumType<Font>;
		}

		export const Nunito: Nunito;

		export interface Oswald {
			Name: "Oswald";
			Value: 36;
			EnumType: EnumType<Font>;
		}

		export const Oswald: Oswald;

		export interface PatrickHand {
			Name: "PatrickHand";
			Value: 37;
			EnumType: EnumType<Font>;
		}

		export const PatrickHand: PatrickHand;

		export interface PermanentMarker {
			Name: "PermanentMarker";
			Value: 38;
			EnumType: EnumType<Font>;
		}

		export const PermanentMarker: PermanentMarker;

		export interface Roboto {
			Name: "Roboto";
			Value: 39;
			EnumType: EnumType<Font>;
		}

		export const Roboto: Roboto;

		export interface RobotoCondensed {
			Name: "RobotoCondensed";
			Value: 40;
			EnumType: EnumType<Font>;
		}

		export const RobotoCondensed: RobotoCondensed;

		export interface RobotoMono {
			Name: "RobotoMono";
			Value: 41;
			EnumType: EnumType<Font>;
		}

		export const RobotoMono: RobotoMono;

		export interface Sarpanch {
			Name: "Sarpanch";
			Value: 42;
			EnumType: EnumType<Font>;
		}

		export const Sarpanch: Sarpanch;

		export interface SpecialElite {
			Name: "SpecialElite";
			Value: 43;
			EnumType: EnumType<Font>;
		}

		export const SpecialElite: SpecialElite;

		export interface TitilliumWeb {
			Name: "TitilliumWeb";
			Value: 44;
			EnumType: EnumType<Font>;
		}

		export const TitilliumWeb: TitilliumWeb;

		export interface Ubuntu {
			Name: "Ubuntu";
			Value: 45;
			EnumType: EnumType<Font>;
		}

		export const Ubuntu: Ubuntu;

		export function GetEnumItems(this: defined): Array<Font>
	}
	export type Font = Font.Legacy | Font.Arial | Font.ArialBold | Font.SourceSans | Font.SourceSansBold | Font.SourceSansSemibold | Font.SourceSansLight | Font.SourceSansItalic | Font.Bodoni | Font.Garamond | Font.Cartoon | Font.Code | Font.Highway | Font.SciFi | Font.Arcade | Font.Fantasy | Font.Antique | Font.Gotham | Font.GothamSemibold | Font.GothamBold | Font.GothamBlack | Font.AmaticSC | Font.Bangers | Font.Creepster | Font.DenkOne | Font.Fondamento | Font.FredokaOne | Font.GrenzeGotisch | Font.IndieFlower | Font.JosefinSans | Font.Jura | Font.Kalam | Font.LuckiestGuy | Font.Merriweather | Font.Michroma | Font.Nunito | Font.Oswald | Font.PatrickHand | Font.PermanentMarker | Font.Roboto | Font.RobotoCondensed | Font.RobotoMono | Font.Sarpanch | Font.SpecialElite | Font.TitilliumWeb | Font.Ubuntu;
	export namespace FontSize {
		export interface Size8 {
			Name: "Size8";
			Value: 0;
			EnumType: EnumType<FontSize>;
		}

		export const Size8: Size8;

		export interface Size9 {
			Name: "Size9";
			Value: 1;
			EnumType: EnumType<FontSize>;
		}

		export const Size9: Size9;

		export interface Size10 {
			Name: "Size10";
			Value: 2;
			EnumType: EnumType<FontSize>;
		}

		export const Size10: Size10;

		export interface Size11 {
			Name: "Size11";
			Value: 3;
			EnumType: EnumType<FontSize>;
		}

		export const Size11: Size11;

		export interface Size12 {
			Name: "Size12";
			Value: 4;
			EnumType: EnumType<FontSize>;
		}

		export const Size12: Size12;

		export interface Size14 {
			Name: "Size14";
			Value: 5;
			EnumType: EnumType<FontSize>;
		}

		export const Size14: Size14;

		export interface Size18 {
			Name: "Size18";
			Value: 6;
			EnumType: EnumType<FontSize>;
		}

		export const Size18: Size18;

		export interface Size24 {
			Name: "Size24";
			Value: 7;
			EnumType: EnumType<FontSize>;
		}

		export const Size24: Size24;

		export interface Size36 {
			Name: "Size36";
			Value: 8;
			EnumType: EnumType<FontSize>;
		}

		export const Size36: Size36;

		export interface Size48 {
			Name: "Size48";
			Value: 9;
			EnumType: EnumType<FontSize>;
		}

		export const Size48: Size48;

		export interface Size28 {
			Name: "Size28";
			Value: 10;
			EnumType: EnumType<FontSize>;
		}

		export const Size28: Size28;

		export interface Size32 {
			Name: "Size32";
			Value: 11;
			EnumType: EnumType<FontSize>;
		}

		export const Size32: Size32;

		export interface Size42 {
			Name: "Size42";
			Value: 12;
			EnumType: EnumType<FontSize>;
		}

		export const Size42: Size42;

		export interface Size60 {
			Name: "Size60";
			Value: 13;
			EnumType: EnumType<FontSize>;
		}

		export const Size60: Size60;

		export interface Size96 {
			Name: "Size96";
			Value: 14;
			EnumType: EnumType<FontSize>;
		}

		export const Size96: Size96;

		export function GetEnumItems(this: defined): Array<FontSize>
	}
	export type FontSize = FontSize.Size8 | FontSize.Size9 | FontSize.Size10 | FontSize.Size11 | FontSize.Size12 | FontSize.Size14 | FontSize.Size18 | FontSize.Size24 | FontSize.Size36 | FontSize.Size48 | FontSize.Size28 | FontSize.Size32 | FontSize.Size42 | FontSize.Size60 | FontSize.Size96;
	export namespace FormFactor {
		export interface Symmetric {
			Name: "Symmetric";
			Value: 0;
			EnumType: EnumType<FormFactor>;
		}

		export const Symmetric: Symmetric;

		export interface Brick {
			Name: "Brick";
			Value: 1;
			EnumType: EnumType<FormFactor>;
		}

		export const Brick: Brick;

		export interface Plate {
			Name: "Plate";
			Value: 2;
			EnumType: EnumType<FormFactor>;
		}

		export const Plate: Plate;

		export interface Custom {
			Name: "Custom";
			Value: 3;
			EnumType: EnumType<FormFactor>;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: defined): Array<FormFactor>
	}
	export type FormFactor = FormFactor.Symmetric | FormFactor.Brick | FormFactor.Plate | FormFactor.Custom;
	export namespace FrameStyle {
		export interface Custom {
			Name: "Custom";
			Value: 0;
			EnumType: EnumType<FrameStyle>;
		}

		export const Custom: Custom;

		export interface ChatBlue {
			Name: "ChatBlue";
			Value: 1;
			EnumType: EnumType<FrameStyle>;
		}

		export const ChatBlue: ChatBlue;

		export interface RobloxSquare {
			Name: "RobloxSquare";
			Value: 2;
			EnumType: EnumType<FrameStyle>;
		}

		export const RobloxSquare: RobloxSquare;

		export interface RobloxRound {
			Name: "RobloxRound";
			Value: 3;
			EnumType: EnumType<FrameStyle>;
		}

		export const RobloxRound: RobloxRound;

		export interface ChatGreen {
			Name: "ChatGreen";
			Value: 4;
			EnumType: EnumType<FrameStyle>;
		}

		export const ChatGreen: ChatGreen;

		export interface ChatRed {
			Name: "ChatRed";
			Value: 5;
			EnumType: EnumType<FrameStyle>;
		}

		export const ChatRed: ChatRed;

		export interface DropShadow {
			Name: "DropShadow";
			Value: 6;
			EnumType: EnumType<FrameStyle>;
		}

		export const DropShadow: DropShadow;

		export function GetEnumItems(this: defined): Array<FrameStyle>
	}
	export type FrameStyle = FrameStyle.Custom | FrameStyle.ChatBlue | FrameStyle.RobloxSquare | FrameStyle.RobloxRound | FrameStyle.ChatGreen | FrameStyle.ChatRed | FrameStyle.DropShadow;
	export namespace FramerateManagerMode {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<FramerateManagerMode>;
		}

		export const Automatic: Automatic;

		export interface On {
			Name: "On";
			Value: 1;
			EnumType: EnumType<FramerateManagerMode>;
		}

		export const On: On;

		export interface Off {
			Name: "Off";
			Value: 2;
			EnumType: EnumType<FramerateManagerMode>;
		}

		export const Off: Off;

		export function GetEnumItems(this: defined): Array<FramerateManagerMode>
	}
	export type FramerateManagerMode = FramerateManagerMode.Automatic | FramerateManagerMode.On | FramerateManagerMode.Off;
	export namespace FriendRequestEvent {
		export interface Issue {
			Name: "Issue";
			Value: 0;
			EnumType: EnumType<FriendRequestEvent>;
		}

		export const Issue: Issue;

		export interface Revoke {
			Name: "Revoke";
			Value: 1;
			EnumType: EnumType<FriendRequestEvent>;
		}

		export const Revoke: Revoke;

		export interface Accept {
			Name: "Accept";
			Value: 2;
			EnumType: EnumType<FriendRequestEvent>;
		}

		export const Accept: Accept;

		export interface Deny {
			Name: "Deny";
			Value: 3;
			EnumType: EnumType<FriendRequestEvent>;
		}

		export const Deny: Deny;

		export function GetEnumItems(this: defined): Array<FriendRequestEvent>
	}
	export type FriendRequestEvent = FriendRequestEvent.Issue | FriendRequestEvent.Revoke | FriendRequestEvent.Accept | FriendRequestEvent.Deny;
	export namespace FriendStatus {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<FriendStatus>;
		}

		export const Unknown: Unknown;

		export interface NotFriend {
			Name: "NotFriend";
			Value: 1;
			EnumType: EnumType<FriendStatus>;
		}

		export const NotFriend: NotFriend;

		export interface Friend {
			Name: "Friend";
			Value: 2;
			EnumType: EnumType<FriendStatus>;
		}

		export const Friend: Friend;

		export interface FriendRequestSent {
			Name: "FriendRequestSent";
			Value: 3;
			EnumType: EnumType<FriendStatus>;
		}

		export const FriendRequestSent: FriendRequestSent;

		export interface FriendRequestReceived {
			Name: "FriendRequestReceived";
			Value: 4;
			EnumType: EnumType<FriendStatus>;
		}

		export const FriendRequestReceived: FriendRequestReceived;

		export function GetEnumItems(this: defined): Array<FriendStatus>
	}
	export type FriendStatus = FriendStatus.Unknown | FriendStatus.NotFriend | FriendStatus.Friend | FriendStatus.FriendRequestSent | FriendStatus.FriendRequestReceived;
	export namespace FunctionalTestResult {
		export interface Passed {
			Name: "Passed";
			Value: 0;
			EnumType: EnumType<FunctionalTestResult>;
		}

		export const Passed: Passed;

		export interface Warning {
			Name: "Warning";
			Value: 1;
			EnumType: EnumType<FunctionalTestResult>;
		}

		export const Warning: Warning;

		export interface Error {
			Name: "Error";
			Value: 2;
			EnumType: EnumType<FunctionalTestResult>;
		}

		export const Error: Error;

		export function GetEnumItems(this: defined): Array<FunctionalTestResult>
	}
	export type FunctionalTestResult = FunctionalTestResult.Passed | FunctionalTestResult.Warning | FunctionalTestResult.Error;
	export namespace GameAvatarType {
		export interface R6 {
			Name: "R6";
			Value: 0;
			EnumType: EnumType<GameAvatarType>;
		}

		export const R6: R6;

		export interface R15 {
			Name: "R15";
			Value: 1;
			EnumType: EnumType<GameAvatarType>;
		}

		export const R15: R15;

		export interface PlayerChoice {
			Name: "PlayerChoice";
			Value: 2;
			EnumType: EnumType<GameAvatarType>;
		}

		export const PlayerChoice: PlayerChoice;

		export function GetEnumItems(this: defined): Array<GameAvatarType>
	}
	export type GameAvatarType = GameAvatarType.R6 | GameAvatarType.R15 | GameAvatarType.PlayerChoice;
	export namespace GearGenreSetting {
		export interface AllGenres {
			Name: "AllGenres";
			Value: 0;
			EnumType: EnumType<GearGenreSetting>;
		}

		export const AllGenres: AllGenres;

		export interface MatchingGenreOnly {
			Name: "MatchingGenreOnly";
			Value: 1;
			EnumType: EnumType<GearGenreSetting>;
		}

		export const MatchingGenreOnly: MatchingGenreOnly;

		export function GetEnumItems(this: defined): Array<GearGenreSetting>
	}
	export type GearGenreSetting = GearGenreSetting.AllGenres | GearGenreSetting.MatchingGenreOnly;
	export namespace GearType {
		export interface MeleeWeapons {
			Name: "MeleeWeapons";
			Value: 0;
			EnumType: EnumType<GearType>;
		}

		export const MeleeWeapons: MeleeWeapons;

		export interface RangedWeapons {
			Name: "RangedWeapons";
			Value: 1;
			EnumType: EnumType<GearType>;
		}

		export const RangedWeapons: RangedWeapons;

		export interface Explosives {
			Name: "Explosives";
			Value: 2;
			EnumType: EnumType<GearType>;
		}

		export const Explosives: Explosives;

		export interface PowerUps {
			Name: "PowerUps";
			Value: 3;
			EnumType: EnumType<GearType>;
		}

		export const PowerUps: PowerUps;

		export interface NavigationEnhancers {
			Name: "NavigationEnhancers";
			Value: 4;
			EnumType: EnumType<GearType>;
		}

		export const NavigationEnhancers: NavigationEnhancers;

		export interface MusicalInstruments {
			Name: "MusicalInstruments";
			Value: 5;
			EnumType: EnumType<GearType>;
		}

		export const MusicalInstruments: MusicalInstruments;

		export interface SocialItems {
			Name: "SocialItems";
			Value: 6;
			EnumType: EnumType<GearType>;
		}

		export const SocialItems: SocialItems;

		export interface BuildingTools {
			Name: "BuildingTools";
			Value: 7;
			EnumType: EnumType<GearType>;
		}

		export const BuildingTools: BuildingTools;

		export interface Transport {
			Name: "Transport";
			Value: 8;
			EnumType: EnumType<GearType>;
		}

		export const Transport: Transport;

		export function GetEnumItems(this: defined): Array<GearType>
	}
	export type GearType = GearType.MeleeWeapons | GearType.RangedWeapons | GearType.Explosives | GearType.PowerUps | GearType.NavigationEnhancers | GearType.MusicalInstruments | GearType.SocialItems | GearType.BuildingTools | GearType.Transport;
	export namespace Genre {
		export interface All {
			Name: "All";
			Value: 0;
			EnumType: EnumType<Genre>;
		}

		export const All: All;

		export interface TownAndCity {
			Name: "TownAndCity";
			Value: 1;
			EnumType: EnumType<Genre>;
		}

		export const TownAndCity: TownAndCity;

		export interface Fantasy {
			Name: "Fantasy";
			Value: 2;
			EnumType: EnumType<Genre>;
		}

		export const Fantasy: Fantasy;

		export interface SciFi {
			Name: "SciFi";
			Value: 3;
			EnumType: EnumType<Genre>;
		}

		export const SciFi: SciFi;

		export interface Ninja {
			Name: "Ninja";
			Value: 4;
			EnumType: EnumType<Genre>;
		}

		export const Ninja: Ninja;

		export interface Scary {
			Name: "Scary";
			Value: 5;
			EnumType: EnumType<Genre>;
		}

		export const Scary: Scary;

		export interface Pirate {
			Name: "Pirate";
			Value: 6;
			EnumType: EnumType<Genre>;
		}

		export const Pirate: Pirate;

		export interface Adventure {
			Name: "Adventure";
			Value: 7;
			EnumType: EnumType<Genre>;
		}

		export const Adventure: Adventure;

		export interface Sports {
			Name: "Sports";
			Value: 8;
			EnumType: EnumType<Genre>;
		}

		export const Sports: Sports;

		export interface Funny {
			Name: "Funny";
			Value: 9;
			EnumType: EnumType<Genre>;
		}

		export const Funny: Funny;

		export interface WildWest {
			Name: "WildWest";
			Value: 10;
			EnumType: EnumType<Genre>;
		}

		export const WildWest: WildWest;

		export interface War {
			Name: "War";
			Value: 11;
			EnumType: EnumType<Genre>;
		}

		export const War: War;

		export interface SkatePark {
			Name: "SkatePark";
			Value: 12;
			EnumType: EnumType<Genre>;
		}

		export const SkatePark: SkatePark;

		export interface Tutorial {
			Name: "Tutorial";
			Value: 13;
			EnumType: EnumType<Genre>;
		}

		export const Tutorial: Tutorial;

		export function GetEnumItems(this: defined): Array<Genre>
	}
	export type Genre = Genre.All | Genre.TownAndCity | Genre.Fantasy | Genre.SciFi | Genre.Ninja | Genre.Scary | Genre.Pirate | Genre.Adventure | Genre.Sports | Genre.Funny | Genre.WildWest | Genre.War | Genre.SkatePark | Genre.Tutorial;
	export namespace GraphicsMode {
		export interface Automatic {
			Name: "Automatic";
			Value: 1;
			EnumType: EnumType<GraphicsMode>;
		}

		export const Automatic: Automatic;

		export interface Direct3D11 {
			Name: "Direct3D11";
			Value: 2;
			EnumType: EnumType<GraphicsMode>;
		}

		export const Direct3D11: Direct3D11;

		export interface OpenGL {
			Name: "OpenGL";
			Value: 4;
			EnumType: EnumType<GraphicsMode>;
		}

		export const OpenGL: OpenGL;

		export interface Metal {
			Name: "Metal";
			Value: 5;
			EnumType: EnumType<GraphicsMode>;
		}

		export const Metal: Metal;

		export interface Vulkan {
			Name: "Vulkan";
			Value: 6;
			EnumType: EnumType<GraphicsMode>;
		}

		export const Vulkan: Vulkan;

		export interface NoGraphics {
			Name: "NoGraphics";
			Value: 7;
			EnumType: EnumType<GraphicsMode>;
		}

		export const NoGraphics: NoGraphics;

		export function GetEnumItems(this: defined): Array<GraphicsMode>
	}
	export type GraphicsMode = GraphicsMode.Automatic | GraphicsMode.Direct3D11 | GraphicsMode.OpenGL | GraphicsMode.Metal | GraphicsMode.Vulkan | GraphicsMode.NoGraphics;
	export namespace HandlesStyle {
		export interface Resize {
			Name: "Resize";
			Value: 0;
			EnumType: EnumType<HandlesStyle>;
		}

		export const Resize: Resize;

		export interface Movement {
			Name: "Movement";
			Value: 1;
			EnumType: EnumType<HandlesStyle>;
		}

		export const Movement: Movement;

		export function GetEnumItems(this: defined): Array<HandlesStyle>
	}
	export type HandlesStyle = HandlesStyle.Resize | HandlesStyle.Movement;
	export namespace HighlightDepthMode {
		export interface AlwaysOnTop {
			Name: "AlwaysOnTop";
			Value: 0;
			EnumType: EnumType<HighlightDepthMode>;
		}

		export const AlwaysOnTop: AlwaysOnTop;

		export interface Default {
			Name: "Default";
			Value: 1;
			EnumType: EnumType<HighlightDepthMode>;
		}

		export const Default: Default;

		export function GetEnumItems(this: defined): Array<HighlightDepthMode>
	}
	export type HighlightDepthMode = HighlightDepthMode.AlwaysOnTop | HighlightDepthMode.Default;
	export namespace HorizontalAlignment {
		export interface Center {
			Name: "Center";
			Value: 0;
			EnumType: EnumType<HorizontalAlignment>;
		}

		export const Center: Center;

		export interface Left {
			Name: "Left";
			Value: 1;
			EnumType: EnumType<HorizontalAlignment>;
		}

		export const Left: Left;

		export interface Right {
			Name: "Right";
			Value: 2;
			EnumType: EnumType<HorizontalAlignment>;
		}

		export const Right: Right;

		export function GetEnumItems(this: defined): Array<HorizontalAlignment>
	}
	export type HorizontalAlignment = HorizontalAlignment.Center | HorizontalAlignment.Left | HorizontalAlignment.Right;
	export namespace HoverAnimateSpeed {
		export interface VerySlow {
			Name: "VerySlow";
			Value: 0;
			EnumType: EnumType<HoverAnimateSpeed>;
		}

		export const VerySlow: VerySlow;

		export interface Slow {
			Name: "Slow";
			Value: 1;
			EnumType: EnumType<HoverAnimateSpeed>;
		}

		export const Slow: Slow;

		export interface Medium {
			Name: "Medium";
			Value: 2;
			EnumType: EnumType<HoverAnimateSpeed>;
		}

		export const Medium: Medium;

		export interface Fast {
			Name: "Fast";
			Value: 3;
			EnumType: EnumType<HoverAnimateSpeed>;
		}

		export const Fast: Fast;

		export interface VeryFast {
			Name: "VeryFast";
			Value: 4;
			EnumType: EnumType<HoverAnimateSpeed>;
		}

		export const VeryFast: VeryFast;

		export function GetEnumItems(this: defined): Array<HoverAnimateSpeed>
	}
	export type HoverAnimateSpeed = HoverAnimateSpeed.VerySlow | HoverAnimateSpeed.Slow | HoverAnimateSpeed.Medium | HoverAnimateSpeed.Fast | HoverAnimateSpeed.VeryFast;
	export namespace HttpCachePolicy {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<HttpCachePolicy>;
		}

		export const None: None;

		export interface Full {
			Name: "Full";
			Value: 1;
			EnumType: EnumType<HttpCachePolicy>;
		}

		export const Full: Full;

		export interface DataOnly {
			Name: "DataOnly";
			Value: 2;
			EnumType: EnumType<HttpCachePolicy>;
		}

		export const DataOnly: DataOnly;

		export interface Default {
			Name: "Default";
			Value: 3;
			EnumType: EnumType<HttpCachePolicy>;
		}

		export const Default: Default;

		export interface InternalRedirectRefresh {
			Name: "InternalRedirectRefresh";
			Value: 4;
			EnumType: EnumType<HttpCachePolicy>;
		}

		export const InternalRedirectRefresh: InternalRedirectRefresh;

		export function GetEnumItems(this: defined): Array<HttpCachePolicy>
	}
	export type HttpCachePolicy = HttpCachePolicy.None | HttpCachePolicy.Full | HttpCachePolicy.DataOnly | HttpCachePolicy.Default | HttpCachePolicy.InternalRedirectRefresh;
	export namespace HttpContentType {
		export interface ApplicationJson {
			Name: "ApplicationJson";
			Value: 0;
			EnumType: EnumType<HttpContentType>;
		}

		export const ApplicationJson: ApplicationJson;

		export interface ApplicationXml {
			Name: "ApplicationXml";
			Value: 1;
			EnumType: EnumType<HttpContentType>;
		}

		export const ApplicationXml: ApplicationXml;

		export interface ApplicationUrlEncoded {
			Name: "ApplicationUrlEncoded";
			Value: 2;
			EnumType: EnumType<HttpContentType>;
		}

		export const ApplicationUrlEncoded: ApplicationUrlEncoded;

		export interface TextPlain {
			Name: "TextPlain";
			Value: 3;
			EnumType: EnumType<HttpContentType>;
		}

		export const TextPlain: TextPlain;

		export interface TextXml {
			Name: "TextXml";
			Value: 4;
			EnumType: EnumType<HttpContentType>;
		}

		export const TextXml: TextXml;

		export function GetEnumItems(this: defined): Array<HttpContentType>
	}
	export type HttpContentType = HttpContentType.ApplicationJson | HttpContentType.ApplicationXml | HttpContentType.ApplicationUrlEncoded | HttpContentType.TextPlain | HttpContentType.TextXml;
	export namespace HttpError {
		export interface OK {
			Name: "OK";
			Value: 0;
			EnumType: EnumType<HttpError>;
		}

		export const OK: OK;

		export interface InvalidUrl {
			Name: "InvalidUrl";
			Value: 1;
			EnumType: EnumType<HttpError>;
		}

		export const InvalidUrl: InvalidUrl;

		export interface DnsResolve {
			Name: "DnsResolve";
			Value: 2;
			EnumType: EnumType<HttpError>;
		}

		export const DnsResolve: DnsResolve;

		export interface ConnectFail {
			Name: "ConnectFail";
			Value: 3;
			EnumType: EnumType<HttpError>;
		}

		export const ConnectFail: ConnectFail;

		export interface OutOfMemory {
			Name: "OutOfMemory";
			Value: 4;
			EnumType: EnumType<HttpError>;
		}

		export const OutOfMemory: OutOfMemory;

		export interface TimedOut {
			Name: "TimedOut";
			Value: 5;
			EnumType: EnumType<HttpError>;
		}

		export const TimedOut: TimedOut;

		export interface TooManyRedirects {
			Name: "TooManyRedirects";
			Value: 6;
			EnumType: EnumType<HttpError>;
		}

		export const TooManyRedirects: TooManyRedirects;

		export interface InvalidRedirect {
			Name: "InvalidRedirect";
			Value: 7;
			EnumType: EnumType<HttpError>;
		}

		export const InvalidRedirect: InvalidRedirect;

		export interface NetFail {
			Name: "NetFail";
			Value: 8;
			EnumType: EnumType<HttpError>;
		}

		export const NetFail: NetFail;

		export interface Aborted {
			Name: "Aborted";
			Value: 9;
			EnumType: EnumType<HttpError>;
		}

		export const Aborted: Aborted;

		export interface SslConnectFail {
			Name: "SslConnectFail";
			Value: 10;
			EnumType: EnumType<HttpError>;
		}

		export const SslConnectFail: SslConnectFail;

		export interface SslVerificationFail {
			Name: "SslVerificationFail";
			Value: 11;
			EnumType: EnumType<HttpError>;
		}

		export const SslVerificationFail: SslVerificationFail;

		export interface Unknown {
			Name: "Unknown";
			Value: 12;
			EnumType: EnumType<HttpError>;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: defined): Array<HttpError>
	}
	export type HttpError = HttpError.OK | HttpError.InvalidUrl | HttpError.DnsResolve | HttpError.ConnectFail | HttpError.OutOfMemory | HttpError.TimedOut | HttpError.TooManyRedirects | HttpError.InvalidRedirect | HttpError.NetFail | HttpError.Aborted | HttpError.SslConnectFail | HttpError.SslVerificationFail | HttpError.Unknown;
	export namespace HttpRequestType {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<HttpRequestType>;
		}

		export const Default: Default;

		export interface MarketplaceService {
			Name: "MarketplaceService";
			Value: 2;
			EnumType: EnumType<HttpRequestType>;
		}

		export const MarketplaceService: MarketplaceService;

		export interface Players {
			Name: "Players";
			Value: 7;
			EnumType: EnumType<HttpRequestType>;
		}

		export const Players: Players;

		export interface Chat {
			Name: "Chat";
			Value: 15;
			EnumType: EnumType<HttpRequestType>;
		}

		export const Chat: Chat;

		export interface Avatar {
			Name: "Avatar";
			Value: 16;
			EnumType: EnumType<HttpRequestType>;
		}

		export const Avatar: Avatar;

		export interface Analytics {
			Name: "Analytics";
			Value: 23;
			EnumType: EnumType<HttpRequestType>;
		}

		export const Analytics: Analytics;

		export interface Localization {
			Name: "Localization";
			Value: 25;
			EnumType: EnumType<HttpRequestType>;
		}

		export const Localization: Localization;

		export function GetEnumItems(this: defined): Array<HttpRequestType>
	}
	export type HttpRequestType = HttpRequestType.Default | HttpRequestType.MarketplaceService | HttpRequestType.Players | HttpRequestType.Chat | HttpRequestType.Avatar | HttpRequestType.Analytics | HttpRequestType.Localization;
	export namespace HumanoidCollisionType {
		export interface OuterBox {
			Name: "OuterBox";
			Value: 0;
			EnumType: EnumType<HumanoidCollisionType>;
		}

		export const OuterBox: OuterBox;

		export interface InnerBox {
			Name: "InnerBox";
			Value: 1;
			EnumType: EnumType<HumanoidCollisionType>;
		}

		export const InnerBox: InnerBox;

		export function GetEnumItems(this: defined): Array<HumanoidCollisionType>
	}
	export type HumanoidCollisionType = HumanoidCollisionType.OuterBox | HumanoidCollisionType.InnerBox;
	export namespace HumanoidDisplayDistanceType {
		export interface Viewer {
			Name: "Viewer";
			Value: 0;
			EnumType: EnumType<HumanoidDisplayDistanceType>;
		}

		export const Viewer: Viewer;

		export interface Subject {
			Name: "Subject";
			Value: 1;
			EnumType: EnumType<HumanoidDisplayDistanceType>;
		}

		export const Subject: Subject;

		export interface None {
			Name: "None";
			Value: 2;
			EnumType: EnumType<HumanoidDisplayDistanceType>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<HumanoidDisplayDistanceType>
	}
	export type HumanoidDisplayDistanceType = HumanoidDisplayDistanceType.Viewer | HumanoidDisplayDistanceType.Subject | HumanoidDisplayDistanceType.None;
	export namespace HumanoidHealthDisplayType {
		export interface DisplayWhenDamaged {
			Name: "DisplayWhenDamaged";
			Value: 0;
			EnumType: EnumType<HumanoidHealthDisplayType>;
		}

		export const DisplayWhenDamaged: DisplayWhenDamaged;

		export interface AlwaysOn {
			Name: "AlwaysOn";
			Value: 1;
			EnumType: EnumType<HumanoidHealthDisplayType>;
		}

		export const AlwaysOn: AlwaysOn;

		export interface AlwaysOff {
			Name: "AlwaysOff";
			Value: 2;
			EnumType: EnumType<HumanoidHealthDisplayType>;
		}

		export const AlwaysOff: AlwaysOff;

		export function GetEnumItems(this: defined): Array<HumanoidHealthDisplayType>
	}
	export type HumanoidHealthDisplayType = HumanoidHealthDisplayType.DisplayWhenDamaged | HumanoidHealthDisplayType.AlwaysOn | HumanoidHealthDisplayType.AlwaysOff;
	export namespace HumanoidOnlySetCollisionsOnStateChange {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<HumanoidOnlySetCollisionsOnStateChange>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<HumanoidOnlySetCollisionsOnStateChange>;
		}

		export const Disabled: Disabled;

		export interface Enabled {
			Name: "Enabled";
			Value: 2;
			EnumType: EnumType<HumanoidOnlySetCollisionsOnStateChange>;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: defined): Array<HumanoidOnlySetCollisionsOnStateChange>
	}
	export type HumanoidOnlySetCollisionsOnStateChange = HumanoidOnlySetCollisionsOnStateChange.Default | HumanoidOnlySetCollisionsOnStateChange.Disabled | HumanoidOnlySetCollisionsOnStateChange.Enabled;
	export namespace HumanoidRigType {
		export interface R6 {
			Name: "R6";
			Value: 0;
			EnumType: EnumType<HumanoidRigType>;
		}

		export const R6: R6;

		export interface R15 {
			Name: "R15";
			Value: 1;
			EnumType: EnumType<HumanoidRigType>;
		}

		export const R15: R15;

		export function GetEnumItems(this: defined): Array<HumanoidRigType>
	}
	export type HumanoidRigType = HumanoidRigType.R6 | HumanoidRigType.R15;
	export namespace HumanoidStateType {
		export interface FallingDown {
			Name: "FallingDown";
			Value: 0;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const FallingDown: FallingDown;

		export interface Running {
			Name: "Running";
			Value: 8;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Running: Running;

		export interface RunningNoPhysics {
			Name: "RunningNoPhysics";
			Value: 10;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const RunningNoPhysics: RunningNoPhysics;

		export interface Climbing {
			Name: "Climbing";
			Value: 12;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Climbing: Climbing;

		export interface StrafingNoPhysics {
			Name: "StrafingNoPhysics";
			Value: 11;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const StrafingNoPhysics: StrafingNoPhysics;

		export interface Ragdoll {
			Name: "Ragdoll";
			Value: 1;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Ragdoll: Ragdoll;

		export interface GettingUp {
			Name: "GettingUp";
			Value: 2;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const GettingUp: GettingUp;

		export interface Jumping {
			Name: "Jumping";
			Value: 3;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Jumping: Jumping;

		export interface Landed {
			Name: "Landed";
			Value: 7;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Landed: Landed;

		export interface Flying {
			Name: "Flying";
			Value: 6;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Flying: Flying;

		export interface Freefall {
			Name: "Freefall";
			Value: 5;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Freefall: Freefall;

		export interface Seated {
			Name: "Seated";
			Value: 13;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Seated: Seated;

		export interface PlatformStanding {
			Name: "PlatformStanding";
			Value: 14;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const PlatformStanding: PlatformStanding;

		export interface Dead {
			Name: "Dead";
			Value: 15;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Dead: Dead;

		export interface Swimming {
			Name: "Swimming";
			Value: 4;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Swimming: Swimming;

		export interface Physics {
			Name: "Physics";
			Value: 16;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const Physics: Physics;

		export interface None {
			Name: "None";
			Value: 18;
			EnumType: EnumType<HumanoidStateType>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<HumanoidStateType>
	}
	export type HumanoidStateType = HumanoidStateType.FallingDown | HumanoidStateType.Running | HumanoidStateType.RunningNoPhysics | HumanoidStateType.Climbing | HumanoidStateType.StrafingNoPhysics | HumanoidStateType.Ragdoll | HumanoidStateType.GettingUp | HumanoidStateType.Jumping | HumanoidStateType.Landed | HumanoidStateType.Flying | HumanoidStateType.Freefall | HumanoidStateType.Seated | HumanoidStateType.PlatformStanding | HumanoidStateType.Dead | HumanoidStateType.Swimming | HumanoidStateType.Physics | HumanoidStateType.None;
	export namespace IKCollisionsMode {
		export interface NoCollisions {
			Name: "NoCollisions";
			Value: 0;
			EnumType: EnumType<IKCollisionsMode>;
		}

		export const NoCollisions: NoCollisions;

		export interface OtherMechanismsAnchored {
			Name: "OtherMechanismsAnchored";
			Value: 1;
			EnumType: EnumType<IKCollisionsMode>;
		}

		export const OtherMechanismsAnchored: OtherMechanismsAnchored;

		export interface IncludeContactedMechanisms {
			Name: "IncludeContactedMechanisms";
			Value: 2;
			EnumType: EnumType<IKCollisionsMode>;
		}

		export const IncludeContactedMechanisms: IncludeContactedMechanisms;

		export function GetEnumItems(this: defined): Array<IKCollisionsMode>
	}
	export type IKCollisionsMode = IKCollisionsMode.NoCollisions | IKCollisionsMode.OtherMechanismsAnchored | IKCollisionsMode.IncludeContactedMechanisms;
	export namespace IXPLoadingStatus {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<IXPLoadingStatus>;
		}

		export const None: None;

		export interface Pending {
			Name: "Pending";
			Value: 1;
			EnumType: EnumType<IXPLoadingStatus>;
		}

		export const Pending: Pending;

		export interface Initialized {
			Name: "Initialized";
			Value: 2;
			EnumType: EnumType<IXPLoadingStatus>;
		}

		export const Initialized: Initialized;

		export interface ShutOff {
			Name: "ShutOff";
			Value: 3;
			EnumType: EnumType<IXPLoadingStatus>;
		}

		export const ShutOff: ShutOff;

		export interface ErrorTimedOut {
			Name: "ErrorTimedOut";
			Value: 7;
			EnumType: EnumType<IXPLoadingStatus>;
		}

		export const ErrorTimedOut: ErrorTimedOut;

		export interface ErrorConnection {
			Name: "ErrorConnection";
			Value: 5;
			EnumType: EnumType<IXPLoadingStatus>;
		}

		export const ErrorConnection: ErrorConnection;

		export interface ErrorJsonParse {
			Name: "ErrorJsonParse";
			Value: 6;
			EnumType: EnumType<IXPLoadingStatus>;
		}

		export const ErrorJsonParse: ErrorJsonParse;

		export interface ErrorInvalidUser {
			Name: "ErrorInvalidUser";
			Value: 4;
			EnumType: EnumType<IXPLoadingStatus>;
		}

		export const ErrorInvalidUser: ErrorInvalidUser;

		export function GetEnumItems(this: defined): Array<IXPLoadingStatus>
	}
	export type IXPLoadingStatus = IXPLoadingStatus.None | IXPLoadingStatus.Pending | IXPLoadingStatus.Initialized | IXPLoadingStatus.ShutOff | IXPLoadingStatus.ErrorTimedOut | IXPLoadingStatus.ErrorConnection | IXPLoadingStatus.ErrorJsonParse | IXPLoadingStatus.ErrorInvalidUser;
	export namespace InOut {
		export interface Edge {
			Name: "Edge";
			Value: 0;
			EnumType: EnumType<InOut>;
		}

		export const Edge: Edge;

		export interface Inset {
			Name: "Inset";
			Value: 1;
			EnumType: EnumType<InOut>;
		}

		export const Inset: Inset;

		export interface Center {
			Name: "Center";
			Value: 2;
			EnumType: EnumType<InOut>;
		}

		export const Center: Center;

		export function GetEnumItems(this: defined): Array<InOut>
	}
	export type InOut = InOut.Edge | InOut.Inset | InOut.Center;
	export namespace InfoType {
		export interface Asset {
			Name: "Asset";
			Value: 0;
			EnumType: EnumType<InfoType>;
		}

		export const Asset: Asset;

		export interface Product {
			Name: "Product";
			Value: 1;
			EnumType: EnumType<InfoType>;
		}

		export const Product: Product;

		export interface GamePass {
			Name: "GamePass";
			Value: 2;
			EnumType: EnumType<InfoType>;
		}

		export const GamePass: GamePass;

		export interface Subscription {
			Name: "Subscription";
			Value: 3;
			EnumType: EnumType<InfoType>;
		}

		export const Subscription: Subscription;

		export interface Bundle {
			Name: "Bundle";
			Value: 4;
			EnumType: EnumType<InfoType>;
		}

		export const Bundle: Bundle;

		export function GetEnumItems(this: defined): Array<InfoType>
	}
	export type InfoType = InfoType.Asset | InfoType.Product | InfoType.GamePass | InfoType.Subscription | InfoType.Bundle;
	export namespace InitialDockState {
		export interface Top {
			Name: "Top";
			Value: 0;
			EnumType: EnumType<InitialDockState>;
		}

		export const Top: Top;

		export interface Bottom {
			Name: "Bottom";
			Value: 1;
			EnumType: EnumType<InitialDockState>;
		}

		export const Bottom: Bottom;

		export interface Left {
			Name: "Left";
			Value: 2;
			EnumType: EnumType<InitialDockState>;
		}

		export const Left: Left;

		export interface Right {
			Name: "Right";
			Value: 3;
			EnumType: EnumType<InitialDockState>;
		}

		export const Right: Right;

		export interface Float {
			Name: "Float";
			Value: 4;
			EnumType: EnumType<InitialDockState>;
		}

		export const Float: Float;

		export function GetEnumItems(this: defined): Array<InitialDockState>
	}
	export type InitialDockState = InitialDockState.Top | InitialDockState.Bottom | InitialDockState.Left | InitialDockState.Right | InitialDockState.Float;
	export namespace InputType {
		export interface NoInput {
			Name: "NoInput";
			Value: 0;
			EnumType: EnumType<InputType>;
		}

		export const NoInput: NoInput;

		export interface Constant {
			Name: "Constant";
			Value: 12;
			EnumType: EnumType<InputType>;
		}

		export const Constant: Constant;

		export interface Sin {
			Name: "Sin";
			Value: 13;
			EnumType: EnumType<InputType>;
		}

		export const Sin: Sin;

		export function GetEnumItems(this: defined): Array<InputType>
	}
	export type InputType = InputType.NoInput | InputType.Constant | InputType.Sin;
	export namespace InterpolationThrottlingMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<InterpolationThrottlingMode>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<InterpolationThrottlingMode>;
		}

		export const Disabled: Disabled;

		export interface Enabled {
			Name: "Enabled";
			Value: 2;
			EnumType: EnumType<InterpolationThrottlingMode>;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: defined): Array<InterpolationThrottlingMode>
	}
	export type InterpolationThrottlingMode = InterpolationThrottlingMode.Default | InterpolationThrottlingMode.Disabled | InterpolationThrottlingMode.Enabled;
	export namespace JointCreationMode {
		export interface All {
			Name: "All";
			Value: 0;
			EnumType: EnumType<JointCreationMode>;
		}

		export const All: All;

		export interface Surface {
			Name: "Surface";
			Value: 1;
			EnumType: EnumType<JointCreationMode>;
		}

		export const Surface: Surface;

		export interface None {
			Name: "None";
			Value: 2;
			EnumType: EnumType<JointCreationMode>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<JointCreationMode>
	}
	export type JointCreationMode = JointCreationMode.All | JointCreationMode.Surface | JointCreationMode.None;
	export namespace KeyCode {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<KeyCode>;
		}

		export const Unknown: Unknown;

		export interface Backspace {
			Name: "Backspace";
			Value: 8;
			EnumType: EnumType<KeyCode>;
		}

		export const Backspace: Backspace;

		export interface Tab {
			Name: "Tab";
			Value: 9;
			EnumType: EnumType<KeyCode>;
		}

		export const Tab: Tab;

		export interface Clear {
			Name: "Clear";
			Value: 12;
			EnumType: EnumType<KeyCode>;
		}

		export const Clear: Clear;

		export interface Return {
			Name: "Return";
			Value: 13;
			EnumType: EnumType<KeyCode>;
		}

		export const Return: Return;

		export interface Pause {
			Name: "Pause";
			Value: 19;
			EnumType: EnumType<KeyCode>;
		}

		export const Pause: Pause;

		export interface Escape {
			Name: "Escape";
			Value: 27;
			EnumType: EnumType<KeyCode>;
		}

		export const Escape: Escape;

		export interface Space {
			Name: "Space";
			Value: 32;
			EnumType: EnumType<KeyCode>;
		}

		export const Space: Space;

		export interface QuotedDouble {
			Name: "QuotedDouble";
			Value: 34;
			EnumType: EnumType<KeyCode>;
		}

		export const QuotedDouble: QuotedDouble;

		export interface Hash {
			Name: "Hash";
			Value: 35;
			EnumType: EnumType<KeyCode>;
		}

		export const Hash: Hash;

		export interface Dollar {
			Name: "Dollar";
			Value: 36;
			EnumType: EnumType<KeyCode>;
		}

		export const Dollar: Dollar;

		export interface Percent {
			Name: "Percent";
			Value: 37;
			EnumType: EnumType<KeyCode>;
		}

		export const Percent: Percent;

		export interface Ampersand {
			Name: "Ampersand";
			Value: 38;
			EnumType: EnumType<KeyCode>;
		}

		export const Ampersand: Ampersand;

		export interface Quote {
			Name: "Quote";
			Value: 39;
			EnumType: EnumType<KeyCode>;
		}

		export const Quote: Quote;

		export interface LeftParenthesis {
			Name: "LeftParenthesis";
			Value: 40;
			EnumType: EnumType<KeyCode>;
		}

		export const LeftParenthesis: LeftParenthesis;

		export interface RightParenthesis {
			Name: "RightParenthesis";
			Value: 41;
			EnumType: EnumType<KeyCode>;
		}

		export const RightParenthesis: RightParenthesis;

		export interface Asterisk {
			Name: "Asterisk";
			Value: 42;
			EnumType: EnumType<KeyCode>;
		}

		export const Asterisk: Asterisk;

		export interface Plus {
			Name: "Plus";
			Value: 43;
			EnumType: EnumType<KeyCode>;
		}

		export const Plus: Plus;

		export interface Comma {
			Name: "Comma";
			Value: 44;
			EnumType: EnumType<KeyCode>;
		}

		export const Comma: Comma;

		export interface Minus {
			Name: "Minus";
			Value: 45;
			EnumType: EnumType<KeyCode>;
		}

		export const Minus: Minus;

		export interface Period {
			Name: "Period";
			Value: 46;
			EnumType: EnumType<KeyCode>;
		}

		export const Period: Period;

		export interface Slash {
			Name: "Slash";
			Value: 47;
			EnumType: EnumType<KeyCode>;
		}

		export const Slash: Slash;

		export interface Zero {
			Name: "Zero";
			Value: 48;
			EnumType: EnumType<KeyCode>;
		}

		export const Zero: Zero;

		export interface One {
			Name: "One";
			Value: 49;
			EnumType: EnumType<KeyCode>;
		}

		export const One: One;

		export interface Two {
			Name: "Two";
			Value: 50;
			EnumType: EnumType<KeyCode>;
		}

		export const Two: Two;

		export interface Three {
			Name: "Three";
			Value: 51;
			EnumType: EnumType<KeyCode>;
		}

		export const Three: Three;

		export interface Four {
			Name: "Four";
			Value: 52;
			EnumType: EnumType<KeyCode>;
		}

		export const Four: Four;

		export interface Five {
			Name: "Five";
			Value: 53;
			EnumType: EnumType<KeyCode>;
		}

		export const Five: Five;

		export interface Six {
			Name: "Six";
			Value: 54;
			EnumType: EnumType<KeyCode>;
		}

		export const Six: Six;

		export interface Seven {
			Name: "Seven";
			Value: 55;
			EnumType: EnumType<KeyCode>;
		}

		export const Seven: Seven;

		export interface Eight {
			Name: "Eight";
			Value: 56;
			EnumType: EnumType<KeyCode>;
		}

		export const Eight: Eight;

		export interface Nine {
			Name: "Nine";
			Value: 57;
			EnumType: EnumType<KeyCode>;
		}

		export const Nine: Nine;

		export interface Colon {
			Name: "Colon";
			Value: 58;
			EnumType: EnumType<KeyCode>;
		}

		export const Colon: Colon;

		export interface Semicolon {
			Name: "Semicolon";
			Value: 59;
			EnumType: EnumType<KeyCode>;
		}

		export const Semicolon: Semicolon;

		export interface LessThan {
			Name: "LessThan";
			Value: 60;
			EnumType: EnumType<KeyCode>;
		}

		export const LessThan: LessThan;

		export interface Equals {
			Name: "Equals";
			Value: 61;
			EnumType: EnumType<KeyCode>;
		}

		export const Equals: Equals;

		export interface GreaterThan {
			Name: "GreaterThan";
			Value: 62;
			EnumType: EnumType<KeyCode>;
		}

		export const GreaterThan: GreaterThan;

		export interface Question {
			Name: "Question";
			Value: 63;
			EnumType: EnumType<KeyCode>;
		}

		export const Question: Question;

		export interface At {
			Name: "At";
			Value: 64;
			EnumType: EnumType<KeyCode>;
		}

		export const At: At;

		export interface LeftBracket {
			Name: "LeftBracket";
			Value: 91;
			EnumType: EnumType<KeyCode>;
		}

		export const LeftBracket: LeftBracket;

		export interface BackSlash {
			Name: "BackSlash";
			Value: 92;
			EnumType: EnumType<KeyCode>;
		}

		export const BackSlash: BackSlash;

		export interface RightBracket {
			Name: "RightBracket";
			Value: 93;
			EnumType: EnumType<KeyCode>;
		}

		export const RightBracket: RightBracket;

		export interface Caret {
			Name: "Caret";
			Value: 94;
			EnumType: EnumType<KeyCode>;
		}

		export const Caret: Caret;

		export interface Underscore {
			Name: "Underscore";
			Value: 95;
			EnumType: EnumType<KeyCode>;
		}

		export const Underscore: Underscore;

		export interface Backquote {
			Name: "Backquote";
			Value: 96;
			EnumType: EnumType<KeyCode>;
		}

		export const Backquote: Backquote;

		export interface A {
			Name: "A";
			Value: 97;
			EnumType: EnumType<KeyCode>;
		}

		export const A: A;

		export interface B {
			Name: "B";
			Value: 98;
			EnumType: EnumType<KeyCode>;
		}

		export const B: B;

		export interface C {
			Name: "C";
			Value: 99;
			EnumType: EnumType<KeyCode>;
		}

		export const C: C;

		export interface D {
			Name: "D";
			Value: 100;
			EnumType: EnumType<KeyCode>;
		}

		export const D: D;

		export interface E {
			Name: "E";
			Value: 101;
			EnumType: EnumType<KeyCode>;
		}

		export const E: E;

		export interface F {
			Name: "F";
			Value: 102;
			EnumType: EnumType<KeyCode>;
		}

		export const F: F;

		export interface G {
			Name: "G";
			Value: 103;
			EnumType: EnumType<KeyCode>;
		}

		export const G: G;

		export interface H {
			Name: "H";
			Value: 104;
			EnumType: EnumType<KeyCode>;
		}

		export const H: H;

		export interface I {
			Name: "I";
			Value: 105;
			EnumType: EnumType<KeyCode>;
		}

		export const I: I;

		export interface J {
			Name: "J";
			Value: 106;
			EnumType: EnumType<KeyCode>;
		}

		export const J: J;

		export interface K {
			Name: "K";
			Value: 107;
			EnumType: EnumType<KeyCode>;
		}

		export const K: K;

		export interface L {
			Name: "L";
			Value: 108;
			EnumType: EnumType<KeyCode>;
		}

		export const L: L;

		export interface M {
			Name: "M";
			Value: 109;
			EnumType: EnumType<KeyCode>;
		}

		export const M: M;

		export interface N {
			Name: "N";
			Value: 110;
			EnumType: EnumType<KeyCode>;
		}

		export const N: N;

		export interface O {
			Name: "O";
			Value: 111;
			EnumType: EnumType<KeyCode>;
		}

		export const O: O;

		export interface P {
			Name: "P";
			Value: 112;
			EnumType: EnumType<KeyCode>;
		}

		export const P: P;

		export interface Q {
			Name: "Q";
			Value: 113;
			EnumType: EnumType<KeyCode>;
		}

		export const Q: Q;

		export interface R {
			Name: "R";
			Value: 114;
			EnumType: EnumType<KeyCode>;
		}

		export const R: R;

		export interface S {
			Name: "S";
			Value: 115;
			EnumType: EnumType<KeyCode>;
		}

		export const S: S;

		export interface T {
			Name: "T";
			Value: 116;
			EnumType: EnumType<KeyCode>;
		}

		export const T: T;

		export interface U {
			Name: "U";
			Value: 117;
			EnumType: EnumType<KeyCode>;
		}

		export const U: U;

		export interface V {
			Name: "V";
			Value: 118;
			EnumType: EnumType<KeyCode>;
		}

		export const V: V;

		export interface W {
			Name: "W";
			Value: 119;
			EnumType: EnumType<KeyCode>;
		}

		export const W: W;

		export interface X {
			Name: "X";
			Value: 120;
			EnumType: EnumType<KeyCode>;
		}

		export const X: X;

		export interface Y {
			Name: "Y";
			Value: 121;
			EnumType: EnumType<KeyCode>;
		}

		export const Y: Y;

		export interface Z {
			Name: "Z";
			Value: 122;
			EnumType: EnumType<KeyCode>;
		}

		export const Z: Z;

		export interface LeftCurly {
			Name: "LeftCurly";
			Value: 123;
			EnumType: EnumType<KeyCode>;
		}

		export const LeftCurly: LeftCurly;

		export interface Pipe {
			Name: "Pipe";
			Value: 124;
			EnumType: EnumType<KeyCode>;
		}

		export const Pipe: Pipe;

		export interface RightCurly {
			Name: "RightCurly";
			Value: 125;
			EnumType: EnumType<KeyCode>;
		}

		export const RightCurly: RightCurly;

		export interface Tilde {
			Name: "Tilde";
			Value: 126;
			EnumType: EnumType<KeyCode>;
		}

		export const Tilde: Tilde;

		export interface Delete {
			Name: "Delete";
			Value: 127;
			EnumType: EnumType<KeyCode>;
		}

		export const Delete: Delete;

		export interface KeypadZero {
			Name: "KeypadZero";
			Value: 256;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadZero: KeypadZero;

		export interface KeypadOne {
			Name: "KeypadOne";
			Value: 257;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadOne: KeypadOne;

		export interface KeypadTwo {
			Name: "KeypadTwo";
			Value: 258;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadTwo: KeypadTwo;

		export interface KeypadThree {
			Name: "KeypadThree";
			Value: 259;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadThree: KeypadThree;

		export interface KeypadFour {
			Name: "KeypadFour";
			Value: 260;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadFour: KeypadFour;

		export interface KeypadFive {
			Name: "KeypadFive";
			Value: 261;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadFive: KeypadFive;

		export interface KeypadSix {
			Name: "KeypadSix";
			Value: 262;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadSix: KeypadSix;

		export interface KeypadSeven {
			Name: "KeypadSeven";
			Value: 263;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadSeven: KeypadSeven;

		export interface KeypadEight {
			Name: "KeypadEight";
			Value: 264;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadEight: KeypadEight;

		export interface KeypadNine {
			Name: "KeypadNine";
			Value: 265;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadNine: KeypadNine;

		export interface KeypadPeriod {
			Name: "KeypadPeriod";
			Value: 266;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadPeriod: KeypadPeriod;

		export interface KeypadDivide {
			Name: "KeypadDivide";
			Value: 267;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadDivide: KeypadDivide;

		export interface KeypadMultiply {
			Name: "KeypadMultiply";
			Value: 268;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadMultiply: KeypadMultiply;

		export interface KeypadMinus {
			Name: "KeypadMinus";
			Value: 269;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadMinus: KeypadMinus;

		export interface KeypadPlus {
			Name: "KeypadPlus";
			Value: 270;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadPlus: KeypadPlus;

		export interface KeypadEnter {
			Name: "KeypadEnter";
			Value: 271;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadEnter: KeypadEnter;

		export interface KeypadEquals {
			Name: "KeypadEquals";
			Value: 272;
			EnumType: EnumType<KeyCode>;
		}

		export const KeypadEquals: KeypadEquals;

		export interface Up {
			Name: "Up";
			Value: 273;
			EnumType: EnumType<KeyCode>;
		}

		export const Up: Up;

		export interface Down {
			Name: "Down";
			Value: 274;
			EnumType: EnumType<KeyCode>;
		}

		export const Down: Down;

		export interface Right {
			Name: "Right";
			Value: 275;
			EnumType: EnumType<KeyCode>;
		}

		export const Right: Right;

		export interface Left {
			Name: "Left";
			Value: 276;
			EnumType: EnumType<KeyCode>;
		}

		export const Left: Left;

		export interface Insert {
			Name: "Insert";
			Value: 277;
			EnumType: EnumType<KeyCode>;
		}

		export const Insert: Insert;

		export interface Home {
			Name: "Home";
			Value: 278;
			EnumType: EnumType<KeyCode>;
		}

		export const Home: Home;

		export interface End {
			Name: "End";
			Value: 279;
			EnumType: EnumType<KeyCode>;
		}

		export const End: End;

		export interface PageUp {
			Name: "PageUp";
			Value: 280;
			EnumType: EnumType<KeyCode>;
		}

		export const PageUp: PageUp;

		export interface PageDown {
			Name: "PageDown";
			Value: 281;
			EnumType: EnumType<KeyCode>;
		}

		export const PageDown: PageDown;

		export interface LeftShift {
			Name: "LeftShift";
			Value: 304;
			EnumType: EnumType<KeyCode>;
		}

		export const LeftShift: LeftShift;

		export interface RightShift {
			Name: "RightShift";
			Value: 303;
			EnumType: EnumType<KeyCode>;
		}

		export const RightShift: RightShift;

		export interface LeftMeta {
			Name: "LeftMeta";
			Value: 310;
			EnumType: EnumType<KeyCode>;
		}

		export const LeftMeta: LeftMeta;

		export interface RightMeta {
			Name: "RightMeta";
			Value: 309;
			EnumType: EnumType<KeyCode>;
		}

		export const RightMeta: RightMeta;

		export interface LeftAlt {
			Name: "LeftAlt";
			Value: 308;
			EnumType: EnumType<KeyCode>;
		}

		export const LeftAlt: LeftAlt;

		export interface RightAlt {
			Name: "RightAlt";
			Value: 307;
			EnumType: EnumType<KeyCode>;
		}

		export const RightAlt: RightAlt;

		export interface LeftControl {
			Name: "LeftControl";
			Value: 306;
			EnumType: EnumType<KeyCode>;
		}

		export const LeftControl: LeftControl;

		export interface RightControl {
			Name: "RightControl";
			Value: 305;
			EnumType: EnumType<KeyCode>;
		}

		export const RightControl: RightControl;

		export interface CapsLock {
			Name: "CapsLock";
			Value: 301;
			EnumType: EnumType<KeyCode>;
		}

		export const CapsLock: CapsLock;

		export interface NumLock {
			Name: "NumLock";
			Value: 300;
			EnumType: EnumType<KeyCode>;
		}

		export const NumLock: NumLock;

		export interface ScrollLock {
			Name: "ScrollLock";
			Value: 302;
			EnumType: EnumType<KeyCode>;
		}

		export const ScrollLock: ScrollLock;

		export interface LeftSuper {
			Name: "LeftSuper";
			Value: 311;
			EnumType: EnumType<KeyCode>;
		}

		export const LeftSuper: LeftSuper;

		export interface RightSuper {
			Name: "RightSuper";
			Value: 312;
			EnumType: EnumType<KeyCode>;
		}

		export const RightSuper: RightSuper;

		export interface Mode {
			Name: "Mode";
			Value: 313;
			EnumType: EnumType<KeyCode>;
		}

		export const Mode: Mode;

		export interface Compose {
			Name: "Compose";
			Value: 314;
			EnumType: EnumType<KeyCode>;
		}

		export const Compose: Compose;

		export interface Help {
			Name: "Help";
			Value: 315;
			EnumType: EnumType<KeyCode>;
		}

		export const Help: Help;

		export interface Print {
			Name: "Print";
			Value: 316;
			EnumType: EnumType<KeyCode>;
		}

		export const Print: Print;

		export interface SysReq {
			Name: "SysReq";
			Value: 317;
			EnumType: EnumType<KeyCode>;
		}

		export const SysReq: SysReq;

		export interface Break {
			Name: "Break";
			Value: 318;
			EnumType: EnumType<KeyCode>;
		}

		export const Break: Break;

		export interface Menu {
			Name: "Menu";
			Value: 319;
			EnumType: EnumType<KeyCode>;
		}

		export const Menu: Menu;

		export interface Power {
			Name: "Power";
			Value: 320;
			EnumType: EnumType<KeyCode>;
		}

		export const Power: Power;

		export interface Euro {
			Name: "Euro";
			Value: 321;
			EnumType: EnumType<KeyCode>;
		}

		export const Euro: Euro;

		export interface Undo {
			Name: "Undo";
			Value: 322;
			EnumType: EnumType<KeyCode>;
		}

		export const Undo: Undo;

		export interface F1 {
			Name: "F1";
			Value: 282;
			EnumType: EnumType<KeyCode>;
		}

		export const F1: F1;

		export interface F2 {
			Name: "F2";
			Value: 283;
			EnumType: EnumType<KeyCode>;
		}

		export const F2: F2;

		export interface F3 {
			Name: "F3";
			Value: 284;
			EnumType: EnumType<KeyCode>;
		}

		export const F3: F3;

		export interface F4 {
			Name: "F4";
			Value: 285;
			EnumType: EnumType<KeyCode>;
		}

		export const F4: F4;

		export interface F5 {
			Name: "F5";
			Value: 286;
			EnumType: EnumType<KeyCode>;
		}

		export const F5: F5;

		export interface F6 {
			Name: "F6";
			Value: 287;
			EnumType: EnumType<KeyCode>;
		}

		export const F6: F6;

		export interface F7 {
			Name: "F7";
			Value: 288;
			EnumType: EnumType<KeyCode>;
		}

		export const F7: F7;

		export interface F8 {
			Name: "F8";
			Value: 289;
			EnumType: EnumType<KeyCode>;
		}

		export const F8: F8;

		export interface F9 {
			Name: "F9";
			Value: 290;
			EnumType: EnumType<KeyCode>;
		}

		export const F9: F9;

		export interface F10 {
			Name: "F10";
			Value: 291;
			EnumType: EnumType<KeyCode>;
		}

		export const F10: F10;

		export interface F11 {
			Name: "F11";
			Value: 292;
			EnumType: EnumType<KeyCode>;
		}

		export const F11: F11;

		export interface F12 {
			Name: "F12";
			Value: 293;
			EnumType: EnumType<KeyCode>;
		}

		export const F12: F12;

		export interface F13 {
			Name: "F13";
			Value: 294;
			EnumType: EnumType<KeyCode>;
		}

		export const F13: F13;

		export interface F14 {
			Name: "F14";
			Value: 295;
			EnumType: EnumType<KeyCode>;
		}

		export const F14: F14;

		export interface F15 {
			Name: "F15";
			Value: 296;
			EnumType: EnumType<KeyCode>;
		}

		export const F15: F15;

		export interface World0 {
			Name: "World0";
			Value: 160;
			EnumType: EnumType<KeyCode>;
		}

		export const World0: World0;

		export interface World1 {
			Name: "World1";
			Value: 161;
			EnumType: EnumType<KeyCode>;
		}

		export const World1: World1;

		export interface World2 {
			Name: "World2";
			Value: 162;
			EnumType: EnumType<KeyCode>;
		}

		export const World2: World2;

		export interface World3 {
			Name: "World3";
			Value: 163;
			EnumType: EnumType<KeyCode>;
		}

		export const World3: World3;

		export interface World4 {
			Name: "World4";
			Value: 164;
			EnumType: EnumType<KeyCode>;
		}

		export const World4: World4;

		export interface World5 {
			Name: "World5";
			Value: 165;
			EnumType: EnumType<KeyCode>;
		}

		export const World5: World5;

		export interface World6 {
			Name: "World6";
			Value: 166;
			EnumType: EnumType<KeyCode>;
		}

		export const World6: World6;

		export interface World7 {
			Name: "World7";
			Value: 167;
			EnumType: EnumType<KeyCode>;
		}

		export const World7: World7;

		export interface World8 {
			Name: "World8";
			Value: 168;
			EnumType: EnumType<KeyCode>;
		}

		export const World8: World8;

		export interface World9 {
			Name: "World9";
			Value: 169;
			EnumType: EnumType<KeyCode>;
		}

		export const World9: World9;

		export interface World10 {
			Name: "World10";
			Value: 170;
			EnumType: EnumType<KeyCode>;
		}

		export const World10: World10;

		export interface World11 {
			Name: "World11";
			Value: 171;
			EnumType: EnumType<KeyCode>;
		}

		export const World11: World11;

		export interface World12 {
			Name: "World12";
			Value: 172;
			EnumType: EnumType<KeyCode>;
		}

		export const World12: World12;

		export interface World13 {
			Name: "World13";
			Value: 173;
			EnumType: EnumType<KeyCode>;
		}

		export const World13: World13;

		export interface World14 {
			Name: "World14";
			Value: 174;
			EnumType: EnumType<KeyCode>;
		}

		export const World14: World14;

		export interface World15 {
			Name: "World15";
			Value: 175;
			EnumType: EnumType<KeyCode>;
		}

		export const World15: World15;

		export interface World16 {
			Name: "World16";
			Value: 176;
			EnumType: EnumType<KeyCode>;
		}

		export const World16: World16;

		export interface World17 {
			Name: "World17";
			Value: 177;
			EnumType: EnumType<KeyCode>;
		}

		export const World17: World17;

		export interface World18 {
			Name: "World18";
			Value: 178;
			EnumType: EnumType<KeyCode>;
		}

		export const World18: World18;

		export interface World19 {
			Name: "World19";
			Value: 179;
			EnumType: EnumType<KeyCode>;
		}

		export const World19: World19;

		export interface World20 {
			Name: "World20";
			Value: 180;
			EnumType: EnumType<KeyCode>;
		}

		export const World20: World20;

		export interface World21 {
			Name: "World21";
			Value: 181;
			EnumType: EnumType<KeyCode>;
		}

		export const World21: World21;

		export interface World22 {
			Name: "World22";
			Value: 182;
			EnumType: EnumType<KeyCode>;
		}

		export const World22: World22;

		export interface World23 {
			Name: "World23";
			Value: 183;
			EnumType: EnumType<KeyCode>;
		}

		export const World23: World23;

		export interface World24 {
			Name: "World24";
			Value: 184;
			EnumType: EnumType<KeyCode>;
		}

		export const World24: World24;

		export interface World25 {
			Name: "World25";
			Value: 185;
			EnumType: EnumType<KeyCode>;
		}

		export const World25: World25;

		export interface World26 {
			Name: "World26";
			Value: 186;
			EnumType: EnumType<KeyCode>;
		}

		export const World26: World26;

		export interface World27 {
			Name: "World27";
			Value: 187;
			EnumType: EnumType<KeyCode>;
		}

		export const World27: World27;

		export interface World28 {
			Name: "World28";
			Value: 188;
			EnumType: EnumType<KeyCode>;
		}

		export const World28: World28;

		export interface World29 {
			Name: "World29";
			Value: 189;
			EnumType: EnumType<KeyCode>;
		}

		export const World29: World29;

		export interface World30 {
			Name: "World30";
			Value: 190;
			EnumType: EnumType<KeyCode>;
		}

		export const World30: World30;

		export interface World31 {
			Name: "World31";
			Value: 191;
			EnumType: EnumType<KeyCode>;
		}

		export const World31: World31;

		export interface World32 {
			Name: "World32";
			Value: 192;
			EnumType: EnumType<KeyCode>;
		}

		export const World32: World32;

		export interface World33 {
			Name: "World33";
			Value: 193;
			EnumType: EnumType<KeyCode>;
		}

		export const World33: World33;

		export interface World34 {
			Name: "World34";
			Value: 194;
			EnumType: EnumType<KeyCode>;
		}

		export const World34: World34;

		export interface World35 {
			Name: "World35";
			Value: 195;
			EnumType: EnumType<KeyCode>;
		}

		export const World35: World35;

		export interface World36 {
			Name: "World36";
			Value: 196;
			EnumType: EnumType<KeyCode>;
		}

		export const World36: World36;

		export interface World37 {
			Name: "World37";
			Value: 197;
			EnumType: EnumType<KeyCode>;
		}

		export const World37: World37;

		export interface World38 {
			Name: "World38";
			Value: 198;
			EnumType: EnumType<KeyCode>;
		}

		export const World38: World38;

		export interface World39 {
			Name: "World39";
			Value: 199;
			EnumType: EnumType<KeyCode>;
		}

		export const World39: World39;

		export interface World40 {
			Name: "World40";
			Value: 200;
			EnumType: EnumType<KeyCode>;
		}

		export const World40: World40;

		export interface World41 {
			Name: "World41";
			Value: 201;
			EnumType: EnumType<KeyCode>;
		}

		export const World41: World41;

		export interface World42 {
			Name: "World42";
			Value: 202;
			EnumType: EnumType<KeyCode>;
		}

		export const World42: World42;

		export interface World43 {
			Name: "World43";
			Value: 203;
			EnumType: EnumType<KeyCode>;
		}

		export const World43: World43;

		export interface World44 {
			Name: "World44";
			Value: 204;
			EnumType: EnumType<KeyCode>;
		}

		export const World44: World44;

		export interface World45 {
			Name: "World45";
			Value: 205;
			EnumType: EnumType<KeyCode>;
		}

		export const World45: World45;

		export interface World46 {
			Name: "World46";
			Value: 206;
			EnumType: EnumType<KeyCode>;
		}

		export const World46: World46;

		export interface World47 {
			Name: "World47";
			Value: 207;
			EnumType: EnumType<KeyCode>;
		}

		export const World47: World47;

		export interface World48 {
			Name: "World48";
			Value: 208;
			EnumType: EnumType<KeyCode>;
		}

		export const World48: World48;

		export interface World49 {
			Name: "World49";
			Value: 209;
			EnumType: EnumType<KeyCode>;
		}

		export const World49: World49;

		export interface World50 {
			Name: "World50";
			Value: 210;
			EnumType: EnumType<KeyCode>;
		}

		export const World50: World50;

		export interface World51 {
			Name: "World51";
			Value: 211;
			EnumType: EnumType<KeyCode>;
		}

		export const World51: World51;

		export interface World52 {
			Name: "World52";
			Value: 212;
			EnumType: EnumType<KeyCode>;
		}

		export const World52: World52;

		export interface World53 {
			Name: "World53";
			Value: 213;
			EnumType: EnumType<KeyCode>;
		}

		export const World53: World53;

		export interface World54 {
			Name: "World54";
			Value: 214;
			EnumType: EnumType<KeyCode>;
		}

		export const World54: World54;

		export interface World55 {
			Name: "World55";
			Value: 215;
			EnumType: EnumType<KeyCode>;
		}

		export const World55: World55;

		export interface World56 {
			Name: "World56";
			Value: 216;
			EnumType: EnumType<KeyCode>;
		}

		export const World56: World56;

		export interface World57 {
			Name: "World57";
			Value: 217;
			EnumType: EnumType<KeyCode>;
		}

		export const World57: World57;

		export interface World58 {
			Name: "World58";
			Value: 218;
			EnumType: EnumType<KeyCode>;
		}

		export const World58: World58;

		export interface World59 {
			Name: "World59";
			Value: 219;
			EnumType: EnumType<KeyCode>;
		}

		export const World59: World59;

		export interface World60 {
			Name: "World60";
			Value: 220;
			EnumType: EnumType<KeyCode>;
		}

		export const World60: World60;

		export interface World61 {
			Name: "World61";
			Value: 221;
			EnumType: EnumType<KeyCode>;
		}

		export const World61: World61;

		export interface World62 {
			Name: "World62";
			Value: 222;
			EnumType: EnumType<KeyCode>;
		}

		export const World62: World62;

		export interface World63 {
			Name: "World63";
			Value: 223;
			EnumType: EnumType<KeyCode>;
		}

		export const World63: World63;

		export interface World64 {
			Name: "World64";
			Value: 224;
			EnumType: EnumType<KeyCode>;
		}

		export const World64: World64;

		export interface World65 {
			Name: "World65";
			Value: 225;
			EnumType: EnumType<KeyCode>;
		}

		export const World65: World65;

		export interface World66 {
			Name: "World66";
			Value: 226;
			EnumType: EnumType<KeyCode>;
		}

		export const World66: World66;

		export interface World67 {
			Name: "World67";
			Value: 227;
			EnumType: EnumType<KeyCode>;
		}

		export const World67: World67;

		export interface World68 {
			Name: "World68";
			Value: 228;
			EnumType: EnumType<KeyCode>;
		}

		export const World68: World68;

		export interface World69 {
			Name: "World69";
			Value: 229;
			EnumType: EnumType<KeyCode>;
		}

		export const World69: World69;

		export interface World70 {
			Name: "World70";
			Value: 230;
			EnumType: EnumType<KeyCode>;
		}

		export const World70: World70;

		export interface World71 {
			Name: "World71";
			Value: 231;
			EnumType: EnumType<KeyCode>;
		}

		export const World71: World71;

		export interface World72 {
			Name: "World72";
			Value: 232;
			EnumType: EnumType<KeyCode>;
		}

		export const World72: World72;

		export interface World73 {
			Name: "World73";
			Value: 233;
			EnumType: EnumType<KeyCode>;
		}

		export const World73: World73;

		export interface World74 {
			Name: "World74";
			Value: 234;
			EnumType: EnumType<KeyCode>;
		}

		export const World74: World74;

		export interface World75 {
			Name: "World75";
			Value: 235;
			EnumType: EnumType<KeyCode>;
		}

		export const World75: World75;

		export interface World76 {
			Name: "World76";
			Value: 236;
			EnumType: EnumType<KeyCode>;
		}

		export const World76: World76;

		export interface World77 {
			Name: "World77";
			Value: 237;
			EnumType: EnumType<KeyCode>;
		}

		export const World77: World77;

		export interface World78 {
			Name: "World78";
			Value: 238;
			EnumType: EnumType<KeyCode>;
		}

		export const World78: World78;

		export interface World79 {
			Name: "World79";
			Value: 239;
			EnumType: EnumType<KeyCode>;
		}

		export const World79: World79;

		export interface World80 {
			Name: "World80";
			Value: 240;
			EnumType: EnumType<KeyCode>;
		}

		export const World80: World80;

		export interface World81 {
			Name: "World81";
			Value: 241;
			EnumType: EnumType<KeyCode>;
		}

		export const World81: World81;

		export interface World82 {
			Name: "World82";
			Value: 242;
			EnumType: EnumType<KeyCode>;
		}

		export const World82: World82;

		export interface World83 {
			Name: "World83";
			Value: 243;
			EnumType: EnumType<KeyCode>;
		}

		export const World83: World83;

		export interface World84 {
			Name: "World84";
			Value: 244;
			EnumType: EnumType<KeyCode>;
		}

		export const World84: World84;

		export interface World85 {
			Name: "World85";
			Value: 245;
			EnumType: EnumType<KeyCode>;
		}

		export const World85: World85;

		export interface World86 {
			Name: "World86";
			Value: 246;
			EnumType: EnumType<KeyCode>;
		}

		export const World86: World86;

		export interface World87 {
			Name: "World87";
			Value: 247;
			EnumType: EnumType<KeyCode>;
		}

		export const World87: World87;

		export interface World88 {
			Name: "World88";
			Value: 248;
			EnumType: EnumType<KeyCode>;
		}

		export const World88: World88;

		export interface World89 {
			Name: "World89";
			Value: 249;
			EnumType: EnumType<KeyCode>;
		}

		export const World89: World89;

		export interface World90 {
			Name: "World90";
			Value: 250;
			EnumType: EnumType<KeyCode>;
		}

		export const World90: World90;

		export interface World91 {
			Name: "World91";
			Value: 251;
			EnumType: EnumType<KeyCode>;
		}

		export const World91: World91;

		export interface World92 {
			Name: "World92";
			Value: 252;
			EnumType: EnumType<KeyCode>;
		}

		export const World92: World92;

		export interface World93 {
			Name: "World93";
			Value: 253;
			EnumType: EnumType<KeyCode>;
		}

		export const World93: World93;

		export interface World94 {
			Name: "World94";
			Value: 254;
			EnumType: EnumType<KeyCode>;
		}

		export const World94: World94;

		export interface World95 {
			Name: "World95";
			Value: 255;
			EnumType: EnumType<KeyCode>;
		}

		export const World95: World95;

		export interface ButtonX {
			Name: "ButtonX";
			Value: 1000;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonX: ButtonX;

		export interface ButtonY {
			Name: "ButtonY";
			Value: 1001;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonY: ButtonY;

		export interface ButtonA {
			Name: "ButtonA";
			Value: 1002;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonA: ButtonA;

		export interface ButtonB {
			Name: "ButtonB";
			Value: 1003;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonB: ButtonB;

		export interface ButtonR1 {
			Name: "ButtonR1";
			Value: 1004;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonR1: ButtonR1;

		export interface ButtonL1 {
			Name: "ButtonL1";
			Value: 1005;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonL1: ButtonL1;

		export interface ButtonR2 {
			Name: "ButtonR2";
			Value: 1006;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonR2: ButtonR2;

		export interface ButtonL2 {
			Name: "ButtonL2";
			Value: 1007;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonL2: ButtonL2;

		export interface ButtonR3 {
			Name: "ButtonR3";
			Value: 1008;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonR3: ButtonR3;

		export interface ButtonL3 {
			Name: "ButtonL3";
			Value: 1009;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonL3: ButtonL3;

		export interface ButtonStart {
			Name: "ButtonStart";
			Value: 1010;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonStart: ButtonStart;

		export interface ButtonSelect {
			Name: "ButtonSelect";
			Value: 1011;
			EnumType: EnumType<KeyCode>;
		}

		export const ButtonSelect: ButtonSelect;

		export interface DPadLeft {
			Name: "DPadLeft";
			Value: 1012;
			EnumType: EnumType<KeyCode>;
		}

		export const DPadLeft: DPadLeft;

		export interface DPadRight {
			Name: "DPadRight";
			Value: 1013;
			EnumType: EnumType<KeyCode>;
		}

		export const DPadRight: DPadRight;

		export interface DPadUp {
			Name: "DPadUp";
			Value: 1014;
			EnumType: EnumType<KeyCode>;
		}

		export const DPadUp: DPadUp;

		export interface DPadDown {
			Name: "DPadDown";
			Value: 1015;
			EnumType: EnumType<KeyCode>;
		}

		export const DPadDown: DPadDown;

		export interface Thumbstick1 {
			Name: "Thumbstick1";
			Value: 1016;
			EnumType: EnumType<KeyCode>;
		}

		export const Thumbstick1: Thumbstick1;

		export interface Thumbstick2 {
			Name: "Thumbstick2";
			Value: 1017;
			EnumType: EnumType<KeyCode>;
		}

		export const Thumbstick2: Thumbstick2;

		export function GetEnumItems(this: defined): Array<KeyCode>
	}
	export type KeyCode = KeyCode.Unknown | KeyCode.Backspace | KeyCode.Tab | KeyCode.Clear | KeyCode.Return | KeyCode.Pause | KeyCode.Escape | KeyCode.Space | KeyCode.QuotedDouble | KeyCode.Hash | KeyCode.Dollar | KeyCode.Percent | KeyCode.Ampersand | KeyCode.Quote | KeyCode.LeftParenthesis | KeyCode.RightParenthesis | KeyCode.Asterisk | KeyCode.Plus | KeyCode.Comma | KeyCode.Minus | KeyCode.Period | KeyCode.Slash | KeyCode.Zero | KeyCode.One | KeyCode.Two | KeyCode.Three | KeyCode.Four | KeyCode.Five | KeyCode.Six | KeyCode.Seven | KeyCode.Eight | KeyCode.Nine | KeyCode.Colon | KeyCode.Semicolon | KeyCode.LessThan | KeyCode.Equals | KeyCode.GreaterThan | KeyCode.Question | KeyCode.At | KeyCode.LeftBracket | KeyCode.BackSlash | KeyCode.RightBracket | KeyCode.Caret | KeyCode.Underscore | KeyCode.Backquote | KeyCode.A | KeyCode.B | KeyCode.C | KeyCode.D | KeyCode.E | KeyCode.F | KeyCode.G | KeyCode.H | KeyCode.I | KeyCode.J | KeyCode.K | KeyCode.L | KeyCode.M | KeyCode.N | KeyCode.O | KeyCode.P | KeyCode.Q | KeyCode.R | KeyCode.S | KeyCode.T | KeyCode.U | KeyCode.V | KeyCode.W | KeyCode.X | KeyCode.Y | KeyCode.Z | KeyCode.LeftCurly | KeyCode.Pipe | KeyCode.RightCurly | KeyCode.Tilde | KeyCode.Delete | KeyCode.KeypadZero | KeyCode.KeypadOne | KeyCode.KeypadTwo | KeyCode.KeypadThree | KeyCode.KeypadFour | KeyCode.KeypadFive | KeyCode.KeypadSix | KeyCode.KeypadSeven | KeyCode.KeypadEight | KeyCode.KeypadNine | KeyCode.KeypadPeriod | KeyCode.KeypadDivide | KeyCode.KeypadMultiply | KeyCode.KeypadMinus | KeyCode.KeypadPlus | KeyCode.KeypadEnter | KeyCode.KeypadEquals | KeyCode.Up | KeyCode.Down | KeyCode.Right | KeyCode.Left | KeyCode.Insert | KeyCode.Home | KeyCode.End | KeyCode.PageUp | KeyCode.PageDown | KeyCode.LeftShift | KeyCode.RightShift | KeyCode.LeftMeta | KeyCode.RightMeta | KeyCode.LeftAlt | KeyCode.RightAlt | KeyCode.LeftControl | KeyCode.RightControl | KeyCode.CapsLock | KeyCode.NumLock | KeyCode.ScrollLock | KeyCode.LeftSuper | KeyCode.RightSuper | KeyCode.Mode | KeyCode.Compose | KeyCode.Help | KeyCode.Print | KeyCode.SysReq | KeyCode.Break | KeyCode.Menu | KeyCode.Power | KeyCode.Euro | KeyCode.Undo | KeyCode.F1 | KeyCode.F2 | KeyCode.F3 | KeyCode.F4 | KeyCode.F5 | KeyCode.F6 | KeyCode.F7 | KeyCode.F8 | KeyCode.F9 | KeyCode.F10 | KeyCode.F11 | KeyCode.F12 | KeyCode.F13 | KeyCode.F14 | KeyCode.F15 | KeyCode.World0 | KeyCode.World1 | KeyCode.World2 | KeyCode.World3 | KeyCode.World4 | KeyCode.World5 | KeyCode.World6 | KeyCode.World7 | KeyCode.World8 | KeyCode.World9 | KeyCode.World10 | KeyCode.World11 | KeyCode.World12 | KeyCode.World13 | KeyCode.World14 | KeyCode.World15 | KeyCode.World16 | KeyCode.World17 | KeyCode.World18 | KeyCode.World19 | KeyCode.World20 | KeyCode.World21 | KeyCode.World22 | KeyCode.World23 | KeyCode.World24 | KeyCode.World25 | KeyCode.World26 | KeyCode.World27 | KeyCode.World28 | KeyCode.World29 | KeyCode.World30 | KeyCode.World31 | KeyCode.World32 | KeyCode.World33 | KeyCode.World34 | KeyCode.World35 | KeyCode.World36 | KeyCode.World37 | KeyCode.World38 | KeyCode.World39 | KeyCode.World40 | KeyCode.World41 | KeyCode.World42 | KeyCode.World43 | KeyCode.World44 | KeyCode.World45 | KeyCode.World46 | KeyCode.World47 | KeyCode.World48 | KeyCode.World49 | KeyCode.World50 | KeyCode.World51 | KeyCode.World52 | KeyCode.World53 | KeyCode.World54 | KeyCode.World55 | KeyCode.World56 | KeyCode.World57 | KeyCode.World58 | KeyCode.World59 | KeyCode.World60 | KeyCode.World61 | KeyCode.World62 | KeyCode.World63 | KeyCode.World64 | KeyCode.World65 | KeyCode.World66 | KeyCode.World67 | KeyCode.World68 | KeyCode.World69 | KeyCode.World70 | KeyCode.World71 | KeyCode.World72 | KeyCode.World73 | KeyCode.World74 | KeyCode.World75 | KeyCode.World76 | KeyCode.World77 | KeyCode.World78 | KeyCode.World79 | KeyCode.World80 | KeyCode.World81 | KeyCode.World82 | KeyCode.World83 | KeyCode.World84 | KeyCode.World85 | KeyCode.World86 | KeyCode.World87 | KeyCode.World88 | KeyCode.World89 | KeyCode.World90 | KeyCode.World91 | KeyCode.World92 | KeyCode.World93 | KeyCode.World94 | KeyCode.World95 | KeyCode.ButtonX | KeyCode.ButtonY | KeyCode.ButtonA | KeyCode.ButtonB | KeyCode.ButtonR1 | KeyCode.ButtonL1 | KeyCode.ButtonR2 | KeyCode.ButtonL2 | KeyCode.ButtonR3 | KeyCode.ButtonL3 | KeyCode.ButtonStart | KeyCode.ButtonSelect | KeyCode.DPadLeft | KeyCode.DPadRight | KeyCode.DPadUp | KeyCode.DPadDown | KeyCode.Thumbstick1 | KeyCode.Thumbstick2;
	export namespace KeyInterpolationMode {
		export interface Constant {
			Name: "Constant";
			Value: 0;
			EnumType: EnumType<KeyInterpolationMode>;
		}

		export const Constant: Constant;

		export interface Linear {
			Name: "Linear";
			Value: 1;
			EnumType: EnumType<KeyInterpolationMode>;
		}

		export const Linear: Linear;

		export interface Cubic {
			Name: "Cubic";
			Value: 2;
			EnumType: EnumType<KeyInterpolationMode>;
		}

		export const Cubic: Cubic;

		export function GetEnumItems(this: defined): Array<KeyInterpolationMode>
	}
	export type KeyInterpolationMode = KeyInterpolationMode.Constant | KeyInterpolationMode.Linear | KeyInterpolationMode.Cubic;
	export namespace KeywordFilterType {
		export interface Include {
			Name: "Include";
			Value: 0;
			EnumType: EnumType<KeywordFilterType>;
		}

		export const Include: Include;

		export interface Exclude {
			Name: "Exclude";
			Value: 1;
			EnumType: EnumType<KeywordFilterType>;
		}

		export const Exclude: Exclude;

		export function GetEnumItems(this: defined): Array<KeywordFilterType>
	}
	export type KeywordFilterType = KeywordFilterType.Include | KeywordFilterType.Exclude;
	export namespace Language {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Language>;
		}

		export const Default: Default;

		export function GetEnumItems(this: defined): Array<Language>
	}
	export type Language = Language.Default;
	export namespace LeftRight {
		export interface Left {
			Name: "Left";
			Value: 0;
			EnumType: EnumType<LeftRight>;
		}

		export const Left: Left;

		export interface Center {
			Name: "Center";
			Value: 1;
			EnumType: EnumType<LeftRight>;
		}

		export const Center: Center;

		export interface Right {
			Name: "Right";
			Value: 2;
			EnumType: EnumType<LeftRight>;
		}

		export const Right: Right;

		export function GetEnumItems(this: defined): Array<LeftRight>
	}
	export type LeftRight = LeftRight.Left | LeftRight.Center | LeftRight.Right;
	export namespace LevelOfDetailSetting {
		export interface High {
			Name: "High";
			Value: 2;
			EnumType: EnumType<LevelOfDetailSetting>;
		}

		export const High: High;

		export interface Medium {
			Name: "Medium";
			Value: 1;
			EnumType: EnumType<LevelOfDetailSetting>;
		}

		export const Medium: Medium;

		export interface Low {
			Name: "Low";
			Value: 0;
			EnumType: EnumType<LevelOfDetailSetting>;
		}

		export const Low: Low;

		export function GetEnumItems(this: defined): Array<LevelOfDetailSetting>
	}
	export type LevelOfDetailSetting = LevelOfDetailSetting.High | LevelOfDetailSetting.Medium | LevelOfDetailSetting.Low;
	export namespace Limb {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<Limb>;
		}

		export const Head: Head;

		export interface Torso {
			Name: "Torso";
			Value: 1;
			EnumType: EnumType<Limb>;
		}

		export const Torso: Torso;

		export interface LeftArm {
			Name: "LeftArm";
			Value: 2;
			EnumType: EnumType<Limb>;
		}

		export const LeftArm: LeftArm;

		export interface RightArm {
			Name: "RightArm";
			Value: 3;
			EnumType: EnumType<Limb>;
		}

		export const RightArm: RightArm;

		export interface LeftLeg {
			Name: "LeftLeg";
			Value: 4;
			EnumType: EnumType<Limb>;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg {
			Name: "RightLeg";
			Value: 5;
			EnumType: EnumType<Limb>;
		}

		export const RightLeg: RightLeg;

		export interface Unknown {
			Name: "Unknown";
			Value: 6;
			EnumType: EnumType<Limb>;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: defined): Array<Limb>
	}
	export type Limb = Limb.Head | Limb.Torso | Limb.LeftArm | Limb.RightArm | Limb.LeftLeg | Limb.RightLeg | Limb.Unknown;
	export namespace LineJoinMode {
		export interface Round {
			Name: "Round";
			Value: 0;
			EnumType: EnumType<LineJoinMode>;
		}

		export const Round: Round;

		export interface Bevel {
			Name: "Bevel";
			Value: 1;
			EnumType: EnumType<LineJoinMode>;
		}

		export const Bevel: Bevel;

		export interface Miter {
			Name: "Miter";
			Value: 2;
			EnumType: EnumType<LineJoinMode>;
		}

		export const Miter: Miter;

		export function GetEnumItems(this: defined): Array<LineJoinMode>
	}
	export type LineJoinMode = LineJoinMode.Round | LineJoinMode.Bevel | LineJoinMode.Miter;
	export namespace ListDisplayMode {
		export interface Horizontal {
			Name: "Horizontal";
			Value: 0;
			EnumType: EnumType<ListDisplayMode>;
		}

		export const Horizontal: Horizontal;

		export interface Vertical {
			Name: "Vertical";
			Value: 1;
			EnumType: EnumType<ListDisplayMode>;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: defined): Array<ListDisplayMode>
	}
	export type ListDisplayMode = ListDisplayMode.Horizontal | ListDisplayMode.Vertical;
	export namespace ListenerType {
		export interface Camera {
			Name: "Camera";
			Value: 0;
			EnumType: EnumType<ListenerType>;
		}

		export const Camera: Camera;

		export interface CFrame {
			Name: "CFrame";
			Value: 1;
			EnumType: EnumType<ListenerType>;
		}

		export const CFrame: CFrame;

		export interface ObjectPosition {
			Name: "ObjectPosition";
			Value: 2;
			EnumType: EnumType<ListenerType>;
		}

		export const ObjectPosition: ObjectPosition;

		export interface ObjectCFrame {
			Name: "ObjectCFrame";
			Value: 3;
			EnumType: EnumType<ListenerType>;
		}

		export const ObjectCFrame: ObjectCFrame;

		export function GetEnumItems(this: defined): Array<ListenerType>
	}
	export type ListenerType = ListenerType.Camera | ListenerType.CFrame | ListenerType.ObjectPosition | ListenerType.ObjectCFrame;
	export namespace LoadCharacterLayeredClothing {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<LoadCharacterLayeredClothing>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<LoadCharacterLayeredClothing>;
		}

		export const Disabled: Disabled;

		export interface Enabled {
			Name: "Enabled";
			Value: 2;
			EnumType: EnumType<LoadCharacterLayeredClothing>;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: defined): Array<LoadCharacterLayeredClothing>
	}
	export type LoadCharacterLayeredClothing = LoadCharacterLayeredClothing.Default | LoadCharacterLayeredClothing.Disabled | LoadCharacterLayeredClothing.Enabled;
	export namespace Material {
		export interface Plastic {
			Name: "Plastic";
			Value: 256;
			EnumType: EnumType<Material>;
		}

		export const Plastic: Plastic;

		export interface Wood {
			Name: "Wood";
			Value: 512;
			EnumType: EnumType<Material>;
		}

		export const Wood: Wood;

		export interface Slate {
			Name: "Slate";
			Value: 800;
			EnumType: EnumType<Material>;
		}

		export const Slate: Slate;

		export interface Concrete {
			Name: "Concrete";
			Value: 816;
			EnumType: EnumType<Material>;
		}

		export const Concrete: Concrete;

		export interface CorrodedMetal {
			Name: "CorrodedMetal";
			Value: 1040;
			EnumType: EnumType<Material>;
		}

		export const CorrodedMetal: CorrodedMetal;

		export interface DiamondPlate {
			Name: "DiamondPlate";
			Value: 1056;
			EnumType: EnumType<Material>;
		}

		export const DiamondPlate: DiamondPlate;

		export interface Foil {
			Name: "Foil";
			Value: 1072;
			EnumType: EnumType<Material>;
		}

		export const Foil: Foil;

		export interface Grass {
			Name: "Grass";
			Value: 1280;
			EnumType: EnumType<Material>;
		}

		export const Grass: Grass;

		export interface Ice {
			Name: "Ice";
			Value: 1536;
			EnumType: EnumType<Material>;
		}

		export const Ice: Ice;

		export interface Marble {
			Name: "Marble";
			Value: 784;
			EnumType: EnumType<Material>;
		}

		export const Marble: Marble;

		export interface Granite {
			Name: "Granite";
			Value: 832;
			EnumType: EnumType<Material>;
		}

		export const Granite: Granite;

		export interface Brick {
			Name: "Brick";
			Value: 848;
			EnumType: EnumType<Material>;
		}

		export const Brick: Brick;

		export interface Pebble {
			Name: "Pebble";
			Value: 864;
			EnumType: EnumType<Material>;
		}

		export const Pebble: Pebble;

		export interface Sand {
			Name: "Sand";
			Value: 1296;
			EnumType: EnumType<Material>;
		}

		export const Sand: Sand;

		export interface Fabric {
			Name: "Fabric";
			Value: 1312;
			EnumType: EnumType<Material>;
		}

		export const Fabric: Fabric;

		export interface SmoothPlastic {
			Name: "SmoothPlastic";
			Value: 272;
			EnumType: EnumType<Material>;
		}

		export const SmoothPlastic: SmoothPlastic;

		export interface Metal {
			Name: "Metal";
			Value: 1088;
			EnumType: EnumType<Material>;
		}

		export const Metal: Metal;

		export interface WoodPlanks {
			Name: "WoodPlanks";
			Value: 528;
			EnumType: EnumType<Material>;
		}

		export const WoodPlanks: WoodPlanks;

		export interface Cobblestone {
			Name: "Cobblestone";
			Value: 880;
			EnumType: EnumType<Material>;
		}

		export const Cobblestone: Cobblestone;

		export interface Air {
			Name: "Air";
			Value: 1792;
			EnumType: EnumType<Material>;
		}

		export const Air: Air;

		export interface Water {
			Name: "Water";
			Value: 2048;
			EnumType: EnumType<Material>;
		}

		export const Water: Water;

		export interface Rock {
			Name: "Rock";
			Value: 896;
			EnumType: EnumType<Material>;
		}

		export const Rock: Rock;

		export interface Glacier {
			Name: "Glacier";
			Value: 1552;
			EnumType: EnumType<Material>;
		}

		export const Glacier: Glacier;

		export interface Snow {
			Name: "Snow";
			Value: 1328;
			EnumType: EnumType<Material>;
		}

		export const Snow: Snow;

		export interface Sandstone {
			Name: "Sandstone";
			Value: 912;
			EnumType: EnumType<Material>;
		}

		export const Sandstone: Sandstone;

		export interface Mud {
			Name: "Mud";
			Value: 1344;
			EnumType: EnumType<Material>;
		}

		export const Mud: Mud;

		export interface Basalt {
			Name: "Basalt";
			Value: 788;
			EnumType: EnumType<Material>;
		}

		export const Basalt: Basalt;

		export interface Ground {
			Name: "Ground";
			Value: 1360;
			EnumType: EnumType<Material>;
		}

		export const Ground: Ground;

		export interface CrackedLava {
			Name: "CrackedLava";
			Value: 804;
			EnumType: EnumType<Material>;
		}

		export const CrackedLava: CrackedLava;

		export interface Neon {
			Name: "Neon";
			Value: 288;
			EnumType: EnumType<Material>;
		}

		export const Neon: Neon;

		export interface Glass {
			Name: "Glass";
			Value: 1568;
			EnumType: EnumType<Material>;
		}

		export const Glass: Glass;

		export interface Asphalt {
			Name: "Asphalt";
			Value: 1376;
			EnumType: EnumType<Material>;
		}

		export const Asphalt: Asphalt;

		export interface LeafyGrass {
			Name: "LeafyGrass";
			Value: 1284;
			EnumType: EnumType<Material>;
		}

		export const LeafyGrass: LeafyGrass;

		export interface Salt {
			Name: "Salt";
			Value: 1392;
			EnumType: EnumType<Material>;
		}

		export const Salt: Salt;

		export interface Limestone {
			Name: "Limestone";
			Value: 820;
			EnumType: EnumType<Material>;
		}

		export const Limestone: Limestone;

		export interface Pavement {
			Name: "Pavement";
			Value: 836;
			EnumType: EnumType<Material>;
		}

		export const Pavement: Pavement;

		export interface ForceField {
			Name: "ForceField";
			Value: 1584;
			EnumType: EnumType<Material>;
		}

		export const ForceField: ForceField;

		export function GetEnumItems(this: defined): Array<Material>
	}
	export type Material = Material.Plastic | Material.Wood | Material.Slate | Material.Concrete | Material.CorrodedMetal | Material.DiamondPlate | Material.Foil | Material.Grass | Material.Ice | Material.Marble | Material.Granite | Material.Brick | Material.Pebble | Material.Sand | Material.Fabric | Material.SmoothPlastic | Material.Metal | Material.WoodPlanks | Material.Cobblestone | Material.Air | Material.Water | Material.Rock | Material.Glacier | Material.Snow | Material.Sandstone | Material.Mud | Material.Basalt | Material.Ground | Material.CrackedLava | Material.Neon | Material.Glass | Material.Asphalt | Material.LeafyGrass | Material.Salt | Material.Limestone | Material.Pavement | Material.ForceField;
	export namespace MembershipType {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<MembershipType>;
		}

		export const None: None;

		export interface BuildersClub {
			Name: "BuildersClub";
			Value: 1;
			EnumType: EnumType<MembershipType>;
		}

		export const BuildersClub: BuildersClub;

		export interface TurboBuildersClub {
			Name: "TurboBuildersClub";
			Value: 2;
			EnumType: EnumType<MembershipType>;
		}

		export const TurboBuildersClub: TurboBuildersClub;

		export interface OutrageousBuildersClub {
			Name: "OutrageousBuildersClub";
			Value: 3;
			EnumType: EnumType<MembershipType>;
		}

		export const OutrageousBuildersClub: OutrageousBuildersClub;

		export interface Premium {
			Name: "Premium";
			Value: 4;
			EnumType: EnumType<MembershipType>;
		}

		export const Premium: Premium;

		export function GetEnumItems(this: defined): Array<MembershipType>
	}
	export type MembershipType = MembershipType.None | MembershipType.BuildersClub | MembershipType.TurboBuildersClub | MembershipType.OutrageousBuildersClub | MembershipType.Premium;
	export namespace MeshPartDetailLevel {
		export interface DistanceBased {
			Name: "DistanceBased";
			Value: 0;
			EnumType: EnumType<MeshPartDetailLevel>;
		}

		export const DistanceBased: DistanceBased;

		export interface Level01 {
			Name: "Level01";
			Value: 1;
			EnumType: EnumType<MeshPartDetailLevel>;
		}

		export const Level01: Level01;

		export interface Level02 {
			Name: "Level02";
			Value: 2;
			EnumType: EnumType<MeshPartDetailLevel>;
		}

		export const Level02: Level02;

		export interface Level03 {
			Name: "Level03";
			Value: 3;
			EnumType: EnumType<MeshPartDetailLevel>;
		}

		export const Level03: Level03;

		export interface Level04 {
			Name: "Level04";
			Value: 4;
			EnumType: EnumType<MeshPartDetailLevel>;
		}

		export const Level04: Level04;

		export function GetEnumItems(this: defined): Array<MeshPartDetailLevel>
	}
	export type MeshPartDetailLevel = MeshPartDetailLevel.DistanceBased | MeshPartDetailLevel.Level01 | MeshPartDetailLevel.Level02 | MeshPartDetailLevel.Level03 | MeshPartDetailLevel.Level04;
	export namespace MeshPartHeadsAndAccessories {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<MeshPartHeadsAndAccessories>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<MeshPartHeadsAndAccessories>;
		}

		export const Disabled: Disabled;

		export interface Enabled {
			Name: "Enabled";
			Value: 2;
			EnumType: EnumType<MeshPartHeadsAndAccessories>;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: defined): Array<MeshPartHeadsAndAccessories>
	}
	export type MeshPartHeadsAndAccessories = MeshPartHeadsAndAccessories.Default | MeshPartHeadsAndAccessories.Disabled | MeshPartHeadsAndAccessories.Enabled;
	export namespace MeshScaleUnit {
		export interface Stud {
			Name: "Stud";
			Value: 0;
			EnumType: EnumType<MeshScaleUnit>;
		}

		export const Stud: Stud;

		export interface Meter {
			Name: "Meter";
			Value: 1;
			EnumType: EnumType<MeshScaleUnit>;
		}

		export const Meter: Meter;

		export interface CM {
			Name: "CM";
			Value: 2;
			EnumType: EnumType<MeshScaleUnit>;
		}

		export const CM: CM;

		export interface MM {
			Name: "MM";
			Value: 3;
			EnumType: EnumType<MeshScaleUnit>;
		}

		export const MM: MM;

		export interface Foot {
			Name: "Foot";
			Value: 4;
			EnumType: EnumType<MeshScaleUnit>;
		}

		export const Foot: Foot;

		export interface Inch {
			Name: "Inch";
			Value: 5;
			EnumType: EnumType<MeshScaleUnit>;
		}

		export const Inch: Inch;

		export function GetEnumItems(this: defined): Array<MeshScaleUnit>
	}
	export type MeshScaleUnit = MeshScaleUnit.Stud | MeshScaleUnit.Meter | MeshScaleUnit.CM | MeshScaleUnit.MM | MeshScaleUnit.Foot | MeshScaleUnit.Inch;
	export namespace MeshType {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<MeshType>;
		}

		export const Head: Head;

		export interface Torso {
			Name: "Torso";
			Value: 1;
			EnumType: EnumType<MeshType>;
		}

		export const Torso: Torso;

		export interface Wedge {
			Name: "Wedge";
			Value: 2;
			EnumType: EnumType<MeshType>;
		}

		export const Wedge: Wedge;

		export interface Prism {
			Name: "Prism";
			Value: 7;
			EnumType: EnumType<MeshType>;
		}

		export const Prism: Prism;

		export interface Pyramid {
			Name: "Pyramid";
			Value: 8;
			EnumType: EnumType<MeshType>;
		}

		export const Pyramid: Pyramid;

		export interface ParallelRamp {
			Name: "ParallelRamp";
			Value: 9;
			EnumType: EnumType<MeshType>;
		}

		export const ParallelRamp: ParallelRamp;

		export interface RightAngleRamp {
			Name: "RightAngleRamp";
			Value: 10;
			EnumType: EnumType<MeshType>;
		}

		export const RightAngleRamp: RightAngleRamp;

		export interface CornerWedge {
			Name: "CornerWedge";
			Value: 11;
			EnumType: EnumType<MeshType>;
		}

		export const CornerWedge: CornerWedge;

		export interface Brick {
			Name: "Brick";
			Value: 6;
			EnumType: EnumType<MeshType>;
		}

		export const Brick: Brick;

		export interface Sphere {
			Name: "Sphere";
			Value: 3;
			EnumType: EnumType<MeshType>;
		}

		export const Sphere: Sphere;

		export interface Cylinder {
			Name: "Cylinder";
			Value: 4;
			EnumType: EnumType<MeshType>;
		}

		export const Cylinder: Cylinder;

		export interface FileMesh {
			Name: "FileMesh";
			Value: 5;
			EnumType: EnumType<MeshType>;
		}

		export const FileMesh: FileMesh;

		export function GetEnumItems(this: defined): Array<MeshType>
	}
	export type MeshType = MeshType.Head | MeshType.Torso | MeshType.Wedge | MeshType.Prism | MeshType.Pyramid | MeshType.ParallelRamp | MeshType.RightAngleRamp | MeshType.CornerWedge | MeshType.Brick | MeshType.Sphere | MeshType.Cylinder | MeshType.FileMesh;
	export namespace MessageType {
		export interface MessageOutput {
			Name: "MessageOutput";
			Value: 0;
			EnumType: EnumType<MessageType>;
		}

		export const MessageOutput: MessageOutput;

		export interface MessageInfo {
			Name: "MessageInfo";
			Value: 1;
			EnumType: EnumType<MessageType>;
		}

		export const MessageInfo: MessageInfo;

		export interface MessageWarning {
			Name: "MessageWarning";
			Value: 2;
			EnumType: EnumType<MessageType>;
		}

		export const MessageWarning: MessageWarning;

		export interface MessageError {
			Name: "MessageError";
			Value: 3;
			EnumType: EnumType<MessageType>;
		}

		export const MessageError: MessageError;

		export function GetEnumItems(this: defined): Array<MessageType>
	}
	export type MessageType = MessageType.MessageOutput | MessageType.MessageInfo | MessageType.MessageWarning | MessageType.MessageError;
	export namespace ModelLevelOfDetail {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<ModelLevelOfDetail>;
		}

		export const Automatic: Automatic;

		export interface StreamingMesh {
			Name: "StreamingMesh";
			Value: 1;
			EnumType: EnumType<ModelLevelOfDetail>;
		}

		export const StreamingMesh: StreamingMesh;

		export interface Disabled {
			Name: "Disabled";
			Value: 2;
			EnumType: EnumType<ModelLevelOfDetail>;
		}

		export const Disabled: Disabled;

		export function GetEnumItems(this: defined): Array<ModelLevelOfDetail>
	}
	export type ModelLevelOfDetail = ModelLevelOfDetail.Automatic | ModelLevelOfDetail.StreamingMesh | ModelLevelOfDetail.Disabled;
	export namespace ModifierKey {
		export interface Alt {
			Name: "Alt";
			Value: 2;
			EnumType: EnumType<ModifierKey>;
		}

		export const Alt: Alt;

		export interface Ctrl {
			Name: "Ctrl";
			Value: 1;
			EnumType: EnumType<ModifierKey>;
		}

		export const Ctrl: Ctrl;

		export interface Meta {
			Name: "Meta";
			Value: 3;
			EnumType: EnumType<ModifierKey>;
		}

		export const Meta: Meta;

		export interface Shift {
			Name: "Shift";
			Value: 0;
			EnumType: EnumType<ModifierKey>;
		}

		export const Shift: Shift;

		export function GetEnumItems(this: defined): Array<ModifierKey>
	}
	export type ModifierKey = ModifierKey.Alt | ModifierKey.Ctrl | ModifierKey.Meta | ModifierKey.Shift;
	export namespace MouseBehavior {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<MouseBehavior>;
		}

		export const Default: Default;

		export interface LockCenter {
			Name: "LockCenter";
			Value: 1;
			EnumType: EnumType<MouseBehavior>;
		}

		export const LockCenter: LockCenter;

		export interface LockCurrentPosition {
			Name: "LockCurrentPosition";
			Value: 2;
			EnumType: EnumType<MouseBehavior>;
		}

		export const LockCurrentPosition: LockCurrentPosition;

		export function GetEnumItems(this: defined): Array<MouseBehavior>
	}
	export type MouseBehavior = MouseBehavior.Default | MouseBehavior.LockCenter | MouseBehavior.LockCurrentPosition;
	export namespace MoveState {
		export interface Stopped {
			Name: "Stopped";
			Value: 0;
			EnumType: EnumType<MoveState>;
		}

		export const Stopped: Stopped;

		export interface Coasting {
			Name: "Coasting";
			Value: 1;
			EnumType: EnumType<MoveState>;
		}

		export const Coasting: Coasting;

		export interface Pushing {
			Name: "Pushing";
			Value: 2;
			EnumType: EnumType<MoveState>;
		}

		export const Pushing: Pushing;

		export interface Stopping {
			Name: "Stopping";
			Value: 3;
			EnumType: EnumType<MoveState>;
		}

		export const Stopping: Stopping;

		export interface AirFree {
			Name: "AirFree";
			Value: 4;
			EnumType: EnumType<MoveState>;
		}

		export const AirFree: AirFree;

		export function GetEnumItems(this: defined): Array<MoveState>
	}
	export type MoveState = MoveState.Stopped | MoveState.Coasting | MoveState.Pushing | MoveState.Stopping | MoveState.AirFree;
	export namespace NameOcclusion {
		export interface OccludeAll {
			Name: "OccludeAll";
			Value: 2;
			EnumType: EnumType<NameOcclusion>;
		}

		export const OccludeAll: OccludeAll;

		export interface EnemyOcclusion {
			Name: "EnemyOcclusion";
			Value: 1;
			EnumType: EnumType<NameOcclusion>;
		}

		export const EnemyOcclusion: EnemyOcclusion;

		export interface NoOcclusion {
			Name: "NoOcclusion";
			Value: 0;
			EnumType: EnumType<NameOcclusion>;
		}

		export const NoOcclusion: NoOcclusion;

		export function GetEnumItems(this: defined): Array<NameOcclusion>
	}
	export type NameOcclusion = NameOcclusion.OccludeAll | NameOcclusion.EnemyOcclusion | NameOcclusion.NoOcclusion;
	export namespace NetworkOwnership {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<NetworkOwnership>;
		}

		export const Automatic: Automatic;

		export interface Manual {
			Name: "Manual";
			Value: 1;
			EnumType: EnumType<NetworkOwnership>;
		}

		export const Manual: Manual;

		export interface OnContact {
			Name: "OnContact";
			Value: 2;
			EnumType: EnumType<NetworkOwnership>;
		}

		export const OnContact: OnContact;

		export function GetEnumItems(this: defined): Array<NetworkOwnership>
	}
	export type NetworkOwnership = NetworkOwnership.Automatic | NetworkOwnership.Manual | NetworkOwnership.OnContact;
	export namespace NewAnimationRuntimeSetting {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<NewAnimationRuntimeSetting>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<NewAnimationRuntimeSetting>;
		}

		export const Disabled: Disabled;

		export interface Enabled {
			Name: "Enabled";
			Value: 2;
			EnumType: EnumType<NewAnimationRuntimeSetting>;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: defined): Array<NewAnimationRuntimeSetting>
	}
	export type NewAnimationRuntimeSetting = NewAnimationRuntimeSetting.Default | NewAnimationRuntimeSetting.Disabled | NewAnimationRuntimeSetting.Enabled;
	export namespace NormalId {
		export interface Top {
			Name: "Top";
			Value: 1;
			EnumType: EnumType<NormalId>;
		}

		export const Top: Top;

		export interface Bottom {
			Name: "Bottom";
			Value: 4;
			EnumType: EnumType<NormalId>;
		}

		export const Bottom: Bottom;

		export interface Back {
			Name: "Back";
			Value: 2;
			EnumType: EnumType<NormalId>;
		}

		export const Back: Back;

		export interface Front {
			Name: "Front";
			Value: 5;
			EnumType: EnumType<NormalId>;
		}

		export const Front: Front;

		export interface Right {
			Name: "Right";
			Value: 0;
			EnumType: EnumType<NormalId>;
		}

		export const Right: Right;

		export interface Left {
			Name: "Left";
			Value: 3;
			EnumType: EnumType<NormalId>;
		}

		export const Left: Left;

		export function GetEnumItems(this: defined): Array<NormalId>
	}
	export type NormalId = NormalId.Top | NormalId.Bottom | NormalId.Back | NormalId.Front | NormalId.Right | NormalId.Left;
	export namespace OrientationAlignmentMode {
		export interface OneAttachment {
			Name: "OneAttachment";
			Value: 0;
			EnumType: EnumType<OrientationAlignmentMode>;
		}

		export const OneAttachment: OneAttachment;

		export interface TwoAttachment {
			Name: "TwoAttachment";
			Value: 1;
			EnumType: EnumType<OrientationAlignmentMode>;
		}

		export const TwoAttachment: TwoAttachment;

		export function GetEnumItems(this: defined): Array<OrientationAlignmentMode>
	}
	export type OrientationAlignmentMode = OrientationAlignmentMode.OneAttachment | OrientationAlignmentMode.TwoAttachment;
	export namespace OutfitSource {
		export interface All {
			Name: "All";
			Value: 1;
			EnumType: EnumType<OutfitSource>;
		}

		export const All: All;

		export interface Created {
			Name: "Created";
			Value: 2;
			EnumType: EnumType<OutfitSource>;
		}

		export const Created: Created;

		export interface Purchased {
			Name: "Purchased";
			Value: 3;
			EnumType: EnumType<OutfitSource>;
		}

		export const Purchased: Purchased;

		export function GetEnumItems(this: defined): Array<OutfitSource>
	}
	export type OutfitSource = OutfitSource.All | OutfitSource.Created | OutfitSource.Purchased;
	export namespace OutputLayoutMode {
		export interface Horizontal {
			Name: "Horizontal";
			Value: 0;
			EnumType: EnumType<OutputLayoutMode>;
		}

		export const Horizontal: Horizontal;

		export interface Vertical {
			Name: "Vertical";
			Value: 1;
			EnumType: EnumType<OutputLayoutMode>;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: defined): Array<OutputLayoutMode>
	}
	export type OutputLayoutMode = OutputLayoutMode.Horizontal | OutputLayoutMode.Vertical;
	export namespace OverrideMouseIconBehavior {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<OverrideMouseIconBehavior>;
		}

		export const None: None;

		export interface ForceShow {
			Name: "ForceShow";
			Value: 1;
			EnumType: EnumType<OverrideMouseIconBehavior>;
		}

		export const ForceShow: ForceShow;

		export interface ForceHide {
			Name: "ForceHide";
			Value: 2;
			EnumType: EnumType<OverrideMouseIconBehavior>;
		}

		export const ForceHide: ForceHide;

		export function GetEnumItems(this: defined): Array<OverrideMouseIconBehavior>
	}
	export type OverrideMouseIconBehavior = OverrideMouseIconBehavior.None | OverrideMouseIconBehavior.ForceShow | OverrideMouseIconBehavior.ForceHide;
	export namespace PackagePermission {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<PackagePermission>;
		}

		export const None: None;

		export interface NoAccess {
			Name: "NoAccess";
			Value: 1;
			EnumType: EnumType<PackagePermission>;
		}

		export const NoAccess: NoAccess;

		export interface Revoked {
			Name: "Revoked";
			Value: 2;
			EnumType: EnumType<PackagePermission>;
		}

		export const Revoked: Revoked;

		export interface UseView {
			Name: "UseView";
			Value: 3;
			EnumType: EnumType<PackagePermission>;
		}

		export const UseView: UseView;

		export interface Edit {
			Name: "Edit";
			Value: 4;
			EnumType: EnumType<PackagePermission>;
		}

		export const Edit: Edit;

		export interface Own {
			Name: "Own";
			Value: 5;
			EnumType: EnumType<PackagePermission>;
		}

		export const Own: Own;

		export function GetEnumItems(this: defined): Array<PackagePermission>
	}
	export type PackagePermission = PackagePermission.None | PackagePermission.NoAccess | PackagePermission.Revoked | PackagePermission.UseView | PackagePermission.Edit | PackagePermission.Own;
	export namespace PacketPriority {
		export interface IMMEDIATE_PRIORITY {
			Name: "IMMEDIATE_PRIORITY";
			Value: 0;
			EnumType: EnumType<PacketPriority>;
		}

		export const IMMEDIATE_PRIORITY: IMMEDIATE_PRIORITY;

		export interface HIGH_PRIORITY {
			Name: "HIGH_PRIORITY";
			Value: 1;
			EnumType: EnumType<PacketPriority>;
		}

		export const HIGH_PRIORITY: HIGH_PRIORITY;

		export interface MEDIUM_PRIORITY {
			Name: "MEDIUM_PRIORITY";
			Value: 2;
			EnumType: EnumType<PacketPriority>;
		}

		export const MEDIUM_PRIORITY: MEDIUM_PRIORITY;

		export interface LOW_PRIORITY {
			Name: "LOW_PRIORITY";
			Value: 3;
			EnumType: EnumType<PacketPriority>;
		}

		export const LOW_PRIORITY: LOW_PRIORITY;

		export function GetEnumItems(this: defined): Array<PacketPriority>
	}
	export type PacketPriority = PacketPriority.IMMEDIATE_PRIORITY | PacketPriority.HIGH_PRIORITY | PacketPriority.MEDIUM_PRIORITY | PacketPriority.LOW_PRIORITY;
	export namespace PartType {
		export interface Ball {
			Name: "Ball";
			Value: 0;
			EnumType: EnumType<PartType>;
		}

		export const Ball: Ball;

		export interface Block {
			Name: "Block";
			Value: 1;
			EnumType: EnumType<PartType>;
		}

		export const Block: Block;

		export interface Cylinder {
			Name: "Cylinder";
			Value: 2;
			EnumType: EnumType<PartType>;
		}

		export const Cylinder: Cylinder;

		export function GetEnumItems(this: defined): Array<PartType>
	}
	export type PartType = PartType.Ball | PartType.Block | PartType.Cylinder;
	export namespace ParticleEmitterShape {
		export interface Box {
			Name: "Box";
			Value: 0;
			EnumType: EnumType<ParticleEmitterShape>;
		}

		export const Box: Box;

		export interface Sphere {
			Name: "Sphere";
			Value: 1;
			EnumType: EnumType<ParticleEmitterShape>;
		}

		export const Sphere: Sphere;

		export interface Cylinder {
			Name: "Cylinder";
			Value: 2;
			EnumType: EnumType<ParticleEmitterShape>;
		}

		export const Cylinder: Cylinder;

		export interface Disc {
			Name: "Disc";
			Value: 3;
			EnumType: EnumType<ParticleEmitterShape>;
		}

		export const Disc: Disc;

		export function GetEnumItems(this: defined): Array<ParticleEmitterShape>
	}
	export type ParticleEmitterShape = ParticleEmitterShape.Box | ParticleEmitterShape.Sphere | ParticleEmitterShape.Cylinder | ParticleEmitterShape.Disc;
	export namespace ParticleEmitterShapeInOut {
		export interface Outward {
			Name: "Outward";
			Value: 0;
			EnumType: EnumType<ParticleEmitterShapeInOut>;
		}

		export const Outward: Outward;

		export interface Inward {
			Name: "Inward";
			Value: 1;
			EnumType: EnumType<ParticleEmitterShapeInOut>;
		}

		export const Inward: Inward;

		export interface InAndOut {
			Name: "InAndOut";
			Value: 2;
			EnumType: EnumType<ParticleEmitterShapeInOut>;
		}

		export const InAndOut: InAndOut;

		export function GetEnumItems(this: defined): Array<ParticleEmitterShapeInOut>
	}
	export type ParticleEmitterShapeInOut = ParticleEmitterShapeInOut.Outward | ParticleEmitterShapeInOut.Inward | ParticleEmitterShapeInOut.InAndOut;
	export namespace ParticleEmitterShapeStyle {
		export interface Volume {
			Name: "Volume";
			Value: 0;
			EnumType: EnumType<ParticleEmitterShapeStyle>;
		}

		export const Volume: Volume;

		export interface Surface {
			Name: "Surface";
			Value: 1;
			EnumType: EnumType<ParticleEmitterShapeStyle>;
		}

		export const Surface: Surface;

		export function GetEnumItems(this: defined): Array<ParticleEmitterShapeStyle>
	}
	export type ParticleEmitterShapeStyle = ParticleEmitterShapeStyle.Volume | ParticleEmitterShapeStyle.Surface;
	export namespace ParticleOrientation {
		export interface FacingCamera {
			Name: "FacingCamera";
			Value: 0;
			EnumType: EnumType<ParticleOrientation>;
		}

		export const FacingCamera: FacingCamera;

		export interface FacingCameraWorldUp {
			Name: "FacingCameraWorldUp";
			Value: 1;
			EnumType: EnumType<ParticleOrientation>;
		}

		export const FacingCameraWorldUp: FacingCameraWorldUp;

		export interface VelocityParallel {
			Name: "VelocityParallel";
			Value: 2;
			EnumType: EnumType<ParticleOrientation>;
		}

		export const VelocityParallel: VelocityParallel;

		export interface VelocityPerpendicular {
			Name: "VelocityPerpendicular";
			Value: 3;
			EnumType: EnumType<ParticleOrientation>;
		}

		export const VelocityPerpendicular: VelocityPerpendicular;

		export function GetEnumItems(this: defined): Array<ParticleOrientation>
	}
	export type ParticleOrientation = ParticleOrientation.FacingCamera | ParticleOrientation.FacingCameraWorldUp | ParticleOrientation.VelocityParallel | ParticleOrientation.VelocityPerpendicular;
	export namespace PathStatus {
		export interface Success {
			Name: "Success";
			Value: 0;
			EnumType: EnumType<PathStatus>;
		}

		export const Success: Success;

		export interface ClosestNoPath {
			Name: "ClosestNoPath";
			Value: 1;
			EnumType: EnumType<PathStatus>;
		}

		export const ClosestNoPath: ClosestNoPath;

		export interface ClosestOutOfRange {
			Name: "ClosestOutOfRange";
			Value: 2;
			EnumType: EnumType<PathStatus>;
		}

		export const ClosestOutOfRange: ClosestOutOfRange;

		export interface FailStartNotEmpty {
			Name: "FailStartNotEmpty";
			Value: 3;
			EnumType: EnumType<PathStatus>;
		}

		export const FailStartNotEmpty: FailStartNotEmpty;

		export interface FailFinishNotEmpty {
			Name: "FailFinishNotEmpty";
			Value: 4;
			EnumType: EnumType<PathStatus>;
		}

		export const FailFinishNotEmpty: FailFinishNotEmpty;

		export interface NoPath {
			Name: "NoPath";
			Value: 5;
			EnumType: EnumType<PathStatus>;
		}

		export const NoPath: NoPath;

		export function GetEnumItems(this: defined): Array<PathStatus>
	}
	export type PathStatus = PathStatus.Success | PathStatus.ClosestNoPath | PathStatus.ClosestOutOfRange | PathStatus.FailStartNotEmpty | PathStatus.FailFinishNotEmpty | PathStatus.NoPath;
	export namespace PathWaypointAction {
		export interface Walk {
			Name: "Walk";
			Value: 0;
			EnumType: EnumType<PathWaypointAction>;
		}

		export const Walk: Walk;

		export interface Jump {
			Name: "Jump";
			Value: 1;
			EnumType: EnumType<PathWaypointAction>;
		}

		export const Jump: Jump;

		export function GetEnumItems(this: defined): Array<PathWaypointAction>
	}
	export type PathWaypointAction = PathWaypointAction.Walk | PathWaypointAction.Jump;
	export namespace PermissionLevelShown {
		export interface Game {
			Name: "Game";
			Value: 0;
			EnumType: EnumType<PermissionLevelShown>;
		}

		export const Game: Game;

		export interface RobloxGame {
			Name: "RobloxGame";
			Value: 1;
			EnumType: EnumType<PermissionLevelShown>;
		}

		export const RobloxGame: RobloxGame;

		export interface RobloxScript {
			Name: "RobloxScript";
			Value: 2;
			EnumType: EnumType<PermissionLevelShown>;
		}

		export const RobloxScript: RobloxScript;

		export interface Studio {
			Name: "Studio";
			Value: 3;
			EnumType: EnumType<PermissionLevelShown>;
		}

		export const Studio: Studio;

		export interface Roblox {
			Name: "Roblox";
			Value: 4;
			EnumType: EnumType<PermissionLevelShown>;
		}

		export const Roblox: Roblox;

		export function GetEnumItems(this: defined): Array<PermissionLevelShown>
	}
	export type PermissionLevelShown = PermissionLevelShown.Game | PermissionLevelShown.RobloxGame | PermissionLevelShown.RobloxScript | PermissionLevelShown.Studio | PermissionLevelShown.Roblox;
	export namespace PhysicsSimulationRate {
		export interface Fixed240Hz {
			Name: "Fixed240Hz";
			Value: 0;
			EnumType: EnumType<PhysicsSimulationRate>;
		}

		export const Fixed240Hz: Fixed240Hz;

		export interface Fixed120Hz {
			Name: "Fixed120Hz";
			Value: 1;
			EnumType: EnumType<PhysicsSimulationRate>;
		}

		export const Fixed120Hz: Fixed120Hz;

		export interface Fixed60Hz {
			Name: "Fixed60Hz";
			Value: 2;
			EnumType: EnumType<PhysicsSimulationRate>;
		}

		export const Fixed60Hz: Fixed60Hz;

		export function GetEnumItems(this: defined): Array<PhysicsSimulationRate>
	}
	export type PhysicsSimulationRate = PhysicsSimulationRate.Fixed240Hz | PhysicsSimulationRate.Fixed120Hz | PhysicsSimulationRate.Fixed60Hz;
	export namespace PhysicsSteppingMethod {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<PhysicsSteppingMethod>;
		}

		export const Default: Default;

		export interface Fixed {
			Name: "Fixed";
			Value: 1;
			EnumType: EnumType<PhysicsSteppingMethod>;
		}

		export const Fixed: Fixed;

		export interface Adaptive {
			Name: "Adaptive";
			Value: 2;
			EnumType: EnumType<PhysicsSteppingMethod>;
		}

		export const Adaptive: Adaptive;

		export function GetEnumItems(this: defined): Array<PhysicsSteppingMethod>
	}
	export type PhysicsSteppingMethod = PhysicsSteppingMethod.Default | PhysicsSteppingMethod.Fixed | PhysicsSteppingMethod.Adaptive;
	export namespace Platform {
		export interface Windows {
			Name: "Windows";
			Value: 0;
			EnumType: EnumType<Platform>;
		}

		export const Windows: Windows;

		export interface OSX {
			Name: "OSX";
			Value: 1;
			EnumType: EnumType<Platform>;
		}

		export const OSX: OSX;

		export interface IOS {
			Name: "IOS";
			Value: 2;
			EnumType: EnumType<Platform>;
		}

		export const IOS: IOS;

		export interface Android {
			Name: "Android";
			Value: 3;
			EnumType: EnumType<Platform>;
		}

		export const Android: Android;

		export interface XBoxOne {
			Name: "XBoxOne";
			Value: 4;
			EnumType: EnumType<Platform>;
		}

		export const XBoxOne: XBoxOne;

		export interface PS4 {
			Name: "PS4";
			Value: 5;
			EnumType: EnumType<Platform>;
		}

		export const PS4: PS4;

		export interface PS3 {
			Name: "PS3";
			Value: 6;
			EnumType: EnumType<Platform>;
		}

		export const PS3: PS3;

		export interface XBox360 {
			Name: "XBox360";
			Value: 7;
			EnumType: EnumType<Platform>;
		}

		export const XBox360: XBox360;

		export interface WiiU {
			Name: "WiiU";
			Value: 8;
			EnumType: EnumType<Platform>;
		}

		export const WiiU: WiiU;

		export interface NX {
			Name: "NX";
			Value: 9;
			EnumType: EnumType<Platform>;
		}

		export const NX: NX;

		export interface Ouya {
			Name: "Ouya";
			Value: 10;
			EnumType: EnumType<Platform>;
		}

		export const Ouya: Ouya;

		export interface AndroidTV {
			Name: "AndroidTV";
			Value: 11;
			EnumType: EnumType<Platform>;
		}

		export const AndroidTV: AndroidTV;

		export interface Chromecast {
			Name: "Chromecast";
			Value: 12;
			EnumType: EnumType<Platform>;
		}

		export const Chromecast: Chromecast;

		export interface Linux {
			Name: "Linux";
			Value: 13;
			EnumType: EnumType<Platform>;
		}

		export const Linux: Linux;

		export interface SteamOS {
			Name: "SteamOS";
			Value: 14;
			EnumType: EnumType<Platform>;
		}

		export const SteamOS: SteamOS;

		export interface WebOS {
			Name: "WebOS";
			Value: 15;
			EnumType: EnumType<Platform>;
		}

		export const WebOS: WebOS;

		export interface DOS {
			Name: "DOS";
			Value: 16;
			EnumType: EnumType<Platform>;
		}

		export const DOS: DOS;

		export interface BeOS {
			Name: "BeOS";
			Value: 17;
			EnumType: EnumType<Platform>;
		}

		export const BeOS: BeOS;

		export interface UWP {
			Name: "UWP";
			Value: 18;
			EnumType: EnumType<Platform>;
		}

		export const UWP: UWP;

		export interface None {
			Name: "None";
			Value: 19;
			EnumType: EnumType<Platform>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<Platform>
	}
	export type Platform = Platform.Windows | Platform.OSX | Platform.IOS | Platform.Android | Platform.XBoxOne | Platform.PS4 | Platform.PS3 | Platform.XBox360 | Platform.WiiU | Platform.NX | Platform.Ouya | Platform.AndroidTV | Platform.Chromecast | Platform.Linux | Platform.SteamOS | Platform.WebOS | Platform.DOS | Platform.BeOS | Platform.UWP | Platform.None;
	export namespace PlaybackState {
		export interface Begin {
			Name: "Begin";
			Value: 0;
			EnumType: EnumType<PlaybackState>;
		}

		export const Begin: Begin;

		export interface Delayed {
			Name: "Delayed";
			Value: 1;
			EnumType: EnumType<PlaybackState>;
		}

		export const Delayed: Delayed;

		export interface Playing {
			Name: "Playing";
			Value: 2;
			EnumType: EnumType<PlaybackState>;
		}

		export const Playing: Playing;

		export interface Paused {
			Name: "Paused";
			Value: 3;
			EnumType: EnumType<PlaybackState>;
		}

		export const Paused: Paused;

		export interface Completed {
			Name: "Completed";
			Value: 4;
			EnumType: EnumType<PlaybackState>;
		}

		export const Completed: Completed;

		export interface Cancelled {
			Name: "Cancelled";
			Value: 5;
			EnumType: EnumType<PlaybackState>;
		}

		export const Cancelled: Cancelled;

		export function GetEnumItems(this: defined): Array<PlaybackState>
	}
	export type PlaybackState = PlaybackState.Begin | PlaybackState.Delayed | PlaybackState.Playing | PlaybackState.Paused | PlaybackState.Completed | PlaybackState.Cancelled;
	export namespace PlayerActions {
		export interface CharacterForward {
			Name: "CharacterForward";
			Value: 0;
			EnumType: EnumType<PlayerActions>;
		}

		export const CharacterForward: CharacterForward;

		export interface CharacterBackward {
			Name: "CharacterBackward";
			Value: 1;
			EnumType: EnumType<PlayerActions>;
		}

		export const CharacterBackward: CharacterBackward;

		export interface CharacterLeft {
			Name: "CharacterLeft";
			Value: 2;
			EnumType: EnumType<PlayerActions>;
		}

		export const CharacterLeft: CharacterLeft;

		export interface CharacterRight {
			Name: "CharacterRight";
			Value: 3;
			EnumType: EnumType<PlayerActions>;
		}

		export const CharacterRight: CharacterRight;

		export interface CharacterJump {
			Name: "CharacterJump";
			Value: 4;
			EnumType: EnumType<PlayerActions>;
		}

		export const CharacterJump: CharacterJump;

		export function GetEnumItems(this: defined): Array<PlayerActions>
	}
	export type PlayerActions = PlayerActions.CharacterForward | PlayerActions.CharacterBackward | PlayerActions.CharacterLeft | PlayerActions.CharacterRight | PlayerActions.CharacterJump;
	export namespace PlayerChatType {
		export interface All {
			Name: "All";
			Value: 0;
			EnumType: EnumType<PlayerChatType>;
		}

		export const All: All;

		export interface Team {
			Name: "Team";
			Value: 1;
			EnumType: EnumType<PlayerChatType>;
		}

		export const Team: Team;

		export interface Whisper {
			Name: "Whisper";
			Value: 2;
			EnumType: EnumType<PlayerChatType>;
		}

		export const Whisper: Whisper;

		export function GetEnumItems(this: defined): Array<PlayerChatType>
	}
	export type PlayerChatType = PlayerChatType.All | PlayerChatType.Team | PlayerChatType.Whisper;
	export namespace PoseEasingDirection {
		export interface Out {
			Name: "Out";
			Value: 1;
			EnumType: EnumType<PoseEasingDirection>;
		}

		export const Out: Out;

		export interface InOut {
			Name: "InOut";
			Value: 2;
			EnumType: EnumType<PoseEasingDirection>;
		}

		export const InOut: InOut;

		export interface In {
			Name: "In";
			Value: 0;
			EnumType: EnumType<PoseEasingDirection>;
		}

		export const In: In;

		export function GetEnumItems(this: defined): Array<PoseEasingDirection>
	}
	export type PoseEasingDirection = PoseEasingDirection.Out | PoseEasingDirection.InOut | PoseEasingDirection.In;
	export namespace PoseEasingStyle {
		export interface Linear {
			Name: "Linear";
			Value: 0;
			EnumType: EnumType<PoseEasingStyle>;
		}

		export const Linear: Linear;

		export interface Constant {
			Name: "Constant";
			Value: 1;
			EnumType: EnumType<PoseEasingStyle>;
		}

		export const Constant: Constant;

		export interface Elastic {
			Name: "Elastic";
			Value: 2;
			EnumType: EnumType<PoseEasingStyle>;
		}

		export const Elastic: Elastic;

		export interface Cubic {
			Name: "Cubic";
			Value: 3;
			EnumType: EnumType<PoseEasingStyle>;
		}

		export const Cubic: Cubic;

		export interface Bounce {
			Name: "Bounce";
			Value: 4;
			EnumType: EnumType<PoseEasingStyle>;
		}

		export const Bounce: Bounce;

		export function GetEnumItems(this: defined): Array<PoseEasingStyle>
	}
	export type PoseEasingStyle = PoseEasingStyle.Linear | PoseEasingStyle.Constant | PoseEasingStyle.Elastic | PoseEasingStyle.Cubic | PoseEasingStyle.Bounce;
	export namespace PositionAlignmentMode {
		export interface OneAttachment {
			Name: "OneAttachment";
			Value: 0;
			EnumType: EnumType<PositionAlignmentMode>;
		}

		export const OneAttachment: OneAttachment;

		export interface TwoAttachment {
			Name: "TwoAttachment";
			Value: 1;
			EnumType: EnumType<PositionAlignmentMode>;
		}

		export const TwoAttachment: TwoAttachment;

		export function GetEnumItems(this: defined): Array<PositionAlignmentMode>
	}
	export type PositionAlignmentMode = PositionAlignmentMode.OneAttachment | PositionAlignmentMode.TwoAttachment;
	export namespace PrivilegeType {
		export interface Owner {
			Name: "Owner";
			Value: 255;
			EnumType: EnumType<PrivilegeType>;
		}

		export const Owner: Owner;

		export interface Admin {
			Name: "Admin";
			Value: 240;
			EnumType: EnumType<PrivilegeType>;
		}

		export const Admin: Admin;

		export interface Member {
			Name: "Member";
			Value: 128;
			EnumType: EnumType<PrivilegeType>;
		}

		export const Member: Member;

		export interface Visitor {
			Name: "Visitor";
			Value: 10;
			EnumType: EnumType<PrivilegeType>;
		}

		export const Visitor: Visitor;

		export interface Banned {
			Name: "Banned";
			Value: 0;
			EnumType: EnumType<PrivilegeType>;
		}

		export const Banned: Banned;

		export function GetEnumItems(this: defined): Array<PrivilegeType>
	}
	export type PrivilegeType = PrivilegeType.Owner | PrivilegeType.Admin | PrivilegeType.Member | PrivilegeType.Visitor | PrivilegeType.Banned;
	export namespace ProductLocationRestriction {
		export interface AvatarShop {
			Name: "AvatarShop";
			Value: 0;
			EnumType: EnumType<ProductLocationRestriction>;
		}

		export const AvatarShop: AvatarShop;

		export interface AllowedGames {
			Name: "AllowedGames";
			Value: 1;
			EnumType: EnumType<ProductLocationRestriction>;
		}

		export const AllowedGames: AllowedGames;

		export interface AllGames {
			Name: "AllGames";
			Value: 2;
			EnumType: EnumType<ProductLocationRestriction>;
		}

		export const AllGames: AllGames;

		export function GetEnumItems(this: defined): Array<ProductLocationRestriction>
	}
	export type ProductLocationRestriction = ProductLocationRestriction.AvatarShop | ProductLocationRestriction.AllowedGames | ProductLocationRestriction.AllGames;
	export namespace ProductPurchaseDecision {
		export interface NotProcessedYet {
			Name: "NotProcessedYet";
			Value: 0;
			EnumType: EnumType<ProductPurchaseDecision>;
		}

		export const NotProcessedYet: NotProcessedYet;

		export interface PurchaseGranted {
			Name: "PurchaseGranted";
			Value: 1;
			EnumType: EnumType<ProductPurchaseDecision>;
		}

		export const PurchaseGranted: PurchaseGranted;

		export function GetEnumItems(this: defined): Array<ProductPurchaseDecision>
	}
	export type ProductPurchaseDecision = ProductPurchaseDecision.NotProcessedYet | ProductPurchaseDecision.PurchaseGranted;
	export namespace ProximityPromptExclusivity {
		export interface OnePerButton {
			Name: "OnePerButton";
			Value: 0;
			EnumType: EnumType<ProximityPromptExclusivity>;
		}

		export const OnePerButton: OnePerButton;

		export interface OneGlobally {
			Name: "OneGlobally";
			Value: 1;
			EnumType: EnumType<ProximityPromptExclusivity>;
		}

		export const OneGlobally: OneGlobally;

		export interface AlwaysShow {
			Name: "AlwaysShow";
			Value: 2;
			EnumType: EnumType<ProximityPromptExclusivity>;
		}

		export const AlwaysShow: AlwaysShow;

		export function GetEnumItems(this: defined): Array<ProximityPromptExclusivity>
	}
	export type ProximityPromptExclusivity = ProximityPromptExclusivity.OnePerButton | ProximityPromptExclusivity.OneGlobally | ProximityPromptExclusivity.AlwaysShow;
	export namespace ProximityPromptInputType {
		export interface Keyboard {
			Name: "Keyboard";
			Value: 0;
			EnumType: EnumType<ProximityPromptInputType>;
		}

		export const Keyboard: Keyboard;

		export interface Gamepad {
			Name: "Gamepad";
			Value: 1;
			EnumType: EnumType<ProximityPromptInputType>;
		}

		export const Gamepad: Gamepad;

		export interface Touch {
			Name: "Touch";
			Value: 2;
			EnumType: EnumType<ProximityPromptInputType>;
		}

		export const Touch: Touch;

		export function GetEnumItems(this: defined): Array<ProximityPromptInputType>
	}
	export type ProximityPromptInputType = ProximityPromptInputType.Keyboard | ProximityPromptInputType.Gamepad | ProximityPromptInputType.Touch;
	export namespace ProximityPromptStyle {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<ProximityPromptStyle>;
		}

		export const Default: Default;

		export interface Custom {
			Name: "Custom";
			Value: 1;
			EnumType: EnumType<ProximityPromptStyle>;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: defined): Array<ProximityPromptStyle>
	}
	export type ProximityPromptStyle = ProximityPromptStyle.Default | ProximityPromptStyle.Custom;
	export namespace QualityLevel {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<QualityLevel>;
		}

		export const Automatic: Automatic;

		export interface Level01 {
			Name: "Level01";
			Value: 1;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level01: Level01;

		export interface Level02 {
			Name: "Level02";
			Value: 2;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level02: Level02;

		export interface Level03 {
			Name: "Level03";
			Value: 3;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level03: Level03;

		export interface Level04 {
			Name: "Level04";
			Value: 4;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level04: Level04;

		export interface Level05 {
			Name: "Level05";
			Value: 5;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level05: Level05;

		export interface Level06 {
			Name: "Level06";
			Value: 6;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level06: Level06;

		export interface Level07 {
			Name: "Level07";
			Value: 7;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level07: Level07;

		export interface Level08 {
			Name: "Level08";
			Value: 8;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level08: Level08;

		export interface Level09 {
			Name: "Level09";
			Value: 9;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level09: Level09;

		export interface Level10 {
			Name: "Level10";
			Value: 10;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level10: Level10;

		export interface Level11 {
			Name: "Level11";
			Value: 11;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level11: Level11;

		export interface Level12 {
			Name: "Level12";
			Value: 12;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level12: Level12;

		export interface Level13 {
			Name: "Level13";
			Value: 13;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level13: Level13;

		export interface Level14 {
			Name: "Level14";
			Value: 14;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level14: Level14;

		export interface Level15 {
			Name: "Level15";
			Value: 15;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level15: Level15;

		export interface Level16 {
			Name: "Level16";
			Value: 16;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level16: Level16;

		export interface Level17 {
			Name: "Level17";
			Value: 17;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level17: Level17;

		export interface Level18 {
			Name: "Level18";
			Value: 18;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level18: Level18;

		export interface Level19 {
			Name: "Level19";
			Value: 19;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level19: Level19;

		export interface Level20 {
			Name: "Level20";
			Value: 20;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level20: Level20;

		export interface Level21 {
			Name: "Level21";
			Value: 21;
			EnumType: EnumType<QualityLevel>;
		}

		export const Level21: Level21;

		export function GetEnumItems(this: defined): Array<QualityLevel>
	}
	export type QualityLevel = QualityLevel.Automatic | QualityLevel.Level01 | QualityLevel.Level02 | QualityLevel.Level03 | QualityLevel.Level04 | QualityLevel.Level05 | QualityLevel.Level06 | QualityLevel.Level07 | QualityLevel.Level08 | QualityLevel.Level09 | QualityLevel.Level10 | QualityLevel.Level11 | QualityLevel.Level12 | QualityLevel.Level13 | QualityLevel.Level14 | QualityLevel.Level15 | QualityLevel.Level16 | QualityLevel.Level17 | QualityLevel.Level18 | QualityLevel.Level19 | QualityLevel.Level20 | QualityLevel.Level21;
	export namespace R15CollisionType {
		export interface OuterBox {
			Name: "OuterBox";
			Value: 0;
			EnumType: EnumType<R15CollisionType>;
		}

		export const OuterBox: OuterBox;

		export interface InnerBox {
			Name: "InnerBox";
			Value: 1;
			EnumType: EnumType<R15CollisionType>;
		}

		export const InnerBox: InnerBox;

		export function GetEnumItems(this: defined): Array<R15CollisionType>
	}
	export type R15CollisionType = R15CollisionType.OuterBox | R15CollisionType.InnerBox;
	export namespace RaycastFilterType {
		export interface Blacklist {
			Name: "Blacklist";
			Value: 0;
			EnumType: EnumType<RaycastFilterType>;
		}

		export const Blacklist: Blacklist;

		export interface Whitelist {
			Name: "Whitelist";
			Value: 1;
			EnumType: EnumType<RaycastFilterType>;
		}

		export const Whitelist: Whitelist;

		export function GetEnumItems(this: defined): Array<RaycastFilterType>
	}
	export type RaycastFilterType = RaycastFilterType.Blacklist | RaycastFilterType.Whitelist;
	export namespace RenderFidelity {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<RenderFidelity>;
		}

		export const Automatic: Automatic;

		export interface Precise {
			Name: "Precise";
			Value: 1;
			EnumType: EnumType<RenderFidelity>;
		}

		export const Precise: Precise;

		export interface Performance {
			Name: "Performance";
			Value: 2;
			EnumType: EnumType<RenderFidelity>;
		}

		export const Performance: Performance;

		export function GetEnumItems(this: defined): Array<RenderFidelity>
	}
	export type RenderFidelity = RenderFidelity.Automatic | RenderFidelity.Precise | RenderFidelity.Performance;
	export namespace RenderPriority {
		export interface First {
			Name: "First";
			Value: 0;
			EnumType: EnumType<RenderPriority>;
		}

		export const First: First;

		export interface Input {
			Name: "Input";
			Value: 100;
			EnumType: EnumType<RenderPriority>;
		}

		export const Input: Input;

		export interface Camera {
			Name: "Camera";
			Value: 200;
			EnumType: EnumType<RenderPriority>;
		}

		export const Camera: Camera;

		export interface Character {
			Name: "Character";
			Value: 300;
			EnumType: EnumType<RenderPriority>;
		}

		export const Character: Character;

		export interface Last {
			Name: "Last";
			Value: 2000;
			EnumType: EnumType<RenderPriority>;
		}

		export const Last: Last;

		export function GetEnumItems(this: defined): Array<RenderPriority>
	}
	export type RenderPriority = RenderPriority.First | RenderPriority.Input | RenderPriority.Camera | RenderPriority.Character | RenderPriority.Last;
	export namespace RenderingTestComparisonMethod {
		export interface psnr {
			Name: "psnr";
			Value: 0;
			EnumType: EnumType<RenderingTestComparisonMethod>;
		}

		export const psnr: psnr;

		export interface diff {
			Name: "diff";
			Value: 1;
			EnumType: EnumType<RenderingTestComparisonMethod>;
		}

		export const diff: diff;

		export function GetEnumItems(this: defined): Array<RenderingTestComparisonMethod>
	}
	export type RenderingTestComparisonMethod = RenderingTestComparisonMethod.psnr | RenderingTestComparisonMethod.diff;
	export namespace ResamplerMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<ResamplerMode>;
		}

		export const Default: Default;

		export interface Pixelated {
			Name: "Pixelated";
			Value: 1;
			EnumType: EnumType<ResamplerMode>;
		}

		export const Pixelated: Pixelated;

		export function GetEnumItems(this: defined): Array<ResamplerMode>
	}
	export type ResamplerMode = ResamplerMode.Default | ResamplerMode.Pixelated;
	export namespace ReturnKeyType {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<ReturnKeyType>;
		}

		export const Default: Default;

		export interface Done {
			Name: "Done";
			Value: 1;
			EnumType: EnumType<ReturnKeyType>;
		}

		export const Done: Done;

		export interface Go {
			Name: "Go";
			Value: 2;
			EnumType: EnumType<ReturnKeyType>;
		}

		export const Go: Go;

		export interface Next {
			Name: "Next";
			Value: 3;
			EnumType: EnumType<ReturnKeyType>;
		}

		export const Next: Next;

		export interface Search {
			Name: "Search";
			Value: 4;
			EnumType: EnumType<ReturnKeyType>;
		}

		export const Search: Search;

		export interface Send {
			Name: "Send";
			Value: 5;
			EnumType: EnumType<ReturnKeyType>;
		}

		export const Send: Send;

		export function GetEnumItems(this: defined): Array<ReturnKeyType>
	}
	export type ReturnKeyType = ReturnKeyType.Default | ReturnKeyType.Done | ReturnKeyType.Go | ReturnKeyType.Next | ReturnKeyType.Search | ReturnKeyType.Send;
	export namespace ReverbType {
		export interface NoReverb {
			Name: "NoReverb";
			Value: 0;
			EnumType: EnumType<ReverbType>;
		}

		export const NoReverb: NoReverb;

		export interface GenericReverb {
			Name: "GenericReverb";
			Value: 1;
			EnumType: EnumType<ReverbType>;
		}

		export const GenericReverb: GenericReverb;

		export interface PaddedCell {
			Name: "PaddedCell";
			Value: 2;
			EnumType: EnumType<ReverbType>;
		}

		export const PaddedCell: PaddedCell;

		export interface Room {
			Name: "Room";
			Value: 3;
			EnumType: EnumType<ReverbType>;
		}

		export const Room: Room;

		export interface Bathroom {
			Name: "Bathroom";
			Value: 4;
			EnumType: EnumType<ReverbType>;
		}

		export const Bathroom: Bathroom;

		export interface LivingRoom {
			Name: "LivingRoom";
			Value: 5;
			EnumType: EnumType<ReverbType>;
		}

		export const LivingRoom: LivingRoom;

		export interface StoneRoom {
			Name: "StoneRoom";
			Value: 6;
			EnumType: EnumType<ReverbType>;
		}

		export const StoneRoom: StoneRoom;

		export interface Auditorium {
			Name: "Auditorium";
			Value: 7;
			EnumType: EnumType<ReverbType>;
		}

		export const Auditorium: Auditorium;

		export interface ConcertHall {
			Name: "ConcertHall";
			Value: 8;
			EnumType: EnumType<ReverbType>;
		}

		export const ConcertHall: ConcertHall;

		export interface Cave {
			Name: "Cave";
			Value: 9;
			EnumType: EnumType<ReverbType>;
		}

		export const Cave: Cave;

		export interface Arena {
			Name: "Arena";
			Value: 10;
			EnumType: EnumType<ReverbType>;
		}

		export const Arena: Arena;

		export interface Hangar {
			Name: "Hangar";
			Value: 11;
			EnumType: EnumType<ReverbType>;
		}

		export const Hangar: Hangar;

		export interface CarpettedHallway {
			Name: "CarpettedHallway";
			Value: 12;
			EnumType: EnumType<ReverbType>;
		}

		export const CarpettedHallway: CarpettedHallway;

		export interface Hallway {
			Name: "Hallway";
			Value: 13;
			EnumType: EnumType<ReverbType>;
		}

		export const Hallway: Hallway;

		export interface StoneCorridor {
			Name: "StoneCorridor";
			Value: 14;
			EnumType: EnumType<ReverbType>;
		}

		export const StoneCorridor: StoneCorridor;

		export interface Alley {
			Name: "Alley";
			Value: 15;
			EnumType: EnumType<ReverbType>;
		}

		export const Alley: Alley;

		export interface Forest {
			Name: "Forest";
			Value: 16;
			EnumType: EnumType<ReverbType>;
		}

		export const Forest: Forest;

		export interface City {
			Name: "City";
			Value: 17;
			EnumType: EnumType<ReverbType>;
		}

		export const City: City;

		export interface Mountains {
			Name: "Mountains";
			Value: 18;
			EnumType: EnumType<ReverbType>;
		}

		export const Mountains: Mountains;

		export interface Quarry {
			Name: "Quarry";
			Value: 19;
			EnumType: EnumType<ReverbType>;
		}

		export const Quarry: Quarry;

		export interface Plain {
			Name: "Plain";
			Value: 20;
			EnumType: EnumType<ReverbType>;
		}

		export const Plain: Plain;

		export interface ParkingLot {
			Name: "ParkingLot";
			Value: 21;
			EnumType: EnumType<ReverbType>;
		}

		export const ParkingLot: ParkingLot;

		export interface SewerPipe {
			Name: "SewerPipe";
			Value: 22;
			EnumType: EnumType<ReverbType>;
		}

		export const SewerPipe: SewerPipe;

		export interface UnderWater {
			Name: "UnderWater";
			Value: 23;
			EnumType: EnumType<ReverbType>;
		}

		export const UnderWater: UnderWater;

		export function GetEnumItems(this: defined): Array<ReverbType>
	}
	export type ReverbType = ReverbType.NoReverb | ReverbType.GenericReverb | ReverbType.PaddedCell | ReverbType.Room | ReverbType.Bathroom | ReverbType.LivingRoom | ReverbType.StoneRoom | ReverbType.Auditorium | ReverbType.ConcertHall | ReverbType.Cave | ReverbType.Arena | ReverbType.Hangar | ReverbType.CarpettedHallway | ReverbType.Hallway | ReverbType.StoneCorridor | ReverbType.Alley | ReverbType.Forest | ReverbType.City | ReverbType.Mountains | ReverbType.Quarry | ReverbType.Plain | ReverbType.ParkingLot | ReverbType.SewerPipe | ReverbType.UnderWater;
	export namespace RibbonTool {
		export interface Select {
			Name: "Select";
			Value: 0;
			EnumType: EnumType<RibbonTool>;
		}

		export const Select: Select;

		export interface Scale {
			Name: "Scale";
			Value: 1;
			EnumType: EnumType<RibbonTool>;
		}

		export const Scale: Scale;

		export interface Rotate {
			Name: "Rotate";
			Value: 2;
			EnumType: EnumType<RibbonTool>;
		}

		export const Rotate: Rotate;

		export interface Move {
			Name: "Move";
			Value: 3;
			EnumType: EnumType<RibbonTool>;
		}

		export const Move: Move;

		export interface Transform {
			Name: "Transform";
			Value: 4;
			EnumType: EnumType<RibbonTool>;
		}

		export const Transform: Transform;

		export interface ColorPicker {
			Name: "ColorPicker";
			Value: 5;
			EnumType: EnumType<RibbonTool>;
		}

		export const ColorPicker: ColorPicker;

		export interface MaterialPicker {
			Name: "MaterialPicker";
			Value: 6;
			EnumType: EnumType<RibbonTool>;
		}

		export const MaterialPicker: MaterialPicker;

		export interface Group {
			Name: "Group";
			Value: 7;
			EnumType: EnumType<RibbonTool>;
		}

		export const Group: Group;

		export interface Ungroup {
			Name: "Ungroup";
			Value: 8;
			EnumType: EnumType<RibbonTool>;
		}

		export const Ungroup: Ungroup;

		export interface None {
			Name: "None";
			Value: 9;
			EnumType: EnumType<RibbonTool>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<RibbonTool>
	}
	export type RibbonTool = RibbonTool.Select | RibbonTool.Scale | RibbonTool.Rotate | RibbonTool.Move | RibbonTool.Transform | RibbonTool.ColorPicker | RibbonTool.MaterialPicker | RibbonTool.Group | RibbonTool.Ungroup | RibbonTool.None;
	export namespace RigType {
		export interface R15 {
			Name: "R15";
			Value: 0;
			EnumType: EnumType<RigType>;
		}

		export const R15: R15;

		export interface Rthro {
			Name: "Rthro";
			Value: 1;
			EnumType: EnumType<RigType>;
		}

		export const Rthro: Rthro;

		export interface RthroNarrow {
			Name: "RthroNarrow";
			Value: 2;
			EnumType: EnumType<RigType>;
		}

		export const RthroNarrow: RthroNarrow;

		export interface Custom {
			Name: "Custom";
			Value: 3;
			EnumType: EnumType<RigType>;
		}

		export const Custom: Custom;

		export interface None {
			Name: "None";
			Value: 4;
			EnumType: EnumType<RigType>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<RigType>
	}
	export type RigType = RigType.R15 | RigType.Rthro | RigType.RthroNarrow | RigType.Custom | RigType.None;
	export namespace RollOffMode {
		export interface Inverse {
			Name: "Inverse";
			Value: 0;
			EnumType: EnumType<RollOffMode>;
		}

		export const Inverse: Inverse;

		export interface Linear {
			Name: "Linear";
			Value: 1;
			EnumType: EnumType<RollOffMode>;
		}

		export const Linear: Linear;

		export interface InverseTapered {
			Name: "InverseTapered";
			Value: 3;
			EnumType: EnumType<RollOffMode>;
		}

		export const InverseTapered: InverseTapered;

		export interface LinearSquare {
			Name: "LinearSquare";
			Value: 2;
			EnumType: EnumType<RollOffMode>;
		}

		export const LinearSquare: LinearSquare;

		export function GetEnumItems(this: defined): Array<RollOffMode>
	}
	export type RollOffMode = RollOffMode.Inverse | RollOffMode.Linear | RollOffMode.InverseTapered | RollOffMode.LinearSquare;
	export namespace RotationOrder {
		export interface XYZ {
			Name: "XYZ";
			Value: 0;
			EnumType: EnumType<RotationOrder>;
		}

		export const XYZ: XYZ;

		export interface XZY {
			Name: "XZY";
			Value: 1;
			EnumType: EnumType<RotationOrder>;
		}

		export const XZY: XZY;

		export interface YZX {
			Name: "YZX";
			Value: 2;
			EnumType: EnumType<RotationOrder>;
		}

		export const YZX: YZX;

		export interface YXZ {
			Name: "YXZ";
			Value: 3;
			EnumType: EnumType<RotationOrder>;
		}

		export const YXZ: YXZ;

		export interface ZXY {
			Name: "ZXY";
			Value: 4;
			EnumType: EnumType<RotationOrder>;
		}

		export const ZXY: ZXY;

		export interface ZYX {
			Name: "ZYX";
			Value: 5;
			EnumType: EnumType<RotationOrder>;
		}

		export const ZYX: ZYX;

		export function GetEnumItems(this: defined): Array<RotationOrder>
	}
	export type RotationOrder = RotationOrder.XYZ | RotationOrder.XZY | RotationOrder.YZX | RotationOrder.YXZ | RotationOrder.ZXY | RotationOrder.ZYX;
	export namespace RotationType {
		export interface MovementRelative {
			Name: "MovementRelative";
			Value: 0;
			EnumType: EnumType<RotationType>;
		}

		export const MovementRelative: MovementRelative;

		export interface CameraRelative {
			Name: "CameraRelative";
			Value: 1;
			EnumType: EnumType<RotationType>;
		}

		export const CameraRelative: CameraRelative;

		export function GetEnumItems(this: defined): Array<RotationType>
	}
	export type RotationType = RotationType.MovementRelative | RotationType.CameraRelative;
	export namespace RuntimeUndoBehavior {
		export interface Aggregate {
			Name: "Aggregate";
			Value: 0;
			EnumType: EnumType<RuntimeUndoBehavior>;
		}

		export const Aggregate: Aggregate;

		export interface Snapshot {
			Name: "Snapshot";
			Value: 1;
			EnumType: EnumType<RuntimeUndoBehavior>;
		}

		export const Snapshot: Snapshot;

		export interface Hybrid {
			Name: "Hybrid";
			Value: 2;
			EnumType: EnumType<RuntimeUndoBehavior>;
		}

		export const Hybrid: Hybrid;

		export function GetEnumItems(this: defined): Array<RuntimeUndoBehavior>
	}
	export type RuntimeUndoBehavior = RuntimeUndoBehavior.Aggregate | RuntimeUndoBehavior.Snapshot | RuntimeUndoBehavior.Hybrid;
	export namespace SaveFilter {
		export interface SaveAll {
			Name: "SaveAll";
			Value: 2;
			EnumType: EnumType<SaveFilter>;
		}

		export const SaveAll: SaveAll;

		export interface SaveWorld {
			Name: "SaveWorld";
			Value: 0;
			EnumType: EnumType<SaveFilter>;
		}

		export const SaveWorld: SaveWorld;

		export interface SaveGame {
			Name: "SaveGame";
			Value: 1;
			EnumType: EnumType<SaveFilter>;
		}

		export const SaveGame: SaveGame;

		export function GetEnumItems(this: defined): Array<SaveFilter>
	}
	export type SaveFilter = SaveFilter.SaveAll | SaveFilter.SaveWorld | SaveFilter.SaveGame;
	export namespace SavedQualitySetting {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const Automatic: Automatic;

		export interface QualityLevel1 {
			Name: "QualityLevel1";
			Value: 1;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel1: QualityLevel1;

		export interface QualityLevel2 {
			Name: "QualityLevel2";
			Value: 2;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel2: QualityLevel2;

		export interface QualityLevel3 {
			Name: "QualityLevel3";
			Value: 3;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel3: QualityLevel3;

		export interface QualityLevel4 {
			Name: "QualityLevel4";
			Value: 4;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel4: QualityLevel4;

		export interface QualityLevel5 {
			Name: "QualityLevel5";
			Value: 5;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel5: QualityLevel5;

		export interface QualityLevel6 {
			Name: "QualityLevel6";
			Value: 6;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel6: QualityLevel6;

		export interface QualityLevel7 {
			Name: "QualityLevel7";
			Value: 7;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel7: QualityLevel7;

		export interface QualityLevel8 {
			Name: "QualityLevel8";
			Value: 8;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel8: QualityLevel8;

		export interface QualityLevel9 {
			Name: "QualityLevel9";
			Value: 9;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel9: QualityLevel9;

		export interface QualityLevel10 {
			Name: "QualityLevel10";
			Value: 10;
			EnumType: EnumType<SavedQualitySetting>;
		}

		export const QualityLevel10: QualityLevel10;

		export function GetEnumItems(this: defined): Array<SavedQualitySetting>
	}
	export type SavedQualitySetting = SavedQualitySetting.Automatic | SavedQualitySetting.QualityLevel1 | SavedQualitySetting.QualityLevel2 | SavedQualitySetting.QualityLevel3 | SavedQualitySetting.QualityLevel4 | SavedQualitySetting.QualityLevel5 | SavedQualitySetting.QualityLevel6 | SavedQualitySetting.QualityLevel7 | SavedQualitySetting.QualityLevel8 | SavedQualitySetting.QualityLevel9 | SavedQualitySetting.QualityLevel10;
	export namespace ScaleType {
		export interface Stretch {
			Name: "Stretch";
			Value: 0;
			EnumType: EnumType<ScaleType>;
		}

		export const Stretch: Stretch;

		export interface Slice {
			Name: "Slice";
			Value: 1;
			EnumType: EnumType<ScaleType>;
		}

		export const Slice: Slice;

		export interface Tile {
			Name: "Tile";
			Value: 2;
			EnumType: EnumType<ScaleType>;
		}

		export const Tile: Tile;

		export interface Fit {
			Name: "Fit";
			Value: 3;
			EnumType: EnumType<ScaleType>;
		}

		export const Fit: Fit;

		export interface Crop {
			Name: "Crop";
			Value: 4;
			EnumType: EnumType<ScaleType>;
		}

		export const Crop: Crop;

		export function GetEnumItems(this: defined): Array<ScaleType>
	}
	export type ScaleType = ScaleType.Stretch | ScaleType.Slice | ScaleType.Tile | ScaleType.Fit | ScaleType.Crop;
	export namespace ScreenOrientation {
		export interface LandscapeLeft {
			Name: "LandscapeLeft";
			Value: 0;
			EnumType: EnumType<ScreenOrientation>;
		}

		export const LandscapeLeft: LandscapeLeft;

		export interface LandscapeRight {
			Name: "LandscapeRight";
			Value: 1;
			EnumType: EnumType<ScreenOrientation>;
		}

		export const LandscapeRight: LandscapeRight;

		export interface LandscapeSensor {
			Name: "LandscapeSensor";
			Value: 2;
			EnumType: EnumType<ScreenOrientation>;
		}

		export const LandscapeSensor: LandscapeSensor;

		export interface Portrait {
			Name: "Portrait";
			Value: 3;
			EnumType: EnumType<ScreenOrientation>;
		}

		export const Portrait: Portrait;

		export interface Sensor {
			Name: "Sensor";
			Value: 4;
			EnumType: EnumType<ScreenOrientation>;
		}

		export const Sensor: Sensor;

		export function GetEnumItems(this: defined): Array<ScreenOrientation>
	}
	export type ScreenOrientation = ScreenOrientation.LandscapeLeft | ScreenOrientation.LandscapeRight | ScreenOrientation.LandscapeSensor | ScreenOrientation.Portrait | ScreenOrientation.Sensor;
	export namespace ScrollBarInset {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<ScrollBarInset>;
		}

		export const None: None;

		export interface ScrollBar {
			Name: "ScrollBar";
			Value: 1;
			EnumType: EnumType<ScrollBarInset>;
		}

		export const ScrollBar: ScrollBar;

		export interface Always {
			Name: "Always";
			Value: 2;
			EnumType: EnumType<ScrollBarInset>;
		}

		export const Always: Always;

		export function GetEnumItems(this: defined): Array<ScrollBarInset>
	}
	export type ScrollBarInset = ScrollBarInset.None | ScrollBarInset.ScrollBar | ScrollBarInset.Always;
	export namespace ScrollingDirection {
		export interface X {
			Name: "X";
			Value: 1;
			EnumType: EnumType<ScrollingDirection>;
		}

		export const X: X;

		export interface Y {
			Name: "Y";
			Value: 2;
			EnumType: EnumType<ScrollingDirection>;
		}

		export const Y: Y;

		export interface XY {
			Name: "XY";
			Value: 4;
			EnumType: EnumType<ScrollingDirection>;
		}

		export const XY: XY;

		export function GetEnumItems(this: defined): Array<ScrollingDirection>
	}
	export type ScrollingDirection = ScrollingDirection.X | ScrollingDirection.Y | ScrollingDirection.XY;
	export namespace ServerAudioBehavior {
		export interface Enabled {
			Name: "Enabled";
			Value: 0;
			EnumType: EnumType<ServerAudioBehavior>;
		}

		export const Enabled: Enabled;

		export interface Muted {
			Name: "Muted";
			Value: 1;
			EnumType: EnumType<ServerAudioBehavior>;
		}

		export const Muted: Muted;

		export interface OnlineGame {
			Name: "OnlineGame";
			Value: 2;
			EnumType: EnumType<ServerAudioBehavior>;
		}

		export const OnlineGame: OnlineGame;

		export function GetEnumItems(this: defined): Array<ServerAudioBehavior>
	}
	export type ServerAudioBehavior = ServerAudioBehavior.Enabled | ServerAudioBehavior.Muted | ServerAudioBehavior.OnlineGame;
	export namespace SignalBehavior {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<SignalBehavior>;
		}

		export const Default: Default;

		export interface Immediate {
			Name: "Immediate";
			Value: 1;
			EnumType: EnumType<SignalBehavior>;
		}

		export const Immediate: Immediate;

		export interface Deferred {
			Name: "Deferred";
			Value: 2;
			EnumType: EnumType<SignalBehavior>;
		}

		export const Deferred: Deferred;

		export function GetEnumItems(this: defined): Array<SignalBehavior>
	}
	export type SignalBehavior = SignalBehavior.Default | SignalBehavior.Immediate | SignalBehavior.Deferred;
	export namespace SizeConstraint {
		export interface RelativeXY {
			Name: "RelativeXY";
			Value: 0;
			EnumType: EnumType<SizeConstraint>;
		}

		export const RelativeXY: RelativeXY;

		export interface RelativeXX {
			Name: "RelativeXX";
			Value: 1;
			EnumType: EnumType<SizeConstraint>;
		}

		export const RelativeXX: RelativeXX;

		export interface RelativeYY {
			Name: "RelativeYY";
			Value: 2;
			EnumType: EnumType<SizeConstraint>;
		}

		export const RelativeYY: RelativeYY;

		export function GetEnumItems(this: defined): Array<SizeConstraint>
	}
	export type SizeConstraint = SizeConstraint.RelativeXY | SizeConstraint.RelativeXX | SizeConstraint.RelativeYY;
	export namespace SortDirection {
		export interface Ascending {
			Name: "Ascending";
			Value: 0;
			EnumType: EnumType<SortDirection>;
		}

		export const Ascending: Ascending;

		export interface Descending {
			Name: "Descending";
			Value: 1;
			EnumType: EnumType<SortDirection>;
		}

		export const Descending: Descending;

		export function GetEnumItems(this: defined): Array<SortDirection>
	}
	export type SortDirection = SortDirection.Ascending | SortDirection.Descending;
	export namespace SortOrder {
		export interface LayoutOrder {
			Name: "LayoutOrder";
			Value: 2;
			EnumType: EnumType<SortOrder>;
		}

		export const LayoutOrder: LayoutOrder;

		export interface Name {
			Name: "Name";
			Value: 0;
			EnumType: EnumType<SortOrder>;
		}

		export const Name: Name;

		export interface Custom {
			Name: "Custom";
			Value: 1;
			EnumType: EnumType<SortOrder>;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: defined): Array<SortOrder>
	}
	export type SortOrder = SortOrder.LayoutOrder | SortOrder.Name | SortOrder.Custom;
	export namespace SoundType {
		export interface NoSound {
			Name: "NoSound";
			Value: 0;
			EnumType: EnumType<SoundType>;
		}

		export const NoSound: NoSound;

		export interface Boing {
			Name: "Boing";
			Value: 1;
			EnumType: EnumType<SoundType>;
		}

		export const Boing: Boing;

		export interface Bomb {
			Name: "Bomb";
			Value: 2;
			EnumType: EnumType<SoundType>;
		}

		export const Bomb: Bomb;

		export interface Break {
			Name: "Break";
			Value: 3;
			EnumType: EnumType<SoundType>;
		}

		export const Break: Break;

		export interface Click {
			Name: "Click";
			Value: 4;
			EnumType: EnumType<SoundType>;
		}

		export const Click: Click;

		export interface Clock {
			Name: "Clock";
			Value: 5;
			EnumType: EnumType<SoundType>;
		}

		export const Clock: Clock;

		export interface Slingshot {
			Name: "Slingshot";
			Value: 6;
			EnumType: EnumType<SoundType>;
		}

		export const Slingshot: Slingshot;

		export interface Page {
			Name: "Page";
			Value: 7;
			EnumType: EnumType<SoundType>;
		}

		export const Page: Page;

		export interface Ping {
			Name: "Ping";
			Value: 8;
			EnumType: EnumType<SoundType>;
		}

		export const Ping: Ping;

		export interface Snap {
			Name: "Snap";
			Value: 9;
			EnumType: EnumType<SoundType>;
		}

		export const Snap: Snap;

		export interface Splat {
			Name: "Splat";
			Value: 10;
			EnumType: EnumType<SoundType>;
		}

		export const Splat: Splat;

		export interface Step {
			Name: "Step";
			Value: 11;
			EnumType: EnumType<SoundType>;
		}

		export const Step: Step;

		export interface StepOn {
			Name: "StepOn";
			Value: 12;
			EnumType: EnumType<SoundType>;
		}

		export const StepOn: StepOn;

		export interface Swoosh {
			Name: "Swoosh";
			Value: 13;
			EnumType: EnumType<SoundType>;
		}

		export const Swoosh: Swoosh;

		export interface Victory {
			Name: "Victory";
			Value: 14;
			EnumType: EnumType<SoundType>;
		}

		export const Victory: Victory;

		export function GetEnumItems(this: defined): Array<SoundType>
	}
	export type SoundType = SoundType.NoSound | SoundType.Boing | SoundType.Bomb | SoundType.Break | SoundType.Click | SoundType.Clock | SoundType.Slingshot | SoundType.Page | SoundType.Ping | SoundType.Snap | SoundType.Splat | SoundType.Step | SoundType.StepOn | SoundType.Swoosh | SoundType.Victory;
	export namespace SpecialKey {
		export interface Insert {
			Name: "Insert";
			Value: 0;
			EnumType: EnumType<SpecialKey>;
		}

		export const Insert: Insert;

		export interface Home {
			Name: "Home";
			Value: 1;
			EnumType: EnumType<SpecialKey>;
		}

		export const Home: Home;

		export interface End {
			Name: "End";
			Value: 2;
			EnumType: EnumType<SpecialKey>;
		}

		export const End: End;

		export interface PageUp {
			Name: "PageUp";
			Value: 3;
			EnumType: EnumType<SpecialKey>;
		}

		export const PageUp: PageUp;

		export interface PageDown {
			Name: "PageDown";
			Value: 4;
			EnumType: EnumType<SpecialKey>;
		}

		export const PageDown: PageDown;

		export interface ChatHotkey {
			Name: "ChatHotkey";
			Value: 5;
			EnumType: EnumType<SpecialKey>;
		}

		export const ChatHotkey: ChatHotkey;

		export function GetEnumItems(this: defined): Array<SpecialKey>
	}
	export type SpecialKey = SpecialKey.Insert | SpecialKey.Home | SpecialKey.End | SpecialKey.PageUp | SpecialKey.PageDown | SpecialKey.ChatHotkey;
	export namespace StartCorner {
		export interface TopLeft {
			Name: "TopLeft";
			Value: 0;
			EnumType: EnumType<StartCorner>;
		}

		export const TopLeft: TopLeft;

		export interface TopRight {
			Name: "TopRight";
			Value: 1;
			EnumType: EnumType<StartCorner>;
		}

		export const TopRight: TopRight;

		export interface BottomLeft {
			Name: "BottomLeft";
			Value: 2;
			EnumType: EnumType<StartCorner>;
		}

		export const BottomLeft: BottomLeft;

		export interface BottomRight {
			Name: "BottomRight";
			Value: 3;
			EnumType: EnumType<StartCorner>;
		}

		export const BottomRight: BottomRight;

		export function GetEnumItems(this: defined): Array<StartCorner>
	}
	export type StartCorner = StartCorner.TopLeft | StartCorner.TopRight | StartCorner.BottomLeft | StartCorner.BottomRight;
	export namespace Status {
		export interface Poison {
			Name: "Poison";
			Value: 0;
			EnumType: EnumType<Status>;
		}

		export const Poison: Poison;

		export interface Confusion {
			Name: "Confusion";
			Value: 1;
			EnumType: EnumType<Status>;
		}

		export const Confusion: Confusion;

		export function GetEnumItems(this: defined): Array<Status>
	}
	export type Status = Status.Poison | Status.Confusion;
	export namespace StreamOutBehavior {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<StreamOutBehavior>;
		}

		export const Default: Default;

		export interface LowMemory {
			Name: "LowMemory";
			Value: 1;
			EnumType: EnumType<StreamOutBehavior>;
		}

		export const LowMemory: LowMemory;

		export interface Opportunistic {
			Name: "Opportunistic";
			Value: 2;
			EnumType: EnumType<StreamOutBehavior>;
		}

		export const Opportunistic: Opportunistic;

		export function GetEnumItems(this: defined): Array<StreamOutBehavior>
	}
	export type StreamOutBehavior = StreamOutBehavior.Default | StreamOutBehavior.LowMemory | StreamOutBehavior.Opportunistic;
	export namespace StreamingPauseMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<StreamingPauseMode>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<StreamingPauseMode>;
		}

		export const Disabled: Disabled;

		export interface ClientPhysicsPause {
			Name: "ClientPhysicsPause";
			Value: 2;
			EnumType: EnumType<StreamingPauseMode>;
		}

		export const ClientPhysicsPause: ClientPhysicsPause;

		export function GetEnumItems(this: defined): Array<StreamingPauseMode>
	}
	export type StreamingPauseMode = StreamingPauseMode.Default | StreamingPauseMode.Disabled | StreamingPauseMode.ClientPhysicsPause;
	export namespace StudioCloseMode {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<StudioCloseMode>;
		}

		export const None: None;

		export interface CloseStudio {
			Name: "CloseStudio";
			Value: 1;
			EnumType: EnumType<StudioCloseMode>;
		}

		export const CloseStudio: CloseStudio;

		export interface CloseDoc {
			Name: "CloseDoc";
			Value: 2;
			EnumType: EnumType<StudioCloseMode>;
		}

		export const CloseDoc: CloseDoc;

		export function GetEnumItems(this: defined): Array<StudioCloseMode>
	}
	export type StudioCloseMode = StudioCloseMode.None | StudioCloseMode.CloseStudio | StudioCloseMode.CloseDoc;
	export namespace StudioDataModelType {
		export interface Edit {
			Name: "Edit";
			Value: 0;
			EnumType: EnumType<StudioDataModelType>;
		}

		export const Edit: Edit;

		export interface PlayClient {
			Name: "PlayClient";
			Value: 1;
			EnumType: EnumType<StudioDataModelType>;
		}

		export const PlayClient: PlayClient;

		export interface PlayServer {
			Name: "PlayServer";
			Value: 2;
			EnumType: EnumType<StudioDataModelType>;
		}

		export const PlayServer: PlayServer;

		export interface RobloxPlugin {
			Name: "RobloxPlugin";
			Value: 3;
			EnumType: EnumType<StudioDataModelType>;
		}

		export const RobloxPlugin: RobloxPlugin;

		export interface UserPlugin {
			Name: "UserPlugin";
			Value: 4;
			EnumType: EnumType<StudioDataModelType>;
		}

		export const UserPlugin: UserPlugin;

		export interface None {
			Name: "None";
			Value: 5;
			EnumType: EnumType<StudioDataModelType>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<StudioDataModelType>
	}
	export type StudioDataModelType = StudioDataModelType.Edit | StudioDataModelType.PlayClient | StudioDataModelType.PlayServer | StudioDataModelType.RobloxPlugin | StudioDataModelType.UserPlugin | StudioDataModelType.None;
	export namespace StudioScriptEditorColorCategories {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Default: Default;

		export interface Operator {
			Name: "Operator";
			Value: 1;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Operator: Operator;

		export interface Number {
			Name: "Number";
			Value: 2;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Number: Number;

		export interface String {
			Name: "String";
			Value: 3;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const String: String;

		export interface Comment {
			Name: "Comment";
			Value: 4;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Comment: Comment;

		export interface Keyword {
			Name: "Keyword";
			Value: 5;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Keyword: Keyword;

		export interface Builtin {
			Name: "Builtin";
			Value: 6;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Builtin: Builtin;

		export interface Method {
			Name: "Method";
			Value: 7;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Method: Method;

		export interface Property {
			Name: "Property";
			Value: 8;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Property: Property;

		export interface Nil {
			Name: "Nil";
			Value: 9;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Nil: Nil;

		export interface Bool {
			Name: "Bool";
			Value: 10;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Bool: Bool;

		export interface Function {
			Name: "Function";
			Value: 11;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Function: Function;

		export interface Local {
			Name: "Local";
			Value: 12;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Local: Local;

		export interface Self {
			Name: "Self";
			Value: 13;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Self: Self;

		export interface LuauKeyword {
			Name: "LuauKeyword";
			Value: 14;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const LuauKeyword: LuauKeyword;

		export interface FunctionName {
			Name: "FunctionName";
			Value: 15;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const FunctionName: FunctionName;

		export interface TODO {
			Name: "TODO";
			Value: 16;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const TODO: TODO;

		export interface Background {
			Name: "Background";
			Value: 17;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Background: Background;

		export interface SelectionText {
			Name: "SelectionText";
			Value: 18;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const SelectionText: SelectionText;

		export interface SelectionBackground {
			Name: "SelectionBackground";
			Value: 19;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const SelectionBackground: SelectionBackground;

		export interface FindSelectionBackground {
			Name: "FindSelectionBackground";
			Value: 20;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const FindSelectionBackground: FindSelectionBackground;

		export interface MatchingWordBackground {
			Name: "MatchingWordBackground";
			Value: 21;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const MatchingWordBackground: MatchingWordBackground;

		export interface Warning {
			Name: "Warning";
			Value: 22;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Warning: Warning;

		export interface Error {
			Name: "Error";
			Value: 23;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Error: Error;

		export interface Whitespace {
			Name: "Whitespace";
			Value: 24;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Whitespace: Whitespace;

		export interface ActiveLine {
			Name: "ActiveLine";
			Value: 25;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const ActiveLine: ActiveLine;

		export interface DebuggerCurrentLine {
			Name: "DebuggerCurrentLine";
			Value: 26;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const DebuggerCurrentLine: DebuggerCurrentLine;

		export interface DebuggerErrorLine {
			Name: "DebuggerErrorLine";
			Value: 27;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const DebuggerErrorLine: DebuggerErrorLine;

		export interface Ruler {
			Name: "Ruler";
			Value: 28;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Ruler: Ruler;

		export interface Bracket {
			Name: "Bracket";
			Value: 29;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const Bracket: Bracket;

		export interface MenuPrimaryText {
			Name: "MenuPrimaryText";
			Value: 30;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const MenuPrimaryText: MenuPrimaryText;

		export interface MenuSecondaryText {
			Name: "MenuSecondaryText";
			Value: 31;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const MenuSecondaryText: MenuSecondaryText;

		export interface MenuSelectedText {
			Name: "MenuSelectedText";
			Value: 32;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const MenuSelectedText: MenuSelectedText;

		export interface MenuBackground {
			Name: "MenuBackground";
			Value: 33;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const MenuBackground: MenuBackground;

		export interface MenuSelectedBackground {
			Name: "MenuSelectedBackground";
			Value: 34;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const MenuSelectedBackground: MenuSelectedBackground;

		export interface MenuScrollbarBackground {
			Name: "MenuScrollbarBackground";
			Value: 35;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const MenuScrollbarBackground: MenuScrollbarBackground;

		export interface MenuScrollbarHandle {
			Name: "MenuScrollbarHandle";
			Value: 36;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const MenuScrollbarHandle: MenuScrollbarHandle;

		export interface MenuBorder {
			Name: "MenuBorder";
			Value: 37;
			EnumType: EnumType<StudioScriptEditorColorCategories>;
		}

		export const MenuBorder: MenuBorder;

		export function GetEnumItems(this: defined): Array<StudioScriptEditorColorCategories>
	}
	export type StudioScriptEditorColorCategories = StudioScriptEditorColorCategories.Default | StudioScriptEditorColorCategories.Operator | StudioScriptEditorColorCategories.Number | StudioScriptEditorColorCategories.String | StudioScriptEditorColorCategories.Comment | StudioScriptEditorColorCategories.Keyword | StudioScriptEditorColorCategories.Builtin | StudioScriptEditorColorCategories.Method | StudioScriptEditorColorCategories.Property | StudioScriptEditorColorCategories.Nil | StudioScriptEditorColorCategories.Bool | StudioScriptEditorColorCategories.Function | StudioScriptEditorColorCategories.Local | StudioScriptEditorColorCategories.Self | StudioScriptEditorColorCategories.LuauKeyword | StudioScriptEditorColorCategories.FunctionName | StudioScriptEditorColorCategories.TODO | StudioScriptEditorColorCategories.Background | StudioScriptEditorColorCategories.SelectionText | StudioScriptEditorColorCategories.SelectionBackground | StudioScriptEditorColorCategories.FindSelectionBackground | StudioScriptEditorColorCategories.MatchingWordBackground | StudioScriptEditorColorCategories.Warning | StudioScriptEditorColorCategories.Error | StudioScriptEditorColorCategories.Whitespace | StudioScriptEditorColorCategories.ActiveLine | StudioScriptEditorColorCategories.DebuggerCurrentLine | StudioScriptEditorColorCategories.DebuggerErrorLine | StudioScriptEditorColorCategories.Ruler | StudioScriptEditorColorCategories.Bracket | StudioScriptEditorColorCategories.MenuPrimaryText | StudioScriptEditorColorCategories.MenuSecondaryText | StudioScriptEditorColorCategories.MenuSelectedText | StudioScriptEditorColorCategories.MenuBackground | StudioScriptEditorColorCategories.MenuSelectedBackground | StudioScriptEditorColorCategories.MenuScrollbarBackground | StudioScriptEditorColorCategories.MenuScrollbarHandle | StudioScriptEditorColorCategories.MenuBorder;
	export namespace StudioScriptEditorColorPresets {
		export interface RobloxDefault {
			Name: "RobloxDefault";
			Value: 0;
			EnumType: EnumType<StudioScriptEditorColorPresets>;
		}

		export const RobloxDefault: RobloxDefault;

		export interface Extra1 {
			Name: "Extra1";
			Value: 1;
			EnumType: EnumType<StudioScriptEditorColorPresets>;
		}

		export const Extra1: Extra1;

		export interface Extra2 {
			Name: "Extra2";
			Value: 2;
			EnumType: EnumType<StudioScriptEditorColorPresets>;
		}

		export const Extra2: Extra2;

		export interface Custom {
			Name: "Custom";
			Value: 3;
			EnumType: EnumType<StudioScriptEditorColorPresets>;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: defined): Array<StudioScriptEditorColorPresets>
	}
	export type StudioScriptEditorColorPresets = StudioScriptEditorColorPresets.RobloxDefault | StudioScriptEditorColorPresets.Extra1 | StudioScriptEditorColorPresets.Extra2 | StudioScriptEditorColorPresets.Custom;
	export namespace StudioStyleGuideColor {
		export interface MainBackground {
			Name: "MainBackground";
			Value: 0;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const MainBackground: MainBackground;

		export interface Titlebar {
			Name: "Titlebar";
			Value: 1;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Titlebar: Titlebar;

		export interface Dropdown {
			Name: "Dropdown";
			Value: 2;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Dropdown: Dropdown;

		export interface Tooltip {
			Name: "Tooltip";
			Value: 3;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Tooltip: Tooltip;

		export interface Notification {
			Name: "Notification";
			Value: 4;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Notification: Notification;

		export interface ScrollBar {
			Name: "ScrollBar";
			Value: 5;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScrollBar: ScrollBar;

		export interface ScrollBarBackground {
			Name: "ScrollBarBackground";
			Value: 6;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScrollBarBackground: ScrollBarBackground;

		export interface TabBar {
			Name: "TabBar";
			Value: 7;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const TabBar: TabBar;

		export interface Tab {
			Name: "Tab";
			Value: 8;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Tab: Tab;

		export interface FilterButtonDefault {
			Name: "FilterButtonDefault";
			Value: 9;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const FilterButtonDefault: FilterButtonDefault;

		export interface FilterButtonHover {
			Name: "FilterButtonHover";
			Value: 10;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const FilterButtonHover: FilterButtonHover;

		export interface FilterButtonChecked {
			Name: "FilterButtonChecked";
			Value: 11;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const FilterButtonChecked: FilterButtonChecked;

		export interface FilterButtonAccent {
			Name: "FilterButtonAccent";
			Value: 12;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const FilterButtonAccent: FilterButtonAccent;

		export interface FilterButtonBorder {
			Name: "FilterButtonBorder";
			Value: 13;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const FilterButtonBorder: FilterButtonBorder;

		export interface FilterButtonBorderAlt {
			Name: "FilterButtonBorderAlt";
			Value: 14;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const FilterButtonBorderAlt: FilterButtonBorderAlt;

		export interface RibbonTab {
			Name: "RibbonTab";
			Value: 15;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const RibbonTab: RibbonTab;

		export interface RibbonTabTopBar {
			Name: "RibbonTabTopBar";
			Value: 16;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const RibbonTabTopBar: RibbonTabTopBar;

		export interface Button {
			Name: "Button";
			Value: 17;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Button: Button;

		export interface MainButton {
			Name: "MainButton";
			Value: 18;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const MainButton: MainButton;

		export interface RibbonButton {
			Name: "RibbonButton";
			Value: 19;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const RibbonButton: RibbonButton;

		export interface ViewPortBackground {
			Name: "ViewPortBackground";
			Value: 20;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ViewPortBackground: ViewPortBackground;

		export interface InputFieldBackground {
			Name: "InputFieldBackground";
			Value: 21;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const InputFieldBackground: InputFieldBackground;

		export interface Item {
			Name: "Item";
			Value: 22;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Item: Item;

		export interface TableItem {
			Name: "TableItem";
			Value: 23;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const TableItem: TableItem;

		export interface CategoryItem {
			Name: "CategoryItem";
			Value: 24;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const CategoryItem: CategoryItem;

		export interface GameSettingsTableItem {
			Name: "GameSettingsTableItem";
			Value: 25;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const GameSettingsTableItem: GameSettingsTableItem;

		export interface GameSettingsTooltip {
			Name: "GameSettingsTooltip";
			Value: 26;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const GameSettingsTooltip: GameSettingsTooltip;

		export interface EmulatorBar {
			Name: "EmulatorBar";
			Value: 27;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const EmulatorBar: EmulatorBar;

		export interface EmulatorDropDown {
			Name: "EmulatorDropDown";
			Value: 28;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const EmulatorDropDown: EmulatorDropDown;

		export interface ColorPickerFrame {
			Name: "ColorPickerFrame";
			Value: 29;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ColorPickerFrame: ColorPickerFrame;

		export interface CurrentMarker {
			Name: "CurrentMarker";
			Value: 30;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const CurrentMarker: CurrentMarker;

		export interface Border {
			Name: "Border";
			Value: 31;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Border: Border;

		export interface Shadow {
			Name: "Shadow";
			Value: 32;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Shadow: Shadow;

		export interface Light {
			Name: "Light";
			Value: 33;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Light: Light;

		export interface Dark {
			Name: "Dark";
			Value: 34;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Dark: Dark;

		export interface Mid {
			Name: "Mid";
			Value: 35;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Mid: Mid;

		export interface MainText {
			Name: "MainText";
			Value: 36;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const MainText: MainText;

		export interface SubText {
			Name: "SubText";
			Value: 37;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const SubText: SubText;

		export interface TitlebarText {
			Name: "TitlebarText";
			Value: 38;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const TitlebarText: TitlebarText;

		export interface BrightText {
			Name: "BrightText";
			Value: 39;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const BrightText: BrightText;

		export interface DimmedText {
			Name: "DimmedText";
			Value: 40;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DimmedText: DimmedText;

		export interface LinkText {
			Name: "LinkText";
			Value: 41;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const LinkText: LinkText;

		export interface WarningText {
			Name: "WarningText";
			Value: 42;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const WarningText: WarningText;

		export interface ErrorText {
			Name: "ErrorText";
			Value: 43;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ErrorText: ErrorText;

		export interface InfoText {
			Name: "InfoText";
			Value: 44;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const InfoText: InfoText;

		export interface SensitiveText {
			Name: "SensitiveText";
			Value: 45;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const SensitiveText: SensitiveText;

		export interface ScriptSideWidget {
			Name: "ScriptSideWidget";
			Value: 46;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptSideWidget: ScriptSideWidget;

		export interface ScriptBackground {
			Name: "ScriptBackground";
			Value: 47;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptBackground: ScriptBackground;

		export interface ScriptText {
			Name: "ScriptText";
			Value: 48;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptText: ScriptText;

		export interface ScriptSelectionText {
			Name: "ScriptSelectionText";
			Value: 49;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptSelectionText: ScriptSelectionText;

		export interface ScriptSelectionBackground {
			Name: "ScriptSelectionBackground";
			Value: 50;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptSelectionBackground: ScriptSelectionBackground;

		export interface ScriptFindSelectionBackground {
			Name: "ScriptFindSelectionBackground";
			Value: 51;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptFindSelectionBackground: ScriptFindSelectionBackground;

		export interface ScriptMatchingWordSelectionBackground {
			Name: "ScriptMatchingWordSelectionBackground";
			Value: 52;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptMatchingWordSelectionBackground: ScriptMatchingWordSelectionBackground;

		export interface ScriptOperator {
			Name: "ScriptOperator";
			Value: 53;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptOperator: ScriptOperator;

		export interface ScriptNumber {
			Name: "ScriptNumber";
			Value: 54;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptNumber: ScriptNumber;

		export interface ScriptString {
			Name: "ScriptString";
			Value: 55;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptString: ScriptString;

		export interface ScriptComment {
			Name: "ScriptComment";
			Value: 56;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptComment: ScriptComment;

		export interface ScriptKeyword {
			Name: "ScriptKeyword";
			Value: 57;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptKeyword: ScriptKeyword;

		export interface ScriptBuiltInFunction {
			Name: "ScriptBuiltInFunction";
			Value: 58;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptBuiltInFunction: ScriptBuiltInFunction;

		export interface ScriptWarning {
			Name: "ScriptWarning";
			Value: 59;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptWarning: ScriptWarning;

		export interface ScriptError {
			Name: "ScriptError";
			Value: 60;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptError: ScriptError;

		export interface ScriptWhitespace {
			Name: "ScriptWhitespace";
			Value: 61;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptWhitespace: ScriptWhitespace;

		export interface ScriptRuler {
			Name: "ScriptRuler";
			Value: 62;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptRuler: ScriptRuler;

		export interface DebuggerCurrentLine {
			Name: "DebuggerCurrentLine";
			Value: 63;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DebuggerCurrentLine: DebuggerCurrentLine;

		export interface DebuggerErrorLine {
			Name: "DebuggerErrorLine";
			Value: 64;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DebuggerErrorLine: DebuggerErrorLine;

		export interface ScriptEditorCurrentLine {
			Name: "ScriptEditorCurrentLine";
			Value: 103;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptEditorCurrentLine: ScriptEditorCurrentLine;

		export interface DiffFilePathText {
			Name: "DiffFilePathText";
			Value: 65;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffFilePathText: DiffFilePathText;

		export interface DiffTextHunkInfo {
			Name: "DiffTextHunkInfo";
			Value: 66;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffTextHunkInfo: DiffTextHunkInfo;

		export interface DiffTextNoChange {
			Name: "DiffTextNoChange";
			Value: 67;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffTextNoChange: DiffTextNoChange;

		export interface DiffTextAddition {
			Name: "DiffTextAddition";
			Value: 68;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffTextAddition: DiffTextAddition;

		export interface DiffTextDeletion {
			Name: "DiffTextDeletion";
			Value: 69;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffTextDeletion: DiffTextDeletion;

		export interface DiffTextSeparatorBackground {
			Name: "DiffTextSeparatorBackground";
			Value: 70;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffTextSeparatorBackground: DiffTextSeparatorBackground;

		export interface DiffTextNoChangeBackground {
			Name: "DiffTextNoChangeBackground";
			Value: 71;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffTextNoChangeBackground: DiffTextNoChangeBackground;

		export interface DiffTextAdditionBackground {
			Name: "DiffTextAdditionBackground";
			Value: 72;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffTextAdditionBackground: DiffTextAdditionBackground;

		export interface DiffTextDeletionBackground {
			Name: "DiffTextDeletionBackground";
			Value: 73;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffTextDeletionBackground: DiffTextDeletionBackground;

		export interface DiffLineNum {
			Name: "DiffLineNum";
			Value: 74;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffLineNum: DiffLineNum;

		export interface DiffLineNumSeparatorBackground {
			Name: "DiffLineNumSeparatorBackground";
			Value: 75;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffLineNumSeparatorBackground: DiffLineNumSeparatorBackground;

		export interface DiffLineNumNoChangeBackground {
			Name: "DiffLineNumNoChangeBackground";
			Value: 76;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffLineNumNoChangeBackground: DiffLineNumNoChangeBackground;

		export interface DiffLineNumAdditionBackground {
			Name: "DiffLineNumAdditionBackground";
			Value: 77;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffLineNumAdditionBackground: DiffLineNumAdditionBackground;

		export interface DiffLineNumDeletionBackground {
			Name: "DiffLineNumDeletionBackground";
			Value: 78;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffLineNumDeletionBackground: DiffLineNumDeletionBackground;

		export interface DiffFilePathBackground {
			Name: "DiffFilePathBackground";
			Value: 79;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffFilePathBackground: DiffFilePathBackground;

		export interface DiffFilePathBorder {
			Name: "DiffFilePathBorder";
			Value: 80;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DiffFilePathBorder: DiffFilePathBorder;

		export interface ChatIncomingBgColor {
			Name: "ChatIncomingBgColor";
			Value: 81;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ChatIncomingBgColor: ChatIncomingBgColor;

		export interface ChatIncomingTextColor {
			Name: "ChatIncomingTextColor";
			Value: 82;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ChatIncomingTextColor: ChatIncomingTextColor;

		export interface ChatOutgoingBgColor {
			Name: "ChatOutgoingBgColor";
			Value: 83;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ChatOutgoingBgColor: ChatOutgoingBgColor;

		export interface ChatOutgoingTextColor {
			Name: "ChatOutgoingTextColor";
			Value: 84;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ChatOutgoingTextColor: ChatOutgoingTextColor;

		export interface ChatModeratedMessageColor {
			Name: "ChatModeratedMessageColor";
			Value: 85;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ChatModeratedMessageColor: ChatModeratedMessageColor;

		export interface Separator {
			Name: "Separator";
			Value: 86;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Separator: Separator;

		export interface ButtonBorder {
			Name: "ButtonBorder";
			Value: 87;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ButtonBorder: ButtonBorder;

		export interface ButtonText {
			Name: "ButtonText";
			Value: 88;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ButtonText: ButtonText;

		export interface InputFieldBorder {
			Name: "InputFieldBorder";
			Value: 89;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const InputFieldBorder: InputFieldBorder;

		export interface CheckedFieldBackground {
			Name: "CheckedFieldBackground";
			Value: 90;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const CheckedFieldBackground: CheckedFieldBackground;

		export interface CheckedFieldBorder {
			Name: "CheckedFieldBorder";
			Value: 91;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const CheckedFieldBorder: CheckedFieldBorder;

		export interface CheckedFieldIndicator {
			Name: "CheckedFieldIndicator";
			Value: 92;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const CheckedFieldIndicator: CheckedFieldIndicator;

		export interface HeaderSection {
			Name: "HeaderSection";
			Value: 93;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const HeaderSection: HeaderSection;

		export interface Midlight {
			Name: "Midlight";
			Value: 94;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const Midlight: Midlight;

		export interface StatusBar {
			Name: "StatusBar";
			Value: 95;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const StatusBar: StatusBar;

		export interface DialogButton {
			Name: "DialogButton";
			Value: 96;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DialogButton: DialogButton;

		export interface DialogButtonText {
			Name: "DialogButtonText";
			Value: 97;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DialogButtonText: DialogButtonText;

		export interface DialogButtonBorder {
			Name: "DialogButtonBorder";
			Value: 98;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DialogButtonBorder: DialogButtonBorder;

		export interface DialogMainButton {
			Name: "DialogMainButton";
			Value: 99;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DialogMainButton: DialogMainButton;

		export interface DialogMainButtonText {
			Name: "DialogMainButtonText";
			Value: 100;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const DialogMainButtonText: DialogMainButtonText;

		export interface InfoBarWarningBackground {
			Name: "InfoBarWarningBackground";
			Value: 101;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const InfoBarWarningBackground: InfoBarWarningBackground;

		export interface InfoBarWarningText {
			Name: "InfoBarWarningText";
			Value: 102;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const InfoBarWarningText: InfoBarWarningText;

		export interface ScriptMethod {
			Name: "ScriptMethod";
			Value: 104;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptMethod: ScriptMethod;

		export interface ScriptProperty {
			Name: "ScriptProperty";
			Value: 105;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptProperty: ScriptProperty;

		export interface ScriptNil {
			Name: "ScriptNil";
			Value: 106;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptNil: ScriptNil;

		export interface ScriptBool {
			Name: "ScriptBool";
			Value: 107;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptBool: ScriptBool;

		export interface ScriptFunction {
			Name: "ScriptFunction";
			Value: 108;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptFunction: ScriptFunction;

		export interface ScriptLocal {
			Name: "ScriptLocal";
			Value: 109;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptLocal: ScriptLocal;

		export interface ScriptSelf {
			Name: "ScriptSelf";
			Value: 110;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptSelf: ScriptSelf;

		export interface ScriptLuauKeyword {
			Name: "ScriptLuauKeyword";
			Value: 111;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptLuauKeyword: ScriptLuauKeyword;

		export interface ScriptFunctionName {
			Name: "ScriptFunctionName";
			Value: 112;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptFunctionName: ScriptFunctionName;

		export interface ScriptTodo {
			Name: "ScriptTodo";
			Value: 113;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptTodo: ScriptTodo;

		export interface ScriptBracket {
			Name: "ScriptBracket";
			Value: 114;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const ScriptBracket: ScriptBracket;

		export interface AttributeCog {
			Name: "AttributeCog";
			Value: 115;
			EnumType: EnumType<StudioStyleGuideColor>;
		}

		export const AttributeCog: AttributeCog;

		export function GetEnumItems(this: defined): Array<StudioStyleGuideColor>
	}
	export type StudioStyleGuideColor = StudioStyleGuideColor.MainBackground | StudioStyleGuideColor.Titlebar | StudioStyleGuideColor.Dropdown | StudioStyleGuideColor.Tooltip | StudioStyleGuideColor.Notification | StudioStyleGuideColor.ScrollBar | StudioStyleGuideColor.ScrollBarBackground | StudioStyleGuideColor.TabBar | StudioStyleGuideColor.Tab | StudioStyleGuideColor.FilterButtonDefault | StudioStyleGuideColor.FilterButtonHover | StudioStyleGuideColor.FilterButtonChecked | StudioStyleGuideColor.FilterButtonAccent | StudioStyleGuideColor.FilterButtonBorder | StudioStyleGuideColor.FilterButtonBorderAlt | StudioStyleGuideColor.RibbonTab | StudioStyleGuideColor.RibbonTabTopBar | StudioStyleGuideColor.Button | StudioStyleGuideColor.MainButton | StudioStyleGuideColor.RibbonButton | StudioStyleGuideColor.ViewPortBackground | StudioStyleGuideColor.InputFieldBackground | StudioStyleGuideColor.Item | StudioStyleGuideColor.TableItem | StudioStyleGuideColor.CategoryItem | StudioStyleGuideColor.GameSettingsTableItem | StudioStyleGuideColor.GameSettingsTooltip | StudioStyleGuideColor.EmulatorBar | StudioStyleGuideColor.EmulatorDropDown | StudioStyleGuideColor.ColorPickerFrame | StudioStyleGuideColor.CurrentMarker | StudioStyleGuideColor.Border | StudioStyleGuideColor.Shadow | StudioStyleGuideColor.Light | StudioStyleGuideColor.Dark | StudioStyleGuideColor.Mid | StudioStyleGuideColor.MainText | StudioStyleGuideColor.SubText | StudioStyleGuideColor.TitlebarText | StudioStyleGuideColor.BrightText | StudioStyleGuideColor.DimmedText | StudioStyleGuideColor.LinkText | StudioStyleGuideColor.WarningText | StudioStyleGuideColor.ErrorText | StudioStyleGuideColor.InfoText | StudioStyleGuideColor.SensitiveText | StudioStyleGuideColor.ScriptSideWidget | StudioStyleGuideColor.ScriptBackground | StudioStyleGuideColor.ScriptText | StudioStyleGuideColor.ScriptSelectionText | StudioStyleGuideColor.ScriptSelectionBackground | StudioStyleGuideColor.ScriptFindSelectionBackground | StudioStyleGuideColor.ScriptMatchingWordSelectionBackground | StudioStyleGuideColor.ScriptOperator | StudioStyleGuideColor.ScriptNumber | StudioStyleGuideColor.ScriptString | StudioStyleGuideColor.ScriptComment | StudioStyleGuideColor.ScriptKeyword | StudioStyleGuideColor.ScriptBuiltInFunction | StudioStyleGuideColor.ScriptWarning | StudioStyleGuideColor.ScriptError | StudioStyleGuideColor.ScriptWhitespace | StudioStyleGuideColor.ScriptRuler | StudioStyleGuideColor.DebuggerCurrentLine | StudioStyleGuideColor.DebuggerErrorLine | StudioStyleGuideColor.ScriptEditorCurrentLine | StudioStyleGuideColor.DiffFilePathText | StudioStyleGuideColor.DiffTextHunkInfo | StudioStyleGuideColor.DiffTextNoChange | StudioStyleGuideColor.DiffTextAddition | StudioStyleGuideColor.DiffTextDeletion | StudioStyleGuideColor.DiffTextSeparatorBackground | StudioStyleGuideColor.DiffTextNoChangeBackground | StudioStyleGuideColor.DiffTextAdditionBackground | StudioStyleGuideColor.DiffTextDeletionBackground | StudioStyleGuideColor.DiffLineNum | StudioStyleGuideColor.DiffLineNumSeparatorBackground | StudioStyleGuideColor.DiffLineNumNoChangeBackground | StudioStyleGuideColor.DiffLineNumAdditionBackground | StudioStyleGuideColor.DiffLineNumDeletionBackground | StudioStyleGuideColor.DiffFilePathBackground | StudioStyleGuideColor.DiffFilePathBorder | StudioStyleGuideColor.ChatIncomingBgColor | StudioStyleGuideColor.ChatIncomingTextColor | StudioStyleGuideColor.ChatOutgoingBgColor | StudioStyleGuideColor.ChatOutgoingTextColor | StudioStyleGuideColor.ChatModeratedMessageColor | StudioStyleGuideColor.Separator | StudioStyleGuideColor.ButtonBorder | StudioStyleGuideColor.ButtonText | StudioStyleGuideColor.InputFieldBorder | StudioStyleGuideColor.CheckedFieldBackground | StudioStyleGuideColor.CheckedFieldBorder | StudioStyleGuideColor.CheckedFieldIndicator | StudioStyleGuideColor.HeaderSection | StudioStyleGuideColor.Midlight | StudioStyleGuideColor.StatusBar | StudioStyleGuideColor.DialogButton | StudioStyleGuideColor.DialogButtonText | StudioStyleGuideColor.DialogButtonBorder | StudioStyleGuideColor.DialogMainButton | StudioStyleGuideColor.DialogMainButtonText | StudioStyleGuideColor.InfoBarWarningBackground | StudioStyleGuideColor.InfoBarWarningText | StudioStyleGuideColor.ScriptMethod | StudioStyleGuideColor.ScriptProperty | StudioStyleGuideColor.ScriptNil | StudioStyleGuideColor.ScriptBool | StudioStyleGuideColor.ScriptFunction | StudioStyleGuideColor.ScriptLocal | StudioStyleGuideColor.ScriptSelf | StudioStyleGuideColor.ScriptLuauKeyword | StudioStyleGuideColor.ScriptFunctionName | StudioStyleGuideColor.ScriptTodo | StudioStyleGuideColor.ScriptBracket | StudioStyleGuideColor.AttributeCog;
	export namespace StudioStyleGuideModifier {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<StudioStyleGuideModifier>;
		}

		export const Default: Default;

		export interface Selected {
			Name: "Selected";
			Value: 1;
			EnumType: EnumType<StudioStyleGuideModifier>;
		}

		export const Selected: Selected;

		export interface Pressed {
			Name: "Pressed";
			Value: 2;
			EnumType: EnumType<StudioStyleGuideModifier>;
		}

		export const Pressed: Pressed;

		export interface Disabled {
			Name: "Disabled";
			Value: 3;
			EnumType: EnumType<StudioStyleGuideModifier>;
		}

		export const Disabled: Disabled;

		export interface Hover {
			Name: "Hover";
			Value: 4;
			EnumType: EnumType<StudioStyleGuideModifier>;
		}

		export const Hover: Hover;

		export function GetEnumItems(this: defined): Array<StudioStyleGuideModifier>
	}
	export type StudioStyleGuideModifier = StudioStyleGuideModifier.Default | StudioStyleGuideModifier.Selected | StudioStyleGuideModifier.Pressed | StudioStyleGuideModifier.Disabled | StudioStyleGuideModifier.Hover;
	export namespace Style {
		export interface AlternatingSupports {
			Name: "AlternatingSupports";
			Value: 0;
			EnumType: EnumType<Style>;
		}

		export const AlternatingSupports: AlternatingSupports;

		export interface BridgeStyleSupports {
			Name: "BridgeStyleSupports";
			Value: 1;
			EnumType: EnumType<Style>;
		}

		export const BridgeStyleSupports: BridgeStyleSupports;

		export interface NoSupports {
			Name: "NoSupports";
			Value: 2;
			EnumType: EnumType<Style>;
		}

		export const NoSupports: NoSupports;

		export function GetEnumItems(this: defined): Array<Style>
	}
	export type Style = Style.AlternatingSupports | Style.BridgeStyleSupports | Style.NoSupports;
	export namespace SurfaceConstraint {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<SurfaceConstraint>;
		}

		export const None: None;

		export interface Hinge {
			Name: "Hinge";
			Value: 1;
			EnumType: EnumType<SurfaceConstraint>;
		}

		export const Hinge: Hinge;

		export interface SteppingMotor {
			Name: "SteppingMotor";
			Value: 2;
			EnumType: EnumType<SurfaceConstraint>;
		}

		export const SteppingMotor: SteppingMotor;

		export interface Motor {
			Name: "Motor";
			Value: 3;
			EnumType: EnumType<SurfaceConstraint>;
		}

		export const Motor: Motor;

		export function GetEnumItems(this: defined): Array<SurfaceConstraint>
	}
	export type SurfaceConstraint = SurfaceConstraint.None | SurfaceConstraint.Hinge | SurfaceConstraint.SteppingMotor | SurfaceConstraint.Motor;
	export namespace SurfaceGuiSizingMode {
		export interface FixedSize {
			Name: "FixedSize";
			Value: 0;
			EnumType: EnumType<SurfaceGuiSizingMode>;
		}

		export const FixedSize: FixedSize;

		export interface PixelsPerStud {
			Name: "PixelsPerStud";
			Value: 1;
			EnumType: EnumType<SurfaceGuiSizingMode>;
		}

		export const PixelsPerStud: PixelsPerStud;

		export function GetEnumItems(this: defined): Array<SurfaceGuiSizingMode>
	}
	export type SurfaceGuiSizingMode = SurfaceGuiSizingMode.FixedSize | SurfaceGuiSizingMode.PixelsPerStud;
	export namespace SurfaceType {
		export interface Smooth {
			Name: "Smooth";
			Value: 0;
			EnumType: EnumType<SurfaceType>;
		}

		export const Smooth: Smooth;

		export interface Glue {
			Name: "Glue";
			Value: 1;
			EnumType: EnumType<SurfaceType>;
		}

		export const Glue: Glue;

		export interface Weld {
			Name: "Weld";
			Value: 2;
			EnumType: EnumType<SurfaceType>;
		}

		export const Weld: Weld;

		export interface Studs {
			Name: "Studs";
			Value: 3;
			EnumType: EnumType<SurfaceType>;
		}

		export const Studs: Studs;

		export interface Inlet {
			Name: "Inlet";
			Value: 4;
			EnumType: EnumType<SurfaceType>;
		}

		export const Inlet: Inlet;

		export interface Universal {
			Name: "Universal";
			Value: 5;
			EnumType: EnumType<SurfaceType>;
		}

		export const Universal: Universal;

		export interface Hinge {
			Name: "Hinge";
			Value: 6;
			EnumType: EnumType<SurfaceType>;
		}

		export const Hinge: Hinge;

		export interface Motor {
			Name: "Motor";
			Value: 7;
			EnumType: EnumType<SurfaceType>;
		}

		export const Motor: Motor;

		export interface SteppingMotor {
			Name: "SteppingMotor";
			Value: 8;
			EnumType: EnumType<SurfaceType>;
		}

		export const SteppingMotor: SteppingMotor;

		export interface SmoothNoOutlines {
			Name: "SmoothNoOutlines";
			Value: 10;
			EnumType: EnumType<SurfaceType>;
		}

		export const SmoothNoOutlines: SmoothNoOutlines;

		export function GetEnumItems(this: defined): Array<SurfaceType>
	}
	export type SurfaceType = SurfaceType.Smooth | SurfaceType.Glue | SurfaceType.Weld | SurfaceType.Studs | SurfaceType.Inlet | SurfaceType.Universal | SurfaceType.Hinge | SurfaceType.Motor | SurfaceType.SteppingMotor | SurfaceType.SmoothNoOutlines;
	export namespace SwipeDirection {
		export interface Right {
			Name: "Right";
			Value: 0;
			EnumType: EnumType<SwipeDirection>;
		}

		export const Right: Right;

		export interface Left {
			Name: "Left";
			Value: 1;
			EnumType: EnumType<SwipeDirection>;
		}

		export const Left: Left;

		export interface Up {
			Name: "Up";
			Value: 2;
			EnumType: EnumType<SwipeDirection>;
		}

		export const Up: Up;

		export interface Down {
			Name: "Down";
			Value: 3;
			EnumType: EnumType<SwipeDirection>;
		}

		export const Down: Down;

		export interface None {
			Name: "None";
			Value: 4;
			EnumType: EnumType<SwipeDirection>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<SwipeDirection>
	}
	export type SwipeDirection = SwipeDirection.Right | SwipeDirection.Left | SwipeDirection.Up | SwipeDirection.Down | SwipeDirection.None;
	export namespace TableMajorAxis {
		export interface RowMajor {
			Name: "RowMajor";
			Value: 0;
			EnumType: EnumType<TableMajorAxis>;
		}

		export const RowMajor: RowMajor;

		export interface ColumnMajor {
			Name: "ColumnMajor";
			Value: 1;
			EnumType: EnumType<TableMajorAxis>;
		}

		export const ColumnMajor: ColumnMajor;

		export function GetEnumItems(this: defined): Array<TableMajorAxis>
	}
	export type TableMajorAxis = TableMajorAxis.RowMajor | TableMajorAxis.ColumnMajor;
	export namespace Technology {
		export interface Compatibility {
			Name: "Compatibility";
			Value: 2;
			EnumType: EnumType<Technology>;
		}

		export const Compatibility: Compatibility;

		export interface Voxel {
			Name: "Voxel";
			Value: 1;
			EnumType: EnumType<Technology>;
		}

		export const Voxel: Voxel;

		export interface ShadowMap {
			Name: "ShadowMap";
			Value: 3;
			EnumType: EnumType<Technology>;
		}

		export const ShadowMap: ShadowMap;

		export interface Legacy {
			Name: "Legacy";
			Value: 0;
			EnumType: EnumType<Technology>;
		}

		export const Legacy: Legacy;

		export interface Future {
			Name: "Future";
			Value: 4;
			EnumType: EnumType<Technology>;
		}

		export const Future: Future;

		export function GetEnumItems(this: defined): Array<Technology>
	}
	export type Technology = Technology.Compatibility | Technology.Voxel | Technology.ShadowMap | Technology.Legacy | Technology.Future;
	export namespace TeleportMethod {
		export interface TeleportToSpawnByName {
			Name: "TeleportToSpawnByName";
			Value: 0;
			EnumType: EnumType<TeleportMethod>;
		}

		export const TeleportToSpawnByName: TeleportToSpawnByName;

		export interface TeleportToPlaceInstance {
			Name: "TeleportToPlaceInstance";
			Value: 1;
			EnumType: EnumType<TeleportMethod>;
		}

		export const TeleportToPlaceInstance: TeleportToPlaceInstance;

		export interface TeleportToPrivateServer {
			Name: "TeleportToPrivateServer";
			Value: 2;
			EnumType: EnumType<TeleportMethod>;
		}

		export const TeleportToPrivateServer: TeleportToPrivateServer;

		export interface TeleportPartyAsync {
			Name: "TeleportPartyAsync";
			Value: 3;
			EnumType: EnumType<TeleportMethod>;
		}

		export const TeleportPartyAsync: TeleportPartyAsync;

		export interface TeleportUnknown {
			Name: "TeleportUnknown";
			Value: 4;
			EnumType: EnumType<TeleportMethod>;
		}

		export const TeleportUnknown: TeleportUnknown;

		export function GetEnumItems(this: defined): Array<TeleportMethod>
	}
	export type TeleportMethod = TeleportMethod.TeleportToSpawnByName | TeleportMethod.TeleportToPlaceInstance | TeleportMethod.TeleportToPrivateServer | TeleportMethod.TeleportPartyAsync | TeleportMethod.TeleportUnknown;
	export namespace TeleportResult {
		export interface Success {
			Name: "Success";
			Value: 0;
			EnumType: EnumType<TeleportResult>;
		}

		export const Success: Success;

		export interface Failure {
			Name: "Failure";
			Value: 1;
			EnumType: EnumType<TeleportResult>;
		}

		export const Failure: Failure;

		export interface GameNotFound {
			Name: "GameNotFound";
			Value: 2;
			EnumType: EnumType<TeleportResult>;
		}

		export const GameNotFound: GameNotFound;

		export interface GameEnded {
			Name: "GameEnded";
			Value: 3;
			EnumType: EnumType<TeleportResult>;
		}

		export const GameEnded: GameEnded;

		export interface GameFull {
			Name: "GameFull";
			Value: 4;
			EnumType: EnumType<TeleportResult>;
		}

		export const GameFull: GameFull;

		export interface Unauthorized {
			Name: "Unauthorized";
			Value: 5;
			EnumType: EnumType<TeleportResult>;
		}

		export const Unauthorized: Unauthorized;

		export interface Flooded {
			Name: "Flooded";
			Value: 6;
			EnumType: EnumType<TeleportResult>;
		}

		export const Flooded: Flooded;

		export interface IsTeleporting {
			Name: "IsTeleporting";
			Value: 7;
			EnumType: EnumType<TeleportResult>;
		}

		export const IsTeleporting: IsTeleporting;

		export function GetEnumItems(this: defined): Array<TeleportResult>
	}
	export type TeleportResult = TeleportResult.Success | TeleportResult.Failure | TeleportResult.GameNotFound | TeleportResult.GameEnded | TeleportResult.GameFull | TeleportResult.Unauthorized | TeleportResult.Flooded | TeleportResult.IsTeleporting;
	export namespace TeleportState {
		export interface RequestedFromServer {
			Name: "RequestedFromServer";
			Value: 0;
			EnumType: EnumType<TeleportState>;
		}

		export const RequestedFromServer: RequestedFromServer;

		export interface Started {
			Name: "Started";
			Value: 1;
			EnumType: EnumType<TeleportState>;
		}

		export const Started: Started;

		export interface WaitingForServer {
			Name: "WaitingForServer";
			Value: 2;
			EnumType: EnumType<TeleportState>;
		}

		export const WaitingForServer: WaitingForServer;

		export interface Failed {
			Name: "Failed";
			Value: 3;
			EnumType: EnumType<TeleportState>;
		}

		export const Failed: Failed;

		export interface InProgress {
			Name: "InProgress";
			Value: 4;
			EnumType: EnumType<TeleportState>;
		}

		export const InProgress: InProgress;

		export function GetEnumItems(this: defined): Array<TeleportState>
	}
	export type TeleportState = TeleportState.RequestedFromServer | TeleportState.Started | TeleportState.WaitingForServer | TeleportState.Failed | TeleportState.InProgress;
	export namespace TeleportType {
		export interface ToPlace {
			Name: "ToPlace";
			Value: 0;
			EnumType: EnumType<TeleportType>;
		}

		export const ToPlace: ToPlace;

		export interface ToInstance {
			Name: "ToInstance";
			Value: 1;
			EnumType: EnumType<TeleportType>;
		}

		export const ToInstance: ToInstance;

		export interface ToReservedServer {
			Name: "ToReservedServer";
			Value: 2;
			EnumType: EnumType<TeleportType>;
		}

		export const ToReservedServer: ToReservedServer;

		export function GetEnumItems(this: defined): Array<TeleportType>
	}
	export type TeleportType = TeleportType.ToPlace | TeleportType.ToInstance | TeleportType.ToReservedServer;
	export namespace TerrainAcquisitionMethod {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const None: None;

		export interface Legacy {
			Name: "Legacy";
			Value: 1;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const Legacy: Legacy;

		export interface Template {
			Name: "Template";
			Value: 2;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const Template: Template;

		export interface Generate {
			Name: "Generate";
			Value: 3;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const Generate: Generate;

		export interface Import {
			Name: "Import";
			Value: 4;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const Import: Import;

		export interface Convert {
			Name: "Convert";
			Value: 5;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const Convert: Convert;

		export interface EditAddTool {
			Name: "EditAddTool";
			Value: 6;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const EditAddTool: EditAddTool;

		export interface EditSeaLevelTool {
			Name: "EditSeaLevelTool";
			Value: 7;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const EditSeaLevelTool: EditSeaLevelTool;

		export interface EditReplaceTool {
			Name: "EditReplaceTool";
			Value: 8;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const EditReplaceTool: EditReplaceTool;

		export interface RegionFillTool {
			Name: "RegionFillTool";
			Value: 9;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const RegionFillTool: RegionFillTool;

		export interface RegionPasteTool {
			Name: "RegionPasteTool";
			Value: 10;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const RegionPasteTool: RegionPasteTool;

		export interface Other {
			Name: "Other";
			Value: 11;
			EnumType: EnumType<TerrainAcquisitionMethod>;
		}

		export const Other: Other;

		export function GetEnumItems(this: defined): Array<TerrainAcquisitionMethod>
	}
	export type TerrainAcquisitionMethod = TerrainAcquisitionMethod.None | TerrainAcquisitionMethod.Legacy | TerrainAcquisitionMethod.Template | TerrainAcquisitionMethod.Generate | TerrainAcquisitionMethod.Import | TerrainAcquisitionMethod.Convert | TerrainAcquisitionMethod.EditAddTool | TerrainAcquisitionMethod.EditSeaLevelTool | TerrainAcquisitionMethod.EditReplaceTool | TerrainAcquisitionMethod.RegionFillTool | TerrainAcquisitionMethod.RegionPasteTool | TerrainAcquisitionMethod.Other;
	export namespace TextChatMessageStatus {
		export interface Success {
			Name: "Success";
			Value: 1;
			EnumType: EnumType<TextChatMessageStatus>;
		}

		export const Success: Success;

		export interface TextFilterFailed {
			Name: "TextFilterFailed";
			Value: 2;
			EnumType: EnumType<TextChatMessageStatus>;
		}

		export const TextFilterFailed: TextFilterFailed;

		export interface Floodchecked {
			Name: "Floodchecked";
			Value: 3;
			EnumType: EnumType<TextChatMessageStatus>;
		}

		export const Floodchecked: Floodchecked;

		export interface InvalidPrivacySettings {
			Name: "InvalidPrivacySettings";
			Value: 4;
			EnumType: EnumType<TextChatMessageStatus>;
		}

		export const InvalidPrivacySettings: InvalidPrivacySettings;

		export interface InvalidTextChannelPermissions {
			Name: "InvalidTextChannelPermissions";
			Value: 5;
			EnumType: EnumType<TextChatMessageStatus>;
		}

		export const InvalidTextChannelPermissions: InvalidTextChannelPermissions;

		export function GetEnumItems(this: defined): Array<TextChatMessageStatus>
	}
	export type TextChatMessageStatus = TextChatMessageStatus.Success | TextChatMessageStatus.TextFilterFailed | TextChatMessageStatus.Floodchecked | TextChatMessageStatus.InvalidPrivacySettings | TextChatMessageStatus.InvalidTextChannelPermissions;
	export namespace TextFilterContext {
		export interface PublicChat {
			Name: "PublicChat";
			Value: 1;
			EnumType: EnumType<TextFilterContext>;
		}

		export const PublicChat: PublicChat;

		export interface PrivateChat {
			Name: "PrivateChat";
			Value: 2;
			EnumType: EnumType<TextFilterContext>;
		}

		export const PrivateChat: PrivateChat;

		export function GetEnumItems(this: defined): Array<TextFilterContext>
	}
	export type TextFilterContext = TextFilterContext.PublicChat | TextFilterContext.PrivateChat;
	export namespace TextInputType {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<TextInputType>;
		}

		export const Default: Default;

		export interface NoSuggestions {
			Name: "NoSuggestions";
			Value: 1;
			EnumType: EnumType<TextInputType>;
		}

		export const NoSuggestions: NoSuggestions;

		export interface Number {
			Name: "Number";
			Value: 2;
			EnumType: EnumType<TextInputType>;
		}

		export const Number: Number;

		export interface Email {
			Name: "Email";
			Value: 3;
			EnumType: EnumType<TextInputType>;
		}

		export const Email: Email;

		export interface Phone {
			Name: "Phone";
			Value: 4;
			EnumType: EnumType<TextInputType>;
		}

		export const Phone: Phone;

		export interface Password {
			Name: "Password";
			Value: 5;
			EnumType: EnumType<TextInputType>;
		}

		export const Password: Password;

		export interface PasswordShown {
			Name: "PasswordShown";
			Value: 6;
			EnumType: EnumType<TextInputType>;
		}

		export const PasswordShown: PasswordShown;

		export interface Username {
			Name: "Username";
			Value: 7;
			EnumType: EnumType<TextInputType>;
		}

		export const Username: Username;

		export interface OneTimePassword {
			Name: "OneTimePassword";
			Value: 8;
			EnumType: EnumType<TextInputType>;
		}

		export const OneTimePassword: OneTimePassword;

		export function GetEnumItems(this: defined): Array<TextInputType>
	}
	export type TextInputType = TextInputType.Default | TextInputType.NoSuggestions | TextInputType.Number | TextInputType.Email | TextInputType.Phone | TextInputType.Password | TextInputType.PasswordShown | TextInputType.Username | TextInputType.OneTimePassword;
	export namespace TextTruncate {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<TextTruncate>;
		}

		export const None: None;

		export interface AtEnd {
			Name: "AtEnd";
			Value: 1;
			EnumType: EnumType<TextTruncate>;
		}

		export const AtEnd: AtEnd;

		export function GetEnumItems(this: defined): Array<TextTruncate>
	}
	export type TextTruncate = TextTruncate.None | TextTruncate.AtEnd;
	export namespace TextXAlignment {
		export interface Left {
			Name: "Left";
			Value: 0;
			EnumType: EnumType<TextXAlignment>;
		}

		export const Left: Left;

		export interface Center {
			Name: "Center";
			Value: 2;
			EnumType: EnumType<TextXAlignment>;
		}

		export const Center: Center;

		export interface Right {
			Name: "Right";
			Value: 1;
			EnumType: EnumType<TextXAlignment>;
		}

		export const Right: Right;

		export function GetEnumItems(this: defined): Array<TextXAlignment>
	}
	export type TextXAlignment = TextXAlignment.Left | TextXAlignment.Center | TextXAlignment.Right;
	export namespace TextYAlignment {
		export interface Top {
			Name: "Top";
			Value: 0;
			EnumType: EnumType<TextYAlignment>;
		}

		export const Top: Top;

		export interface Center {
			Name: "Center";
			Value: 1;
			EnumType: EnumType<TextYAlignment>;
		}

		export const Center: Center;

		export interface Bottom {
			Name: "Bottom";
			Value: 2;
			EnumType: EnumType<TextYAlignment>;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: defined): Array<TextYAlignment>
	}
	export type TextYAlignment = TextYAlignment.Top | TextYAlignment.Center | TextYAlignment.Bottom;
	export namespace TextureMode {
		export interface Stretch {
			Name: "Stretch";
			Value: 0;
			EnumType: EnumType<TextureMode>;
		}

		export const Stretch: Stretch;

		export interface Wrap {
			Name: "Wrap";
			Value: 1;
			EnumType: EnumType<TextureMode>;
		}

		export const Wrap: Wrap;

		export interface Static {
			Name: "Static";
			Value: 2;
			EnumType: EnumType<TextureMode>;
		}

		export const Static: Static;

		export function GetEnumItems(this: defined): Array<TextureMode>
	}
	export type TextureMode = TextureMode.Stretch | TextureMode.Wrap | TextureMode.Static;
	export namespace TextureQueryType {
		export interface NonHumanoid {
			Name: "NonHumanoid";
			Value: 0;
			EnumType: EnumType<TextureQueryType>;
		}

		export const NonHumanoid: NonHumanoid;

		export interface NonHumanoidOrphaned {
			Name: "NonHumanoidOrphaned";
			Value: 1;
			EnumType: EnumType<TextureQueryType>;
		}

		export const NonHumanoidOrphaned: NonHumanoidOrphaned;

		export interface Humanoid {
			Name: "Humanoid";
			Value: 2;
			EnumType: EnumType<TextureQueryType>;
		}

		export const Humanoid: Humanoid;

		export interface HumanoidOrphaned {
			Name: "HumanoidOrphaned";
			Value: 3;
			EnumType: EnumType<TextureQueryType>;
		}

		export const HumanoidOrphaned: HumanoidOrphaned;

		export function GetEnumItems(this: defined): Array<TextureQueryType>
	}
	export type TextureQueryType = TextureQueryType.NonHumanoid | TextureQueryType.NonHumanoidOrphaned | TextureQueryType.Humanoid | TextureQueryType.HumanoidOrphaned;
	export namespace ThreadPoolConfig {
		export interface Auto {
			Name: "Auto";
			Value: 0;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const Auto: Auto;

		export interface PerCore1 {
			Name: "PerCore1";
			Value: 101;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const PerCore1: PerCore1;

		export interface PerCore2 {
			Name: "PerCore2";
			Value: 102;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const PerCore2: PerCore2;

		export interface PerCore3 {
			Name: "PerCore3";
			Value: 103;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const PerCore3: PerCore3;

		export interface PerCore4 {
			Name: "PerCore4";
			Value: 104;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const PerCore4: PerCore4;

		export interface Threads1 {
			Name: "Threads1";
			Value: 1;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const Threads1: Threads1;

		export interface Threads2 {
			Name: "Threads2";
			Value: 2;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const Threads2: Threads2;

		export interface Threads3 {
			Name: "Threads3";
			Value: 3;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const Threads3: Threads3;

		export interface Threads4 {
			Name: "Threads4";
			Value: 4;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const Threads4: Threads4;

		export interface Threads8 {
			Name: "Threads8";
			Value: 8;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const Threads8: Threads8;

		export interface Threads16 {
			Name: "Threads16";
			Value: 16;
			EnumType: EnumType<ThreadPoolConfig>;
		}

		export const Threads16: Threads16;

		export function GetEnumItems(this: defined): Array<ThreadPoolConfig>
	}
	export type ThreadPoolConfig = ThreadPoolConfig.Auto | ThreadPoolConfig.PerCore1 | ThreadPoolConfig.PerCore2 | ThreadPoolConfig.PerCore3 | ThreadPoolConfig.PerCore4 | ThreadPoolConfig.Threads1 | ThreadPoolConfig.Threads2 | ThreadPoolConfig.Threads3 | ThreadPoolConfig.Threads4 | ThreadPoolConfig.Threads8 | ThreadPoolConfig.Threads16;
	export namespace ThrottlingPriority {
		export interface Extreme {
			Name: "Extreme";
			Value: 2;
			EnumType: EnumType<ThrottlingPriority>;
		}

		export const Extreme: Extreme;

		export interface ElevatedOnServer {
			Name: "ElevatedOnServer";
			Value: 1;
			EnumType: EnumType<ThrottlingPriority>;
		}

		export const ElevatedOnServer: ElevatedOnServer;

		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<ThrottlingPriority>;
		}

		export const Default: Default;

		export function GetEnumItems(this: defined): Array<ThrottlingPriority>
	}
	export type ThrottlingPriority = ThrottlingPriority.Extreme | ThrottlingPriority.ElevatedOnServer | ThrottlingPriority.Default;
	export namespace ThumbnailSize {
		export interface Size48x48 {
			Name: "Size48x48";
			Value: 0;
			EnumType: EnumType<ThumbnailSize>;
		}

		export const Size48x48: Size48x48;

		export interface Size180x180 {
			Name: "Size180x180";
			Value: 1;
			EnumType: EnumType<ThumbnailSize>;
		}

		export const Size180x180: Size180x180;

		export interface Size420x420 {
			Name: "Size420x420";
			Value: 2;
			EnumType: EnumType<ThumbnailSize>;
		}

		export const Size420x420: Size420x420;

		export interface Size60x60 {
			Name: "Size60x60";
			Value: 3;
			EnumType: EnumType<ThumbnailSize>;
		}

		export const Size60x60: Size60x60;

		export interface Size100x100 {
			Name: "Size100x100";
			Value: 4;
			EnumType: EnumType<ThumbnailSize>;
		}

		export const Size100x100: Size100x100;

		export interface Size150x150 {
			Name: "Size150x150";
			Value: 5;
			EnumType: EnumType<ThumbnailSize>;
		}

		export const Size150x150: Size150x150;

		export interface Size352x352 {
			Name: "Size352x352";
			Value: 6;
			EnumType: EnumType<ThumbnailSize>;
		}

		export const Size352x352: Size352x352;

		export function GetEnumItems(this: defined): Array<ThumbnailSize>
	}
	export type ThumbnailSize = ThumbnailSize.Size48x48 | ThumbnailSize.Size180x180 | ThumbnailSize.Size420x420 | ThumbnailSize.Size60x60 | ThumbnailSize.Size100x100 | ThumbnailSize.Size150x150 | ThumbnailSize.Size352x352;
	export namespace ThumbnailType {
		export interface HeadShot {
			Name: "HeadShot";
			Value: 0;
			EnumType: EnumType<ThumbnailType>;
		}

		export const HeadShot: HeadShot;

		export interface AvatarBust {
			Name: "AvatarBust";
			Value: 1;
			EnumType: EnumType<ThumbnailType>;
		}

		export const AvatarBust: AvatarBust;

		export interface AvatarThumbnail {
			Name: "AvatarThumbnail";
			Value: 2;
			EnumType: EnumType<ThumbnailType>;
		}

		export const AvatarThumbnail: AvatarThumbnail;

		export function GetEnumItems(this: defined): Array<ThumbnailType>
	}
	export type ThumbnailType = ThumbnailType.HeadShot | ThumbnailType.AvatarBust | ThumbnailType.AvatarThumbnail;
	export namespace TickCountSampleMethod {
		export interface Fast {
			Name: "Fast";
			Value: 0;
			EnumType: EnumType<TickCountSampleMethod>;
		}

		export const Fast: Fast;

		export interface Benchmark {
			Name: "Benchmark";
			Value: 1;
			EnumType: EnumType<TickCountSampleMethod>;
		}

		export const Benchmark: Benchmark;

		export interface Precise {
			Name: "Precise";
			Value: 2;
			EnumType: EnumType<TickCountSampleMethod>;
		}

		export const Precise: Precise;

		export function GetEnumItems(this: defined): Array<TickCountSampleMethod>
	}
	export type TickCountSampleMethod = TickCountSampleMethod.Fast | TickCountSampleMethod.Benchmark | TickCountSampleMethod.Precise;
	export namespace TopBottom {
		export interface Top {
			Name: "Top";
			Value: 0;
			EnumType: EnumType<TopBottom>;
		}

		export const Top: Top;

		export interface Center {
			Name: "Center";
			Value: 1;
			EnumType: EnumType<TopBottom>;
		}

		export const Center: Center;

		export interface Bottom {
			Name: "Bottom";
			Value: 2;
			EnumType: EnumType<TopBottom>;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: defined): Array<TopBottom>
	}
	export type TopBottom = TopBottom.Top | TopBottom.Center | TopBottom.Bottom;
	export namespace TouchCameraMovementMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<TouchCameraMovementMode>;
		}

		export const Default: Default;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<TouchCameraMovementMode>;
		}

		export const Follow: Follow;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<TouchCameraMovementMode>;
		}

		export const Classic: Classic;

		export interface Orbital {
			Name: "Orbital";
			Value: 3;
			EnumType: EnumType<TouchCameraMovementMode>;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: defined): Array<TouchCameraMovementMode>
	}
	export type TouchCameraMovementMode = TouchCameraMovementMode.Default | TouchCameraMovementMode.Follow | TouchCameraMovementMode.Classic | TouchCameraMovementMode.Orbital;
	export namespace TouchMovementMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<TouchMovementMode>;
		}

		export const Default: Default;

		export interface Thumbstick {
			Name: "Thumbstick";
			Value: 1;
			EnumType: EnumType<TouchMovementMode>;
		}

		export const Thumbstick: Thumbstick;

		export interface DPad {
			Name: "DPad";
			Value: 2;
			EnumType: EnumType<TouchMovementMode>;
		}

		export const DPad: DPad;

		export interface Thumbpad {
			Name: "Thumbpad";
			Value: 3;
			EnumType: EnumType<TouchMovementMode>;
		}

		export const Thumbpad: Thumbpad;

		export interface ClickToMove {
			Name: "ClickToMove";
			Value: 4;
			EnumType: EnumType<TouchMovementMode>;
		}

		export const ClickToMove: ClickToMove;

		export interface DynamicThumbstick {
			Name: "DynamicThumbstick";
			Value: 5;
			EnumType: EnumType<TouchMovementMode>;
		}

		export const DynamicThumbstick: DynamicThumbstick;

		export function GetEnumItems(this: defined): Array<TouchMovementMode>
	}
	export type TouchMovementMode = TouchMovementMode.Default | TouchMovementMode.Thumbstick | TouchMovementMode.DPad | TouchMovementMode.Thumbpad | TouchMovementMode.ClickToMove | TouchMovementMode.DynamicThumbstick;
	export namespace TriStateBoolean {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<TriStateBoolean>;
		}

		export const Unknown: Unknown;

		export interface True {
			Name: "True";
			Value: 1;
			EnumType: EnumType<TriStateBoolean>;
		}

		export const True: True;

		export interface False {
			Name: "False";
			Value: 2;
			EnumType: EnumType<TriStateBoolean>;
		}

		export const False: False;

		export function GetEnumItems(this: defined): Array<TriStateBoolean>
	}
	export type TriStateBoolean = TriStateBoolean.Unknown | TriStateBoolean.True | TriStateBoolean.False;
	export namespace TweenStatus {
		export interface Canceled {
			Name: "Canceled";
			Value: 0;
			EnumType: EnumType<TweenStatus>;
		}

		export const Canceled: Canceled;

		export interface Completed {
			Name: "Completed";
			Value: 1;
			EnumType: EnumType<TweenStatus>;
		}

		export const Completed: Completed;

		export function GetEnumItems(this: defined): Array<TweenStatus>
	}
	export type TweenStatus = TweenStatus.Canceled | TweenStatus.Completed;
	export namespace UITheme {
		export interface Light {
			Name: "Light";
			Value: 0;
			EnumType: EnumType<UITheme>;
		}

		export const Light: Light;

		export interface Dark {
			Name: "Dark";
			Value: 1;
			EnumType: EnumType<UITheme>;
		}

		export const Dark: Dark;

		export function GetEnumItems(this: defined): Array<UITheme>
	}
	export type UITheme = UITheme.Light | UITheme.Dark;
	export namespace UiMessageType {
		export interface UiMessageError {
			Name: "UiMessageError";
			Value: 0;
			EnumType: EnumType<UiMessageType>;
		}

		export const UiMessageError: UiMessageError;

		export interface UiMessageInfo {
			Name: "UiMessageInfo";
			Value: 1;
			EnumType: EnumType<UiMessageType>;
		}

		export const UiMessageInfo: UiMessageInfo;

		export function GetEnumItems(this: defined): Array<UiMessageType>
	}
	export type UiMessageType = UiMessageType.UiMessageError | UiMessageType.UiMessageInfo;
	export namespace UserCFrame {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<UserCFrame>;
		}

		export const Head: Head;

		export interface LeftHand {
			Name: "LeftHand";
			Value: 1;
			EnumType: EnumType<UserCFrame>;
		}

		export const LeftHand: LeftHand;

		export interface RightHand {
			Name: "RightHand";
			Value: 2;
			EnumType: EnumType<UserCFrame>;
		}

		export const RightHand: RightHand;

		export function GetEnumItems(this: defined): Array<UserCFrame>
	}
	export type UserCFrame = UserCFrame.Head | UserCFrame.LeftHand | UserCFrame.RightHand;
	export namespace UserInputState {
		export interface Begin {
			Name: "Begin";
			Value: 0;
			EnumType: EnumType<UserInputState>;
		}

		export const Begin: Begin;

		export interface Change {
			Name: "Change";
			Value: 1;
			EnumType: EnumType<UserInputState>;
		}

		export const Change: Change;

		export interface End {
			Name: "End";
			Value: 2;
			EnumType: EnumType<UserInputState>;
		}

		export const End: End;

		export interface Cancel {
			Name: "Cancel";
			Value: 3;
			EnumType: EnumType<UserInputState>;
		}

		export const Cancel: Cancel;

		export interface None {
			Name: "None";
			Value: 4;
			EnumType: EnumType<UserInputState>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<UserInputState>
	}
	export type UserInputState = UserInputState.Begin | UserInputState.Change | UserInputState.End | UserInputState.Cancel | UserInputState.None;
	export namespace UserInputType {
		export interface MouseButton1 {
			Name: "MouseButton1";
			Value: 0;
			EnumType: EnumType<UserInputType>;
		}

		export const MouseButton1: MouseButton1;

		export interface MouseButton2 {
			Name: "MouseButton2";
			Value: 1;
			EnumType: EnumType<UserInputType>;
		}

		export const MouseButton2: MouseButton2;

		export interface MouseButton3 {
			Name: "MouseButton3";
			Value: 2;
			EnumType: EnumType<UserInputType>;
		}

		export const MouseButton3: MouseButton3;

		export interface MouseWheel {
			Name: "MouseWheel";
			Value: 3;
			EnumType: EnumType<UserInputType>;
		}

		export const MouseWheel: MouseWheel;

		export interface MouseMovement {
			Name: "MouseMovement";
			Value: 4;
			EnumType: EnumType<UserInputType>;
		}

		export const MouseMovement: MouseMovement;

		export interface Touch {
			Name: "Touch";
			Value: 7;
			EnumType: EnumType<UserInputType>;
		}

		export const Touch: Touch;

		export interface Keyboard {
			Name: "Keyboard";
			Value: 8;
			EnumType: EnumType<UserInputType>;
		}

		export const Keyboard: Keyboard;

		export interface Focus {
			Name: "Focus";
			Value: 9;
			EnumType: EnumType<UserInputType>;
		}

		export const Focus: Focus;

		export interface Accelerometer {
			Name: "Accelerometer";
			Value: 10;
			EnumType: EnumType<UserInputType>;
		}

		export const Accelerometer: Accelerometer;

		export interface Gyro {
			Name: "Gyro";
			Value: 11;
			EnumType: EnumType<UserInputType>;
		}

		export const Gyro: Gyro;

		export interface Gamepad1 {
			Name: "Gamepad1";
			Value: 12;
			EnumType: EnumType<UserInputType>;
		}

		export const Gamepad1: Gamepad1;

		export interface Gamepad2 {
			Name: "Gamepad2";
			Value: 13;
			EnumType: EnumType<UserInputType>;
		}

		export const Gamepad2: Gamepad2;

		export interface Gamepad3 {
			Name: "Gamepad3";
			Value: 14;
			EnumType: EnumType<UserInputType>;
		}

		export const Gamepad3: Gamepad3;

		export interface Gamepad4 {
			Name: "Gamepad4";
			Value: 15;
			EnumType: EnumType<UserInputType>;
		}

		export const Gamepad4: Gamepad4;

		export interface Gamepad5 {
			Name: "Gamepad5";
			Value: 16;
			EnumType: EnumType<UserInputType>;
		}

		export const Gamepad5: Gamepad5;

		export interface Gamepad6 {
			Name: "Gamepad6";
			Value: 17;
			EnumType: EnumType<UserInputType>;
		}

		export const Gamepad6: Gamepad6;

		export interface Gamepad7 {
			Name: "Gamepad7";
			Value: 18;
			EnumType: EnumType<UserInputType>;
		}

		export const Gamepad7: Gamepad7;

		export interface Gamepad8 {
			Name: "Gamepad8";
			Value: 19;
			EnumType: EnumType<UserInputType>;
		}

		export const Gamepad8: Gamepad8;

		export interface TextInput {
			Name: "TextInput";
			Value: 20;
			EnumType: EnumType<UserInputType>;
		}

		export const TextInput: TextInput;

		export interface InputMethod {
			Name: "InputMethod";
			Value: 21;
			EnumType: EnumType<UserInputType>;
		}

		export const InputMethod: InputMethod;

		export interface None {
			Name: "None";
			Value: 22;
			EnumType: EnumType<UserInputType>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<UserInputType>
	}
	export type UserInputType = UserInputType.MouseButton1 | UserInputType.MouseButton2 | UserInputType.MouseButton3 | UserInputType.MouseWheel | UserInputType.MouseMovement | UserInputType.Touch | UserInputType.Keyboard | UserInputType.Focus | UserInputType.Accelerometer | UserInputType.Gyro | UserInputType.Gamepad1 | UserInputType.Gamepad2 | UserInputType.Gamepad3 | UserInputType.Gamepad4 | UserInputType.Gamepad5 | UserInputType.Gamepad6 | UserInputType.Gamepad7 | UserInputType.Gamepad8 | UserInputType.TextInput | UserInputType.InputMethod | UserInputType.None;
	export namespace VRTouchpad {
		export interface Left {
			Name: "Left";
			Value: 0;
			EnumType: EnumType<VRTouchpad>;
		}

		export const Left: Left;

		export interface Right {
			Name: "Right";
			Value: 1;
			EnumType: EnumType<VRTouchpad>;
		}

		export const Right: Right;

		export function GetEnumItems(this: defined): Array<VRTouchpad>
	}
	export type VRTouchpad = VRTouchpad.Left | VRTouchpad.Right;
	export namespace VRTouchpadMode {
		export interface Touch {
			Name: "Touch";
			Value: 0;
			EnumType: EnumType<VRTouchpadMode>;
		}

		export const Touch: Touch;

		export interface VirtualThumbstick {
			Name: "VirtualThumbstick";
			Value: 1;
			EnumType: EnumType<VRTouchpadMode>;
		}

		export const VirtualThumbstick: VirtualThumbstick;

		export interface ABXY {
			Name: "ABXY";
			Value: 2;
			EnumType: EnumType<VRTouchpadMode>;
		}

		export const ABXY: ABXY;

		export function GetEnumItems(this: defined): Array<VRTouchpadMode>
	}
	export type VRTouchpadMode = VRTouchpadMode.Touch | VRTouchpadMode.VirtualThumbstick | VRTouchpadMode.ABXY;
	export namespace VelocityConstraintMode {
		export interface Line {
			Name: "Line";
			Value: 0;
			EnumType: EnumType<VelocityConstraintMode>;
		}

		export const Line: Line;

		export interface Plane {
			Name: "Plane";
			Value: 1;
			EnumType: EnumType<VelocityConstraintMode>;
		}

		export const Plane: Plane;

		export interface Vector {
			Name: "Vector";
			Value: 2;
			EnumType: EnumType<VelocityConstraintMode>;
		}

		export const Vector: Vector;

		export function GetEnumItems(this: defined): Array<VelocityConstraintMode>
	}
	export type VelocityConstraintMode = VelocityConstraintMode.Line | VelocityConstraintMode.Plane | VelocityConstraintMode.Vector;
	export namespace VerticalAlignment {
		export interface Center {
			Name: "Center";
			Value: 0;
			EnumType: EnumType<VerticalAlignment>;
		}

		export const Center: Center;

		export interface Top {
			Name: "Top";
			Value: 1;
			EnumType: EnumType<VerticalAlignment>;
		}

		export const Top: Top;

		export interface Bottom {
			Name: "Bottom";
			Value: 2;
			EnumType: EnumType<VerticalAlignment>;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: defined): Array<VerticalAlignment>
	}
	export type VerticalAlignment = VerticalAlignment.Center | VerticalAlignment.Top | VerticalAlignment.Bottom;
	export namespace VerticalScrollBarPosition {
		export interface Left {
			Name: "Left";
			Value: 1;
			EnumType: EnumType<VerticalScrollBarPosition>;
		}

		export const Left: Left;

		export interface Right {
			Name: "Right";
			Value: 0;
			EnumType: EnumType<VerticalScrollBarPosition>;
		}

		export const Right: Right;

		export function GetEnumItems(this: defined): Array<VerticalScrollBarPosition>
	}
	export type VerticalScrollBarPosition = VerticalScrollBarPosition.Left | VerticalScrollBarPosition.Right;
	export namespace VibrationMotor {
		export interface Large {
			Name: "Large";
			Value: 0;
			EnumType: EnumType<VibrationMotor>;
		}

		export const Large: Large;

		export interface Small {
			Name: "Small";
			Value: 1;
			EnumType: EnumType<VibrationMotor>;
		}

		export const Small: Small;

		export interface LeftTrigger {
			Name: "LeftTrigger";
			Value: 2;
			EnumType: EnumType<VibrationMotor>;
		}

		export const LeftTrigger: LeftTrigger;

		export interface RightTrigger {
			Name: "RightTrigger";
			Value: 3;
			EnumType: EnumType<VibrationMotor>;
		}

		export const RightTrigger: RightTrigger;

		export interface LeftHand {
			Name: "LeftHand";
			Value: 4;
			EnumType: EnumType<VibrationMotor>;
		}

		export const LeftHand: LeftHand;

		export interface RightHand {
			Name: "RightHand";
			Value: 5;
			EnumType: EnumType<VibrationMotor>;
		}

		export const RightHand: RightHand;

		export function GetEnumItems(this: defined): Array<VibrationMotor>
	}
	export type VibrationMotor = VibrationMotor.Large | VibrationMotor.Small | VibrationMotor.LeftTrigger | VibrationMotor.RightTrigger | VibrationMotor.LeftHand | VibrationMotor.RightHand;
	export namespace VirtualCursorMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<VirtualCursorMode>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<VirtualCursorMode>;
		}

		export const Disabled: Disabled;

		export interface Enabled {
			Name: "Enabled";
			Value: 2;
			EnumType: EnumType<VirtualCursorMode>;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: defined): Array<VirtualCursorMode>
	}
	export type VirtualCursorMode = VirtualCursorMode.Default | VirtualCursorMode.Disabled | VirtualCursorMode.Enabled;
	export namespace VirtualInputMode {
		export interface Recording {
			Name: "Recording";
			Value: 1;
			EnumType: EnumType<VirtualInputMode>;
		}

		export const Recording: Recording;

		export interface Playing {
			Name: "Playing";
			Value: 2;
			EnumType: EnumType<VirtualInputMode>;
		}

		export const Playing: Playing;

		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<VirtualInputMode>;
		}

		export const None: None;

		export function GetEnumItems(this: defined): Array<VirtualInputMode>
	}
	export type VirtualInputMode = VirtualInputMode.Recording | VirtualInputMode.Playing | VirtualInputMode.None;
	export namespace VoiceChatState {
		export interface Idle {
			Name: "Idle";
			Value: 0;
			EnumType: EnumType<VoiceChatState>;
		}

		export const Idle: Idle;

		export interface Joining {
			Name: "Joining";
			Value: 1;
			EnumType: EnumType<VoiceChatState>;
		}

		export const Joining: Joining;

		export interface JoiningRetry {
			Name: "JoiningRetry";
			Value: 2;
			EnumType: EnumType<VoiceChatState>;
		}

		export const JoiningRetry: JoiningRetry;

		export interface Joined {
			Name: "Joined";
			Value: 3;
			EnumType: EnumType<VoiceChatState>;
		}

		export const Joined: Joined;

		export interface Leaving {
			Name: "Leaving";
			Value: 4;
			EnumType: EnumType<VoiceChatState>;
		}

		export const Leaving: Leaving;

		export interface Ended {
			Name: "Ended";
			Value: 5;
			EnumType: EnumType<VoiceChatState>;
		}

		export const Ended: Ended;

		export interface Failed {
			Name: "Failed";
			Value: 6;
			EnumType: EnumType<VoiceChatState>;
		}

		export const Failed: Failed;

		export function GetEnumItems(this: defined): Array<VoiceChatState>
	}
	export type VoiceChatState = VoiceChatState.Idle | VoiceChatState.Joining | VoiceChatState.JoiningRetry | VoiceChatState.Joined | VoiceChatState.Leaving | VoiceChatState.Ended | VoiceChatState.Failed;
	export namespace WaterDirection {
		export interface NegX {
			Name: "NegX";
			Value: 0;
			EnumType: EnumType<WaterDirection>;
		}

		export const NegX: NegX;

		export interface X {
			Name: "X";
			Value: 1;
			EnumType: EnumType<WaterDirection>;
		}

		export const X: X;

		export interface NegY {
			Name: "NegY";
			Value: 2;
			EnumType: EnumType<WaterDirection>;
		}

		export const NegY: NegY;

		export interface Y {
			Name: "Y";
			Value: 3;
			EnumType: EnumType<WaterDirection>;
		}

		export const Y: Y;

		export interface NegZ {
			Name: "NegZ";
			Value: 4;
			EnumType: EnumType<WaterDirection>;
		}

		export const NegZ: NegZ;

		export interface Z {
			Name: "Z";
			Value: 5;
			EnumType: EnumType<WaterDirection>;
		}

		export const Z: Z;

		export function GetEnumItems(this: defined): Array<WaterDirection>
	}
	export type WaterDirection = WaterDirection.NegX | WaterDirection.X | WaterDirection.NegY | WaterDirection.Y | WaterDirection.NegZ | WaterDirection.Z;
	export namespace WaterForce {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<WaterForce>;
		}

		export const None: None;

		export interface Small {
			Name: "Small";
			Value: 1;
			EnumType: EnumType<WaterForce>;
		}

		export const Small: Small;

		export interface Medium {
			Name: "Medium";
			Value: 2;
			EnumType: EnumType<WaterForce>;
		}

		export const Medium: Medium;

		export interface Strong {
			Name: "Strong";
			Value: 3;
			EnumType: EnumType<WaterForce>;
		}

		export const Strong: Strong;

		export interface Max {
			Name: "Max";
			Value: 4;
			EnumType: EnumType<WaterForce>;
		}

		export const Max: Max;

		export function GetEnumItems(this: defined): Array<WaterForce>
	}
	export type WaterForce = WaterForce.None | WaterForce.Small | WaterForce.Medium | WaterForce.Strong | WaterForce.Max;
	export namespace WrapLayerDebugMode {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<WrapLayerDebugMode>;
		}

		export const None: None;

		export interface BoundCage {
			Name: "BoundCage";
			Value: 1;
			EnumType: EnumType<WrapLayerDebugMode>;
		}

		export const BoundCage: BoundCage;

		export interface LayerCage {
			Name: "LayerCage";
			Value: 2;
			EnumType: EnumType<WrapLayerDebugMode>;
		}

		export const LayerCage: LayerCage;

		export interface BoundCageAndLinks {
			Name: "BoundCageAndLinks";
			Value: 3;
			EnumType: EnumType<WrapLayerDebugMode>;
		}

		export const BoundCageAndLinks: BoundCageAndLinks;

		export interface Reference {
			Name: "Reference";
			Value: 4;
			EnumType: EnumType<WrapLayerDebugMode>;
		}

		export const Reference: Reference;

		export interface Rbf {
			Name: "Rbf";
			Value: 5;
			EnumType: EnumType<WrapLayerDebugMode>;
		}

		export const Rbf: Rbf;

		export interface OuterCage {
			Name: "OuterCage";
			Value: 6;
			EnumType: EnumType<WrapLayerDebugMode>;
		}

		export const OuterCage: OuterCage;

		export function GetEnumItems(this: defined): Array<WrapLayerDebugMode>
	}
	export type WrapLayerDebugMode = WrapLayerDebugMode.None | WrapLayerDebugMode.BoundCage | WrapLayerDebugMode.LayerCage | WrapLayerDebugMode.BoundCageAndLinks | WrapLayerDebugMode.Reference | WrapLayerDebugMode.Rbf | WrapLayerDebugMode.OuterCage;
	export namespace WrapTargetDebugMode {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<WrapTargetDebugMode>;
		}

		export const None: None;

		export interface TargetCageOriginal {
			Name: "TargetCageOriginal";
			Value: 1;
			EnumType: EnumType<WrapTargetDebugMode>;
		}

		export const TargetCageOriginal: TargetCageOriginal;

		export interface TargetCageCompressed {
			Name: "TargetCageCompressed";
			Value: 2;
			EnumType: EnumType<WrapTargetDebugMode>;
		}

		export const TargetCageCompressed: TargetCageCompressed;

		export interface TargetCageInterface {
			Name: "TargetCageInterface";
			Value: 3;
			EnumType: EnumType<WrapTargetDebugMode>;
		}

		export const TargetCageInterface: TargetCageInterface;

		export interface TargetLayerCageOriginal {
			Name: "TargetLayerCageOriginal";
			Value: 4;
			EnumType: EnumType<WrapTargetDebugMode>;
		}

		export const TargetLayerCageOriginal: TargetLayerCageOriginal;

		export interface TargetLayerCageCompressed {
			Name: "TargetLayerCageCompressed";
			Value: 5;
			EnumType: EnumType<WrapTargetDebugMode>;
		}

		export const TargetLayerCageCompressed: TargetLayerCageCompressed;

		export interface TargetLayerInterface {
			Name: "TargetLayerInterface";
			Value: 6;
			EnumType: EnumType<WrapTargetDebugMode>;
		}

		export const TargetLayerInterface: TargetLayerInterface;

		export interface Rbf {
			Name: "Rbf";
			Value: 7;
			EnumType: EnumType<WrapTargetDebugMode>;
		}

		export const Rbf: Rbf;

		export function GetEnumItems(this: defined): Array<WrapTargetDebugMode>
	}
	export type WrapTargetDebugMode = WrapTargetDebugMode.None | WrapTargetDebugMode.TargetCageOriginal | WrapTargetDebugMode.TargetCageCompressed | WrapTargetDebugMode.TargetCageInterface | WrapTargetDebugMode.TargetLayerCageOriginal | WrapTargetDebugMode.TargetLayerCageCompressed | WrapTargetDebugMode.TargetLayerInterface | WrapTargetDebugMode.Rbf;
	export namespace ZIndexBehavior {
		export interface Global {
			Name: "Global";
			Value: 0;
			EnumType: EnumType<ZIndexBehavior>;
		}

		export const Global: Global;

		export interface Sibling {
			Name: "Sibling";
			Value: 1;
			EnumType: EnumType<ZIndexBehavior>;
		}

		export const Sibling: Sibling;

		export function GetEnumItems(this: defined): Array<ZIndexBehavior>
	}
	export type ZIndexBehavior = ZIndexBehavior.Global | ZIndexBehavior.Sibling;
}

declare type CastsToEnum<T extends EnumItem> = T | T["Name" | "Value"];

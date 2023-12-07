# Dumpster

Written by [Fraktality](https://www.github.com/Fraktality) ( [Source](https://gist.github.com/Fraktality/f0ab4ad950698e9f08bb01bea486845e) )

### Crash Course
```TS
import Dumpster from "@rbxts/dumpster";
import { RunService } from "@rbxts/services";

// creation
const dumpster = new Dumpster();
const myPart = new Instance("Part");

// Instance
dumpster.dump(myPart);

// RBXScriptConnection
dumpster.dump(RunService.Stepped.Connect(() => print("Step!")));

// Function
dumpster.dump(() => print("Cleaned!"));

// User created class with `.destroy()`
class Foo { destroy() {} }
dumpster.dump(new Foo());

// later..
dumpster.burn();

// You can optionally pass a custom handler function to override the default callback
// (which is normally chosen using the `typeof` function).
// This is especially handy for custom classes:

class Obj {
	remove() {}
}

dumpster.dump(new Obj(), obj => obj.remove());

// You can also pattern your classes as having a static destructor member
class Item {
	static destructor(item: Item) {
		item.remove();
	}
	remove() {}
}

// Then re-use the same callback for every cleanup
dumpster.dump(new Item(), Item.destructor);
dumpster.dump(new Item(), Item.destructor);
```

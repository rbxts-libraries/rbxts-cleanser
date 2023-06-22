// Cleanser.d
// Written by Demo (R0BL0XIAN_D3M0)
// [https://www.roblox.com/users/289025524/profile]
// 05/30/2023

// Types
declare namespace Cleanser {
	export interface Destroyable {
		TimedDestroy(waitTime: number): boolean;
		Cleanse(): void;
		Destroy(): void;
	}

	export type Object =
		| never
		| undefined
		| ((this: defined) => void)
		| ((_: defined) => void)
		| ExtractKeys<defined, () => void>
		| thread
		| RBXScriptConnection
		| Cleanser
		| Cleanser.Destroyable;
}

type Cleanser = {
	/**
		@within Cleanser

		@method Grant

		@param Object -- The object to cleanse.

		@return table -- Return the cleanser class's metatable.

		Grant a new cleanser task.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local Part: Part = Instance.new("Part")
			Part.Name = "Part"
			Part.Position = Vector3.new(0, 5, 0)
			Part.Size = Vector3.new(5, 1, 5)
			Part.Parent = Workspace

			local PartCleanser: table = Cleanser.new()
			PartCleanser:Grant(Part)
			task.wait(3)
			PartCleanser:Cleanse()
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			const Part = new Instance("Part");
			Part.Name = "Part";
			Part.Position = new Vector3(0, 5, 0);
			Part.Size = new Vector3(5, 1, 5);
			Part.Parent = Workspace;

			const PartCleanser: Cleanser<Part> = new Cleanser();
			PartCleanser.Grant(Part);
			task.wait(3);
			PartCleanser.Cleanse();
		```
	 */
	Grant<T extends void | object>(
		object?: T extends Cleanser.Object | Cleanser.Destroyable | true ? RBXScriptConnection : T | defined,
	): Cleanser;

	/**
		@within Cleanser

		@method TimedDestroy

		@param Time number -- The amount of seconds to wait before cleansing the cleanser's objects.

		@return boolean -- Return whether or not the object has been destroyed.

		Destroy and cleanup a cleanser after a certain amount of time has elapsed.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local PartCleanserDestroyed: boolean = PartCleanser:TimedDestroy(2 :: number)
			print(PartCleanserDestroyed) -- --> false
			task.wait(2)
			print(PartCleanserDestroyed) -- --> true
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			const PartCleanserDestroyed: boolean = PartCleanser.TimedDestroy(2 :: number);
			print(PartCleanserDestroyed); // --> false
			task.wait(2);
			print(PartCleanserDestroyed); // --> true
		```
	*/
	TimedDestroy(waitTime: number): boolean;

	/**
		@within Cleanser

		@method Cleanse

		Cleanse the specified cleanser object(s).

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			PartCleanser:Cleanse()
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			PartCleanser.Cleanse();
		```
	*/
	Cleanse(): void;

	/**
		@within Cleanser

		@method Destroy

		Destroy and cleanup a Cleanser (making it unusable).

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			PartCleanser:Destroy()
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			PartCleanser.Destroy();
		```
	*/
	Destroy(): void;
};

interface CleanserConstructor {
	readonly ClassName: "Cleanser";

	/**
		@within Cleanser

		@param Object -- The object to cleanse.

		@return table -- Return the cleanser class's metatable.

		Index a new Cleanser object.

		### Luau:
		```lua
			--// Types
			type table = { [any]: any }

			--// Services
			local ReplicatedStorage: ReplicatedStorage = game:GetService("ReplicatedStorage")
			local Workspace: Workspace = game:GetService("Workspace")

			--// Modules
			local Cleanser: table = require(ReplicatedStorage:FindFirstChild("Cleanser", true))

			--// Functions
			local Part: Part = Instance.new("Part")
			Part.Name = "Part"
			Part.Position = Vector3.new(0, 5, 0)
			Part.Size = Vector3.new(5, 1, 5)
			Part.Parent = Workspace

			local PartCleanser: table = Cleanser.new(PartCleanser)
			task.wait(3)
			PartCleanser:Cleanse()
		```

		### TypeScript:
		```ts
			// Services
			import { Workspace } from "@rbxts/services";

			// Modules
			import { Cleanser } from "@rbxts/cleanser";

			// Functions
			const Part = new Instance("Part");
			Part.Name = "Part";
			Part.Position = new Vector3(0, 5, 0);
			Part.Size = new Vector3(5, 1, 5);
			Part.Parent = Workspace;

			const PartCleanser = new Cleanser(Part);
			task.wait(3);
			PartCleanser.Cleanse();
		```
	 */
	new <T extends void | object>(
		object?: T extends Cleanser.Object | Cleanser.Destroyable | true ? RBXScriptConnection : T | defined,
	): Cleanser;

	/**
		@within Cleanser

		@function Is

		@param Object -- The object to cleanse.

		@return boolean -- Return whether or not the item's a valid Cleanser.

		Returns whether or not the specified class is a valid Cleanser.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			print(Cleanser.Is(Cleanser.new())) -- --> true
			print(Cleanser.Is(nil)) -- --> false
		```

		### TypeScript:
		```ts
			// Functions
			--// Placeholder code.
			print(Cleanser.Is(new Cleanser<{}>())) // --> true
			print(Cleanser.Is(undefined)) // --> false
		```
	 */
	Is<T extends void | object>(
		object?: T extends Cleanser.Object | Cleanser.Destroyable | true ? RBXScriptConnection : T | defined,
	): boolean;
}

declare const Cleanser: CleanserConstructor;

export { Cleanser };

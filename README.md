# Cleanser

Cleanser is a highly personalized, all-in-one, and lightweight implementation served for garbage collection.

## Installation

### 📦 — NPM:

```
npm i @rbxts/cleanser
```

### 🧶 — Yarn:

```
yarn add @rbxts/cleanser
```

### 📀 — pnPM:

```
pnpm add @rbxts/cleanser
```

## Cleanser API

### Types

```ts
interface Destroyable {
	TimedDestroy(waitTime: number): boolean;
	Cleanse(): void;
	Destroy(): void;
}

type Object =
	| never
	| undefined
	| ((this: defined) => void)
	| ((_: defined) => void)
	| ExtractKeys<defined, () => void>
	| thread
	| RBXScriptConnection
	| Cleanser
	| Cleanser.Destroyable;
```

### Constructor

```ts
const cleanser = new Cleanser<{ never[]: T }>();
```

### `Cleanser.Is`

```ts
public Is(
		object?: T extends Cleanser.Object | Cleanser.Destroyable | true ? RBXScriptConnection : T | defined,
	): boolean;
```

Returns whether or not the specified class is a valid Cleanser.

### `Cleanser.Grant`

```ts
public Grant(object?: T extends Cleanser.Object | Cleanser.Destroyable | true ? RBXScriptConnection : T |   defined,
	): Cleanser;
```

Grant a new cleanser task.

### `Cleanser.TimedDestroy`

```ts
public TimedDestroy(waitTime: number): boolean;
```

Destroy and cleanup a cleanser after a certain amount of time has elapsed.

### `Cleanser.Cleanse`

```ts
public Cleanse(): void;
```

Cleanse the specified cleanser object(s).

### `Cleanser.Destroy`

```ts
public Destroy(): void;
```

Destroy and cleanup a Cleanser (making it unusable).

## Example

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

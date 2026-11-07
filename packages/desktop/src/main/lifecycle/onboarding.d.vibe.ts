import { Effect, FileSystem, Path } from "effect";
export declare const initializeFirstLaunchOnboarding: (userDataPath: string) => Effect.Effect<boolean, import("effect/PlatformError").PlatformError, FileSystem.FileSystem | Path.Path>;
export declare const isFirstLaunchOnboardingPending: () => Effect.Effect<boolean, never, never>;
export declare const finishFirstLaunchOnboarding: (createDefaultProject: boolean) => Effect.Effect<string | null, import("effect/PlatformError").PlatformError, FileSystem.FileSystem | Path.Path>;

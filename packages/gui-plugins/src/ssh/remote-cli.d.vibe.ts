import { Effect, Schema } from "effect";
import { HttpClient } from "effect/http";
export * as RemoteCli from "./remote-cli.vibe";
declare const Failure_base: Schema.Class<Failure, Schema.TaggedStruct<"RemoteCliFailure", {
    readonly code: Schema.Literals<readonly ["platform", "version", "install"]>;
    readonly detail: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class Failure extends Failure_base {
    get message(): string;
}
export declare function quote(value: string): string;
export declare function requireVersion(version: string): string;
export declare function discoverScript(options?: {
    fromPath?: boolean;
    cache?: {
        directory: string;
        prefix: string;
    };
}): string;
export declare function versionScript(command: string): string;
export declare function parseVersion(output: string): string | null;
export declare const probeScript = "set -eu\nos=$(uname -s | tr '[:upper:]' '[:lower:]')\narch=$(uname -m)\ncase \"$os\" in linux|darwin) ;; *) exit 2 ;; esac\ncase \"$arch\" in x86_64|amd64) arch=x64 ;; aarch64|arm64) arch=arm64 ;; *) exit 2 ;; esac\ntarget=\"$os-$arch\"\nif [ \"$arch\" = x64 ]; then target=\"$target-baseline\"; fi\nif [ \"$os\" = linux ]; then\n  if [ -f /etc/alpine-release ] || (ldd --version 2>&1 | grep -qi musl); then target=\"$target-musl\"; fi\nfi\nprintf 'OPENCODE_REMOTE_TARGET=%s\\n' \"$target\"\n";
export declare function archiveUrl(target: string, version: string): string;
type Source = {
    type: "download";
    url: string;
} | {
    type: "archive";
} | {
    type: "installer";
    binary?: string;
};
export declare function installScript(input: {
    version: string;
    directory?: string;
    source: Source;
}): string;
export declare const latestBeta: () => Effect.Effect<string, Failure, HttpClient.HttpClient>;

export * as ConfigIntegration from "./integration.vibe";
import { Schema } from "effect";
import { Config } from "@opencode/schema/config";
import { ConfigMCP } from "@opencode/schema/config/mcp";
import { ConfigProvider } from "@opencode/schema/config/provider";
import { Connection } from "@opencode/schema/connection";
import { IntegrationID } from "@opencode/schema/integration-id";
export declare const Policies: Schema.compose<Schema.$Array<Schema.Struct<{
    readonly action: Schema.Literals<readonly ["provider.use", "tool.use", "integration.use"]>;
    readonly resource: Schema.String;
    readonly effect: Schema.Literals<readonly ["allow", "deny"]>;
}>>, Schema.decodeTo<Schema.Unknown, Schema.$Array<Schema.Unknown>, never, never>>;
/**
 * The allow-listed keys of a remote config. Only these keys are read before decoding, so a newer remote source's
 * other keys, valid or not, can never reject the document.
 */
export declare const Remote: Schema.Struct<{
    readonly providers: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Record<Schema.String, typeof ConfigProvider.Info>>>, Schema.optionalKey<Schema.$Record<Schema.String, typeof ConfigProvider.Info>>, never, never>;
    readonly mcp: Schema.decodeTo<Schema.optional<Schema.toType<typeof ConfigMCP.Info>>, Schema.optionalKey<typeof ConfigMCP.Info>, never, never>;
    readonly policies: Schema.optional<Schema.compose<Schema.$Array<Schema.Struct<{
        readonly action: Schema.Literals<readonly ["provider.use", "tool.use", "integration.use"]>;
        readonly resource: Schema.String;
        readonly effect: Schema.Literals<readonly ["allow", "deny"]>;
    }>>, Schema.decodeTo<Schema.Unknown, Schema.$Array<Schema.Unknown>, never, never>>>;
    readonly websearch: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Union<readonly [Schema.Literal<false>, typeof import("@opencode/schema/config/websearch").Info]>>>, Schema.optionalKey<Schema.Union<readonly [Schema.Literal<false>, typeof import("@opencode/schema/config/websearch").Info]>>, never, never>;
}>;
export type Remote = typeof Remote.Type;
declare const Document_base: Schema.Class<Document, Schema.Struct<{
    readonly type: Schema.Literal<"document">;
    readonly path: Schema.decodeTo<Schema.optional<Schema.toType<Schema.brand<Schema.String, "AbsolutePath">>>, Schema.optionalKey<Schema.brand<Schema.String, "AbsolutePath">>, never, never>;
    readonly info: typeof Config.Info;
    integrationID: Schema.brand<Schema.String, "Integration.ID">;
    connection: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"credential">;
        readonly id: Schema.brand<Schema.String, "Credential.ID"> & {
            create: () => string & import("effect/Brand").Brand<"Credential.ID">;
        };
        readonly label: Schema.String;
        readonly method: Schema.Literals<readonly ["key", "oauth", "external"]>;
        readonly status: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["needs_auth"]>;
            readonly message: Schema.String;
            readonly url: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["needs_auth"]>;
            readonly message: Schema.String;
            readonly url: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        }>>, never, never>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"env">;
        readonly name: Schema.String;
        readonly status: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["needs_auth"]>;
            readonly message: Schema.String;
            readonly url: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["needs_auth"]>;
            readonly message: Schema.String;
            readonly url: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        }>>, never, never>;
    }>]>;
    organization: Schema.optional<Schema.String>;
}>, Config.Document> & Pick<{}, never>;
/**
 * A config document delivered by an integration connection, such as the OpenCode Console's config. Config loads it
 * right after managed policies, so user and project config override its settings while its policies outrank theirs.
 * Its providers authenticate with, and only exist for, that connection.
 */
export declare class Document extends Document_base {
}
/**
 * Builds an integration document from the allow-listed keys of a remote config: providers, remote MCP servers,
 * policies, and the web search selection. A remote source can never load plugins, run commands, or change any
 * other local behavior through config.
 */
export declare function make(input: {
    readonly integrationID: IntegrationID;
    readonly connection: Connection.Info;
    readonly organization?: string;
    readonly info: Remote;
}): Document;

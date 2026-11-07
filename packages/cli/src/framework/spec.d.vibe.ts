import { Command, type GlobalFlag } from "effect/cli";
type Options<Config extends Command.Command.Config, Commands extends ReadonlyArray<Any>> = {
    readonly description?: string;
    readonly aliases?: ReadonlyArray<string>;
    readonly params?: Config;
    readonly globalFlags?: ReadonlyArray<GlobalFlag.GlobalFlag<any>>;
    readonly commands?: Commands;
};
export interface Node<Name extends string, Spec extends Command.Command<Name, any, any, any, any>, Commands extends Children> {
    readonly name: Name;
    readonly spec: Spec;
    readonly commands: Commands;
    readonly aliases: ReadonlyArray<Any>;
}
export type Any = Node<string, Command.Command<any, any, any, any, any>, Children>;
export type Children = Readonly<Record<string, Any>>;
export declare function make<const Name extends string, const Config extends Command.Command.Config = {}, const Commands extends ReadonlyArray<Any> = []>(name: Name, options?: Options<Config, Commands>): {
    name: Name;
    spec: Command.Command<Name, import("effect/Types").Simplify<{ readonly [Key in keyof Config]: Command.Command.Config.InferValue<Config[Key]>; }>, {}, never, never>;
    commands: ChildrenOf<Commands>;
    aliases: {
        name: string;
        spec: Command.Command<string, import("effect/Types").Simplify<{ readonly [Key in keyof Config]: Command.Command.Config.InferValue<Config[Key]>; }>, {}, never, never>;
        commands: ChildrenOf<Commands>;
        aliases: never[];
    }[];
};
type ChildrenOf<Commands extends ReadonlyArray<Any>> = {
    readonly [Node in Commands[number] as Node["name"]]: Node;
};
export * as Spec from "./spec.vibe";

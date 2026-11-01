import { Schema } from "effect";
export declare const HueStep: Schema.Literals<readonly [100, 200, 300, 400, 500, 600, 700, 800, 900]>;
export type HueStep = Schema.Schema.Type<typeof HueStep>;
export type SemanticHue = "accent" | "interactive" | "neutral";
export declare const ActionVariant: Schema.Literals<readonly ["primary", "secondary", "destructive"]>;
export type ActionVariant = Schema.Schema.Type<typeof ActionVariant>;
export declare const ActionState: Schema.Literals<readonly ["disabled", "pressed", "focused", "selected", "hovered"]>;
export type ActionState = Schema.Schema.Type<typeof ActionState>;
export type ActionStateKey = `$${ActionState}`;
export declare const SurfaceName: Schema.Literal<"dialog">;
export type SurfaceName = Schema.Schema.Type<typeof SurfaceName>;
export declare const FormfieldState: Schema.Literals<readonly ["disabled", "pressed", "focused", "selected", "hovered"]>;
export type FormfieldState = ActionState;
export type FormfieldStateKey = `$${FormfieldState}`;
export declare const FeedbackKind: Schema.Literals<readonly ["error", "warning", "success", "info"]>;
export type FeedbackKind = Schema.Schema.Type<typeof FeedbackKind>;
declare const Mode: Schema.Literals<readonly ["light", "dark"]>;
export type Mode = Schema.Schema.Type<typeof Mode>;
export declare const HueName: Schema.NonEmptyString;
export type HueName = Schema.Schema.Type<typeof HueName>;
export declare const CategoricalDefinition: Schema.$Array<Schema.NonEmptyString>;
export type CategoricalDefinition = Schema.Schema.Type<typeof CategoricalDefinition>;
declare const HueValueDefinition: Schema.Union<readonly [Schema.String, Schema.$Record<Schema.Literals<readonly [100, 200, 300, 400, 500, 600, 700, 800, 900]>, Schema.String>]>;
type HueValueDefinition = Schema.Schema.Type<typeof HueValueDefinition>;
declare const HueDefinition: Schema.$Record<Schema.NonEmptyString, Schema.Union<readonly [Schema.String, Schema.$Record<Schema.Literals<readonly [100, 200, 300, 400, 500, 600, 700, 800, 900]>, Schema.String>]>>;
export type HueDefinition = Schema.Schema.Type<typeof HueDefinition> & Readonly<Record<SemanticHue, HueValueDefinition>>;
declare const StatefulColorDefinition: Schema.Struct<{
    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
}>;
export type StatefulColorDefinition = Schema.Schema.Type<typeof StatefulColorDefinition>;
export type FormfieldColorDefinition = StatefulColorDefinition;
declare const TextDefinition: Schema.Struct<{
    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    readonly action: Schema.optional<Schema.Struct<{
        readonly primary: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly secondary: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly destructive: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
    }>>;
    readonly formfield: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly feedback: Schema.optional<Schema.Struct<{
        readonly error: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly warning: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly success: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly info: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
    }>>;
}>;
export type TextDefinition = Schema.Schema.Type<typeof TextDefinition>;
declare const BackgroundDefinition: Schema.Struct<{
    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    readonly raised: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly action: Schema.optional<Schema.Struct<{
        readonly primary: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly secondary: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly destructive: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
    }>>;
    readonly formfield: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly feedback: Schema.optional<Schema.Struct<{
        readonly error: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly warning: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly success: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly info: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
    }>>;
}>;
export type BackgroundDefinition = Schema.Schema.Type<typeof BackgroundDefinition>;
export declare const SyntaxToken: Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>;
export type SyntaxToken = Schema.Schema.Type<typeof SyntaxToken>;
export declare const SyntaxDefinition: Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>;
export type SyntaxDefinition = Schema.Schema.Type<typeof SyntaxDefinition>;
export declare const MarkdownToken: Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>;
export type MarkdownToken = Schema.Schema.Type<typeof MarkdownToken>;
export declare const MarkdownDefinition: Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>;
export type MarkdownDefinition = Schema.Schema.Type<typeof MarkdownDefinition>;
declare const DiffDefinition: Schema.Struct<{
    readonly text: Schema.optional<Schema.Struct<{
        readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly background: Schema.optional<Schema.Struct<{
        readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly highlight: Schema.optional<Schema.Struct<{
        readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly lineNumber: Schema.optional<Schema.Struct<{
        readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
    }>>;
}>;
export type DiffDefinition = Schema.Schema.Type<typeof DiffDefinition>;
declare const ThemeTokensDefinition: Schema.Struct<{
    readonly text: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly action: Schema.optional<Schema.Struct<{
            readonly primary: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly secondary: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly destructive: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
        readonly formfield: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly feedback: Schema.optional<Schema.Struct<{
            readonly error: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly warning: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly success: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly info: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
    }>>;
    readonly background: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly raised: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly action: Schema.optional<Schema.Struct<{
            readonly primary: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly secondary: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly destructive: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
        readonly formfield: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly feedback: Schema.optional<Schema.Struct<{
            readonly error: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly warning: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly success: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly info: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
    }>>;
    readonly border: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly scrollbar: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly diff: Schema.optional<Schema.Struct<{
        readonly text: Schema.optional<Schema.Struct<{
            readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly highlight: Schema.optional<Schema.Struct<{
            readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly lineNumber: Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
    }>>;
    readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
    readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
}>;
export type ThemeTokensDefinition = Schema.Schema.Type<typeof ThemeTokensDefinition>;
export declare const ThemeDefinition: Schema.Struct<{
    readonly text: Schema.Struct<{
        readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        readonly muted: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly action: Schema.Struct<{
            readonly primary: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly secondary: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly destructive: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
        }>;
        readonly formfield: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>;
        readonly feedback: Schema.Struct<{
            readonly error: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly warning: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly success: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly info: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
        }>;
    }>;
    readonly background: Schema.Struct<{
        readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        readonly raised: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly high: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly max: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly action: Schema.Struct<{
            readonly primary: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly secondary: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly destructive: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
        }>;
        readonly formfield: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>;
        readonly feedback: Schema.Struct<{
            readonly error: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly warning: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly success: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly info: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
        }>;
    }>;
    readonly border: Schema.Struct<{
        readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
    }>;
    readonly scrollbar: Schema.Struct<{
        readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
    }>;
    readonly diff: Schema.Struct<{
        readonly text: Schema.Struct<{
            readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly context: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly hunkHeader: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly background: Schema.Struct<{
            readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly context: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly highlight: Schema.Struct<{
            readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly lineNumber: Schema.Struct<{
            readonly text: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly background: Schema.Struct<{
                readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
        }>;
    }>;
    readonly syntax: Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.Union<readonly [Schema.String, Schema.String]>>;
    readonly markdown: Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.Union<readonly [Schema.String, Schema.String]>>;
    readonly hue: Schema.$Record<Schema.NonEmptyString, Schema.Union<readonly [Schema.String, Schema.$Record<Schema.Literals<readonly [100, 200, 300, 400, 500, 600, 700, 800, 900]>, Schema.String>]>>;
    readonly categorical: Schema.$Array<Schema.NonEmptyString>;
    readonly "@dialog": Schema.optional<Schema.Struct<{
        readonly text: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly raised: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly border: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly scrollbar: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly diff: Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly highlight: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly lineNumber: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
    }>>;
}>;
export type ThemeDefinition = Schema.Schema.Type<typeof ThemeDefinition>;
export declare const BaseThemeDefinition: Schema.Struct<{
    readonly text: Schema.Struct<{
        readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        readonly muted: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly action: Schema.Struct<{
            readonly primary: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly secondary: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly destructive: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
        }>;
        readonly formfield: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>;
        readonly feedback: Schema.Struct<{
            readonly error: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly warning: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly success: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly info: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
        }>;
    }>;
    readonly background: Schema.Struct<{
        readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        readonly raised: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly high: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly max: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly action: Schema.Struct<{
            readonly primary: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly secondary: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly destructive: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
        }>;
        readonly formfield: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>;
        readonly feedback: Schema.Struct<{
            readonly error: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly warning: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly success: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly info: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
        }>;
    }>;
    readonly border: Schema.Struct<{
        readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
    }>;
    readonly scrollbar: Schema.Struct<{
        readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
    }>;
    readonly diff: Schema.Struct<{
        readonly text: Schema.Struct<{
            readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly context: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly hunkHeader: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly background: Schema.Struct<{
            readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly context: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly highlight: Schema.Struct<{
            readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly lineNumber: Schema.Struct<{
            readonly text: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly background: Schema.Struct<{
                readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
        }>;
    }>;
    readonly syntax: Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.Union<readonly [Schema.String, Schema.String]>>;
    readonly markdown: Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.Union<readonly [Schema.String, Schema.String]>>;
    readonly categorical: Schema.$Array<Schema.NonEmptyString>;
    readonly "@dialog": Schema.optional<Schema.Struct<{
        readonly text: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly raised: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly border: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly scrollbar: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly diff: Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly highlight: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly lineNumber: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
    }>>;
}>;
export type BaseThemeDefinition = Schema.Schema.Type<typeof BaseThemeDefinition>;
export declare const ModeDefinition: Schema.Struct<{
    readonly text: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly action: Schema.optional<Schema.Struct<{
            readonly primary: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly secondary: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly destructive: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
        readonly formfield: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly feedback: Schema.optional<Schema.Struct<{
            readonly error: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly warning: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly success: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly info: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
    }>>;
    readonly background: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        readonly raised: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly action: Schema.optional<Schema.Struct<{
            readonly primary: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly secondary: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly destructive: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
        readonly formfield: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly feedback: Schema.optional<Schema.Struct<{
            readonly error: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly warning: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly success: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly info: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
    }>>;
    readonly border: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly scrollbar: Schema.optional<Schema.Struct<{
        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
    }>>;
    readonly diff: Schema.optional<Schema.Struct<{
        readonly text: Schema.optional<Schema.Struct<{
            readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly highlight: Schema.optional<Schema.Struct<{
            readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly lineNumber: Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
        }>>;
    }>>;
    readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
    readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
    readonly hue: Schema.$Record<Schema.NonEmptyString, Schema.Union<readonly [Schema.String, Schema.$Record<Schema.Literals<readonly [100, 200, 300, 400, 500, 600, 700, 800, 900]>, Schema.String>]>>;
    readonly categorical: Schema.optional<Schema.$Array<Schema.NonEmptyString>>;
    readonly "@dialog": Schema.optional<Schema.Struct<{
        readonly text: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly raised: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly border: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly scrollbar: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly diff: Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly highlight: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly lineNumber: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
    }>>;
}>;
export type ModeDefinition = Schema.Schema.Type<typeof ModeDefinition>;
export declare const ThemeDocument: Schema.Union<readonly [Schema.Struct<{
    readonly $schema: Schema.optional<Schema.String>;
    readonly base: Schema.Struct<{
        readonly text: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly muted: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly action: Schema.Struct<{
                readonly primary: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly secondary: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly destructive: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
            }>;
            readonly formfield: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly feedback: Schema.Struct<{
                readonly error: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly warning: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly success: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly info: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
            }>;
        }>;
        readonly background: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly raised: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly high: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly max: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly action: Schema.Struct<{
                readonly primary: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly secondary: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly destructive: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
            }>;
            readonly formfield: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly feedback: Schema.Struct<{
                readonly error: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
                readonly warning: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
                readonly success: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
                readonly info: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
            }>;
        }>;
        readonly border: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly scrollbar: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly diff: Schema.Struct<{
            readonly text: Schema.Struct<{
                readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly context: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly hunkHeader: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly background: Schema.Struct<{
                readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly context: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly highlight: Schema.Struct<{
                readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly lineNumber: Schema.Struct<{
                readonly text: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly background: Schema.Struct<{
                    readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
            }>;
        }>;
        readonly syntax: Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.Union<readonly [Schema.String, Schema.String]>>;
        readonly markdown: Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.Union<readonly [Schema.String, Schema.String]>>;
        readonly categorical: Schema.$Array<Schema.NonEmptyString>;
        readonly "@dialog": Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly raised: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly border: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly scrollbar: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly diff: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly highlight: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly lineNumber: Schema.optional<Schema.Struct<{
                    readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly background: Schema.optional<Schema.Struct<{
                        readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
            readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        }>>;
    }>;
    readonly light: Schema.Struct<{
        readonly text: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly raised: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly border: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly scrollbar: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly diff: Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly highlight: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly lineNumber: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly hue: Schema.$Record<Schema.NonEmptyString, Schema.Union<readonly [Schema.String, Schema.$Record<Schema.Literals<readonly [100, 200, 300, 400, 500, 600, 700, 800, 900]>, Schema.String>]>>;
        readonly categorical: Schema.optional<Schema.$Array<Schema.NonEmptyString>>;
        readonly "@dialog": Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly raised: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly border: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly scrollbar: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly diff: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly highlight: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly lineNumber: Schema.optional<Schema.Struct<{
                    readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly background: Schema.optional<Schema.Struct<{
                        readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
            readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        }>>;
    }>;
    readonly dark: Schema.optional<Schema.Struct<{
        readonly text: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly raised: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly border: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly scrollbar: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly diff: Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly highlight: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly lineNumber: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly hue: Schema.$Record<Schema.NonEmptyString, Schema.Union<readonly [Schema.String, Schema.$Record<Schema.Literals<readonly [100, 200, 300, 400, 500, 600, 700, 800, 900]>, Schema.String>]>>;
        readonly categorical: Schema.optional<Schema.$Array<Schema.NonEmptyString>>;
        readonly "@dialog": Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly raised: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly border: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly scrollbar: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly diff: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly highlight: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly lineNumber: Schema.optional<Schema.Struct<{
                    readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly background: Schema.optional<Schema.Struct<{
                        readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
            readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        }>>;
    }>>;
}>, Schema.Struct<{
    readonly $schema: Schema.optional<Schema.String>;
    readonly base: Schema.Struct<{
        readonly text: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly muted: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly action: Schema.Struct<{
                readonly primary: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly secondary: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly destructive: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
            }>;
            readonly formfield: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly feedback: Schema.Struct<{
                readonly error: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly warning: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly success: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly info: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
            }>;
        }>;
        readonly background: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            readonly raised: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly high: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly max: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly action: Schema.Struct<{
                readonly primary: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly secondary: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
                readonly destructive: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>;
            }>;
            readonly formfield: Schema.Struct<{
                readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>;
            readonly feedback: Schema.Struct<{
                readonly error: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
                readonly warning: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
                readonly success: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
                readonly info: Schema.Struct<{
                    readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
            }>;
        }>;
        readonly border: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly scrollbar: Schema.Struct<{
            readonly base: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
        }>;
        readonly diff: Schema.Struct<{
            readonly text: Schema.Struct<{
                readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly context: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly hunkHeader: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly background: Schema.Struct<{
                readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly context: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly highlight: Schema.Struct<{
                readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
            }>;
            readonly lineNumber: Schema.Struct<{
                readonly text: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                readonly background: Schema.Struct<{
                    readonly added: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                    readonly removed: Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>;
                }>;
            }>;
        }>;
        readonly syntax: Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.Union<readonly [Schema.String, Schema.String]>>;
        readonly markdown: Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.Union<readonly [Schema.String, Schema.String]>>;
        readonly categorical: Schema.$Array<Schema.NonEmptyString>;
        readonly "@dialog": Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly raised: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly border: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly scrollbar: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly diff: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly highlight: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly lineNumber: Schema.optional<Schema.Struct<{
                    readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly background: Schema.optional<Schema.Struct<{
                        readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
            readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        }>>;
    }>;
    readonly light: Schema.optional<Schema.Struct<{
        readonly text: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly raised: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly border: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly scrollbar: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly diff: Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly highlight: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly lineNumber: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly hue: Schema.$Record<Schema.NonEmptyString, Schema.Union<readonly [Schema.String, Schema.$Record<Schema.Literals<readonly [100, 200, 300, 400, 500, 600, 700, 800, 900]>, Schema.String>]>>;
        readonly categorical: Schema.optional<Schema.$Array<Schema.NonEmptyString>>;
        readonly "@dialog": Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly raised: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly border: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly scrollbar: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly diff: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly highlight: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly lineNumber: Schema.optional<Schema.Struct<{
                    readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly background: Schema.optional<Schema.Struct<{
                        readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
            readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        }>>;
    }>>;
    readonly dark: Schema.Struct<{
        readonly text: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly background: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            readonly raised: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly primary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly secondary: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly destructive: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
            readonly formfield: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly feedback: Schema.optional<Schema.Struct<{
                readonly error: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly warning: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly success: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly info: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly border: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly scrollbar: Schema.optional<Schema.Struct<{
            readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
        }>>;
        readonly diff: Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly highlight: Schema.optional<Schema.Struct<{
                readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly lineNumber: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
            }>>;
        }>>;
        readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        readonly hue: Schema.$Record<Schema.NonEmptyString, Schema.Union<readonly [Schema.String, Schema.$Record<Schema.Literals<readonly [100, 200, 300, 400, 500, 600, 700, 800, 900]>, Schema.String>]>>;
        readonly categorical: Schema.optional<Schema.$Array<Schema.NonEmptyString>>;
        readonly "@dialog": Schema.optional<Schema.Struct<{
            readonly text: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly faint: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly muted: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly background: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                readonly raised: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly high: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly max: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly primary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly secondary: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly destructive: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
                readonly formfield: Schema.optional<Schema.Struct<{
                    readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $hovered: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $focused: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $pressed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $selected: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly $disabled: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly feedback: Schema.optional<Schema.Struct<{
                    readonly error: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly warning: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly success: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                    readonly info: Schema.optional<Schema.Struct<{
                        readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly border: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly scrollbar: Schema.optional<Schema.Struct<{
                readonly base: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
            }>>;
            readonly diff: Schema.optional<Schema.Struct<{
                readonly text: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly hunkHeader: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly background: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly context: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly highlight: Schema.optional<Schema.Struct<{
                    readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                }>>;
                readonly lineNumber: Schema.optional<Schema.Struct<{
                    readonly text: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    readonly background: Schema.optional<Schema.Struct<{
                        readonly added: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                        readonly removed: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Literal<"transparent">, Schema.TemplateLiteral<readonly ["$", Schema.NonEmptyString]>]>>;
                    }>>;
                }>>;
            }>>;
            readonly syntax: Schema.optional<Schema.$Record<Schema.Literals<readonly ["comment", "keyword", "function", "variable", "string", "number", "type", "operator", "punctuation"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
            readonly markdown: Schema.optional<Schema.$Record<Schema.Literals<readonly ["text", "heading", "link", "linkText", "code", "blockQuote", "emphasis", "strong", "horizontalRule", "listItem", "listEnumeration", "image", "imageText", "codeBlock"]>, Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.String]>>>>;
        }>>;
    }>;
}>]>;
export type ThemeDocument = Schema.Schema.Type<typeof ThemeDocument>;
export {};

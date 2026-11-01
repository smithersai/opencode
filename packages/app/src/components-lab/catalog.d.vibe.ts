import { type Field } from "knobs";
import type { Component, JSX } from "solid-js";
type StoryArg = string | number | boolean | null | undefined | object;
export type StoryArgs = {
    [key: string]: StoryArg;
};
type StoryRender = (args: StoryArgs) => JSX.Element;
type ArgType = {
    control?: string | {
        type?: string;
        min?: number;
        max?: number;
        step?: number;
    };
    options?: readonly string[];
};
type StoryObject = {
    title?: string;
    name?: string;
    component?: Component<StoryArgs>;
    args?: StoryArgs;
    argTypes?: {
        [key: string]: ArgType;
    };
    render?: StoryRender;
    parameters?: {
        layout?: string;
        motion?: readonly string[];
    };
};
export type StoryModule = {
    [name: string]: StoryObject | StoryRender | string[] | undefined;
};
/** One named story: a state of its component that the lab can switch to. */
export type LabState = {
    name: string;
    args: StoryArgs;
    render?: StoryRender;
};
export type LabEntry = {
    file: string;
    title: string;
    component?: Component<StoryArgs>;
    args: StoryArgs;
    argTypes: {
        [key: string]: ArgType;
    };
    render?: StoryRender;
    fullscreen: boolean;
    motion: readonly string[];
    states: LabState[];
};
export declare function labEntry(file: string, module: StoryModule, source: string): LabEntry;
/** A story file's name: `composer-docks` for `…/composer-docks.stories.tsx`. */
export declare function fileName(file: string): string;
/** The args a state renders with: the meta's, then the state's own. */
export declare function stateArgs(entry: LabEntry, index: number): {
    [x: string]: StoryArg;
};
/**
 * A knob for every arg the meta or a state sets, typed by its argType or else by its value. Each starts at the first
 * state's value, which the panel's default preset shows. Text and object args keep the story's values: knobs has no
 * text field.
 */
export declare function labFields(entry: LabEntry): {
    [k: string]: Field;
};
/** The values a state gives those knobs. */
export declare function knobArgs(fields: {
    [key: string]: Field;
}, args: StoryArgs): {
    [k: string]: string | number | boolean;
};
export {};

import { type Accessor } from "solid-js";
export { popularProviders } from "./order";
export declare const syncWhileBooting: <A>(load: () => Promise<A>) => Promise<A>;
export declare function useProviders(directory: Accessor<string | undefined>): {
    ready: () => boolean;
    all: () => Map<string, import("@/runtime/server/types").Provider>;
    default: () => Record<string, string>;
    popular: () => {
        id: string;
        name: string;
    }[];
    connected: () => import("@/runtime/server/types").Provider[];
    anyConnection: () => boolean | undefined;
    paid: () => [string, import("@/runtime/server/types").Provider][];
};

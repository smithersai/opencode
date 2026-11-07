/** v1 providers always name an AI SDK package (`npm`); v2 providers never do. */
export declare function isV1(catalog: Record<string, unknown>): boolean;
export declare function toV2(catalog: Record<string, unknown>): Record<string, unknown>;

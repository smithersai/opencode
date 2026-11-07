export declare function serverAddress(value: string): string | undefined;
export declare function pairingLink(value: string): {
    urls: string[];
    code: string;
} | undefined;
export declare function bareServerAddress(value: string): string | undefined;
export declare function legacyPairingLink(value: string): boolean;
export type Pairing = {
    readonly url: string;
    readonly password: string;
};
export type Redeemed = {
    readonly type: "paired";
    readonly pairing: Pairing;
} | {
    readonly type: "expired";
} | {
    readonly type: "unreachable";
};
export declare function redeemPairingLink(link: {
    urls: ReadonlyArray<string>;
    code: string;
}): Promise<{
    readonly type: "paired";
    readonly pairing: Pairing;
} | {
    readonly type: "expired";
} | {
    readonly type: "unreachable";
}>;

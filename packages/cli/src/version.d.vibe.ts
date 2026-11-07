declare const version: string;
declare const channel: string;
declare const artifact: string;
declare const highlights: readonly {
    readonly title: string;
    readonly body: string;
}[];
export { version as OPENCODE_VERSION, channel as OPENCODE_CHANNEL, artifact as OPENCODE_ARTIFACT, highlights as OPENCODE_HIGHLIGHTS, };
export declare const OPENCODE_LOCAL: boolean;

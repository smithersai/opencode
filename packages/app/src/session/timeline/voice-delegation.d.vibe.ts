/** The user's spoken request and the voice agent's framing of it, or undefined for any other prompt. */
export declare function parseVoiceDelegation(text: string): {
    instruction: string;
    framing: string | undefined;
} | undefined;

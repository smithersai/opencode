import { ThemeDefinition, ThemeDocument } from "./schema.vibe";
import type { Mode, ResolvedTheme } from "./index.ts";
export declare function themeDecodeError(error: unknown, name: string): Error;
export declare function parseThemeDocument(input: unknown, name?: string): {
    readonly $schema?: string | undefined;
    readonly base: {
        readonly text: {
            readonly base: string;
            readonly muted: string;
            readonly faint?: string | undefined;
            readonly action: {
                readonly primary: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
                readonly secondary: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
                readonly destructive: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
            };
            readonly formfield: {
                readonly base: string;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            };
            readonly feedback: {
                readonly error: {
                    readonly base: string;
                    readonly muted?: string | undefined;
                };
                readonly warning: {
                    readonly base: string;
                    readonly muted?: string | undefined;
                };
                readonly success: {
                    readonly base: string;
                    readonly muted?: string | undefined;
                };
                readonly info: {
                    readonly base: string;
                    readonly muted?: string | undefined;
                };
            };
        };
        readonly background: {
            readonly base: string;
            readonly raised: {
                readonly base: string;
                readonly high: string;
                readonly max: string;
            };
            readonly action: {
                readonly primary: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
                readonly secondary: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
                readonly destructive: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
            };
            readonly formfield: {
                readonly base: string;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            };
            readonly feedback: {
                readonly error: {
                    readonly base: string;
                };
                readonly warning: {
                    readonly base: string;
                };
                readonly success: {
                    readonly base: string;
                };
                readonly info: {
                    readonly base: string;
                };
            };
        };
        readonly border: {
            readonly base: string;
        };
        readonly scrollbar: {
            readonly base: string;
        };
        readonly diff: {
            readonly text: {
                readonly added: string;
                readonly removed: string;
                readonly context: string;
                readonly hunkHeader: string;
            };
            readonly background: {
                readonly added: string;
                readonly removed: string;
                readonly context: string;
            };
            readonly highlight: {
                readonly added: string;
                readonly removed: string;
            };
            readonly lineNumber: {
                readonly text: string;
                readonly background: {
                    readonly added: string;
                    readonly removed: string;
                };
            };
        };
        readonly syntax: {
            readonly comment: string;
            readonly function: string;
            readonly keyword: string;
            readonly number: string;
            readonly operator: string;
            readonly punctuation: string;
            readonly string: string;
            readonly type: string;
            readonly variable: string;
        };
        readonly markdown: {
            readonly blockQuote: string;
            readonly code: string;
            readonly codeBlock: string;
            readonly emphasis: string;
            readonly heading: string;
            readonly horizontalRule: string;
            readonly image: string;
            readonly imageText: string;
            readonly link: string;
            readonly linkText: string;
            readonly listEnumeration: string;
            readonly listItem: string;
            readonly strong: string;
            readonly text: string;
        };
        readonly categorical: readonly string[];
        readonly "@dialog"?: {
            readonly text?: {
                readonly base?: string | undefined;
                readonly muted?: string | undefined;
                readonly faint?: string | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly background?: {
                readonly base?: string | undefined;
                readonly raised?: {
                    readonly base?: string | undefined;
                    readonly high?: string | undefined;
                    readonly max?: string | undefined;
                } | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly border?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly scrollbar?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly diff?: {
                readonly text?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                    readonly hunkHeader?: string | undefined;
                } | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                } | undefined;
                readonly highlight?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
                readonly lineNumber?: {
                    readonly text?: string | undefined;
                    readonly background?: {
                        readonly added?: string | undefined;
                        readonly removed?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly syntax?: {
                readonly comment?: string | undefined;
                readonly function?: string | undefined;
                readonly keyword?: string | undefined;
                readonly number?: string | undefined;
                readonly operator?: string | undefined;
                readonly punctuation?: string | undefined;
                readonly string?: string | undefined;
                readonly type?: string | undefined;
                readonly variable?: string | undefined;
            } | undefined;
            readonly markdown?: {
                readonly blockQuote?: string | undefined;
                readonly code?: string | undefined;
                readonly codeBlock?: string | undefined;
                readonly emphasis?: string | undefined;
                readonly heading?: string | undefined;
                readonly horizontalRule?: string | undefined;
                readonly image?: string | undefined;
                readonly imageText?: string | undefined;
                readonly link?: string | undefined;
                readonly linkText?: string | undefined;
                readonly listEnumeration?: string | undefined;
                readonly listItem?: string | undefined;
                readonly strong?: string | undefined;
                readonly text?: string | undefined;
            } | undefined;
        } | undefined;
    };
    readonly light: {
        readonly text?: {
            readonly base?: string | undefined;
            readonly muted?: string | undefined;
            readonly faint?: string | undefined;
            readonly action?: {
                readonly primary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly secondary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly destructive?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
            } | undefined;
            readonly formfield?: {
                readonly base?: string | undefined;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            } | undefined;
            readonly feedback?: {
                readonly error?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly warning?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly success?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly info?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly background?: {
            readonly base?: string | undefined;
            readonly raised?: {
                readonly base?: string | undefined;
                readonly high?: string | undefined;
                readonly max?: string | undefined;
            } | undefined;
            readonly action?: {
                readonly primary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly secondary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly destructive?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
            } | undefined;
            readonly formfield?: {
                readonly base?: string | undefined;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            } | undefined;
            readonly feedback?: {
                readonly error?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly warning?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly success?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly info?: {
                    readonly base?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly border?: {
            readonly base?: string | undefined;
        } | undefined;
        readonly scrollbar?: {
            readonly base?: string | undefined;
        } | undefined;
        readonly diff?: {
            readonly text?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
                readonly context?: string | undefined;
                readonly hunkHeader?: string | undefined;
            } | undefined;
            readonly background?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
                readonly context?: string | undefined;
            } | undefined;
            readonly highlight?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
            } | undefined;
            readonly lineNumber?: {
                readonly text?: string | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly syntax?: {
            readonly comment?: string | undefined;
            readonly function?: string | undefined;
            readonly keyword?: string | undefined;
            readonly number?: string | undefined;
            readonly operator?: string | undefined;
            readonly punctuation?: string | undefined;
            readonly string?: string | undefined;
            readonly type?: string | undefined;
            readonly variable?: string | undefined;
        } | undefined;
        readonly markdown?: {
            readonly blockQuote?: string | undefined;
            readonly code?: string | undefined;
            readonly codeBlock?: string | undefined;
            readonly emphasis?: string | undefined;
            readonly heading?: string | undefined;
            readonly horizontalRule?: string | undefined;
            readonly image?: string | undefined;
            readonly imageText?: string | undefined;
            readonly link?: string | undefined;
            readonly linkText?: string | undefined;
            readonly listEnumeration?: string | undefined;
            readonly listItem?: string | undefined;
            readonly strong?: string | undefined;
            readonly text?: string | undefined;
        } | undefined;
        readonly hue: {
            readonly [x: string]: string | {
                readonly 100: string;
                readonly 200: string;
                readonly 300: string;
                readonly 400: string;
                readonly 500: string;
                readonly 600: string;
                readonly 700: string;
                readonly 800: string;
                readonly 900: string;
            };
        };
        readonly categorical?: readonly string[] | undefined;
        readonly "@dialog"?: {
            readonly text?: {
                readonly base?: string | undefined;
                readonly muted?: string | undefined;
                readonly faint?: string | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly background?: {
                readonly base?: string | undefined;
                readonly raised?: {
                    readonly base?: string | undefined;
                    readonly high?: string | undefined;
                    readonly max?: string | undefined;
                } | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly border?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly scrollbar?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly diff?: {
                readonly text?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                    readonly hunkHeader?: string | undefined;
                } | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                } | undefined;
                readonly highlight?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
                readonly lineNumber?: {
                    readonly text?: string | undefined;
                    readonly background?: {
                        readonly added?: string | undefined;
                        readonly removed?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly syntax?: {
                readonly comment?: string | undefined;
                readonly function?: string | undefined;
                readonly keyword?: string | undefined;
                readonly number?: string | undefined;
                readonly operator?: string | undefined;
                readonly punctuation?: string | undefined;
                readonly string?: string | undefined;
                readonly type?: string | undefined;
                readonly variable?: string | undefined;
            } | undefined;
            readonly markdown?: {
                readonly blockQuote?: string | undefined;
                readonly code?: string | undefined;
                readonly codeBlock?: string | undefined;
                readonly emphasis?: string | undefined;
                readonly heading?: string | undefined;
                readonly horizontalRule?: string | undefined;
                readonly image?: string | undefined;
                readonly imageText?: string | undefined;
                readonly link?: string | undefined;
                readonly linkText?: string | undefined;
                readonly listEnumeration?: string | undefined;
                readonly listItem?: string | undefined;
                readonly strong?: string | undefined;
                readonly text?: string | undefined;
            } | undefined;
        } | undefined;
    };
    readonly dark?: {
        readonly text?: {
            readonly base?: string | undefined;
            readonly muted?: string | undefined;
            readonly faint?: string | undefined;
            readonly action?: {
                readonly primary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly secondary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly destructive?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
            } | undefined;
            readonly formfield?: {
                readonly base?: string | undefined;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            } | undefined;
            readonly feedback?: {
                readonly error?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly warning?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly success?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly info?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly background?: {
            readonly base?: string | undefined;
            readonly raised?: {
                readonly base?: string | undefined;
                readonly high?: string | undefined;
                readonly max?: string | undefined;
            } | undefined;
            readonly action?: {
                readonly primary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly secondary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly destructive?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
            } | undefined;
            readonly formfield?: {
                readonly base?: string | undefined;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            } | undefined;
            readonly feedback?: {
                readonly error?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly warning?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly success?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly info?: {
                    readonly base?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly border?: {
            readonly base?: string | undefined;
        } | undefined;
        readonly scrollbar?: {
            readonly base?: string | undefined;
        } | undefined;
        readonly diff?: {
            readonly text?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
                readonly context?: string | undefined;
                readonly hunkHeader?: string | undefined;
            } | undefined;
            readonly background?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
                readonly context?: string | undefined;
            } | undefined;
            readonly highlight?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
            } | undefined;
            readonly lineNumber?: {
                readonly text?: string | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly syntax?: {
            readonly comment?: string | undefined;
            readonly function?: string | undefined;
            readonly keyword?: string | undefined;
            readonly number?: string | undefined;
            readonly operator?: string | undefined;
            readonly punctuation?: string | undefined;
            readonly string?: string | undefined;
            readonly type?: string | undefined;
            readonly variable?: string | undefined;
        } | undefined;
        readonly markdown?: {
            readonly blockQuote?: string | undefined;
            readonly code?: string | undefined;
            readonly codeBlock?: string | undefined;
            readonly emphasis?: string | undefined;
            readonly heading?: string | undefined;
            readonly horizontalRule?: string | undefined;
            readonly image?: string | undefined;
            readonly imageText?: string | undefined;
            readonly link?: string | undefined;
            readonly linkText?: string | undefined;
            readonly listEnumeration?: string | undefined;
            readonly listItem?: string | undefined;
            readonly strong?: string | undefined;
            readonly text?: string | undefined;
        } | undefined;
        readonly hue: {
            readonly [x: string]: string | {
                readonly 100: string;
                readonly 200: string;
                readonly 300: string;
                readonly 400: string;
                readonly 500: string;
                readonly 600: string;
                readonly 700: string;
                readonly 800: string;
                readonly 900: string;
            };
        };
        readonly categorical?: readonly string[] | undefined;
        readonly "@dialog"?: {
            readonly text?: {
                readonly base?: string | undefined;
                readonly muted?: string | undefined;
                readonly faint?: string | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly background?: {
                readonly base?: string | undefined;
                readonly raised?: {
                    readonly base?: string | undefined;
                    readonly high?: string | undefined;
                    readonly max?: string | undefined;
                } | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly border?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly scrollbar?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly diff?: {
                readonly text?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                    readonly hunkHeader?: string | undefined;
                } | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                } | undefined;
                readonly highlight?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
                readonly lineNumber?: {
                    readonly text?: string | undefined;
                    readonly background?: {
                        readonly added?: string | undefined;
                        readonly removed?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly syntax?: {
                readonly comment?: string | undefined;
                readonly function?: string | undefined;
                readonly keyword?: string | undefined;
                readonly number?: string | undefined;
                readonly operator?: string | undefined;
                readonly punctuation?: string | undefined;
                readonly string?: string | undefined;
                readonly type?: string | undefined;
                readonly variable?: string | undefined;
            } | undefined;
            readonly markdown?: {
                readonly blockQuote?: string | undefined;
                readonly code?: string | undefined;
                readonly codeBlock?: string | undefined;
                readonly emphasis?: string | undefined;
                readonly heading?: string | undefined;
                readonly horizontalRule?: string | undefined;
                readonly image?: string | undefined;
                readonly imageText?: string | undefined;
                readonly link?: string | undefined;
                readonly linkText?: string | undefined;
                readonly listEnumeration?: string | undefined;
                readonly listItem?: string | undefined;
                readonly strong?: string | undefined;
                readonly text?: string | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
} | {
    readonly $schema?: string | undefined;
    readonly base: {
        readonly text: {
            readonly base: string;
            readonly muted: string;
            readonly faint?: string | undefined;
            readonly action: {
                readonly primary: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
                readonly secondary: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
                readonly destructive: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
            };
            readonly formfield: {
                readonly base: string;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            };
            readonly feedback: {
                readonly error: {
                    readonly base: string;
                    readonly muted?: string | undefined;
                };
                readonly warning: {
                    readonly base: string;
                    readonly muted?: string | undefined;
                };
                readonly success: {
                    readonly base: string;
                    readonly muted?: string | undefined;
                };
                readonly info: {
                    readonly base: string;
                    readonly muted?: string | undefined;
                };
            };
        };
        readonly background: {
            readonly base: string;
            readonly raised: {
                readonly base: string;
                readonly high: string;
                readonly max: string;
            };
            readonly action: {
                readonly primary: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
                readonly secondary: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
                readonly destructive: {
                    readonly base: string;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                };
            };
            readonly formfield: {
                readonly base: string;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            };
            readonly feedback: {
                readonly error: {
                    readonly base: string;
                };
                readonly warning: {
                    readonly base: string;
                };
                readonly success: {
                    readonly base: string;
                };
                readonly info: {
                    readonly base: string;
                };
            };
        };
        readonly border: {
            readonly base: string;
        };
        readonly scrollbar: {
            readonly base: string;
        };
        readonly diff: {
            readonly text: {
                readonly added: string;
                readonly removed: string;
                readonly context: string;
                readonly hunkHeader: string;
            };
            readonly background: {
                readonly added: string;
                readonly removed: string;
                readonly context: string;
            };
            readonly highlight: {
                readonly added: string;
                readonly removed: string;
            };
            readonly lineNumber: {
                readonly text: string;
                readonly background: {
                    readonly added: string;
                    readonly removed: string;
                };
            };
        };
        readonly syntax: {
            readonly comment: string;
            readonly function: string;
            readonly keyword: string;
            readonly number: string;
            readonly operator: string;
            readonly punctuation: string;
            readonly string: string;
            readonly type: string;
            readonly variable: string;
        };
        readonly markdown: {
            readonly blockQuote: string;
            readonly code: string;
            readonly codeBlock: string;
            readonly emphasis: string;
            readonly heading: string;
            readonly horizontalRule: string;
            readonly image: string;
            readonly imageText: string;
            readonly link: string;
            readonly linkText: string;
            readonly listEnumeration: string;
            readonly listItem: string;
            readonly strong: string;
            readonly text: string;
        };
        readonly categorical: readonly string[];
        readonly "@dialog"?: {
            readonly text?: {
                readonly base?: string | undefined;
                readonly muted?: string | undefined;
                readonly faint?: string | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly background?: {
                readonly base?: string | undefined;
                readonly raised?: {
                    readonly base?: string | undefined;
                    readonly high?: string | undefined;
                    readonly max?: string | undefined;
                } | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly border?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly scrollbar?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly diff?: {
                readonly text?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                    readonly hunkHeader?: string | undefined;
                } | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                } | undefined;
                readonly highlight?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
                readonly lineNumber?: {
                    readonly text?: string | undefined;
                    readonly background?: {
                        readonly added?: string | undefined;
                        readonly removed?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly syntax?: {
                readonly comment?: string | undefined;
                readonly function?: string | undefined;
                readonly keyword?: string | undefined;
                readonly number?: string | undefined;
                readonly operator?: string | undefined;
                readonly punctuation?: string | undefined;
                readonly string?: string | undefined;
                readonly type?: string | undefined;
                readonly variable?: string | undefined;
            } | undefined;
            readonly markdown?: {
                readonly blockQuote?: string | undefined;
                readonly code?: string | undefined;
                readonly codeBlock?: string | undefined;
                readonly emphasis?: string | undefined;
                readonly heading?: string | undefined;
                readonly horizontalRule?: string | undefined;
                readonly image?: string | undefined;
                readonly imageText?: string | undefined;
                readonly link?: string | undefined;
                readonly linkText?: string | undefined;
                readonly listEnumeration?: string | undefined;
                readonly listItem?: string | undefined;
                readonly strong?: string | undefined;
                readonly text?: string | undefined;
            } | undefined;
        } | undefined;
    };
    readonly light?: {
        readonly text?: {
            readonly base?: string | undefined;
            readonly muted?: string | undefined;
            readonly faint?: string | undefined;
            readonly action?: {
                readonly primary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly secondary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly destructive?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
            } | undefined;
            readonly formfield?: {
                readonly base?: string | undefined;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            } | undefined;
            readonly feedback?: {
                readonly error?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly warning?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly success?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly info?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly background?: {
            readonly base?: string | undefined;
            readonly raised?: {
                readonly base?: string | undefined;
                readonly high?: string | undefined;
                readonly max?: string | undefined;
            } | undefined;
            readonly action?: {
                readonly primary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly secondary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly destructive?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
            } | undefined;
            readonly formfield?: {
                readonly base?: string | undefined;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            } | undefined;
            readonly feedback?: {
                readonly error?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly warning?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly success?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly info?: {
                    readonly base?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly border?: {
            readonly base?: string | undefined;
        } | undefined;
        readonly scrollbar?: {
            readonly base?: string | undefined;
        } | undefined;
        readonly diff?: {
            readonly text?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
                readonly context?: string | undefined;
                readonly hunkHeader?: string | undefined;
            } | undefined;
            readonly background?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
                readonly context?: string | undefined;
            } | undefined;
            readonly highlight?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
            } | undefined;
            readonly lineNumber?: {
                readonly text?: string | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly syntax?: {
            readonly comment?: string | undefined;
            readonly function?: string | undefined;
            readonly keyword?: string | undefined;
            readonly number?: string | undefined;
            readonly operator?: string | undefined;
            readonly punctuation?: string | undefined;
            readonly string?: string | undefined;
            readonly type?: string | undefined;
            readonly variable?: string | undefined;
        } | undefined;
        readonly markdown?: {
            readonly blockQuote?: string | undefined;
            readonly code?: string | undefined;
            readonly codeBlock?: string | undefined;
            readonly emphasis?: string | undefined;
            readonly heading?: string | undefined;
            readonly horizontalRule?: string | undefined;
            readonly image?: string | undefined;
            readonly imageText?: string | undefined;
            readonly link?: string | undefined;
            readonly linkText?: string | undefined;
            readonly listEnumeration?: string | undefined;
            readonly listItem?: string | undefined;
            readonly strong?: string | undefined;
            readonly text?: string | undefined;
        } | undefined;
        readonly hue: {
            readonly [x: string]: string | {
                readonly 100: string;
                readonly 200: string;
                readonly 300: string;
                readonly 400: string;
                readonly 500: string;
                readonly 600: string;
                readonly 700: string;
                readonly 800: string;
                readonly 900: string;
            };
        };
        readonly categorical?: readonly string[] | undefined;
        readonly "@dialog"?: {
            readonly text?: {
                readonly base?: string | undefined;
                readonly muted?: string | undefined;
                readonly faint?: string | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly background?: {
                readonly base?: string | undefined;
                readonly raised?: {
                    readonly base?: string | undefined;
                    readonly high?: string | undefined;
                    readonly max?: string | undefined;
                } | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly border?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly scrollbar?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly diff?: {
                readonly text?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                    readonly hunkHeader?: string | undefined;
                } | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                } | undefined;
                readonly highlight?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
                readonly lineNumber?: {
                    readonly text?: string | undefined;
                    readonly background?: {
                        readonly added?: string | undefined;
                        readonly removed?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly syntax?: {
                readonly comment?: string | undefined;
                readonly function?: string | undefined;
                readonly keyword?: string | undefined;
                readonly number?: string | undefined;
                readonly operator?: string | undefined;
                readonly punctuation?: string | undefined;
                readonly string?: string | undefined;
                readonly type?: string | undefined;
                readonly variable?: string | undefined;
            } | undefined;
            readonly markdown?: {
                readonly blockQuote?: string | undefined;
                readonly code?: string | undefined;
                readonly codeBlock?: string | undefined;
                readonly emphasis?: string | undefined;
                readonly heading?: string | undefined;
                readonly horizontalRule?: string | undefined;
                readonly image?: string | undefined;
                readonly imageText?: string | undefined;
                readonly link?: string | undefined;
                readonly linkText?: string | undefined;
                readonly listEnumeration?: string | undefined;
                readonly listItem?: string | undefined;
                readonly strong?: string | undefined;
                readonly text?: string | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    readonly dark: {
        readonly text?: {
            readonly base?: string | undefined;
            readonly muted?: string | undefined;
            readonly faint?: string | undefined;
            readonly action?: {
                readonly primary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly secondary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly destructive?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
            } | undefined;
            readonly formfield?: {
                readonly base?: string | undefined;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            } | undefined;
            readonly feedback?: {
                readonly error?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly warning?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly success?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
                readonly info?: {
                    readonly base?: string | undefined;
                    readonly muted?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly background?: {
            readonly base?: string | undefined;
            readonly raised?: {
                readonly base?: string | undefined;
                readonly high?: string | undefined;
                readonly max?: string | undefined;
            } | undefined;
            readonly action?: {
                readonly primary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly secondary?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly destructive?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
            } | undefined;
            readonly formfield?: {
                readonly base?: string | undefined;
                readonly $hovered?: string | undefined;
                readonly $focused?: string | undefined;
                readonly $pressed?: string | undefined;
                readonly $selected?: string | undefined;
                readonly $disabled?: string | undefined;
            } | undefined;
            readonly feedback?: {
                readonly error?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly warning?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly success?: {
                    readonly base?: string | undefined;
                } | undefined;
                readonly info?: {
                    readonly base?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly border?: {
            readonly base?: string | undefined;
        } | undefined;
        readonly scrollbar?: {
            readonly base?: string | undefined;
        } | undefined;
        readonly diff?: {
            readonly text?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
                readonly context?: string | undefined;
                readonly hunkHeader?: string | undefined;
            } | undefined;
            readonly background?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
                readonly context?: string | undefined;
            } | undefined;
            readonly highlight?: {
                readonly added?: string | undefined;
                readonly removed?: string | undefined;
            } | undefined;
            readonly lineNumber?: {
                readonly text?: string | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        readonly syntax?: {
            readonly comment?: string | undefined;
            readonly function?: string | undefined;
            readonly keyword?: string | undefined;
            readonly number?: string | undefined;
            readonly operator?: string | undefined;
            readonly punctuation?: string | undefined;
            readonly string?: string | undefined;
            readonly type?: string | undefined;
            readonly variable?: string | undefined;
        } | undefined;
        readonly markdown?: {
            readonly blockQuote?: string | undefined;
            readonly code?: string | undefined;
            readonly codeBlock?: string | undefined;
            readonly emphasis?: string | undefined;
            readonly heading?: string | undefined;
            readonly horizontalRule?: string | undefined;
            readonly image?: string | undefined;
            readonly imageText?: string | undefined;
            readonly link?: string | undefined;
            readonly linkText?: string | undefined;
            readonly listEnumeration?: string | undefined;
            readonly listItem?: string | undefined;
            readonly strong?: string | undefined;
            readonly text?: string | undefined;
        } | undefined;
        readonly hue: {
            readonly [x: string]: string | {
                readonly 100: string;
                readonly 200: string;
                readonly 300: string;
                readonly 400: string;
                readonly 500: string;
                readonly 600: string;
                readonly 700: string;
                readonly 800: string;
                readonly 900: string;
            };
        };
        readonly categorical?: readonly string[] | undefined;
        readonly "@dialog"?: {
            readonly text?: {
                readonly base?: string | undefined;
                readonly muted?: string | undefined;
                readonly faint?: string | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                        readonly muted?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly background?: {
                readonly base?: string | undefined;
                readonly raised?: {
                    readonly base?: string | undefined;
                    readonly high?: string | undefined;
                    readonly max?: string | undefined;
                } | undefined;
                readonly action?: {
                    readonly primary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly secondary?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                    readonly destructive?: {
                        readonly base?: string | undefined;
                        readonly $hovered?: string | undefined;
                        readonly $focused?: string | undefined;
                        readonly $pressed?: string | undefined;
                        readonly $selected?: string | undefined;
                        readonly $disabled?: string | undefined;
                    } | undefined;
                } | undefined;
                readonly formfield?: {
                    readonly base?: string | undefined;
                    readonly $hovered?: string | undefined;
                    readonly $focused?: string | undefined;
                    readonly $pressed?: string | undefined;
                    readonly $selected?: string | undefined;
                    readonly $disabled?: string | undefined;
                } | undefined;
                readonly feedback?: {
                    readonly error?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly warning?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly success?: {
                        readonly base?: string | undefined;
                    } | undefined;
                    readonly info?: {
                        readonly base?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly border?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly scrollbar?: {
                readonly base?: string | undefined;
            } | undefined;
            readonly diff?: {
                readonly text?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                    readonly hunkHeader?: string | undefined;
                } | undefined;
                readonly background?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                    readonly context?: string | undefined;
                } | undefined;
                readonly highlight?: {
                    readonly added?: string | undefined;
                    readonly removed?: string | undefined;
                } | undefined;
                readonly lineNumber?: {
                    readonly text?: string | undefined;
                    readonly background?: {
                        readonly added?: string | undefined;
                        readonly removed?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            readonly syntax?: {
                readonly comment?: string | undefined;
                readonly function?: string | undefined;
                readonly keyword?: string | undefined;
                readonly number?: string | undefined;
                readonly operator?: string | undefined;
                readonly punctuation?: string | undefined;
                readonly string?: string | undefined;
                readonly type?: string | undefined;
                readonly variable?: string | undefined;
            } | undefined;
            readonly markdown?: {
                readonly blockQuote?: string | undefined;
                readonly code?: string | undefined;
                readonly codeBlock?: string | undefined;
                readonly emphasis?: string | undefined;
                readonly heading?: string | undefined;
                readonly horizontalRule?: string | undefined;
                readonly image?: string | undefined;
                readonly imageText?: string | undefined;
                readonly link?: string | undefined;
                readonly linkText?: string | undefined;
                readonly listEnumeration?: string | undefined;
                readonly listItem?: string | undefined;
                readonly strong?: string | undefined;
                readonly text?: string | undefined;
            } | undefined;
        } | undefined;
    };
};
export declare function resolveThemeDocument(document: ThemeDocument, mode?: Mode): ResolvedTheme;
export declare function resolveTheme(definition: ThemeDefinition): ResolvedTheme;

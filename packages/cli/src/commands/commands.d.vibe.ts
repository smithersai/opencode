import { GlobalFlag } from "effect/cli";
export declare const PrintLogs: GlobalFlag.Setting<"print-logs", boolean>;
export declare const Standalone: GlobalFlag.Setting<"standalone", boolean>;
export declare const Server: GlobalFlag.Setting<"server", import("effect/Option").Option<string>>;
export declare const Commands: {
    name: string;
    spec: import("effect/cli/Command").Command<string, {
        readonly standalone: boolean;
        readonly server: import("effect/Option").Option<string>;
        readonly auto: boolean;
        readonly yolo: boolean;
        readonly dangerouslySkipPermissions: boolean;
        readonly directory: import("effect/Option").Option<string>;
        readonly continue: boolean;
        readonly session: import("effect/Option").Option<string>;
        readonly prompt: import("effect/Option").Option<string>;
    }, {}, never, never>;
    commands: {
        readonly acp: {
            name: "acp";
            spec: import("effect/cli/Command").Command<"acp", {
                readonly login: boolean;
            }, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {
                    readonly login: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly api: {
            name: "api";
            spec: import("effect/cli/Command").Command<"api", {
                readonly request: readonly string[];
                readonly data: import("effect/Option").Option<string>;
                readonly header: readonly string[];
                readonly param: import("effect/Option").Option<Record<string, string>>;
            }, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {
                    readonly request: readonly string[];
                    readonly data: import("effect/Option").Option<string>;
                    readonly header: readonly string[];
                    readonly param: import("effect/Option").Option<Record<string, string>>;
                }, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly auth: {
            name: "auth";
            spec: import("effect/cli/Command").Command<"auth", {}, {}, never, never>;
            commands: {
                readonly export: {
                    name: "export";
                    spec: import("effect/cli/Command").Command<"export", {
                        readonly target: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly target: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly import: {
                    name: "import";
                    spec: import("effect/cli/Command").Command<"import", {
                        readonly file: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly file: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly list: {
                    name: "list";
                    spec: import("effect/cli/Command").Command<"list", {
                        readonly format: "default" | "json";
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly format: "default" | "json";
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly login: {
                    name: "login";
                    spec: import("effect/cli/Command").Command<"login", {
                        readonly target: import("effect/Option").Option<string>;
                        readonly method: import("effect/Option").Option<string>;
                        readonly answer: readonly string[];
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly target: import("effect/Option").Option<string>;
                            readonly method: import("effect/Option").Option<string>;
                            readonly answer: readonly string[];
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly logout: {
                    name: "logout";
                    spec: import("effect/cli/Command").Command<"logout", {
                        readonly target: import("effect/Option").Option<string>;
                        readonly credential: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly target: import("effect/Option").Option<string>;
                            readonly credential: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly switch: {
                    name: "switch";
                    spec: import("effect/cli/Command").Command<"switch", {
                        readonly target: import("effect/Option").Option<string>;
                        readonly credential: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly target: import("effect/Option").Option<string>;
                            readonly credential: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
            };
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                commands: {
                    readonly export: {
                        name: "export";
                        spec: import("effect/cli/Command").Command<"export", {
                            readonly target: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly import: {
                        name: "import";
                        spec: import("effect/cli/Command").Command<"import", {
                            readonly file: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly file: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly list: {
                        name: "list";
                        spec: import("effect/cli/Command").Command<"list", {
                            readonly format: "default" | "json";
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly format: "default" | "json";
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly login: {
                        name: "login";
                        spec: import("effect/cli/Command").Command<"login", {
                            readonly target: import("effect/Option").Option<string>;
                            readonly method: import("effect/Option").Option<string>;
                            readonly answer: readonly string[];
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                                readonly method: import("effect/Option").Option<string>;
                                readonly answer: readonly string[];
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly logout: {
                        name: "logout";
                        spec: import("effect/cli/Command").Command<"logout", {
                            readonly target: import("effect/Option").Option<string>;
                            readonly credential: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                                readonly credential: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly switch: {
                        name: "switch";
                        spec: import("effect/cli/Command").Command<"switch", {
                            readonly target: import("effect/Option").Option<string>;
                            readonly credential: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                                readonly credential: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: never[];
            }[];
        };
        readonly debug: {
            name: "debug";
            spec: import("effect/cli/Command").Command<"debug", {}, {}, never, never>;
            commands: {
                readonly agents: {
                    name: "agents";
                    spec: import("effect/cli/Command").Command<"agents", {}, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly config: {
                    name: "config";
                    spec: import("effect/cli/Command").Command<"config", {}, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly "heap-dump": {
                    name: "heap-dump";
                    spec: import("effect/cli/Command").Command<"heap-dump", {
                        readonly directory: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly directory: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly paths: {
                    name: "paths";
                    spec: import("effect/cli/Command").Command<"paths", {
                        readonly name: import("effect/Option").Option<"bin" | "cache" | "config" | "data" | "db" | "home" | "log" | "repos" | "state" | "tmp">;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly name: import("effect/Option").Option<"bin" | "cache" | "config" | "data" | "db" | "home" | "log" | "repos" | "state" | "tmp">;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
            };
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                commands: {
                    readonly agents: {
                        name: "agents";
                        spec: import("effect/cli/Command").Command<"agents", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly config: {
                        name: "config";
                        spec: import("effect/cli/Command").Command<"config", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly "heap-dump": {
                        name: "heap-dump";
                        spec: import("effect/cli/Command").Command<"heap-dump", {
                            readonly directory: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly directory: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly paths: {
                        name: "paths";
                        spec: import("effect/cli/Command").Command<"paths", {
                            readonly name: import("effect/Option").Option<"bin" | "cache" | "config" | "data" | "db" | "home" | "log" | "repos" | "state" | "tmp">;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly name: import("effect/Option").Option<"bin" | "cache" | "config" | "data" | "db" | "home" | "log" | "repos" | "state" | "tmp">;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: never[];
            }[];
        };
        readonly mcp: {
            name: "mcp";
            spec: import("effect/cli/Command").Command<"mcp", {}, {}, never, never>;
            commands: {
                readonly add: {
                    name: "add";
                    spec: import("effect/cli/Command").Command<"add", {
                        readonly name: string;
                        readonly command: readonly string[];
                        readonly url: import("effect/Option").Option<string>;
                        readonly header: import("effect/Option").Option<Record<string, string>>;
                        readonly env: import("effect/Option").Option<Record<string, string>>;
                        readonly global: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly name: string;
                            readonly command: readonly string[];
                            readonly url: import("effect/Option").Option<string>;
                            readonly header: import("effect/Option").Option<Record<string, string>>;
                            readonly env: import("effect/Option").Option<Record<string, string>>;
                            readonly global: boolean;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly auth: {
                    name: "auth";
                    spec: import("effect/cli/Command").Command<"auth", {
                        readonly name: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly name: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly list: {
                    name: "list";
                    spec: import("effect/cli/Command").Command<"list", {}, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly logout: {
                    name: "logout";
                    spec: import("effect/cli/Command").Command<"logout", {
                        readonly name: string;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly name: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
            };
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                commands: {
                    readonly add: {
                        name: "add";
                        spec: import("effect/cli/Command").Command<"add", {
                            readonly name: string;
                            readonly command: readonly string[];
                            readonly url: import("effect/Option").Option<string>;
                            readonly header: import("effect/Option").Option<Record<string, string>>;
                            readonly env: import("effect/Option").Option<Record<string, string>>;
                            readonly global: boolean;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly name: string;
                                readonly command: readonly string[];
                                readonly url: import("effect/Option").Option<string>;
                                readonly header: import("effect/Option").Option<Record<string, string>>;
                                readonly env: import("effect/Option").Option<Record<string, string>>;
                                readonly global: boolean;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly auth: {
                        name: "auth";
                        spec: import("effect/cli/Command").Command<"auth", {
                            readonly name: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly name: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly list: {
                        name: "list";
                        spec: import("effect/cli/Command").Command<"list", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly logout: {
                        name: "logout";
                        spec: import("effect/cli/Command").Command<"logout", {
                            readonly name: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly name: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: never[];
            }[];
        };
        readonly mini: {
            name: "mini";
            spec: import("effect/cli/Command").Command<"mini", {
                readonly continue: boolean;
                readonly session: import("effect/Option").Option<string>;
                readonly fork: boolean;
                readonly replay: import("effect/Option").Option<boolean>;
                readonly replayLimit: import("effect/Option").Option<number>;
                readonly model: import("effect/Option").Option<string>;
                readonly agent: import("effect/Option").Option<string>;
                readonly prompt: import("effect/Option").Option<string>;
                readonly demo: boolean;
            }, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {
                    readonly continue: boolean;
                    readonly session: import("effect/Option").Option<string>;
                    readonly fork: boolean;
                    readonly replay: import("effect/Option").Option<boolean>;
                    readonly replayLimit: import("effect/Option").Option<number>;
                    readonly model: import("effect/Option").Option<string>;
                    readonly agent: import("effect/Option").Option<string>;
                    readonly prompt: import("effect/Option").Option<string>;
                    readonly demo: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly models: {
            name: "models";
            spec: import("effect/cli/Command").Command<"models", {}, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly pair: {
            name: "pair";
            spec: import("effect/cli/Command").Command<"pair", {
                readonly url: import("effect/Option").Option<string>;
                readonly remote: boolean;
                readonly yes: boolean;
            }, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {
                    readonly url: import("effect/Option").Option<string>;
                    readonly remote: boolean;
                    readonly yes: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly plugin: {
            name: "plugin";
            spec: import("effect/cli/Command").Command<"plugin", {}, {}, never, never>;
            commands: {
                readonly add: {
                    name: "add";
                    spec: import("effect/cli/Command").Command<"add", {
                        readonly package: string;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly package: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly check: {
                    name: "check";
                    spec: import("effect/cli/Command").Command<"check", {
                        readonly target: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly target: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly list: {
                    name: "list";
                    spec: import("effect/cli/Command").Command<"list", {
                        readonly builtin: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly builtin: boolean;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly remove: {
                    name: "remove";
                    spec: import("effect/cli/Command").Command<"remove", {
                        readonly package: string;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly package: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly update: {
                    name: "update";
                    spec: import("effect/cli/Command").Command<"update", {
                        readonly target: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly target: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
            };
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                commands: {
                    readonly add: {
                        name: "add";
                        spec: import("effect/cli/Command").Command<"add", {
                            readonly package: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly package: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly check: {
                        name: "check";
                        spec: import("effect/cli/Command").Command<"check", {
                            readonly target: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly list: {
                        name: "list";
                        spec: import("effect/cli/Command").Command<"list", {
                            readonly builtin: boolean;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly builtin: boolean;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly remove: {
                        name: "remove";
                        spec: import("effect/cli/Command").Command<"remove", {
                            readonly package: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly package: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly update: {
                        name: "update";
                        spec: import("effect/cli/Command").Command<"update", {
                            readonly target: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: never[];
            }[];
        };
        readonly reload: {
            name: "reload";
            spec: import("effect/cli/Command").Command<"reload", {}, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly run: {
            name: "run";
            spec: import("effect/cli/Command").Command<"run", {
                readonly auto: boolean;
                readonly yolo: boolean;
                readonly dangerouslySkipPermissions: boolean;
                readonly message: readonly string[];
                readonly continue: boolean;
                readonly session: import("effect/Option").Option<string>;
                readonly fork: boolean;
                readonly model: import("effect/Option").Option<string>;
                readonly agent: import("effect/Option").Option<string>;
                readonly format: "default" | "json";
                readonly file: readonly string[];
                readonly title: import("effect/Option").Option<string>;
                readonly thinking: boolean;
            }, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {
                    readonly auto: boolean;
                    readonly yolo: boolean;
                    readonly dangerouslySkipPermissions: boolean;
                    readonly message: readonly string[];
                    readonly continue: boolean;
                    readonly session: import("effect/Option").Option<string>;
                    readonly fork: boolean;
                    readonly model: import("effect/Option").Option<string>;
                    readonly agent: import("effect/Option").Option<string>;
                    readonly format: "default" | "json";
                    readonly file: readonly string[];
                    readonly title: import("effect/Option").Option<string>;
                    readonly thinking: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly serve: {
            name: "serve";
            spec: import("effect/cli/Command").Command<"serve", {
                readonly hostname: import("effect/Option").Option<string>;
                readonly port: import("effect/Option").Option<number>;
                readonly cors: readonly string[];
                readonly service: boolean;
                readonly stdio: boolean;
            }, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {
                    readonly hostname: import("effect/Option").Option<string>;
                    readonly port: import("effect/Option").Option<number>;
                    readonly cors: readonly string[];
                    readonly service: boolean;
                    readonly stdio: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly service: {
            name: "service";
            spec: import("effect/cli/Command").Command<"service", {}, {}, never, never>;
            commands: {
                readonly get: {
                    name: "get";
                    spec: import("effect/cli/Command").Command<"get", {
                        readonly key: import("effect/Option").Option<string>;
                        readonly name: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly key: import("effect/Option").Option<string>;
                            readonly name: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly restart: {
                    name: "restart";
                    spec: import("effect/cli/Command").Command<"restart", {}, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly set: {
                    name: "set";
                    spec: import("effect/cli/Command").Command<"set", {
                        readonly key: string;
                        readonly value: string;
                        readonly nestedValue: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly key: string;
                            readonly value: string;
                            readonly nestedValue: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly start: {
                    name: "start";
                    spec: import("effect/cli/Command").Command<"start", {}, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly status: {
                    name: "status";
                    spec: import("effect/cli/Command").Command<"status", {}, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly stop: {
                    name: "stop";
                    spec: import("effect/cli/Command").Command<"stop", {}, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly unset: {
                    name: "unset";
                    spec: import("effect/cli/Command").Command<"unset", {
                        readonly key: string;
                        readonly name: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly key: string;
                            readonly name: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
            };
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                commands: {
                    readonly get: {
                        name: "get";
                        spec: import("effect/cli/Command").Command<"get", {
                            readonly key: import("effect/Option").Option<string>;
                            readonly name: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly key: import("effect/Option").Option<string>;
                                readonly name: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly restart: {
                        name: "restart";
                        spec: import("effect/cli/Command").Command<"restart", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly set: {
                        name: "set";
                        spec: import("effect/cli/Command").Command<"set", {
                            readonly key: string;
                            readonly value: string;
                            readonly nestedValue: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly key: string;
                                readonly value: string;
                                readonly nestedValue: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly start: {
                        name: "start";
                        spec: import("effect/cli/Command").Command<"start", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly status: {
                        name: "status";
                        spec: import("effect/cli/Command").Command<"status", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly stop: {
                        name: "stop";
                        spec: import("effect/cli/Command").Command<"stop", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly unset: {
                        name: "unset";
                        spec: import("effect/cli/Command").Command<"unset", {
                            readonly key: string;
                            readonly name: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly key: string;
                                readonly name: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: never[];
            }[];
        };
        readonly session: {
            name: "session";
            spec: import("effect/cli/Command").Command<"session", {}, {}, never, never>;
            commands: {
                readonly delete: {
                    name: "delete";
                    spec: import("effect/cli/Command").Command<"delete", {
                        readonly sessionID: string;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly sessionID: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly export: {
                    name: "export";
                    spec: import("effect/cli/Command").Command<"export", {
                        readonly session: import("effect/Option").Option<string>;
                        readonly sanitize: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly session: import("effect/Option").Option<string>;
                            readonly sanitize: boolean;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly import: {
                    name: "import";
                    spec: import("effect/cli/Command").Command<"import", {
                        readonly file: string;
                        readonly directory: import("effect/Option").Option<string>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly file: string;
                            readonly directory: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
                readonly list: {
                    name: "list";
                    spec: import("effect/cli/Command").Command<"list", {
                        readonly maxCount: import("effect/Option").Option<number>;
                        readonly format: "json" | "table";
                    }, {}, never, never>;
                    commands: {};
                    aliases: {
                        name: string;
                        spec: import("effect/cli/Command").Command<string, {
                            readonly maxCount: import("effect/Option").Option<number>;
                            readonly format: "json" | "table";
                        }, {}, never, never>;
                        commands: {};
                        aliases: never[];
                    }[];
                };
            };
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                commands: {
                    readonly delete: {
                        name: "delete";
                        spec: import("effect/cli/Command").Command<"delete", {
                            readonly sessionID: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly sessionID: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly export: {
                        name: "export";
                        spec: import("effect/cli/Command").Command<"export", {
                            readonly session: import("effect/Option").Option<string>;
                            readonly sanitize: boolean;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly session: import("effect/Option").Option<string>;
                                readonly sanitize: boolean;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly import: {
                        name: "import";
                        spec: import("effect/cli/Command").Command<"import", {
                            readonly file: string;
                            readonly directory: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly file: string;
                                readonly directory: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly list: {
                        name: "list";
                        spec: import("effect/cli/Command").Command<"list", {
                            readonly maxCount: import("effect/Option").Option<number>;
                            readonly format: "json" | "table";
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly maxCount: import("effect/Option").Option<number>;
                                readonly format: "json" | "table";
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: never[];
            }[];
        };
        readonly stats: {
            name: "stats";
            spec: import("effect/cli/Command").Command<"stats", {
                readonly days: import("effect/Option").Option<number>;
                readonly year: import("effect/Option").Option<number>;
                readonly all: boolean;
                readonly project: import("effect/Option").Option<string>;
                readonly models: boolean;
                readonly tools: boolean;
                readonly cost: boolean;
                readonly full: boolean;
                readonly limit: number;
                readonly json: boolean;
            }, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {
                    readonly days: import("effect/Option").Option<number>;
                    readonly year: import("effect/Option").Option<number>;
                    readonly all: boolean;
                    readonly project: import("effect/Option").Option<string>;
                    readonly models: boolean;
                    readonly tools: boolean;
                    readonly cost: boolean;
                    readonly full: boolean;
                    readonly limit: number;
                    readonly json: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly uninstall: {
            name: "uninstall";
            spec: import("effect/cli/Command").Command<"uninstall", {
                readonly dryRun: boolean;
                readonly force: boolean;
            }, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {
                    readonly dryRun: boolean;
                    readonly force: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
        readonly upgrade: {
            name: "upgrade";
            spec: import("effect/cli/Command").Command<"upgrade", {
                readonly target: import("effect/Option").Option<string>;
                readonly method: import("effect/Option").Option<"brew" | "bun" | "curl" | "npm" | "pnpm" | "vp" | "winget" | "yarn">;
            }, {}, never, never>;
            commands: {};
            aliases: {
                name: string;
                spec: import("effect/cli/Command").Command<string, {
                    readonly target: import("effect/Option").Option<string>;
                    readonly method: import("effect/Option").Option<"brew" | "bun" | "curl" | "npm" | "pnpm" | "vp" | "winget" | "yarn">;
                }, {}, never, never>;
                commands: {};
                aliases: never[];
            }[];
        };
    };
    aliases: {
        name: string;
        spec: import("effect/cli/Command").Command<string, {
            readonly standalone: boolean;
            readonly server: import("effect/Option").Option<string>;
            readonly auto: boolean;
            readonly yolo: boolean;
            readonly dangerouslySkipPermissions: boolean;
            readonly directory: import("effect/Option").Option<string>;
            readonly continue: boolean;
            readonly session: import("effect/Option").Option<string>;
            readonly prompt: import("effect/Option").Option<string>;
        }, {}, never, never>;
        commands: {
            readonly acp: {
                name: "acp";
                spec: import("effect/cli/Command").Command<"acp", {
                    readonly login: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {
                        readonly login: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly api: {
                name: "api";
                spec: import("effect/cli/Command").Command<"api", {
                    readonly request: readonly string[];
                    readonly data: import("effect/Option").Option<string>;
                    readonly header: readonly string[];
                    readonly param: import("effect/Option").Option<Record<string, string>>;
                }, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {
                        readonly request: readonly string[];
                        readonly data: import("effect/Option").Option<string>;
                        readonly header: readonly string[];
                        readonly param: import("effect/Option").Option<Record<string, string>>;
                    }, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly auth: {
                name: "auth";
                spec: import("effect/cli/Command").Command<"auth", {}, {}, never, never>;
                commands: {
                    readonly export: {
                        name: "export";
                        spec: import("effect/cli/Command").Command<"export", {
                            readonly target: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly import: {
                        name: "import";
                        spec: import("effect/cli/Command").Command<"import", {
                            readonly file: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly file: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly list: {
                        name: "list";
                        spec: import("effect/cli/Command").Command<"list", {
                            readonly format: "default" | "json";
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly format: "default" | "json";
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly login: {
                        name: "login";
                        spec: import("effect/cli/Command").Command<"login", {
                            readonly target: import("effect/Option").Option<string>;
                            readonly method: import("effect/Option").Option<string>;
                            readonly answer: readonly string[];
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                                readonly method: import("effect/Option").Option<string>;
                                readonly answer: readonly string[];
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly logout: {
                        name: "logout";
                        spec: import("effect/cli/Command").Command<"logout", {
                            readonly target: import("effect/Option").Option<string>;
                            readonly credential: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                                readonly credential: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly switch: {
                        name: "switch";
                        spec: import("effect/cli/Command").Command<"switch", {
                            readonly target: import("effect/Option").Option<string>;
                            readonly credential: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                                readonly credential: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                    commands: {
                        readonly export: {
                            name: "export";
                            spec: import("effect/cli/Command").Command<"export", {
                                readonly target: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly target: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly import: {
                            name: "import";
                            spec: import("effect/cli/Command").Command<"import", {
                                readonly file: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly file: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly list: {
                            name: "list";
                            spec: import("effect/cli/Command").Command<"list", {
                                readonly format: "default" | "json";
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly format: "default" | "json";
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly login: {
                            name: "login";
                            spec: import("effect/cli/Command").Command<"login", {
                                readonly target: import("effect/Option").Option<string>;
                                readonly method: import("effect/Option").Option<string>;
                                readonly answer: readonly string[];
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly target: import("effect/Option").Option<string>;
                                    readonly method: import("effect/Option").Option<string>;
                                    readonly answer: readonly string[];
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly logout: {
                            name: "logout";
                            spec: import("effect/cli/Command").Command<"logout", {
                                readonly target: import("effect/Option").Option<string>;
                                readonly credential: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly target: import("effect/Option").Option<string>;
                                    readonly credential: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly switch: {
                            name: "switch";
                            spec: import("effect/cli/Command").Command<"switch", {
                                readonly target: import("effect/Option").Option<string>;
                                readonly credential: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly target: import("effect/Option").Option<string>;
                                    readonly credential: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                    };
                    aliases: never[];
                }[];
            };
            readonly debug: {
                name: "debug";
                spec: import("effect/cli/Command").Command<"debug", {}, {}, never, never>;
                commands: {
                    readonly agents: {
                        name: "agents";
                        spec: import("effect/cli/Command").Command<"agents", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly config: {
                        name: "config";
                        spec: import("effect/cli/Command").Command<"config", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly "heap-dump": {
                        name: "heap-dump";
                        spec: import("effect/cli/Command").Command<"heap-dump", {
                            readonly directory: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly directory: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly paths: {
                        name: "paths";
                        spec: import("effect/cli/Command").Command<"paths", {
                            readonly name: import("effect/Option").Option<"bin" | "cache" | "config" | "data" | "db" | "home" | "log" | "repos" | "state" | "tmp">;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly name: import("effect/Option").Option<"bin" | "cache" | "config" | "data" | "db" | "home" | "log" | "repos" | "state" | "tmp">;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                    commands: {
                        readonly agents: {
                            name: "agents";
                            spec: import("effect/cli/Command").Command<"agents", {}, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly config: {
                            name: "config";
                            spec: import("effect/cli/Command").Command<"config", {}, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly "heap-dump": {
                            name: "heap-dump";
                            spec: import("effect/cli/Command").Command<"heap-dump", {
                                readonly directory: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly directory: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly paths: {
                            name: "paths";
                            spec: import("effect/cli/Command").Command<"paths", {
                                readonly name: import("effect/Option").Option<"bin" | "cache" | "config" | "data" | "db" | "home" | "log" | "repos" | "state" | "tmp">;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly name: import("effect/Option").Option<"bin" | "cache" | "config" | "data" | "db" | "home" | "log" | "repos" | "state" | "tmp">;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                    };
                    aliases: never[];
                }[];
            };
            readonly mcp: {
                name: "mcp";
                spec: import("effect/cli/Command").Command<"mcp", {}, {}, never, never>;
                commands: {
                    readonly add: {
                        name: "add";
                        spec: import("effect/cli/Command").Command<"add", {
                            readonly name: string;
                            readonly command: readonly string[];
                            readonly url: import("effect/Option").Option<string>;
                            readonly header: import("effect/Option").Option<Record<string, string>>;
                            readonly env: import("effect/Option").Option<Record<string, string>>;
                            readonly global: boolean;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly name: string;
                                readonly command: readonly string[];
                                readonly url: import("effect/Option").Option<string>;
                                readonly header: import("effect/Option").Option<Record<string, string>>;
                                readonly env: import("effect/Option").Option<Record<string, string>>;
                                readonly global: boolean;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly auth: {
                        name: "auth";
                        spec: import("effect/cli/Command").Command<"auth", {
                            readonly name: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly name: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly list: {
                        name: "list";
                        spec: import("effect/cli/Command").Command<"list", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly logout: {
                        name: "logout";
                        spec: import("effect/cli/Command").Command<"logout", {
                            readonly name: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly name: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                    commands: {
                        readonly add: {
                            name: "add";
                            spec: import("effect/cli/Command").Command<"add", {
                                readonly name: string;
                                readonly command: readonly string[];
                                readonly url: import("effect/Option").Option<string>;
                                readonly header: import("effect/Option").Option<Record<string, string>>;
                                readonly env: import("effect/Option").Option<Record<string, string>>;
                                readonly global: boolean;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly name: string;
                                    readonly command: readonly string[];
                                    readonly url: import("effect/Option").Option<string>;
                                    readonly header: import("effect/Option").Option<Record<string, string>>;
                                    readonly env: import("effect/Option").Option<Record<string, string>>;
                                    readonly global: boolean;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly auth: {
                            name: "auth";
                            spec: import("effect/cli/Command").Command<"auth", {
                                readonly name: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly name: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly list: {
                            name: "list";
                            spec: import("effect/cli/Command").Command<"list", {}, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly logout: {
                            name: "logout";
                            spec: import("effect/cli/Command").Command<"logout", {
                                readonly name: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly name: string;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                    };
                    aliases: never[];
                }[];
            };
            readonly mini: {
                name: "mini";
                spec: import("effect/cli/Command").Command<"mini", {
                    readonly continue: boolean;
                    readonly session: import("effect/Option").Option<string>;
                    readonly fork: boolean;
                    readonly replay: import("effect/Option").Option<boolean>;
                    readonly replayLimit: import("effect/Option").Option<number>;
                    readonly model: import("effect/Option").Option<string>;
                    readonly agent: import("effect/Option").Option<string>;
                    readonly prompt: import("effect/Option").Option<string>;
                    readonly demo: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {
                        readonly continue: boolean;
                        readonly session: import("effect/Option").Option<string>;
                        readonly fork: boolean;
                        readonly replay: import("effect/Option").Option<boolean>;
                        readonly replayLimit: import("effect/Option").Option<number>;
                        readonly model: import("effect/Option").Option<string>;
                        readonly agent: import("effect/Option").Option<string>;
                        readonly prompt: import("effect/Option").Option<string>;
                        readonly demo: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly models: {
                name: "models";
                spec: import("effect/cli/Command").Command<"models", {}, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly pair: {
                name: "pair";
                spec: import("effect/cli/Command").Command<"pair", {
                    readonly url: import("effect/Option").Option<string>;
                    readonly remote: boolean;
                    readonly yes: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {
                        readonly url: import("effect/Option").Option<string>;
                        readonly remote: boolean;
                        readonly yes: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly plugin: {
                name: "plugin";
                spec: import("effect/cli/Command").Command<"plugin", {}, {}, never, never>;
                commands: {
                    readonly add: {
                        name: "add";
                        spec: import("effect/cli/Command").Command<"add", {
                            readonly package: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly package: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly check: {
                        name: "check";
                        spec: import("effect/cli/Command").Command<"check", {
                            readonly target: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly list: {
                        name: "list";
                        spec: import("effect/cli/Command").Command<"list", {
                            readonly builtin: boolean;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly builtin: boolean;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly remove: {
                        name: "remove";
                        spec: import("effect/cli/Command").Command<"remove", {
                            readonly package: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly package: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly update: {
                        name: "update";
                        spec: import("effect/cli/Command").Command<"update", {
                            readonly target: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly target: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                    commands: {
                        readonly add: {
                            name: "add";
                            spec: import("effect/cli/Command").Command<"add", {
                                readonly package: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly package: string;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly check: {
                            name: "check";
                            spec: import("effect/cli/Command").Command<"check", {
                                readonly target: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly target: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly list: {
                            name: "list";
                            spec: import("effect/cli/Command").Command<"list", {
                                readonly builtin: boolean;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly builtin: boolean;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly remove: {
                            name: "remove";
                            spec: import("effect/cli/Command").Command<"remove", {
                                readonly package: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly package: string;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly update: {
                            name: "update";
                            spec: import("effect/cli/Command").Command<"update", {
                                readonly target: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly target: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                    };
                    aliases: never[];
                }[];
            };
            readonly reload: {
                name: "reload";
                spec: import("effect/cli/Command").Command<"reload", {}, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly run: {
                name: "run";
                spec: import("effect/cli/Command").Command<"run", {
                    readonly auto: boolean;
                    readonly yolo: boolean;
                    readonly dangerouslySkipPermissions: boolean;
                    readonly message: readonly string[];
                    readonly continue: boolean;
                    readonly session: import("effect/Option").Option<string>;
                    readonly fork: boolean;
                    readonly model: import("effect/Option").Option<string>;
                    readonly agent: import("effect/Option").Option<string>;
                    readonly format: "default" | "json";
                    readonly file: readonly string[];
                    readonly title: import("effect/Option").Option<string>;
                    readonly thinking: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {
                        readonly auto: boolean;
                        readonly yolo: boolean;
                        readonly dangerouslySkipPermissions: boolean;
                        readonly message: readonly string[];
                        readonly continue: boolean;
                        readonly session: import("effect/Option").Option<string>;
                        readonly fork: boolean;
                        readonly model: import("effect/Option").Option<string>;
                        readonly agent: import("effect/Option").Option<string>;
                        readonly format: "default" | "json";
                        readonly file: readonly string[];
                        readonly title: import("effect/Option").Option<string>;
                        readonly thinking: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly serve: {
                name: "serve";
                spec: import("effect/cli/Command").Command<"serve", {
                    readonly hostname: import("effect/Option").Option<string>;
                    readonly port: import("effect/Option").Option<number>;
                    readonly cors: readonly string[];
                    readonly service: boolean;
                    readonly stdio: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {
                        readonly hostname: import("effect/Option").Option<string>;
                        readonly port: import("effect/Option").Option<number>;
                        readonly cors: readonly string[];
                        readonly service: boolean;
                        readonly stdio: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly service: {
                name: "service";
                spec: import("effect/cli/Command").Command<"service", {}, {}, never, never>;
                commands: {
                    readonly get: {
                        name: "get";
                        spec: import("effect/cli/Command").Command<"get", {
                            readonly key: import("effect/Option").Option<string>;
                            readonly name: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly key: import("effect/Option").Option<string>;
                                readonly name: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly restart: {
                        name: "restart";
                        spec: import("effect/cli/Command").Command<"restart", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly set: {
                        name: "set";
                        spec: import("effect/cli/Command").Command<"set", {
                            readonly key: string;
                            readonly value: string;
                            readonly nestedValue: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly key: string;
                                readonly value: string;
                                readonly nestedValue: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly start: {
                        name: "start";
                        spec: import("effect/cli/Command").Command<"start", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly status: {
                        name: "status";
                        spec: import("effect/cli/Command").Command<"status", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly stop: {
                        name: "stop";
                        spec: import("effect/cli/Command").Command<"stop", {}, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly unset: {
                        name: "unset";
                        spec: import("effect/cli/Command").Command<"unset", {
                            readonly key: string;
                            readonly name: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly key: string;
                                readonly name: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                    commands: {
                        readonly get: {
                            name: "get";
                            spec: import("effect/cli/Command").Command<"get", {
                                readonly key: import("effect/Option").Option<string>;
                                readonly name: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly key: import("effect/Option").Option<string>;
                                    readonly name: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly restart: {
                            name: "restart";
                            spec: import("effect/cli/Command").Command<"restart", {}, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly set: {
                            name: "set";
                            spec: import("effect/cli/Command").Command<"set", {
                                readonly key: string;
                                readonly value: string;
                                readonly nestedValue: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly key: string;
                                    readonly value: string;
                                    readonly nestedValue: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly start: {
                            name: "start";
                            spec: import("effect/cli/Command").Command<"start", {}, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly status: {
                            name: "status";
                            spec: import("effect/cli/Command").Command<"status", {}, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly stop: {
                            name: "stop";
                            spec: import("effect/cli/Command").Command<"stop", {}, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly unset: {
                            name: "unset";
                            spec: import("effect/cli/Command").Command<"unset", {
                                readonly key: string;
                                readonly name: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly key: string;
                                    readonly name: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                    };
                    aliases: never[];
                }[];
            };
            readonly session: {
                name: "session";
                spec: import("effect/cli/Command").Command<"session", {}, {}, never, never>;
                commands: {
                    readonly delete: {
                        name: "delete";
                        spec: import("effect/cli/Command").Command<"delete", {
                            readonly sessionID: string;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly sessionID: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly export: {
                        name: "export";
                        spec: import("effect/cli/Command").Command<"export", {
                            readonly session: import("effect/Option").Option<string>;
                            readonly sanitize: boolean;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly session: import("effect/Option").Option<string>;
                                readonly sanitize: boolean;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly import: {
                        name: "import";
                        spec: import("effect/cli/Command").Command<"import", {
                            readonly file: string;
                            readonly directory: import("effect/Option").Option<string>;
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly file: string;
                                readonly directory: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                    readonly list: {
                        name: "list";
                        spec: import("effect/cli/Command").Command<"list", {
                            readonly maxCount: import("effect/Option").Option<number>;
                            readonly format: "json" | "table";
                        }, {}, never, never>;
                        commands: {};
                        aliases: {
                            name: string;
                            spec: import("effect/cli/Command").Command<string, {
                                readonly maxCount: import("effect/Option").Option<number>;
                                readonly format: "json" | "table";
                            }, {}, never, never>;
                            commands: {};
                            aliases: never[];
                        }[];
                    };
                };
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {}, {}, never, never>;
                    commands: {
                        readonly delete: {
                            name: "delete";
                            spec: import("effect/cli/Command").Command<"delete", {
                                readonly sessionID: string;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly sessionID: string;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly export: {
                            name: "export";
                            spec: import("effect/cli/Command").Command<"export", {
                                readonly session: import("effect/Option").Option<string>;
                                readonly sanitize: boolean;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly session: import("effect/Option").Option<string>;
                                    readonly sanitize: boolean;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly import: {
                            name: "import";
                            spec: import("effect/cli/Command").Command<"import", {
                                readonly file: string;
                                readonly directory: import("effect/Option").Option<string>;
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly file: string;
                                    readonly directory: import("effect/Option").Option<string>;
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                        readonly list: {
                            name: "list";
                            spec: import("effect/cli/Command").Command<"list", {
                                readonly maxCount: import("effect/Option").Option<number>;
                                readonly format: "json" | "table";
                            }, {}, never, never>;
                            commands: {};
                            aliases: {
                                name: string;
                                spec: import("effect/cli/Command").Command<string, {
                                    readonly maxCount: import("effect/Option").Option<number>;
                                    readonly format: "json" | "table";
                                }, {}, never, never>;
                                commands: {};
                                aliases: never[];
                            }[];
                        };
                    };
                    aliases: never[];
                }[];
            };
            readonly stats: {
                name: "stats";
                spec: import("effect/cli/Command").Command<"stats", {
                    readonly days: import("effect/Option").Option<number>;
                    readonly year: import("effect/Option").Option<number>;
                    readonly all: boolean;
                    readonly project: import("effect/Option").Option<string>;
                    readonly models: boolean;
                    readonly tools: boolean;
                    readonly cost: boolean;
                    readonly full: boolean;
                    readonly limit: number;
                    readonly json: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {
                        readonly days: import("effect/Option").Option<number>;
                        readonly year: import("effect/Option").Option<number>;
                        readonly all: boolean;
                        readonly project: import("effect/Option").Option<string>;
                        readonly models: boolean;
                        readonly tools: boolean;
                        readonly cost: boolean;
                        readonly full: boolean;
                        readonly limit: number;
                        readonly json: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly uninstall: {
                name: "uninstall";
                spec: import("effect/cli/Command").Command<"uninstall", {
                    readonly dryRun: boolean;
                    readonly force: boolean;
                }, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {
                        readonly dryRun: boolean;
                        readonly force: boolean;
                    }, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
            readonly upgrade: {
                name: "upgrade";
                spec: import("effect/cli/Command").Command<"upgrade", {
                    readonly target: import("effect/Option").Option<string>;
                    readonly method: import("effect/Option").Option<"brew" | "bun" | "curl" | "npm" | "pnpm" | "vp" | "winget" | "yarn">;
                }, {}, never, never>;
                commands: {};
                aliases: {
                    name: string;
                    spec: import("effect/cli/Command").Command<string, {
                        readonly target: import("effect/Option").Option<string>;
                        readonly method: import("effect/Option").Option<"brew" | "bun" | "curl" | "npm" | "pnpm" | "vp" | "winget" | "yarn">;
                    }, {}, never, never>;
                    commands: {};
                    aliases: never[];
                }[];
            };
        };
        aliases: never[];
    }[];
};

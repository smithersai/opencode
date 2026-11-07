import { Effect } from "effect";
export * as SessionSkill from "./skill.vibe";
import type { Session } from "@opencode/schema/session";
import { Instance } from "../instance/service.ts";
import { Skill } from "../skill.ts";
import { SkillNotFoundError } from "./error.vibe";
export declare const get: (input: {
    session: Session.Info;
    skill: Skill.ID;
}) => Effect.Effect<import("@opencode/schema/skill").Info, import("../filesystem.ts").DirectoryNotFoundError | SkillNotFoundError, Instance.Service>;

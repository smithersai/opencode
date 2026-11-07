import { SessionSchema } from "./schema.ts";
import type { SessionTable } from "./sql.ts";
export declare function fromRow(row: typeof SessionTable.$inferSelect): SessionSchema.Info;

import { user } from "@/db/schemas/auth-schema";
import { filesMetadata } from "@/db/schemas/files-metadata";
import { tags } from "@/db/schemas/tags";

export type Tag = typeof tags.$inferSelect;

export type FileMetadata = typeof filesMetadata.$inferSelect;

export type User = typeof user.$inferSelect;

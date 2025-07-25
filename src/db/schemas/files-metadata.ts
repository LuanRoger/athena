import { index, integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { uploads } from "./uploads";
import { user } from "./auth-schema";
import { favorites } from "./favorites";
import { timestamps } from "../schema-helpers";
import { filesMetadataToTags } from "./files-metadata-to-tags";

export const filesMetadata = pgTable(
  "files_metadata",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    author: text("author").notNull(),
    uploadId: serial("upload_id")
      .notNull()
      .references(() => uploads.id, { onDelete: "cascade" }),
    favoritesCount: integer("favorites_count").default(0).notNull(),
    createdBy: text("created_by").notNull(),
    ...timestamps,
  },
  (table) => [index("favorites_count_idx").on(table.favoritesCount)],
);

export const fileMetadataRelations = relations(
  filesMetadata,
  ({ one, many }) => ({
    upload: one(uploads, {
      fields: [filesMetadata.uploadId],
      references: [uploads.id],
    }),
    favorites: many(favorites),
    tags: many(filesMetadataToTags),
    createdByUser: one(user, {
      fields: [filesMetadata.createdBy],
      references: [user.id],
    }),
  }),
);

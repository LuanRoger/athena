import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { uploads } from "./upload";
import { tags } from "./tag";
import { user } from "./auth-schema";
import { favorites } from "./favorites";
import { timestamps } from "../schema-helpers";

export const fileMetadata = pgTable("file_metadata", {
  id: serial("id").primaryKey(),
  fileName: text("file_name").notNull(),
  fileSize: text("file_size").notNull(),
  mimeType: text("mime_type").notNull(),
  uploadId: serial("upload_id").notNull(),
  favoritesCount: integer("favorites_count").default(0).notNull(),
  createdBy: text("created_by").notNull(),
  ...timestamps,
});

export const fileMetadataRelations = relations(
  fileMetadata,
  ({ one, many }) => ({
    upload: one(uploads, {
      fields: [fileMetadata.uploadId],
      references: [uploads.id],
    }),
    favorites: many(favorites),
    tags: many(tags),
    createdByUser: one(user, {
      fields: [fileMetadata.createdBy],
      references: [user.id],
    }),
  }),
);

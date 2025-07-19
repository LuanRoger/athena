import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { filesMetadata } from "./files-metadata";
import { relations } from "drizzle-orm";

export const favorites = pgTable("favorites", {
  id: serial("id").primaryKey(),
  fileMetadataId: serial("file_metadata_id").notNull(),
  userId: text("user_id").notNull(),
  createdAt: text("created_at").notNull(),
});

export const favoritesRelations = relations(favorites, ({ one }) => ({
  fileMetadata: one(filesMetadata, {
    fields: [favorites.fileMetadataId],
    references: [filesMetadata.id],
  }),
}));

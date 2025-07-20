import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { filesMetadata } from "./files-metadata";
import { relations } from "drizzle-orm";
import { user } from "./auth-schema";

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
  user: one(user, {
    fields: [favorites.userId],
    references: [user.id],
  }),
}));

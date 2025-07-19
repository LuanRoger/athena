import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { fileMetadata } from "./file-metadata";

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
});

export const tagRelations = relations(tags, ({ many }) => ({
  fileMetadataTags: many(fileMetadata),
}));

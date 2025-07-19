import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { filesMetadata } from "./files-metadata";

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
});

export const tagRelations = relations(tags, ({ many }) => ({
  fileMetadataTags: many(filesMetadata),
}));

import { relations } from "drizzle-orm";
import { index, pgTable, serial, text } from "drizzle-orm/pg-core";
import { filesMetadataToTags } from "./files-metadata-to-tags";

export const tags = pgTable(
  "tags",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    name: text("name").notNull(),
  },
  (table) => [index("slug_idx").on(table.slug)],
);

export const tagRelations = relations(tags, ({ many }) => ({
  fileMetadataTags: many(filesMetadataToTags),
}));

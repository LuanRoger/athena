import { relations } from "drizzle-orm";
import { pgTable, serial } from "drizzle-orm/pg-core";
import { filesMetadata } from "./files-metadata";
import { tags } from "./tags";

export const filesMetadataToTags = pgTable("files_metadata_to_tags", {
  id: serial("id").primaryKey(),
  fileMetadataId: serial("file_metadata_id").notNull(),
  tagId: serial("tag_id").notNull(),
});

export const filesMetadataToTagsRelations = relations(
  filesMetadataToTags,
  ({ one }) => ({
    fileMetadata: one(filesMetadata, {
      fields: [filesMetadataToTags.fileMetadataId],
      references: [filesMetadata.id],
    }),
    tag: one(tags, {
      fields: [filesMetadataToTags.tagId],
      references: [tags.id],
    }),
  }),
);

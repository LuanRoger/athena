import { index, integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { timestamps } from "../schema-helpers";

export const uploads = pgTable(
  "uploads",
  {
    id: serial("id").primaryKey(),
    previewUrl: text("preview_url"),
    downloadUrl: text("download_url").notNull(),
    mimeType: text("mime_type").notNull(),
    fileName: text("file_name").notNull(),
    fileSize: integer("file_size").notNull(),
    ...timestamps,
  },
  (table) => [index("mime_type_idx").on(table.mimeType)],
);

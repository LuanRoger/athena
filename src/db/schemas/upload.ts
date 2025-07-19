import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { timestamps } from "../schema-helpers";

export const uploads = pgTable("uploads", {
  id: serial("id").primaryKey(),
  previewUrl: text("preview_url"),
  downloadUrl: text("download_url").notNull(),
  mimeType: text("mime_type").notNull(),
  fileName: text("file_name").notNull(),
  fileSize: text("file_size").notNull(),
  ...timestamps,
});

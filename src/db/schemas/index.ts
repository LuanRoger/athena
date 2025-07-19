import * as authSchemas from "./auth-schema";
import * as favoritesSchema from "./favorites";
import * as filesMetadataSchema from "./files-metadata";
import * as tagsSchema from "./tags";
import * as uploadsSchema from "./uploads";
import * as filesMetadataToTagsSchema from "./files-metadata-to-tags";

export const schemas = {
  ...authSchemas,
  ...favoritesSchema,
  ...filesMetadataSchema,
  ...tagsSchema,
  ...uploadsSchema,
  ...filesMetadataToTagsSchema,
};

import * as authSchemas from "./auth-schema";
import * as favoritesSchema from "./favorites";
import * as filesMetadataSchema from "./files-metadata";
import * as tagsSchema from "./tags";
import * as uploadsSchema from "./uploads";

export const schemas = {
  ...authSchemas,
  ...favoritesSchema,
  ...filesMetadataSchema,
  ...tagsSchema,
  ...uploadsSchema,
};

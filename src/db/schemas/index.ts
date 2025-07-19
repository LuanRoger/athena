import * as authSchemas from "./auth-schema";
import { favorites } from "./favorites";
import { filesMetadata } from "./files-metadata";
import { tags } from "./tags";
import { uploads } from "./uploads";

export const schemas = {
  ...authSchemas,
  ...favorites,
  ...filesMetadata,
  ...tags,
  ...uploads,
};

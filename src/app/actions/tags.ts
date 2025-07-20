"use server";

import { ActionsMessage } from "@/constants";
import * as DatabaseOperations from "@/db/operations/tags";
import { ActionResult } from "@/models";
import { CreateTag } from "@/models/db-operations";
import { createActionResultFromError } from "@/utils/error";
import { slugify } from "@/utils/slug";

type CreateTagIfNotExistResult = Awaited<
  ReturnType<typeof DatabaseOperations.createTagIfNotExists>
>;
export async function createIfNotExist(
  tag: string,
): Promise<ActionResult<CreateTagIfNotExistResult>> {
  const tagSlug = slugify(tag);
  const tagCreateData: CreateTag = {
    name: tag,
    slug: tagSlug,
  };

  try {
    const createdTag =
      await DatabaseOperations.createTagIfNotExists(tagCreateData);

    return {
      success: true,
      data: createdTag,
      successMessage: ActionsMessage.TAG_CREATED_SUCCESS,
    };
  } catch (error) {
    console.error("Error creating tag:", error);
    return createActionResultFromError<CreateTagIfNotExistResult>(error);
  }
}

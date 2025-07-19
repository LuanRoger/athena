import { db } from "..";
import { CreateTag } from "@/models/db-operations";
import { NoEntityInsertedError } from "@/models/errors";
import { tags } from "../schemas/tags";
import { filesMetadataToTags } from "../schemas/files-metadata-to-tags";

export async function getTagsByFileMetadataId(fileMetadataId: number) {
  const result = await db.query.filesMetadataToTags.findMany({
    where: (filesMetadataToTags, { eq }) =>
      eq(filesMetadataToTags.fileMetadataId, fileMetadataId),
    with: {
      tag: true,
    },
  });
  const tags = result.map((item) => item.tag);

  return tags;
}

export async function createTag(model: CreateTag) {
  const result = await db.insert(tags).values(model).returning();

  if (result.length === 0) {
    throw new NoEntityInsertedError();
  }

  return result[0];
}

export async function createTagIfNotExistsAndRelateWithFileMetadata(
  model: CreateTag,
  fileMetadataId: number,
) {
  const result = await db.transaction(async (tx) => {
    const insertedTags = await tx
      .insert(tags)
      .values(model)
      .onConflictDoNothing({ target: tags.slug })
      .returning();

    if (insertedTags.length === 0) {
      throw new NoEntityInsertedError();
    }
    const insertedTag = insertedTags[0];
    const tagId = insertedTag.id;

    await await tx.insert(filesMetadataToTags).values({
      fileMetadataId,
      tagId,
    });

    return insertedTag;
  });

  return result;
}

import { db } from "..";
import { CreateFileMetadata } from "@/models/db-operations";
import { NoEntityInsertedError } from "@/models/errors";
import { filesMetadata } from "../schemas/files-metadata";
import { filesMetadataToTags } from "../schemas/files-metadata-to-tags";

export async function getUserFiles(userId: string) {
  const result = await db.query.filesMetadata.findMany({
    where: (filesMetadata, { eq }) => eq(filesMetadata.createdBy, userId),
    with: {
      tags: {
        columns: {},
        with: {
          tag: true,
        },
      },
    },
  });

  return result;
}

export async function getFileById(fileId: number) {
  const result = await db.query.filesMetadata.findFirst({
    where: (filesMetadata, { eq }) => eq(filesMetadata.id, fileId),
  });

  if (!result) {
    return null;
  }

  return result;
}

export async function createFileMetadata(model: CreateFileMetadata) {
  const result = await db.transaction(async (tx) => {
    const { tags, ...fileMetadataDataToInsert } = model;
    const insertedFilesMetadata = await tx
      .insert(filesMetadata)
      .values(fileMetadataDataToInsert)
      .returning();

    if (insertedFilesMetadata.length === 0) {
      throw new NoEntityInsertedError();
    }
    const insertedFileMetadata = insertedFilesMetadata[0];

    if (!tags || tags.length === 0) {
      return insertedFileMetadata;
    }

    const tagInsertions = tags.map((tagId) => ({
      fileMetadataId: insertedFileMetadata.id,
      tagId,
    }));
    await tx.insert(filesMetadataToTags).values(tagInsertions);

    return insertedFileMetadata;
  });

  return result;
}

import { db } from "..";
import {
  CreateFileMetadata,
  FileMetadataOrderBy,
} from "@/models/db-operations";
import { NoEntityInsertedError } from "@/models/errors";
import { filesMetadata } from "../schemas/files-metadata";
import { filesMetadataToTags } from "../schemas/files-metadata-to-tags";
import { eq } from "drizzle-orm";
import { favorites } from "../schemas/favorites";
import { uploads } from "../schemas/uploads";

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

export async function getGeneralFiles(
  userId: string,
  hideUserFiles: boolean = true,
  tag?: number,
  titleTerm?: string,
  authorTerm?: string,
  limit?: number,
  orderBy?: FileMetadataOrderBy,
) {
  const fileMetadataToTags =
    tag !== undefined
      ? await db.query.filesMetadataToTags.findMany({
          where: (filesMetadataToTags, { eq }) =>
            eq(filesMetadataToTags.tagId, tag),
          columns: {
            fileMetadataId: true,
          },
        })
      : [];
  const fileIds = fileMetadataToTags.map((item) => item.fileMetadataId);

  const result = await db.query.filesMetadata.findMany({
    where: (filesMetadata, { eq, inArray, and, like, or }) => {
      const andCondition = [];
      if (hideUserFiles) {
        andCondition.push(eq(filesMetadata.createdBy, userId));
      }
      if (fileIds.length > 0) {
        andCondition.push(inArray(filesMetadata.id, fileIds));
      }

      const searchConditions = [];
      if (titleTerm) {
        searchConditions.push(like(filesMetadata.title, `%${titleTerm}%`));
      }
      if (authorTerm) {
        searchConditions.push(like(filesMetadata.author, `%${authorTerm}%`));
      }
      return and(...andCondition, or(...searchConditions));
    },
    limit: limit,
    orderBy: orderBy
      ? (filesMetadata, { desc }) => {
          switch (orderBy) {
            case "createdAt":
              return desc(filesMetadata.createdAt);
            case "favoritesCount":
              return desc(filesMetadata.favoritesCount);
            default:
              return desc(filesMetadata.createdAt);
          }
        }
      : undefined,
    with: {
      tags: {
        columns: {},
        with: {
          tag: true,
        },
      },
      createdByUser: true,
    },
  });

  return result;
}

export async function getTagFiles(
  tagId: number,
  userId: string,
  hideUserFiles: boolean = true,
) {
  const fileMetadataTagRelationResult =
    await db.query.filesMetadataToTags.findMany({
      where: (filesMetadataToTags, { eq }) =>
        eq(filesMetadataToTags.tagId, tagId),
      columns: {
        fileMetadataId: true,
      },
    });
  const fileIds = fileMetadataTagRelationResult.map(
    (item) => item.fileMetadataId,
  );

  const filesMetadataResult = await db.query.filesMetadata.findMany({
    where: (filesMetadata, { eq, and, inArray }) => {
      const conditions = [inArray(filesMetadata.id, fileIds)];
      if (hideUserFiles) {
        conditions.push(eq(filesMetadata.createdBy, userId));
      }
      return and(...conditions);
    },
    with: {
      tags: {
        columns: {},
        with: {
          tag: true,
        },
      },
    },
  });

  return filesMetadataResult;
}

export async function getFileById(fileId: number) {
  const result = await db.query.filesMetadata.findFirst({
    where: (filesMetadata, { eq }) => eq(filesMetadata.id, fileId),
    with: {
      upload: true,
    },
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

export async function deleteFileMetadata(id: number) {
  const result = await db.transaction(async (tx) => {
    const deletedFileMetadataResult = await tx
      .delete(filesMetadata)
      .where(eq(filesMetadata.id, id))
      .returning();

    if (deletedFileMetadataResult.length === 0) {
      throw new NoEntityInsertedError();
    }
    const deletedFileMetadata = deletedFileMetadataResult[0];

    await tx
      .delete(filesMetadataToTags)
      .where(eq(filesMetadataToTags.fileMetadataId, id));

    await tx.delete(favorites).where(eq(favorites.fileMetadataId, id));

    await tx
      .delete(uploads)
      .where(eq(uploads.id, deletedFileMetadata.uploadId));

    return deletedFileMetadata;
  });

  return result;
}

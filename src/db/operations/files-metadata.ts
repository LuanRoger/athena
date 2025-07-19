import { CreateFileMetadata } from "@/models/db-operations/files-metadata";
import { db } from "..";
import { NoEntityInsertedError } from "@/models/errors";
import { filesMetadata } from "../schemas/files-metadata";

export async function getUserFiles(userId: string) {
  const result = await db.query.filesMetadata.findMany({
    where: (filesMetadata, { eq }) => eq(filesMetadata.createdBy, userId),
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
  const result = await db.insert(filesMetadata).values(model).returning();

  if (result.length === 0) {
    throw new NoEntityInsertedError();
  }

  return result[0];
}

import { db } from "..";
import { CreateUpload } from "@/models/db-operations";
import { uploads } from "../schemas/uploads";
import { NoEntityInsertedError } from "@/models/errors";
import { eq } from "drizzle-orm";

export async function createUpload(model: CreateUpload) {
  const result = await db.insert(uploads).values(model).returning();
  if (result.length === 0) {
    throw new NoEntityInsertedError();
  }

  return result[0];
}

export async function deleteUpload(id: number) {
  return await db.delete(uploads).where(eq(uploads.id, id)).returning();
}

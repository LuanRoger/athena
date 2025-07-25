"use server";

import { CreateUpload } from "@/models/db-operations";
import * as DatabaseOperations from "@/db/operations";

export async function createUpload(model: CreateUpload) {
  return await DatabaseOperations.createUpload(model);
}

export async function deleteUpload(id: number) {
  return await DatabaseOperations.deleteUpload(id);
}

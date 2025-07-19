"use server";

import { ActionsMessage } from "@/constants";
import { uploadFile } from "./storage";
import {
  createActionResultFromError,
  passThroughActionResultError,
} from "@/utils/error";
import { getUser } from "./auth";
import { UnauthorizedActionResult } from "@/models/common-action-results";
import { CreateFileMetadata } from "@/models/db-operations";
import { createFileMetadata } from "@/db/operations";
import { EmptyResult } from "@/models";

export async function createFileMetadataFromForm(
  _: unknown,
  formData: FormData,
): Promise<EmptyResult> {
  const user = await getUser();
  if (!user) {
    return UnauthorizedActionResult;
  }

  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const file = formData.get("file") as File;

  if (!title || !author || !file) {
    return {
      success: false,
      error: ActionsMessage.ALL_FIELDS_REQUIRED,
      data: null,
    };
  }

  const uploadResult = await uploadFile(file);
  if (!uploadResult.success) {
    passThroughActionResultError(uploadResult);
  }
  const { id: uploadId } = uploadResult.data!;

  const fileMetadata: CreateFileMetadata = {
    title,
    author,
    uploadId,
    createdBy: user.id,
  };
  try {
    await createFileMetadata(fileMetadata);
    return {
      success: true,
      data: null,
    };
  } catch (error) {
    return createActionResultFromError(error);
  }
}

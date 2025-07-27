"use server";

import { ActionsMessage } from "@/constants";
import { deleteFile, getFileUrl, uploadFile } from "./storage";
import {
  createActionResultFromError,
  passThroughActionResultError,
} from "@/utils/error";
import { getUser } from "./auth";
import { UnauthorizedActionResult } from "@/models/common-action-results";
import {
  CreateFileMetadata,
  FileMetadataOrderBy,
} from "@/models/db-operations";
import * as DatabaseOperations from "@/db/operations";
import { ActionResult, EmptyResult } from "@/models";
import { revalidatePath } from "next/cache";

type GetUserFilesResult = Awaited<
  ReturnType<typeof DatabaseOperations.getUserFiles>
> | null;
export async function getUserFiles(): Promise<
  ActionResult<GetUserFilesResult>
> {
  const user = await getUser();
  if (!user) {
    return UnauthorizedActionResult;
  }

  const userFiles = await DatabaseOperations.getUserFiles(user.id);
  return {
    success: true,
    data: userFiles,
  };
}

export async function getGeneralFiles(
  tags?: number,
  titleTerm?: string,
  authorTerm?: string,
  limit?: number,
  orderBy?: FileMetadataOrderBy,
) {
  const user = await getUser();
  if (!user) {
    return UnauthorizedActionResult;
  }

  const dashboardFiles = await DatabaseOperations.getGeneralFiles(
    user.id,
    false,
    tags,
    titleTerm,
    authorTerm,
    limit,
    orderBy,
  );
  return {
    success: true,
    data: dashboardFiles,
  };
}

export async function getFileMetadataPreviewUrl(
  fileId: number,
): Promise<ActionResult<string | null>> {
  const user = await getUser();
  if (!user) {
    return UnauthorizedActionResult;
  }

  const fileMetadata = await DatabaseOperations.getFileById(fileId);
  if (!fileMetadata) {
    return {
      success: false,
      error: ActionsMessage.FILE_METADATA_NOT_FOUND,
      data: null,
    };
  }
  const fileUploadName = fileMetadata.upload.fileName;
  const fileUrlResult = await getFileUrl(fileUploadName);
  if (!fileUrlResult.success) {
    return {
      success: false,
      error: ActionsMessage.FILE_METADATA_PREVIEW_URL_NOT_FOUND,
      data: null,
    };
  }

  return {
    success: true,
    data: fileUrlResult.data,
  };
}

export async function createFileMetadataFromForm(
  formData: FormData,
  tagsId: number[],
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
    tags: tagsId,
  };

  try {
    await DatabaseOperations.createFileMetadata(fileMetadata);
  } catch (error) {
    return createActionResultFromError(error);
  }

  revalidatePath("/dashboard");
  return {
    success: true,
    data: null,
  };
}

export async function deleteFileMetadata(fileId: number): Promise<EmptyResult> {
  const user = await getUser();
  if (!user) {
    return UnauthorizedActionResult;
  }

  const fileMetadata = await DatabaseOperations.getFileById(fileId);
  if (!fileMetadata) {
    return {
      success: false,
      error: ActionsMessage.FILE_METADATA_NOT_FOUND,
      data: null,
    };
  }

  try {
    const fileUploadName = fileMetadata.upload.fileName;
    await deleteFile(fileUploadName);
  } catch (error) {
    return createActionResultFromError(error);
  }

  try {
    await DatabaseOperations.deleteFileMetadata(fileId);
  } catch (error) {
    return createActionResultFromError(error);
  }

  revalidatePath("/dashboard");
  return {
    success: true,
    data: null,
    successMessage: ActionsMessage.FILE_METADATA_DELETED_SUCCESS,
  };
}

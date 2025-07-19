"use server";

import { DEFAULT_BUCKET_NAME } from "@/constants";
import { createUpload } from "@/app/actions/uploads";
import { ActionResult } from "@/models";
import { CreateUpload } from "@/models/db-operations";
import { minioClient } from "@/services/storage";
import { createActionResultFromError } from "@/utils/error";

type UploadFileResult = Awaited<ReturnType<typeof createUpload>>;
interface FileUploadReslt {
  fileName: string;
  fileSize: number;
  mimeType: string;
}

export async function uploadFile(
  file: File,
  storeInUploads?: true,
): Promise<ActionResult<UploadFileResult>>;
export async function uploadFile(
  file: File,
  storeInUploads: false,
): Promise<ActionResult<FileUploadReslt>>;
export async function uploadFile(
  file: File,
  storeInUploads = true,
): Promise<ActionResult<FileUploadReslt | UploadFileResult>> {
  const bucketName = DEFAULT_BUCKET_NAME;
  await createBucketIfNotExists();

  const fileName = `${Date.now()}-${file.name}`;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileType = file.type || "application/octet-stream";
  const metadata = {
    "Content-Type": fileType,
  };
  const uploadData: CreateUpload = {
    fileName,
    fileSize: buffer.length,
    mimeType: fileType,
  };

  try {
    await minioClient.putObject(
      bucketName,
      fileName,
      buffer,
      buffer.length,
      metadata,
    );
  } catch (error) {
    return createActionResultFromError<FileUploadReslt>(error);
  }

  if (!storeInUploads) {
    return {
      success: true,
      data: {
        ...uploadData,
      },
    };
  }

  let uploadResult;
  try {
    uploadResult = await createUpload(uploadData);
  } catch (error) {
    return createActionResultFromError<UploadFileResult>(error);
  }

  return {
    success: true,
    data: uploadResult,
  };
}

export async function createBucketIfNotExists() {
  const bucketExists = await minioClient.bucketExists(DEFAULT_BUCKET_NAME);
  if (!bucketExists) {
    await minioClient.makeBucket(DEFAULT_BUCKET_NAME);
  }
}

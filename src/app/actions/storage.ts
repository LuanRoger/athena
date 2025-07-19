"use server";

import { ActionsMessage, DEFAULT_BUCKET_NAME } from "@/constants";
import { createUpload } from "@/db/operations";
import { ActionResult } from "@/models";
import { CreateUpload } from "@/models/db-operations";
import { minioClient } from "@/services/storage";

type UploadFileResult = Awaited<ReturnType<typeof createUpload>>;
export async function uploadFileFromForm(
  _: unknown,
  formData: FormData,
): Promise<ActionResult<UploadFileResult>> {
  const file = formData.get("file") as File;

  if (!file) {
    return {
      success: false,
      error: "File is required",
      data: null,
    };
  }

  const bucketName = DEFAULT_BUCKET_NAME;
  await createBucketIfNotExists();

  const fileName = `${Date.now()}-${file.name}`;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileType = file.type || "application/octet-stream";
  const metadata = {
    "Content-Type": fileType,
  };
  await minioClient.putObject(
    bucketName,
    fileName,
    buffer,
    buffer.length,
    metadata,
  );

  let uploadResult;
  try {
    const uploadData: CreateUpload = {
      fileName,
      fileSize: buffer.length,
      mimeType: fileType,
    };
    uploadResult = await createUpload(uploadData);
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : ActionsMessage.GENERIC_ERROR,
      data: null,
    };
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

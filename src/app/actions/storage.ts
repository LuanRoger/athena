"use server";

import { DEFAULT_BUCKET_NAME } from "@/constants";
import { EmptyResult } from "@/models";
import { minioClient } from "@/services/storage";

export async function uploadFileFromForm(
  prevState: EmptyResult,
  formData: FormData,
): Promise<EmptyResult> {
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
  const metadata = {
    "Content-Type": file.type || "application/octet-stream",
  };
  await minioClient.putObject(
    bucketName,
    fileName,
    buffer,
    buffer.length,
    metadata,
  );

  return {
    success: true,
    data: null,
  };
}

export async function createBucketIfNotExists(): Promise<void> {
  const bucketExists = await minioClient.bucketExists(DEFAULT_BUCKET_NAME);
  if (!bucketExists) {
    await minioClient.makeBucket(DEFAULT_BUCKET_NAME);
  }
}

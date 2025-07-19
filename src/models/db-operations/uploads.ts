export interface CreateUpload {
  downloadUrl: string;
  previewUrl?: string;
  mimeType: string;
  fileName: string;
  fileSize: number;
}

export interface CreateFileMetadata {
  title: string;
  author: string;
  uploadId: number;
  createdBy: string;
  tags?: number[];
}

export type FileMetadataOrderBy = "createdAt" | "favoritesCount";

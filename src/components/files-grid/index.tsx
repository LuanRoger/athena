import { FileMetadata, Tag, User } from "@/models";
import FileGridItem from "./item";

interface FilesGridProps {
  files: {
    file: FileMetadata;
    tags: Tag[];
    createdBy: User;
    isFavorited?: boolean;
  }[];
}

export default function FilesGrid({ files }: FilesGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {files.map((file) => (
        <FileGridItem
          key={`files-grid-item-${file.file.id}`}
          file={file.file}
          tags={file.tags}
          createdBy={file.createdBy}
          isFavorited={file.isFavorited}
        />
      ))}
    </div>
  );
}

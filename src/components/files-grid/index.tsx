import { FileMetadata, Tag, User } from "@/models";
import FileGridItem from "./item";
import { cn } from "@/utils/tailwind";

interface FilesGridProps {
  files: {
    file: FileMetadata;
    tags: Tag[];
    createdBy: User;
    isFavorited?: boolean;
  }[];
  className?: string;
}

export default function FilesGrid({ files, className }: FilesGridProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
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

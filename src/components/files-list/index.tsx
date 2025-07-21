import { FileMetadata, Tag } from "@/models";
import UserFileItems from "./item";

interface FilesListProps {
  files: { file: FileMetadata; tags: Tag[] }[];
}

export default function FilesList({ files }: FilesListProps) {
  return (
    <ul className="flex w-full flex-col gap-4">
      {files.map((file) => (
        <UserFileItems
          key={`user-files-item-${file.file.id}`}
          data={file.file}
          tags={file.tags}
        />
      ))}
    </ul>
  );
}

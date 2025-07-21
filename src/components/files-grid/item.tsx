import { FileMetadata, Tag, User } from "@/models";
import TagsList from "../tags-list";

interface FileGridItemProps {
  file: FileMetadata;
  tags: Tag[];
  createdBy: User;
}

export default function FileGridItem({
  file,
  tags,
  createdBy,
}: FileGridItemProps) {
  const sendDate = new Date(file.createdAt).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body flex flex-col gap-2">
        <TagsList tags={tags} />
        <h3 className="card-title">{file.title}</h3>
        <p>{file.author}</p>
        <div className="flex flex-row gap-2">
          <span>
            <p>Enviado por:</p>
            <strong>{createdBy.name}</strong>
          </span>
          <span>
            <p>Enviado em:</p>
            <strong>{sendDate}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

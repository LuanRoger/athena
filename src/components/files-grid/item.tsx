import { FileMetadata, Tag, User } from "@/models";
import TagsList from "../tags-list";
import FileFavoriteButton from "../file-favorite-button";

interface FileGridItemProps {
  file: FileMetadata;
  tags: Tag[];
  createdBy: User;
  isFavorited?: boolean;
}

export default function FileGridItem({
  file,
  tags,
  createdBy,
  isFavorited = false,
}: FileGridItemProps) {
  const sendDate = new Date(file.createdAt).toLocaleDateString();

  return (
    <div className="card bg-base-100 max-h-80 w-52 shadow-xl">
      <div className="card-body flex flex-col gap-2">
        <FileFavoriteButton fileId={file.id} isFavorited={isFavorited} />
        <TagsList tags={tags} />
        <h3 className="card-title line-clamp-2 text-ellipsis">{file.title}</h3>
        <p className="line-clamp-2 text-ellipsis">{file.author}</p>
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

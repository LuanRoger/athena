import { FileMetadata, Tag, User } from "@/models";
import TagsList from "../tags-list";
import FileFavoriteButton from "../file-favorite-button";
import FileGridItemMenu from "./item-menu";

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
  const { id, title, author, createdAt } = file;
  const { name } = createdBy;
  const sendDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="card bg-base-100 h-90 w-full shadow-xl md:w-63">
      <div className="card-body flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <FileFavoriteButton fileId={id} isFavorited={isFavorited} />
          <FileGridItemMenu fileId={id} />
        </div>
        <TagsList tags={tags} />
        <h3 className="card-title line-clamp-2 text-ellipsis">{title}</h3>
        <p className="line-clamp-2 text-ellipsis">{author}</p>
        <div className="flex flex-row gap-2">
          <span>
            <p>Enviado por:</p>
            <strong>{name}</strong>
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

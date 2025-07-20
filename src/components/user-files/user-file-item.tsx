import { FileMetadata, Tag } from "@/models";
import { formatDate } from "@/utils/format";
import TagBadge from "../tag-badge";
import DeleteFileMetadataButton from "../delete-file-metadata-button";
import PreviewFileButton from "../preview-file-button";

interface UserFileItemProps {
  data: FileMetadata;
  tags: Tag[];
}

export default function UserFileItems({ data, tags }: UserFileItemProps) {
  const { id, title, author, createdAt } = data;
  const formattedDate = formatDate(createdAt);

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Autor: {author}</p>
        <p>Criado em: {formattedDate}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagBadge key={`user-file-item-tag-${tag.id}`} data={tag} />
          ))}
        </div>
        <div className="card-actions justify-end">
          <PreviewFileButton id={id} />
          <DeleteFileMetadataButton id={id} />
        </div>
      </div>
    </div>
  );
}

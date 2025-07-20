"use client";

import { FileMetadata, Tag } from "@/models";
import { formatDate } from "@/utils/format";
import TagBadge from "../tag-badge";
import { deleteFileMetadata } from "@/app/actions/files-metadata";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";
import { showToastByActionResult } from "@/utils/toast";

interface UserFileItemProps {
  data: FileMetadata;
  tags: Tag[];
}

export default function UserFileItems({ data, tags }: UserFileItemProps) {
  const { id, title, author, createdAt } = data;
  const formattedDate = formatDate(createdAt);
  const [isPending, startAction] = useTransition();

  function handleDelete() {
    startAction(async () => {
      const result = await deleteFileMetadata(id);
      showToastByActionResult(result);
    });
  }

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Autor: {author}</p>
        <p>Criado em: {formattedDate}</p>
        <div className="card-actions">
          {tags.map((tag) => (
            <TagBadge key={`user-file-item-tag-${tag.id}`} data={tag} />
          ))}
        </div>
        <button
          className="btn btn-error btn-circle self-end"
          onClick={handleDelete}
          disabled={isPending}
        >
          <Trash2Icon className="stroke-error-content" />
        </button>
      </div>
    </div>
  );
}

import { EllipsisIcon, BookOpenIcon, TrashIcon, EditIcon } from "lucide-react";
import PreviewFileButton from "../preview-file-button";
import { getSession } from "@/app/actions/auth";

interface FileGridItemMenuProps {
  fileId: number;
  createdByUserId: string;
}

export default async function FileGridItemMenu({
  fileId,
  createdByUserId,
}: FileGridItemMenuProps) {
  const currentUser = await getSession();
  const isOwner = currentUser?.user.id === createdByUserId;

  return (
    <details className="dropdown">
      <summary className="btn btn-circle btn-ghost m-1">
        <EllipsisIcon />
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <PreviewFileButton id={fileId}>
          <li>
            <p>
              <BookOpenIcon /> Abrir
            </p>
          </li>
        </PreviewFileButton>
        {isOwner && (
          <>
            <li>
              <button className="flex w-full items-center gap-2">
                <EditIcon />
                <p>Editar</p>
              </button>
            </li>
            <li>
              <button className="text-error flex w-full items-center gap-2">
                <TrashIcon />
                <p>Apagar</p>
              </button>
            </li>
          </>
        )}
      </ul>
    </details>
  );
}

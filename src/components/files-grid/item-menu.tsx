import { EllipsisIcon } from "lucide-react";
import PreviewFileButton from "../preview-file-button";

interface FileGridItemMenuProps {
  fileId: number;
}

export default function FileGridItemMenu({ fileId }: FileGridItemMenuProps) {
  return (
    <details className="dropdown">
      <summary className="btn btn-circle btn-ghost m-1">
        <EllipsisIcon />
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <PreviewFileButton id={fileId}>
          <li>Abrir</li>
        </PreviewFileButton>
      </ul>
    </details>
  );
}

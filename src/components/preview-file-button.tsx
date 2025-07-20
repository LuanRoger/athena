import { getFileMetadataPreviewUrl } from "@/app/actions/files-metadata";
import { cn } from "@/utils/tailwind";
import Link from "next/link";

interface PreviewFileButtonProps {
  id: number;
  className?: string;
}

export default async function PreviewFileButton({
  id,
  className,
}: PreviewFileButtonProps) {
  const { success, data } = await getFileMetadataPreviewUrl(id);
  const disabled = !success || !data;
  if (disabled) {
    return (
      <button className="btn btn-link" type="button" disabled>
        Visualizar
      </button>
    );
  }

  return (
    <button className={cn("btn btn-primary", className)} type="button">
      <Link href={data} target="_blank">
        Visualizar
      </Link>
    </button>
  );
}

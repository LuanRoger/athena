import { getFileMetadataPreviewUrl } from "@/app/actions/files-metadata";
import { cn } from "@/utils/tailwind";
import Link from "next/link";

interface PreviewFileButtonProps {
  id: number;
  className?: string;
  children?: React.ReactNode;
}

export default async function PreviewFileButton({
  id,
  className,
  children,
}: PreviewFileButtonProps) {
  const { success, data } = await getFileMetadataPreviewUrl(id);
  const disabled = !success || !data;

  const child = children ? (
    children
  ) : (
    <button className={cn("btn btn-primary", className)}>Visualizar</button>
  );

  if (disabled) {
    return child;
  }

  return (
    <Link href={data} target="_blank">
      {child}
    </Link>
  );
}

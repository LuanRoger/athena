import { Suspense } from "react";
import GeneralFilesGridServer from "./server";
import FilesGridLoading from "./loading";

interface GeneralFilesGridProps {
  tag?: number;
  titleTerm?: string;
  authorTerm?: string;
  limit?: number;
  className?: string;
}

export default function GeneralFilesGrid({
  tag,
  titleTerm,
  authorTerm,
  limit,
  className,
}: GeneralFilesGridProps) {
  return (
    <Suspense fallback={<FilesGridLoading />}>
      <GeneralFilesGridServer
        tag={tag}
        titleTerm={titleTerm}
        authorTerm={authorTerm}
        limit={limit}
        className={className}
      />
    </Suspense>
  );
}

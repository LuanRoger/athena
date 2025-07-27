import { Suspense } from "react";
import GeneralFilesGridServer from "./server";
import FilesGridLoading from "./loading";
import { FileMetadataOrderBy } from "@/models";

interface GeneralFilesGridProps {
  tag?: number;
  titleTerm?: string;
  authorTerm?: string;
  limit?: number;
  orderBy?: FileMetadataOrderBy;
  className?: string;
}

export default function GeneralFilesGrid({
  tag,
  titleTerm,
  authorTerm,
  limit,
  orderBy,
  className,
}: GeneralFilesGridProps) {
  return (
    <Suspense fallback={<FilesGridLoading />}>
      <GeneralFilesGridServer
        tag={tag}
        titleTerm={titleTerm}
        authorTerm={authorTerm}
        limit={limit}
        orderBy={orderBy}
        className={className}
      />
    </Suspense>
  );
}

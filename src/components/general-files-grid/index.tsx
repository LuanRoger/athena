import { Suspense } from "react";
import GeneralFilesGridServer from "./server";
import FilesGridLoading from "./loading";

interface GeneralFilesGridProps {
  tag?: number;
  titleTerm?: string;
  authorTerm?: string;
}

export default function GeneralFilesGrid({
  tag,
  titleTerm,
  authorTerm,
}: GeneralFilesGridProps) {
  return (
    <Suspense fallback={<FilesGridLoading />}>
      <GeneralFilesGridServer
        tag={tag}
        titleTerm={titleTerm}
        authorTerm={authorTerm}
      />
    </Suspense>
  );
}

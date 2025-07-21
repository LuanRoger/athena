import { Suspense } from "react";
import GeneralFilesGridServer from "./server";
import FilesGridLoading from "./loading";

export default function GeneralFilesGrid() {
  return (
    <Suspense fallback={<FilesGridLoading />}>
      <GeneralFilesGridServer />
    </Suspense>
  );
}

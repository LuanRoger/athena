import { Suspense } from "react";
import GeneralFilesGridServer from "./server";

export default function GeneralFilesGrid() {
  return (
    <Suspense>
      <GeneralFilesGridServer />
    </Suspense>
  );
}

import { Suspense } from "react";
import FilesListLoading from "../files-list/loading";
import UserFilesServer from "./server";

export default function UserFiles() {
  return (
    <Suspense fallback={<FilesListLoading />}>
      <UserFilesServer />
    </Suspense>
  );
}

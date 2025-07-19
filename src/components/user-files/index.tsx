import { Suspense } from "react";
import UserFilesLoading from "./loading";
import UserFilesServer from "./server";

export default function UserFiles() {
  return (
    <Suspense fallback={<UserFilesLoading />}>
      <UserFilesServer />
    </Suspense>
  );
}

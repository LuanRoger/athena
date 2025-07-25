import { Suspense } from "react";
import FilesListLoading from "../files-list/loading";
import { UserFavoritesServer } from "./server";

export default function UserFavorites() {
  return (
    <Suspense fallback={<FilesListLoading />}>
      <UserFavoritesServer />
    </Suspense>
  );
}

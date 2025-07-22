import { getGeneralFiles } from "@/app/actions/files-metadata";
import FilesGrid from "../files-grid";
import { isFavoritedByUser } from "@/app/actions/favorites";

export default async function GeneralFilesGridServer() {
  const { success, data } = await getGeneralFiles();
  if (!success && !data) {
    return <p>Error loading files.</p>;
  }

  const files = data!.map(async (file) => {
    const { tags, createdByUser, ...restFile } = file;
    const isFavoritedResult = await isFavoritedByUser(file.id);
    const isFavorited =
      isFavoritedResult.success && isFavoritedResult.data !== null
        ? isFavoritedResult.data
        : undefined;

    return {
      file: restFile,
      tags: tags.flatMap((tag) => tag.tag),
      createdBy: createdByUser,
      isFavorited,
    };
  });

  return <FilesGrid files={await Promise.all(files)} />;
}

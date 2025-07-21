import { getGeneralFiles } from "@/app/actions/files-metadata";
import FilesGrid from "../files-grid";

export default async function GeneralFilesGridServer() {
  const { success, data } = await getGeneralFiles();
  if (!success && !data) {
    return <p>Error loading files.</p>;
  }

  return (
    <FilesGrid
      files={data!.map((file) => {
        const { tags, createdByUser, ...restFile } = file;

        return {
          file: restFile,
          tags: tags.flatMap((tag) => tag.tag),
          createdBy: createdByUser,
        };
      })}
    />
  );
}

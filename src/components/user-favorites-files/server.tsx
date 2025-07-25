import { getFavoritedFilesByUserId } from "@/app/actions/favorites";
import FilesList from "../files-list";

export async function UserFavoritesServer() {
  const { data: favoritedFiles, success } = await getFavoritedFilesByUserId();
  if (!favoritedFiles || favoritedFiles.length === 0 || !success) {
    return <p className="text-info-content">Nenhum favorito encontrado</p>;
  }

  const flattenFiles = favoritedFiles!.map((file) => {
    const { tags, ...fileWithoutTags } = file;

    return {
      file: fileWithoutTags,
      tags: tags.flatMap((tag) => tag.tag),
    };
  });
  return <FilesList files={flattenFiles} />;
}

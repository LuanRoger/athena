import { getUserFiles } from "@/app/actions/files-metadata";
import FilesList from "../files-list";

export default async function UserFilesServer() {
  const { success, data } = await getUserFiles();
  if (!success || !data || data.length === 0) {
    return <p className="text-info-content">Nenhum arquivo encontrado</p>;
  }

  const files = data!.map((file) => ({
    file,
    tags: file.tags.flatMap((tag) => tag.tag),
  }));
  return <FilesList files={files} />;
}

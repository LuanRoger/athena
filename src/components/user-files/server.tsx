import { getUserFiles } from "@/app/actions/files-metadata";
import FilesList from "../files-list";

export default async function UserFilesServer() {
  const { success, data } = await getUserFiles();
  if (!success || !data) {
    return (
      <div className="text-error-content text-center">Ocorreu um erro.</div>
    );
  }

  const files = data!.map((file) => ({
    file,
    tags: file.tags.flatMap((tag) => tag.tag),
  }));
  return <FilesList files={files} />;
}

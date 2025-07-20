import { getUserFiles } from "@/app/actions/files-metadata";
import UserFileItems from "./user-file-item";

export default async function UserFilesServer() {
  const { success, data } = await getUserFiles();
  if (!success || !data) {
    return (
      <div className="text-error-content text-center">Ocorreu um erro.</div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {data.map((file) => (
        <UserFileItems
          key={`user-files-item-${file.id}`}
          data={file}
          tags={file.tags.flatMap((tag) => tag.tag)}
        />
      ))}
    </div>
  );
}

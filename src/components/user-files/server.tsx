import { getUserFiles } from "@/app/actions/files-metadata";
import UserFileItems from "./user-file-item";

export default async function UserFilesServer() {
  const { success, data } = await getUserFiles();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (!success || !data) {
    return (
      <div className="text-error-content text-center">Ocorreu um erro.</div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {data.map((file) => (
        <UserFileItems
          key={file.id}
          title={file.title}
          author={file.author}
          createdAt={file.createdAt}
        />
      ))}
    </div>
  );
}

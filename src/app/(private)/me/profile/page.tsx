import UserFavorites from "@/components/user-favorites-files";
import UserFiles from "@/components/user-files";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-y-36 p-4">
      <div>
        <h2 className="text-2xl font-bold">Uploads</h2>
        <UserFiles />
      </div>
      <div>
        <h2 className="text-2xl font-bold">Favoritos</h2>
        <UserFavorites />
      </div>
    </main>
  );
}

import { getUser } from "@/app/actions/auth";
import NewFileForm from "@/components/new-file-form";
import SignOutButton from "@/components/sign-out-button";
import UserFavorites from "@/components/user-favorites-files";
import UserFiles from "@/components/user-files";
import Link from "next/link";

export default async function Page() {
  const currentUser = await getUser();

  const { name, email } = currentUser!;
  return (
    <main className="flex flex-col items-start gap-4 py-4">
      <h1>{name}</h1>
      <p>{email}</p>
      <SignOutButton />
      <NewFileForm />
      <Link href="/dashboard/all">
        <button className="btn btn-link">Ver de todos</button>
      </Link>
      <UserFiles />
      <h2 className="text-lg font-semibold">Favoritos</h2>
      <UserFavorites />
    </main>
  );
}

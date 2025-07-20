import { getUser } from "@/app/actions/auth";
import NewFileForm from "@/components/new-file-form";
import SignOutButton from "@/components/sign-out-button";
import UserFiles from "@/components/user-files";

export default async function Page() {
  const currentUser = await getUser();

  const { name, email } = currentUser!;
  return (
    <main className="flex flex-col items-start gap-4 p-4">
      <h1>{name}</h1>
      <p>{email}</p>
      <SignOutButton />
      <NewFileForm />
      <UserFiles />
    </main>
  );
}

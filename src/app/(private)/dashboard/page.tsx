import { getUser } from "@/app/actions/auth";
import SignOutButton from "@/components/sign-out-button";
import { redirect } from "next/navigation";

export default async function Page() {
  const currentUser = await getUser();

  if (!currentUser) {
    redirect("/dashboard");
  }

  const { name, email } = currentUser;
  return (
    <main className="flex flex-col items-start">
      <h1>{name}</h1>
      <p>{email}</p>
      <SignOutButton />
    </main>
  );
}

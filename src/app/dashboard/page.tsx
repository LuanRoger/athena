import { redirect } from "next/navigation";
import { getUser } from "../actions/auth";
import SignOutButton from "@/components/sign-out-button";

export default async function Page() {
  const currentUser = await getUser();

  if (!currentUser) {
    redirect("/login");
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

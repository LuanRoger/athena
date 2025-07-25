import { ReactNode } from "react";
import { getSession } from "../actions/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }

  return children;
}

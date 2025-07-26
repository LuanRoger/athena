import { ReactNode } from "react";
import { getSession } from "../actions/auth";
import { redirect } from "next/navigation";
import Header from "@/components/header/header";

export default async function Layout({ children }: { children: ReactNode }) {
  const currentUser = await getSession();

  if (!currentUser) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col px-4 sm:px-16">{children}</div>
    </div>
  );
}

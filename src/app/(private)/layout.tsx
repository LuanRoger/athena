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
      {children}
    </div>
  );
}

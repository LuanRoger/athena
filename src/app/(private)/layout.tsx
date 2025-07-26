import { ReactNode } from "react";
import { getSession } from "../actions/auth";
import { redirect } from "next/navigation";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default async function Layout({ children }: { children: ReactNode }) {
  const currentUser = await getSession();

  if (!currentUser) {
    redirect("/login");
  }

  return (
    <div className="bg-base-200 flex flex-col">
      <Header />
      <div className="flex flex-col px-4 sm:px-16">{children}</div>
      <Footer />
    </div>
  );
}

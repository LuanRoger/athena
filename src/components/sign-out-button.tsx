"use client";

import { signOut } from "@/app/actions/auth";
import { useState } from "react";
import LoadingSpinIcon from "./icons/loading-spin-icon";

export default function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function signOutHandler() {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
  }

  return (
    <button
      className="btn btn-primary"
      disabled={isLoading}
      onClick={signOutHandler}
    >
      {isLoading ? <LoadingSpinIcon /> : `Sair`}
    </button>
  );
}

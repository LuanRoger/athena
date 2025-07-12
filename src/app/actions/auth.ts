"use server";

import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

export async function signUp(
  username: string,
  email: string,
  password: string,
) {
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name: username,
    },
  });

  if (!result.token) {
    throw Error("Failed to sign up");
  }

  redirect("/dashboard");
}

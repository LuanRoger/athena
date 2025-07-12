"use server";

import { auth } from "@/utils/auth";
import { headers } from "next/headers";
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

export async function signOut() {
  const nextHeaders = await headers();
  const result = await auth.api.signOut({
    headers: nextHeaders,
  });

  if (!result.success) {
    throw Error("Failed to sign out");
  }

  redirect("/login");
}

export async function getSession() {
  const nextHeaders = await headers();
  const session = await auth.api.getSession({
    headers: nextHeaders,
  });

  return session;
}

export async function getUser() {
  const session = await getSession();

  return session?.user || null;
}

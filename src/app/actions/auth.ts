"use server";

import { ActionsMessage } from "@/constants";
import { EmptyResult } from "@/models";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(
  email: string,
  password: string,
): Promise<EmptyResult> {
  let result;
  try {
    result = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (error) {
    return {
      success: false,
      data: null,
      error:
        error instanceof Error ? error.message : ActionsMessage.SIGN_IN_FAILED,
    };
  }

  if (!result.token) {
    return {
      success: false,
      data: null,
      error: ActionsMessage.SIGN_IN_FAILED,
    };
  }

  redirect("/dashboard");
}

export async function signUp(
  username: string,
  email: string,
  password: string,
): Promise<EmptyResult> {
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name: username,
    },
  });

  if (!result.token) {
    return {
      success: false,
      data: null,
      error: ActionsMessage.SIGN_UP_FAILED,
    };
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

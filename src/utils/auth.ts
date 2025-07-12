import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { schemas } from "@/db/schemas";
import { createAuthClient } from "better-auth/react";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schemas,
  }),
  emailAndPassword: {
    enabled: true,
  },
});

export const authClient = createAuthClient();

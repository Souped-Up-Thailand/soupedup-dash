import { type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { db } from "@/server/db";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
    }),
    signIn: async ({ user, account, profile }) => {
      if (account?.provider === "google") {
        const userExists = await db.user.findUnique({
          where: { email: user?.email ?? "" },
        });
        if (!userExists) {
          return false;
        }
        await db.user.update({
          where: { email: user.email ?? "" },
          data: {
            name: user.name,
            email: user.email,
            image: user.image,
          },
        });
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

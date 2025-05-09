import NextAuth from "next-auth"
import Google from "next-auth/providers/google";
import Yandex from "next-auth/providers/yandex";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

export const { handlers, auth: auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma), // not supported in "edge" runtime (e.g. within `middleware`)

    theme: {
      logo: "/xtranslate-logo.svg",
    },

    session: {
      strategy: "jwt", // keeps session in the cookies (edge-compatible)
      maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    providers: [
      Google,
      Yandex,
      Github({
        authorization: {
          params: { scope: "read:user user:email" },
        },
      }),
    ],

    callbacks: {
      // expose extra data to auth() and useSession()
      session({ session, token }) {
        session.user.id = token.sub as string; // e.g. required to check subscription by `user.id`
        return session;
      },
    },
  }
);

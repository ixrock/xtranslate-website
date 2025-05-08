import NextAuth from "next-auth"
import Google from "next-auth/providers/google";
import Yandex from "next-auth/providers/yandex";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

export const { handlers, auth: auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma), // [!] this is *not* supported in "edge" runtime (e.g. within `middleware`)

    theme: {
      logo: "/xtranslate-logo.svg",
    },

    session: {
      strategy: "jwt", // keeps session in the cookies (edge-compatible)
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours
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
      async jwt({ token }) {
        if (token.sub) {
          const subscription = await prisma.subscription.findUnique({
            where: { userId: token.sub }
          });
          token.stripeActive = subscription?.status === "ACTIVE" && subscription.currentPeriodEnd > new Date();
        }
        return token;
      },
    },
  }
);

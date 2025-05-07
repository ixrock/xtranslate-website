import NextAuth from "next-auth"
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Yandex from "next-auth/providers/yandex";
import VK from "next-auth/providers/vk";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
    theme: {
      logo: "/xtranslate-logo.svg",
    },

    session: {
      strategy: "jwt", // keep the session in cookies for getting access in middleware (edge-compatible)
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours
    },

    adapter: PrismaAdapter(prisma), // edge-compatible

    providers: [
      Google,
      Yandex,
      Facebook, // TODO: use `ngrok` to support https at `localhost`
      VK,
      Github,
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

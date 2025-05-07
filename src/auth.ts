import NextAuth, { NextAuthConfig } from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Yandex from "next-auth/providers/yandex"
import Facebook from "next-auth/providers/facebook"
import Instagram from "next-auth/providers/instagram"
import VK from "next-auth/providers/vk"
import { prisma } from "@/prisma";

export const authConfig: NextAuthConfig = {
  theme: {
    logo: "/xtranslate-logo.svg",
  },
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    Github,
    Google,
    Facebook, // TODO: use `ngrok` to support https at `localhost`
    Instagram, // TODO: use `ngrok` to support https at `localhost`
    Yandex,
    VK,
  ],

  callbacks: {
    async jwt({ token }) {
      if (!token.stripeCustomerId) {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email! },
          select: { stripeCustomerId: true },
        });
        if (dbUser?.stripeCustomerId) {
          token.stripeCustomerId = dbUser.stripeCustomerId;
        }
      }
      return token;
    },

    async session({ session, user }) {
      if (user.stripeCustomerId) {
        session.user.stripeCustomerId = user.stripeCustomerId;
      }
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);

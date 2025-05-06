import NextAuth, { NextAuthConfig } from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Yandex from "next-auth/providers/yandex"
import VK from "next-auth/providers/vk"
import Discord from "next-auth/providers/discord"
import Twitter from "next-auth/providers/twitter"
import Facebook from "next-auth/providers/facebook"
import Instagram from "next-auth/providers/instagram"
import { prisma } from "@/prisma";

export const authConfig: NextAuthConfig = {
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  theme: {
    logo: undefined, // TODO: customize
    brandColor: undefined,
    buttonText: undefined,
  },

  providers: [
    Github,
    Google,
    Twitter,
    Discord,
    Yandex,
    VK,
    Facebook, // TODO: use `ngrok` to support https at `localhost`
    Instagram, // TODO: use `ngrok` to support https at `localhost`
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

import NextAuth from "next-auth"
import Apple from "next-auth/providers/apple"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Yandex from "next-auth/providers/yandex"
import VK from "next-auth/providers/vk"
import MailRu from "next-auth/providers/mailru"
import Discord from "next-auth/providers/discord"
import { prisma } from "@/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  theme: {
    // TODO: customize
    logo: undefined,
    brandColor: undefined,
  },

  providers: [
    Apple,
    Github,
    Google,
    Yandex,
    VK,
    MailRu,
    Discord,
  ],

  callbacks: {
    async signIn({ user, profile }) {
      await prisma.user.upsert({
        where: { email: user.email! },
        create: { email: user.email!, name: user.name, image: user.image },
        update: { name: user.name, image: user.image },
      });
      return true;
    },

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

    async session({ session, token }) {
      if (session.user) {
        session.user.stripeCustomerId = token.stripeCustomerId;
      }
      return session;
    },
  },
});


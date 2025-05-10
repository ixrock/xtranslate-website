import NextAuth, { User } from "next-auth"
import Google, { GoogleProfile } from "next-auth/providers/google";
import Yandex, { YandexProfile } from "next-auth/providers/yandex";
import Github, { GitHubProfile } from "next-auth/providers/github";
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
      Google({
        profile(profile) {
          return getGoogleUser(profile);
        }
      }),
      Yandex({
        profile(profile) {
          return getYandexUser(profile);
        }
      }),
      Github({
        profile(profile) {
          return getGithubUser(profile);
        },
        authorization: {
          params: { scope: "read:user user:email" },
        },
      }),
    ],

    callbacks: {
      async signIn({ user, profile, account }) {
        if (!profile) return true;

        let profileUser: User = {};

        switch (account?.provider) {
        case "google":
          profileUser = getGoogleUser(profile as unknown as GoogleProfile);
          break;
        case "yandex":
          profileUser = getYandexUser(profile as unknown as YandexProfile);
          break;
        case "github":
          profileUser = getGithubUser(profile as unknown as GitHubProfile);
          break;
        }

        const freshName = profileUser.name ?? user.name;
        const freshImage = profileUser.image ?? user.image;

        const freshEmail = (!user.email && profile.email_verified && profile.email)
          ? profile.email
          : user.email as string;

        // update from last login (when linked multiple accounts/auth-providers)
        if (freshName !== user.name || freshImage !== user.image) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              name: freshName,
              image: freshImage,
              email: freshEmail,
            },
          });
          // refresh jwt
          user.name = freshName;
          user.image = freshImage;
          user.email = freshEmail;
        }
        return true;
      },

      // expose extra data to auth() and useSession()
      session({ session, token }) {
        session.user.id = token.sub as string; // e.g. required to check subscription by `user.id`
        return session;
      },
    }
  }
);

export function getGoogleUser(profile: GoogleProfile): Required<User> {
  return {
    id: profile.sub,
    name: profile.name,
    image: profile.picture,
    email: profile.email,
  }
}

export function getGithubUser(profile: GitHubProfile): Required<User> {
  return {
    id: String(profile.id),
    name: profile.name ?? profile.login,
    image: profile.avatar_url,
    email: profile.email,
  }
}

export function getYandexUser(profile: YandexProfile): Required<User> {
  return {
    id: profile.id,
    name: (
      profile.real_name ?? `${profile.first_name ?? ""} ${profile.last_name ?? ""}`.trim()
    ) || profile.login,
    image: profile.default_avatar_id
      ? `https://avatars.yandex.net/get-yapic/${profile.default_avatar_id}/islands-200`
      : null,
    email: profile.default_email as string,
  }
}

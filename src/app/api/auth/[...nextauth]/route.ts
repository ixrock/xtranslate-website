import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { authConfig } from "@/auth-config";
import { prisma } from "@/prisma";

const config: NextAuthConfig = {
  ...authConfig,
  adapter: PrismaAdapter(prisma),
};

export const {
  handlers: { GET, POST }
} = NextAuth(config);

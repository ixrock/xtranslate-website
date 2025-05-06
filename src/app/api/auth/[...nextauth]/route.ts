import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { authConfig } from "@/auth";
import { prisma } from "@/prisma";

export const {
  handlers: { GET, POST }
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
});

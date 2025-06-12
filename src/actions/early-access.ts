"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function joinEarlyAccess(source: string) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("Not authenticated");
  }

  await prisma.earlyAccess.upsert({
    where: { userId },
    update: { source },
    create: {
      userId,
      source,
    },
  });

  return true;
}

"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";

export type EarlyAccessSource = "website" | "extension";

export async function joinEarlyAccess(source: EarlyAccessSource = "website") {
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

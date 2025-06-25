"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { getServerLocale } from "@/actions/get-set-lang";

export type EarlyAccessSource = "website" | "extension";

export async function joinEarlyAccess(source: EarlyAccessSource) {
  const session = await auth();
  const userId = session?.user?.id;
  const prefLang = await getServerLocale();

  if (!userId) {
    throw new Error("Not authenticated");
  }

  await prisma.earlyAccess.upsert({
    where: { userId },
    update: { source, prefLang },
    create: {
      source, prefLang,
      user: {
        connect: { id: userId },
      },
    },
  });

  return true;
}

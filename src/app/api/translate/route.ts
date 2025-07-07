import { auth } from "@/auth"
import { CycleStatus, prisma } from "@/prisma";

export const POST = auth(async (req) => {
  if (!req.auth) {
    return new Response("401", { status: 401 });
  }

  const { id: userId } = req.auth.user;

  const sub = await prisma.subscriptionCycle.findFirstOrThrow({
    where: { userId },
    orderBy: { periodEnd: "desc" }, // get fresh subscription
    select: { status: true, periodEnd: true },
  });

  const active = sub.status === CycleStatus.PAID && sub.periodEnd > new Date();
  if (!active) {
    return new Response("402", { status: 402 });
  }

  /* perform AI-translation request */
});

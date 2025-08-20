import { auth } from "@/auth"
import { CycleStatus, prisma } from "@/prisma";

export async function POST(req: Request): Promise<Response> {
  const session = await auth();

  if (!session) {
    return new Response("401", { status: 401 });
  }

  const { id: userId } = session.user;

  const sub = await prisma.subscriptionCycle.findFirstOrThrow({
    where: { userId },
    orderBy: { periodEnd: "desc" }, // get fresh subscription
    select: { status: true, periodEnd: true },
  });

  const active = sub.status === CycleStatus.PAID && sub.periodEnd > new Date();
  if (!active) {
    return new Response("402", { status: 402 });
  }

  // TODO: perform AI-translation request
  return new Response(null, { status: 204 });
}

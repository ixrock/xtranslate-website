import { PlanType, PrismaClient } from "@prisma/client";
import { subscriptionPlan } from "@/app/config";

const prisma = new PrismaClient();

async function main() {
  await seedPlans();
}

async function seedPlans() {
  await prisma.plan.upsert({
    where: { name: PlanType.FREE_TRIAL },
    update: {}, // do nothing if it exists
    create: {
      name: PlanType.FREE_TRIAL,
      priceCentsUSD: 0,
      textTokensIncluded: subscriptionPlan.FREE_PLAN_TEXT_TOKENS,
      ttsSecondsIncluded: subscriptionPlan.FREE_PLAN_TTS_SECONDS,
    },
  });
  await prisma.plan.upsert({
    where: { name: PlanType.MONTHLY },
    update: {},
    create: {
      name: PlanType.MONTHLY,
      priceCentsUSD: subscriptionPlan.MONTHLY_PRICE_USD_CENTS,
      textTokensIncluded: subscriptionPlan.MONTHLY_PLAN_TEXT_TOKENS,
      ttsSecondsIncluded: subscriptionPlan.MONTHLY_PLAN_TTS_SECONDS,
    },
  });
  console.log("✅ Plan table seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

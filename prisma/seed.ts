import { PlanType, PrismaClient } from "@prisma/client";

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
      textTokensIncluded: 10_000, // 10k
      ttsSecondsIncluded: 300, // 5m
    },
  });
  await prisma.plan.upsert({
    where: { name: PlanType.MONTHLY },
    update: {},
    create: {
      name: PlanType.MONTHLY,
      priceCentsUSD: 500,            // $5
      textTokensIncluded: 1_000_000, // 1M
      ttsSecondsIncluded: 3_600,     // 1h
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

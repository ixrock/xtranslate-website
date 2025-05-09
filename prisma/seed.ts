import { PlanType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.plan.upsert({
    where: {
      name: PlanType.MONTHLY,
    },
    update: {}, // do nothing if it exists
    create: {
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

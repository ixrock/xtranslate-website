import "dotenv/config";
import path from "path";
import { PrismaConfig } from "prisma/config";

export default {
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: "tsx prisma/seed.ts",
  }
} satisfies PrismaConfig;
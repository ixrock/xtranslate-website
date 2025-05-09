import { PrismaClient, CycleStatus, PlanType } from "@prisma/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()

export {
  prisma,
  CycleStatus,
  PlanType
}

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

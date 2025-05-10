import { PrismaClient, CycleStatus, PlanType, User, Account, Plan, SubscriptionCycle } from "@prisma/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()

export {
  prisma,
  CycleStatus,
  PlanType,
}

export type {
  User,
  Plan,
  Account,
  SubscriptionCycle,
}

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

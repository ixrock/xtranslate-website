-- CreateEnum
CREATE TYPE "private"."PlanType" AS ENUM ('FREE_TRIAL', 'MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "private"."CycleStatus" AS ENUM ('PAID', 'FAILED', 'REFUNDED', 'CANCELED');

-- CreateTable
CREATE TABLE "private"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stripeCustomerId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."Account" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "private"."Plan" (
    "id" TEXT NOT NULL,
    "name" "private"."PlanType" NOT NULL,
    "priceCentsUSD" INTEGER NOT NULL,
    "textTokensIncluded" INTEGER NOT NULL,
    "ttsSecondsIncluded" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."SubscriptionCycle" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "priceCentsUSD" INTEGER NOT NULL,
    "textLimit" INTEGER NOT NULL,
    "ttsSecLimit" INTEGER NOT NULL,
    "amountPaidCents" INTEGER NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "cancelAtPeriodEnd" BOOLEAN NOT NULL DEFAULT false,
    "status" "private"."CycleStatus" NOT NULL DEFAULT 'PAID',
    "tokensUsed" INTEGER NOT NULL DEFAULT 0,
    "ttsSecondsUsed" INTEGER NOT NULL DEFAULT 0,
    "stripeInvoiceId" TEXT,
    "stripeSubId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubscriptionCycle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "private"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_stripeCustomerId_key" ON "private"."User"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_name_key" ON "private"."Plan"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SubscriptionCycle_stripeInvoiceId_key" ON "private"."SubscriptionCycle"("stripeInvoiceId");

-- CreateIndex
CREATE INDEX "SubscriptionCycle_userId_periodEnd_idx" ON "private"."SubscriptionCycle"("userId", "periodEnd");

-- CreateIndex
CREATE INDEX "SubscriptionCycle_stripeSubId_idx" ON "private"."SubscriptionCycle"("stripeSubId");

-- CreateIndex
CREATE INDEX "SubscriptionCycle_status_idx" ON "private"."SubscriptionCycle"("status");

-- AddForeignKey
ALTER TABLE "private"."Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."SubscriptionCycle" ADD CONSTRAINT "SubscriptionCycle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."SubscriptionCycle" ADD CONSTRAINT "SubscriptionCycle_planId_fkey" FOREIGN KEY ("planId") REFERENCES "private"."Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

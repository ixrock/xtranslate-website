-- CreateTable
CREATE TABLE "private"."EarlyAccess"
(
    "id"           TEXT         NOT NULL,
    "userId"       TEXT         NOT NULL,
    "source"       TEXT         NOT NULL,
    "createdAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notified"     BOOLEAN      NOT NULL DEFAULT false,
    "discountCode" TEXT,
    "prefLang"     TEXT,

    CONSTRAINT "EarlyAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EarlyAccess_userId_key" ON "private"."EarlyAccess" ("userId");

-- AddForeignKey
ALTER TABLE "private"."EarlyAccess"
    ADD CONSTRAINT "EarlyAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."User" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "user_metadata" (
    "user_id" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "credits" INTEGER NOT NULL DEFAULT 0,
    "nickname" VARCHAR(255),
    "avatarSrc" TEXT,
    "birthday" TIMESTAMP,
    "street1" VARCHAR(255),
    "street2" VARCHAR(255),
    "city" VARCHAR(255),
    "region" VARCHAR(255),
    "zip" VARCHAR(255),
    "country" VARCHAR(255),
    "phone" VARCHAR(255),

    CONSTRAINT "user_metadata_pkey" PRIMARY KEY ("user_id")
);

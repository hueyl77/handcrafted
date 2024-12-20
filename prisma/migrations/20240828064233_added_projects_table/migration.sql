/*
  Warnings:

  - You are about to drop the column `user_id` on the `luvletter_generated_cards` table. All the data in the column will be lost.
  - Added the required column `user_email` to the `luvletter_generated_cards` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GameType" AS ENUM ('loveletter', 'werewolf', 'tacocat', 'poker');

-- AlterTable
ALTER TABLE "luvletter_generated_cards" DROP COLUMN "user_id",
ADD COLUMN     "user_email" VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "game_type" "GameType" NOT NULL,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,
    "deleted_at" TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

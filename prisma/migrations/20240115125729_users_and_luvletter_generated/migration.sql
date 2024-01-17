-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255),
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,
    "deleted_at" TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luvletter_generated_cards" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255),
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,
    "deleted_at" TIMESTAMP,

    CONSTRAINT "luvletter_generated_cards_pkey" PRIMARY KEY ("id")
);

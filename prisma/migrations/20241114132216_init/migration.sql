-- CreateTable
CREATE TABLE "filming_cards" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "category" TEXT NOT NULL,
    "executor" TEXT,
    "date_start" TEXT,
    "date_end" TEXT,
    "time_start" TEXT,
    "time_end" TEXT,
    "place" TEXT,
    "contact" TEXT,
    "description" TEXT,
    "price" TEXT,
    "cloth" TEXT,
    "author" TEXT,
    "technical_specialist" BOOLEAN NOT NULL DEFAULT false,
    "sound_recording" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,

    CONSTRAINT "filming_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "repeat_password" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

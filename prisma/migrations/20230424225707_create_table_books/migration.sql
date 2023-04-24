-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "publishing_company" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "authors" TEXT[],

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

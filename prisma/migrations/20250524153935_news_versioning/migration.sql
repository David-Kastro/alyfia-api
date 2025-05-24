-- CreateTable
CREATE TABLE "NewsEdit" (
    "id" TEXT NOT NULL,
    "newsId" TEXT NOT NULL,
    "editedById" TEXT NOT NULL,
    "oldContent" TEXT NOT NULL,
    "newContent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsEdit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NewsEdit" ADD CONSTRAINT "NewsEdit_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsEdit" ADD CONSTRAINT "NewsEdit_editedById_fkey" FOREIGN KEY ("editedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

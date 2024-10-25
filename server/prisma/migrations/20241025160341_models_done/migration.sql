-- CreateTable
CREATE TABLE "Trades" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "buyOrderId" INTEGER NOT NULL,
    "sellOrderId" INTEGER NOT NULL,

    CONSTRAINT "Trades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trades" ADD CONSTRAINT "Trades_buyOrderId_fkey" FOREIGN KEY ("buyOrderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trades" ADD CONSTRAINT "Trades_sellOrderId_fkey" FOREIGN KEY ("sellOrderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

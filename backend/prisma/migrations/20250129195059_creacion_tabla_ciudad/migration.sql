-- CreateTable
CREATE TABLE "Ciudad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "foto_ciudad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "tamaño" DECIMAL(65,30) NOT NULL,
    "año_fundacion" INTEGER NOT NULL,

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("id")
);

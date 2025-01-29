-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "foto_hotel" TEXT NOT NULL,
    "id_ciudad" INTEGER NOT NULL,
    "calificacion" DECIMAL(65,30) NOT NULL,
    "calle" TEXT NOT NULL,
    "num_calle" INTEGER NOT NULL,
    "telefono" INTEGER NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_id_ciudad_fkey" FOREIGN KEY ("id_ciudad") REFERENCES "Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Reserva" (
    "id" SERIAL NOT NULL,
    "id_ciudad" INTEGER NOT NULL,
    "id_hotel" INTEGER NOT NULL,
    "nombre_reserva" TEXT NOT NULL,
    "cant_personas" INTEGER NOT NULL,
    "cant_habitaciones" INTEGER NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_salida" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_ciudad_fkey" FOREIGN KEY ("id_ciudad") REFERENCES "Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_hotel_fkey" FOREIGN KEY ("id_hotel") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

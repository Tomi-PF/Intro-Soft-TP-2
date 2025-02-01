-- AlterTable
ALTER TABLE "Ciudad" ALTER COLUMN "tamaño" SET DEFAULT 0,
ALTER COLUMN "año_fundacion" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Hotel" ALTER COLUMN "calificacion" SET DEFAULT 0,
ALTER COLUMN "num_calle" SET DEFAULT 0,
ALTER COLUMN "telefono" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Reserva" ALTER COLUMN "cant_personas" SET DEFAULT 1,
ALTER COLUMN "cant_habitaciones" SET DEFAULT 1,
ALTER COLUMN "fecha_ingreso" SET DEFAULT 'No especificada',
ALTER COLUMN "fecha_salida" SET DEFAULT 'No especificada';

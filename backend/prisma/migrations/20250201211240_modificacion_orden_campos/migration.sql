/*
  Warnings:

  - Added the required column `apellido_reserva` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reserva" ADD COLUMN     "apellido_reserva" TEXT NOT NULL;

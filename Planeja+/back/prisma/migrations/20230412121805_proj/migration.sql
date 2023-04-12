/*
  Warnings:

  - You are about to drop the column `idUsuario` on the `tiposeventos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tiposeventos` DROP FOREIGN KEY `tiposEventos_idUsuario_fkey`;

-- DropForeignKey
ALTER TABLE `tiposeventos` DROP FOREIGN KEY `tiposEventos_id_fkey`;

-- AlterTable
ALTER TABLE `tiposeventos` DROP COLUMN `idUsuario`;

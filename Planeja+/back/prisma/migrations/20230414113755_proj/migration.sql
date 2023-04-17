/*
  Warnings:

  - Added the required column `servicos` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_evento` to the `Eventos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tiposeventos` DROP FOREIGN KEY `tiposEventos_id_tiposEvento_fkey`;

-- AlterTable
ALTER TABLE `eventos` ADD COLUMN `descricao` VARCHAR(191) NULL,
    ADD COLUMN `servicos` VARCHAR(191) NOT NULL,
    ADD COLUMN `tipo_evento` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - Added the required column `idUsuario` to the `tiposEventos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tiposeventos` ADD COLUMN `idUsuario` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tiposEventos` ADD CONSTRAINT `tiposEventos_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tiposEventos` ADD CONSTRAINT `tiposEventos_id_fkey` FOREIGN KEY (`id`) REFERENCES `Eventos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

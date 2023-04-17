/*
  Warnings:

  - You are about to drop the column `idUsuario` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `idUsuario` on the `tiposeventos` table. All the data in the column will be lost.
  - Added the required column `id_usuario` to the `servicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `tiposEventos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `servicos` DROP FOREIGN KEY `servicos_idUsuario_fkey`;

-- DropForeignKey
ALTER TABLE `tiposeventos` DROP FOREIGN KEY `tiposEventos_idUsuario_fkey`;

-- AlterTable
ALTER TABLE `locacoes` ADD COLUMN `endereco` VARCHAR(191) NULL,
    MODIFY `telefone` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `servicos` DROP COLUMN `idUsuario`,
    ADD COLUMN `id_usuario` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tiposeventos` DROP COLUMN `idUsuario`,
    ADD COLUMN `id_usuario` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tiposEventos` ADD CONSTRAINT `tiposEventos_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tiposEventos` ADD CONSTRAINT `tiposEventos_id_tiposEvento_fkey` FOREIGN KEY (`id_tiposEvento`) REFERENCES `Eventos`(`id_eventos`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `servicos` ADD CONSTRAINT `servicos_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

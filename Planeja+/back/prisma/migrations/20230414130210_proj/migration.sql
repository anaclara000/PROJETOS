-- DropForeignKey
ALTER TABLE `servicos` DROP FOREIGN KEY `servicos_id_usuario_fkey`;

-- DropForeignKey
ALTER TABLE `tiposeventos` DROP FOREIGN KEY `tiposEventos_id_usuario_fkey`;

-- AddForeignKey
ALTER TABLE `tiposEventos` ADD CONSTRAINT `tiposEventos_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `servicos` ADD CONSTRAINT `servicos_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

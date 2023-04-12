/*
  Warnings:

  - The primary key for the `eventos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `eventos` table. All the data in the column will be lost.
  - The primary key for the `fornecedor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `fornecedor` table. All the data in the column will be lost.
  - The primary key for the `locacoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `locacoes` table. All the data in the column will be lost.
  - The primary key for the `servicos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `servicos` table. All the data in the column will be lost.
  - The primary key for the `tiposeventos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `tiposeventos` table. All the data in the column will be lost.
  - Added the required column `id_eventos` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_fornecedor` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_locacoes` to the `Locacoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_servicos` to the `servicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_tiposEvento` to the `tiposEventos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `fornecedor` DROP FOREIGN KEY `Fornecedor_idEvento_fkey`;

-- DropForeignKey
ALTER TABLE `listaconvidados` DROP FOREIGN KEY `listaConvidados_idEvento_fkey`;

-- DropForeignKey
ALTER TABLE `locacoes` DROP FOREIGN KEY `Locacoes_idEvento_fkey`;

-- DropForeignKey
ALTER TABLE `servicos` DROP FOREIGN KEY `servicos_id_fkey`;

-- DropForeignKey
ALTER TABLE `tiposeventos` DROP FOREIGN KEY `tiposEventos_id_fkey`;

-- AlterTable
ALTER TABLE `eventos` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_eventos` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_eventos`);

-- AlterTable
ALTER TABLE `fornecedor` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_fornecedor` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_fornecedor`);

-- AlterTable
ALTER TABLE `locacoes` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_locacoes` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_locacoes`);

-- AlterTable
ALTER TABLE `servicos` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_servicos` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_servicos`);

-- AlterTable
ALTER TABLE `tiposeventos` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_tiposEvento` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_tiposEvento`);

-- AddForeignKey
ALTER TABLE `servicos` ADD CONSTRAINT `servicos_id_servicos_fkey` FOREIGN KEY (`id_servicos`) REFERENCES `Eventos`(`id_eventos`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `listaConvidados` ADD CONSTRAINT `listaConvidados_idEvento_fkey` FOREIGN KEY (`idEvento`) REFERENCES `Eventos`(`id_eventos`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Locacoes` ADD CONSTRAINT `Locacoes_idEvento_fkey` FOREIGN KEY (`idEvento`) REFERENCES `Eventos`(`id_eventos`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fornecedor` ADD CONSTRAINT `Fornecedor_idEvento_fkey` FOREIGN KEY (`idEvento`) REFERENCES `Eventos`(`id_eventos`) ON DELETE RESTRICT ON UPDATE CASCADE;

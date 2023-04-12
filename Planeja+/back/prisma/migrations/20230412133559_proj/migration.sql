/*
  Warnings:

  - Added the required column `descricao` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Locacoes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `servicos` DROP FOREIGN KEY `servicos_id_servicos_fkey`;

-- AlterTable
ALTER TABLE `fornecedor` ADD COLUMN `descricao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `locacoes` ADD COLUMN `descricao` VARCHAR(191) NOT NULL;

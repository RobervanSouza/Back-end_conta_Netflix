/*
  Warnings:

  - Added the required column `imagemUrl` to the `ListaUsuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeUsuario` to the `ListaUsuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListaUsuario" ADD COLUMN     "imagemUrl" TEXT NOT NULL,
ADD COLUMN     "nomeUsuario" TEXT NOT NULL;

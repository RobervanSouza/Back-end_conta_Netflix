/*
  Warnings:

  - Added the required column `contaAdminId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contaUsuarioId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "contaAdminId" TEXT NOT NULL,
ADD COLUMN     "contaUsuarioId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ListaUsuario" (
    "id" TEXT NOT NULL,
    "contaId" TEXT NOT NULL,
    "dataCriacaoDoPerfil" TEXT NOT NULL,
    "startPerfil" TIMESTAMP(3) NOT NULL,
    "endPerfil" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ListaUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conta" (
    "id" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "filmes" TEXT NOT NULL,
    "documentarios" TEXT NOT NULL,
    "desenhos" TEXT NOT NULL,
    "shows" TEXT NOT NULL,

    CONSTRAINT "Conta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ListaUsuarioToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ListaUsuario_id_key" ON "ListaUsuario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Conta_id_key" ON "Conta"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ListaUsuarioToUser_AB_unique" ON "_ListaUsuarioToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ListaUsuarioToUser_B_index" ON "_ListaUsuarioToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_contaUsuarioId_fkey" FOREIGN KEY ("contaUsuarioId") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_contaAdminId_fkey" FOREIGN KEY ("contaAdminId") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaUsuario" ADD CONSTRAINT "ListaUsuario_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ListaUsuarioToUser" ADD CONSTRAINT "_ListaUsuarioToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ListaUsuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ListaUsuarioToUser" ADD CONSTRAINT "_ListaUsuarioToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

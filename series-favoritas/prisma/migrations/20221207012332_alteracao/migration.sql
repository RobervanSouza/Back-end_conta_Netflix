-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_contaAdminId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_contaUsuarioId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "contaAdminId" DROP NOT NULL,
ALTER COLUMN "contaUsuarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_contaUsuarioId_fkey" FOREIGN KEY ("contaUsuarioId") REFERENCES "Conta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_contaAdminId_fkey" FOREIGN KEY ("contaAdminId") REFERENCES "Conta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

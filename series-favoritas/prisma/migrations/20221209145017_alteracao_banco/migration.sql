-- DropForeignKey
ALTER TABLE "ListaUsuario" DROP CONSTRAINT "ListaUsuario_contaId_fkey";

-- AddForeignKey
ALTER TABLE "ListaUsuario" ADD CONSTRAINT "ListaUsuario_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "Conta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

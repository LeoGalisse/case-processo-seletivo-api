-- CreateTable
CREATE TABLE "programations" (
    "id" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "palestrante" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "contatoLinkedin" TEXT NOT NULL,
    "contatoEmail" TEXT NOT NULL,

    CONSTRAINT "programations_pkey" PRIMARY KEY ("id")
);

import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaProgramationRepository } from '../../repositories/prisma/prisma-programation-repository'
import { ProgramationUseCase } from '../../use-cases/programation.service'

export async function programation(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  reply.header('Access-Control-Allow-Origin', '*')
  reply.header('Access-Control-Allow-Methods', 'POST')

  const registerBodySchema = z.object({
    horario: z.string(),
    local: z.string(),
    tema: z.string(),
    palestrante: z.string(),
    tipo: z.string(),
    contatoLinkedin: z.string(),
    contatoEmail: z.string(),
    belongsTo: z.string(),
  })

  const {
    horario,
    local,
    tema,
    palestrante,
    tipo,
    contatoLinkedin,
    contatoEmail,
    belongsTo,
  } = registerBodySchema.parse(request.body)

  const programationsRepository = new PrismaProgramationRepository()
  const programationUseCase = new ProgramationUseCase(programationsRepository)

  await programationUseCase.execute({
    horario,
    local,
    tema,
    palestrante,
    tipo,
    contatoLinkedin,
    contatoEmail,
    belongsTo,
  })

  return reply.status(201).send()
}

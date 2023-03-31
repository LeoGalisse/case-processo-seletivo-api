import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaProgramationRepository } from '../../repositories/prisma/prisma-programation-repository'
import { GetProgramationUseCase } from '../../use-cases/get-programation.service'

export async function getProgramation(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  reply.header('Access-Control-Allow-Origin', '*')
  reply.header('Access-Control-Allow-Methods', 'GET')

  const getProgramationBodySchema = z.object({
    belongsTo: z.string(),
  })

  const { belongsTo } = getProgramationBodySchema.parse(request.params)

  const programationsRepository = new PrismaProgramationRepository()
  const programationUseCase = new GetProgramationUseCase(
    programationsRepository,
  )

  const allProgramations = await programationUseCase.execute({ belongsTo })

  return reply.status(201).send(allProgramations)
}

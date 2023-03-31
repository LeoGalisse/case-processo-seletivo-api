import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaProgramationRepository } from '../../repositories/prisma/prisma-programation-repository'
import { DeleteProgramationUseCase } from '../../use-cases/delete-programation.service'

export async function deleteProgramation(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  reply.header('Access-Control-Allow-Origin', '*')
  reply.header('Access-Control-Allow-Methods', 'GET')

  const getProgramationBodySchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = getProgramationBodySchema.parse(request.params)

  const programationsRepository = new PrismaProgramationRepository()
  const programationUseCase = new DeleteProgramationUseCase(
    programationsRepository,
  )

  const allProgramations = await programationUseCase.execute({ id })

  return reply.status(201).send(allProgramations)
}

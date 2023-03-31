import { prisma } from '../../lib/prisma'
import { Prisma } from '@prisma/client'
import { ProgramationsRepository } from '../programation-repository'

export class PrismaProgramationRepository implements ProgramationsRepository {
  async delete(id: string) {
    await prisma.programation.delete({
      where: {
        id,
      },
    })

    return null
  }

  async select(belongsTo: string) {
    const programation = await prisma.programation.findMany({
      orderBy: {
        horario: 'asc',
      },
      where: {
        belongsTo,
      },
    })

    return programation
  }

  async create(data: Prisma.ProgramationCreateInput) {
    const programation = await prisma.programation.create({
      data,
    })

    return programation
  }
}

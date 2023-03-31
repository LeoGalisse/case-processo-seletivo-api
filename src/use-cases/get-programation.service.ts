import { Programation } from '@prisma/client'
import { ProgramationsRepository } from '../repositories/programation-repository'
import { ResourceNotFoundError } from './error/resource-not-found-error'

interface GetProgramationUseCaseRequest {
  belongsTo: string
}

interface GetProgramationUseCaseResponse {
  programation: Programation[]
}

export class GetProgramationUseCase {
  constructor(private programationsRepository: ProgramationsRepository) {}

  async execute({
    belongsTo,
  }: GetProgramationUseCaseRequest): Promise<GetProgramationUseCaseResponse> {
    const programation = await this.programationsRepository.select(belongsTo)

    if (!programation) {
      throw new ResourceNotFoundError()
    }

    return { programation }
  }
}

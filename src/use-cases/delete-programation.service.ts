import { Programation } from '@prisma/client'
import { ProgramationsRepository } from '../repositories/programation-repository'
import { ResourceNotFoundError } from './error/resource-not-found-error'

interface DeleteProgramationUseCaseRequest {
  id: string
}

interface DeleteProgramationUseCaseResponse {
  programation: Programation | null
}

export class DeleteProgramationUseCase {
  constructor(private programationsRepository: ProgramationsRepository) {}

  async execute({
    id,
  }: DeleteProgramationUseCaseRequest): Promise<DeleteProgramationUseCaseResponse> {
    const programation = await this.programationsRepository.delete(id)

    if (programation) {
      throw new ResourceNotFoundError()
    }

    return { programation }
  }
}

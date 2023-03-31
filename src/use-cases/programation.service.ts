import { ProgramationsRepository } from '../repositories/programation-repository'
import { Programation } from '@prisma/client'

interface ProgramationUseCaseRequest {
  horario: string
  local: string
  tema: string
  palestrante: string
  tipo: string
  contatoLinkedin: string
  contatoEmail: string
  belongsTo: string
}

interface ProgramationUseCaseResponse {
  programation: Programation
}

export class ProgramationUseCase {
  constructor(private programationsRepository: ProgramationsRepository) {}

  async execute({
    horario,
    local,
    tema,
    palestrante,
    tipo,
    contatoLinkedin,
    contatoEmail,
    belongsTo,
  }: ProgramationUseCaseRequest): Promise<ProgramationUseCaseResponse> {
    const programation = await this.programationsRepository.create({
      horario,
      local,
      tema,
      palestrante,
      tipo,
      contatoLinkedin,
      contatoEmail,
      belongsTo,
    })

    return { programation }
  }
}

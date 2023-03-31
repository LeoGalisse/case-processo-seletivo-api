import { Prisma, Programation } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { ProgramationsRepository } from '../programation-repository'

export class InMemoryProgramationsRepository
  implements ProgramationsRepository
{
  public items: Programation[] = []

  async delete(id: string) {
    const programation: Programation = {
      id: 'teste-id',
      horario: '10:00',
      local: 'Sala 1',
      tema: 'Tema 1',
      palestrante: 'Palestrante 1',
      tipo: 'Palestra',
      contatoLinkedin: 'linkedin.com',
      contatoEmail: 'palestrante@email.com',
      belongsTo: 'quarta',
    }

    this.items.push(programation)

    this.items.pop()

    if (this.items.length === 1) {
      return null
    }

    return programation
  }

  async select() {
    const createdProgramation: Programation = {
      id: 'teste-id',
      horario: '10:00',
      local: 'Sala 1',
      tema: 'Tema 1',
      palestrante: 'Palestrante 1',
      tipo: 'Palestra',
      contatoLinkedin: 'linkedin.com',
      contatoEmail: 'palestrante@email.com',
      belongsTo: 'quarta',
    }

    this.items.push(createdProgramation)

    const programation = this.items

    if (!programation) {
      return null
    }

    return programation
  }

  async create(data: Prisma.ProgramationCreateInput) {
    const programation: Programation = {
      id: randomUUID(),
      horario: data.horario,
      local: data.local,
      tema: data.tema,
      palestrante: data.palestrante,
      tipo: data.tipo,
      contatoLinkedin: data.contatoLinkedin,
      contatoEmail: data.contatoEmail,
      belongsTo: String(data.belongsTo),
    }

    this.items.push(programation)

    return programation
  }
}

import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryProgramationsRepository } from '../repositories/in-memory/in-memory-programation-repository'
import { ProgramationUseCase } from './programation.service'

let programationsRepository: InMemoryProgramationsRepository
let sut: ProgramationUseCase

describe('Programation Use Case', () => {
  beforeEach(() => {
    programationsRepository = new InMemoryProgramationsRepository()
    sut = new ProgramationUseCase(programationsRepository)
  })

  it('should be able to create programation', async () => {
    const { programation } = await sut.execute({
      horario: '10:00',
      local: 'Sala 1',
      tema: 'Tema 1',
      palestrante: 'Palestrante 1',
      tipo: 'Palestra',
      contatoLinkedin: 'linkedin.com/palestrante1',
      contatoEmail: 'palestrante1@gmail.com',
      belongsTo: 'quarta-feira',
    })

    expect(programation.id).toEqual(expect.any(String))
  })
})

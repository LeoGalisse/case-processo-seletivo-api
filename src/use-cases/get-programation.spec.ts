import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryProgramationsRepository } from '../repositories/in-memory/in-memory-programation-repository'
import { GetProgramationUseCase } from './get-programation.service'

let programationsRepository: InMemoryProgramationsRepository
let sut: GetProgramationUseCase

describe('Get Programation Use Case', () => {
  beforeEach(() => {
    programationsRepository = new InMemoryProgramationsRepository()
    sut = new GetProgramationUseCase(programationsRepository)
  })

  it('should be able to get programation', async () => {
    const createdProgramation = await programationsRepository.create({
      horario: '10:00',
      local: 'Sala 1',
      tema: 'Tema 1',
      palestrante: 'Palestrante 1',
      tipo: 'Palestra',
      contatoLinkedin: 'linkedin.com/palestrante1',
      contatoEmail: 'palestrante1@gmail.com',
      belongsTo: 'quarta-feira',
    })

    const { programation } = await sut.execute({
      belongsTo: createdProgramation.belongsTo,
    })

    expect(programation).toBeInstanceOf(Array)
  })
})

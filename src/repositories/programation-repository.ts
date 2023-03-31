import { Prisma, Programation } from '@prisma/client'

export interface ProgramationsRepository {
  create(data: Prisma.ProgramationCreateInput): Promise<Programation>
  select(belongsTo: string): Promise<Programation[] | null>
  delete(id: string): Promise<Programation | null>
}

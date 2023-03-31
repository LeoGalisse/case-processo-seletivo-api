import { FastifyInstance } from 'fastify'
import { deleteProgramation } from './controllers/delete-programation.controller'
import { getProgramation } from './controllers/get-programation.controller'
import { programation } from './controllers/programation.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/items', programation)
  app.get('/items/all/:belongsTo', getProgramation)
  app.delete('/items/:id', deleteProgramation)
}

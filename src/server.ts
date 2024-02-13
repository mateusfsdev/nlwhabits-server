import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.get('/', () => {
  return 'hello world'
})

app.listen({
  port: 8787,
}).then(() => {
  console.log('server running ✔✔✔')
})





/**
 * metodos http: get post put patch e delete
 * get: semmpre que for buscar info uma rota que vai buscar dados 
 * post: uma p/ rota criar algo
 * put: uma rota p/ atualiar algum recurso por completo
 * patch: rota p/ atualizar algum recurso em especifico
 * delete: rota para deletar algum recurso
 */
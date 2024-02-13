import Fastify from 'fastify'
import cors from "@fastify/cors"
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

//configurando o cors para apenas o localhost acessar os dados do meu backend

app.register(cors, {
  origin: ['http://localhost:8787']
})

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany()


  return habits
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
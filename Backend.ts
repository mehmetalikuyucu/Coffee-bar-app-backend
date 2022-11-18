import fastify from 'fastify'

import Server from "./services/Server"
import cors from '@fastify/cors'
const server = fastify()

server.register(cors, { 
  origin: '*',
  "methods": ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  "preflightContinue": true,
},
)

server.register(require('@fastify/jwt'), {
  secret: 'supersecret'
})


server.register(Server)

server.listen({port: 11000}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})



//TODO:Prepare App func 

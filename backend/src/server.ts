import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { accessInviteLinkRouter } from './routes/access-invite-link-router'
import { getRankingRouter } from './routes/get-ranking-router'
import { getSubscriberInviteClicksRouter } from './routes/get-subscriber-invite-clicks-router'
import { getSubscriberInviteCountRouter } from './routes/get-subscriber-invites-count-router'
import { getSubscriberRankingPositionRouter } from './routes/get-subscriber-ranking-position-router'
import { subscribeToEventRouter } from './routes/subscribe-to-event-router'

const app = fastify().withTypeProvider<ZodTypeProvider>()
app.register(fastifyCors, {
  origin: '*',
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Connect NLW',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(subscribeToEventRouter)
app.register(accessInviteLinkRouter)
app.register(getSubscriberInviteClicksRouter)
app.register(getSubscriberInviteCountRouter)
app.register(getSubscriberRankingPositionRouter)
app.register(getRankingRouter)

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => console.log('HTTP server running'))

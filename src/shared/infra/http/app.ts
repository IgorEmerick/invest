import fastifySwagger = require('@fastify/swagger');
import fastifySwaggerUi = require('@fastify/swagger-ui');
import * as fastify from 'fastify';

const app = fastify({
  trustProxy: true,
  logger:
    process.env.NODE_ENV === 'dev'
      ? {
          transport: {
            target: 'pino-pretty',
            options: {
              translateTime: 'dd/mm HH:MM:ss Z',
              ignore: 'pid,hostname',
            },
          },
        }
      : true,
});

app.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Invest',
      version: '1.0.0',
      contact: {
        email: process.env.AUTHOR_EMAIL,
        name: process.env.AUTHOR_NAME,
      },
      description: 'Invest API.',
    },
    host: process.env.HOST,
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
  staticCSP: true,
});

export { app };

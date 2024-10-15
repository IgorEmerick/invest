import fastifySwagger = require('@fastify/swagger');
import fastifySwaggerUi = require('@fastify/swagger-ui');
import * as fastify from 'fastify';
import { container } from '../containers';
import { IRouter } from './routes/models/IRouter';

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

// APP ROUTES

const cupomRouter = container.resolve<IRouter>('cupomRouter');
app.register(cupomRouter.route.bind(cupomRouter), {
  prefix: '/cupom',
});

const dividendRouter = container.resolve<IRouter>('dividendRouter');
app.register(dividendRouter.route.bind(dividendRouter), {
  prefix: '/dividends',
});

const resultRouter = container.resolve<IRouter>('resultRouter');
app.register(resultRouter.route.bind(resultRouter), { prefix: '/results' });

const stockRouter = container.resolve<IRouter>('stockRouter');
app.register(stockRouter.route.bind(stockRouter), { prefix: '/stocks' });

const userRouter = container.resolve<IRouter>('userRouter');
app.register(userRouter.route.bind(userRouter), { prefix: '/users' });

export { app };

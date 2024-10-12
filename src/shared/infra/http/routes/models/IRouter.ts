import { FastifyInstance } from 'fastify';

export interface IRouter {
  route(app: FastifyInstance): Promise<void>;
}

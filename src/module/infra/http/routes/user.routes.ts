import { FastifyInstance } from 'fastify';
import { UserHandler } from '../handlers/UserHandler';
import {
  createUserBodySchema,
  CreateUserBodyType,
} from '../schemas/bodies/createUserBodySchema';
import { createUserResponseSchema } from '../schemas/responses/createUserResponseSchema';
import { IRouter } from '../../../../shared/infra/http/routes/models/IRouter';

export class UserRouter implements IRouter {
  constructor(private userHandler: UserHandler) {}

  async route(app: FastifyInstance): Promise<void> {
    app.post<{ Body: CreateUserBodyType }>(
      '/',
      {
        schema: {
          summary: 'Create user.',
          body: createUserBodySchema,
          response: createUserResponseSchema,
        },
      },
      this.userHandler.create.bind(this.userHandler),
    );
  }
}

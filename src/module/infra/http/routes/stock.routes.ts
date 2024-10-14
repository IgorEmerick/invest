import { FastifyInstance } from 'fastify';
import { IRouter } from '../../../../shared/infra/http/routes/models/IRouter';
import { StockHandler } from '../handlers/StockHandler';
import {
  authorizationHeaderSchema,
  AuthorizationHeaderType,
} from '../../../../shared/infra/http/schemas/headers/authorizationHeaderSchema';
import {
  createStockBodySchema,
  CreateStockBodyType,
} from '../schemas/bodies/createStockBodySchema';
import { ensureAuthentication } from '../../../../shared/infra/http/middlewares/ensureAuthentication';
import { createStockResponseSchema } from '../schemas/responses/createStockResponseSchema';

export class StockRouter implements IRouter {
  constructor(private stockHandler: StockHandler) {}

  async route(app: FastifyInstance): Promise<void> {
    app.post<{ Headers: AuthorizationHeaderType; Body: CreateStockBodyType }>(
      '/',
      {
        schema: {
          summary: 'Create stock.',
          headers: authorizationHeaderSchema,
          body: createStockBodySchema,
          response: createStockResponseSchema,
        },
        preHandler: [ensureAuthentication],
      },
      this.stockHandler.create.bind(this.stockHandler),
    );
  }
}

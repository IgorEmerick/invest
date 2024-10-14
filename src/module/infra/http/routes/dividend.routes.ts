import { FastifyInstance } from 'fastify';
import { IRouter } from '../../../../shared/infra/http/routes/models/IRouter';
import { DividendHandler } from '../handlers/DividendHandler';
import {
  authorizationHeaderSchema,
  AuthorizationHeaderType,
} from '../../../../shared/infra/http/schemas/headers/authorizationHeaderSchema';
import {
  createDividendParamsSchema,
  CreateDividendParamsType,
} from '../schemas/params/createDividendParamsSchema';
import {
  dividendEntitySchema,
  DividendEntityType,
} from '../schemas/entities/dividendEntitySchema';
import { ensureAuthentication } from '../../../../shared/infra/http/middlewares/ensureAuthentication';

export class DividendRouter implements IRouter {
  constructor(private dividendHandler: DividendHandler) {}

  async route(app: FastifyInstance): Promise<void> {
    app.post<{
      Headers: AuthorizationHeaderType;
      Params: CreateDividendParamsType;
      Body: DividendEntityType;
    }>(
      '/:stock_code',
      {
        schema: {
          summary: 'Create dividend',
          headers: authorizationHeaderSchema,
          params: createDividendParamsSchema,
          body: dividendEntitySchema,
        },
        preHandler: [ensureAuthentication],
      },
      this.dividendHandler.create.bind(this.dividendHandler),
    );
  }
}

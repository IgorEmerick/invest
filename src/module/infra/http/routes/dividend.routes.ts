import { FastifyInstance } from 'fastify';
import { IRouter } from '../../../../shared/infra/http/routes/models/IRouter';
import { DividendHandler } from '../handlers/DividendHandler';
import {
  authorizationHeaderSchema,
  AuthorizationHeaderType,
} from '../../../../shared/infra/http/schemas/headers/authorizationHeaderSchema';
import {
  createStockMetricParamsSchema,
  CreateStockMetricParamsType,
} from '../schemas/params/createStockMetricParamsSchema';
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
      Params: CreateStockMetricParamsType;
      Body: DividendEntityType;
    }>(
      '/:stock_code',
      {
        schema: {
          summary: 'Create dividend',
          headers: authorizationHeaderSchema,
          params: createStockMetricParamsSchema,
          body: dividendEntitySchema,
        },
        preHandler: [ensureAuthentication],
      },
      this.dividendHandler.create.bind(this.dividendHandler),
    );
  }
}

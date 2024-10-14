import { FastifyInstance } from 'fastify';
import { IRouter } from '../../../../shared/infra/http/routes/models/IRouter';
import { ResultHandler } from '../handlers/ResultHandler';
import {
  authorizationHeaderSchema,
  AuthorizationHeaderType,
} from '../../../../shared/infra/http/schemas/headers/authorizationHeaderSchema';
import {
  createStockMetricParamsSchema,
  CreateStockMetricParamsType,
} from '../schemas/params/createStockMetricParamsSchema';
import {
  createResultBodySchema,
  CreateResultBodyType,
} from '../schemas/bodies/createResultBodySchema';
import { ensureAuthentication } from '../../../../shared/infra/http/middlewares/ensureAuthentication';

export class ResultRouter implements IRouter {
  constructor(private resultHandler: ResultHandler) {}

  async route(app: FastifyInstance): Promise<void> {
    app.post<{
      Headers: AuthorizationHeaderType;
      Params: CreateStockMetricParamsType;
      Body: CreateResultBodyType;
    }>(
      '/:stock_code',
      {
        schema: {
          summary: 'Create result.',
          headers: authorizationHeaderSchema,
          params: createStockMetricParamsSchema,
          body: createResultBodySchema,
        },
        preHandler: [ensureAuthentication],
      },
      this.resultHandler.create.bind(this.resultHandler),
    );
  }
}

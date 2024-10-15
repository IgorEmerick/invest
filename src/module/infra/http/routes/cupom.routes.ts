import { FastifyInstance } from 'fastify';
import { IRouter } from '../../../../shared/infra/http/routes/models/IRouter';
import { CupomHandler } from '../handlers/CupomHandler';
import {
  authorizationHeaderSchema,
  AuthorizationHeaderType,
} from '../../../../shared/infra/http/schemas/headers/authorizationHeaderSchema';
import {
  registerCupomBodySchema,
  RegisterCupomBodyType,
} from '../schemas/bodies/registerCupomBodySchema';
import { ensureAuthentication } from '../../../../shared/infra/http/middlewares/ensureAuthentication';

export class CupomRouter implements IRouter {
  constructor(private cupomHandler: CupomHandler) {}

  async route(app: FastifyInstance): Promise<void> {
    app.post<{ Headers: AuthorizationHeaderType; Body: RegisterCupomBodyType }>(
      '/',
      {
        schema: {
          summary: 'Register cupom.',
          headers: authorizationHeaderSchema,
          body: registerCupomBodySchema,
        },
        preHandler: [ensureAuthentication],
      },
      this.cupomHandler.register.bind(this.cupomHandler),
    );
  }
}

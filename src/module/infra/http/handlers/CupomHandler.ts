import { FastifyReply, FastifyRequest } from 'fastify';
import { CupomService } from '../../../services/CupomService';
import { RegisterCupomBodyType } from '../schemas/bodies/registerCupomBodySchema';

interface IRequest extends FastifyRequest {
  body: RegisterCupomBodyType;
}

export class CupomHandler {
  constructor(private cupomService: CupomService) {}

  async register({ body }: IRequest, reply: FastifyReply): Promise<void> {
    await this.cupomService.register(body);

    reply.send();
  }
}

import { FastifyReply, FastifyRequest } from 'fastify';
import { CupomService } from '../../../services/CupomService';
import { RegisterCupomBodyType } from '../schemas/bodies/registerCupomBodySchema';

interface IRegisterRequest extends FastifyRequest {
  body: RegisterCupomBodyType;
}

export class CupomHandler {
  constructor(private cupomService: CupomService) {}

  async register(
    { body }: IRegisterRequest,
    reply: FastifyReply,
  ): Promise<void> {
    await this.cupomService.register(body);

    reply.send();
  }

  async get(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const cupom = await this.cupomService.get();

    reply.status(200).send({ cupom });
  }
}

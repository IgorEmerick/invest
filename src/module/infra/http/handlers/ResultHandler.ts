import { FastifyReply, FastifyRequest } from 'fastify';
import { ResultService } from '../../../services/ResultService';
import { CreateStockMetricParamsType } from '../schemas/params/createStockMetricParamsSchema';
import { CreateResultBodyType } from '../schemas/bodies/createResultBodySchema';

interface IRequest extends FastifyRequest {
  params: CreateStockMetricParamsType;
  body: CreateResultBodyType;
}

export class ResultHandler {
  constructor(private resultService: ResultService) {}

  async create(
    { params: { stock_code }, body }: IRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { reference_date } = body;

    await this.resultService.create({
      ...body,
      reference_date: new Date(reference_date),
      stock_code,
    });

    reply.status(201).send();
  }
}

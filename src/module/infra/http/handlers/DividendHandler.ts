import { FastifyReply, FastifyRequest } from 'fastify';
import { DividendService } from '../../../services/DividendService';
import { DividendEntityType } from '../schemas/entities/dividendEntitySchema';
import { CreateStockMetricParamsType } from '../schemas/params/createStockMetricParamsSchema';

interface ICreateRequest extends FastifyRequest {
  body: DividendEntityType;
  params: CreateStockMetricParamsType;
}

export class DividendHandler {
  constructor(private dividendService: DividendService) {}

  async create(
    {
      body: { payment_date, reference_date, value },
      params: { stock_code },
    }: ICreateRequest,
    reply: FastifyReply,
  ): Promise<void> {
    await this.dividendService.create({
      payment_date: new Date(payment_date),
      reference_date: new Date(reference_date),
      value,
      stock_code,
    });

    reply.status(201).send();
  }
}

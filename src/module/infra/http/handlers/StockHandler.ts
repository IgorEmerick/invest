import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateStockBodyType } from '../schemas/bodies/createStockBodySchema';
import { StockService } from '../../../services/StockService';

interface ICreateRequest extends FastifyRequest {
  body: CreateStockBodyType;
}

export class StockHandler {
  constructor(private stockService: StockService) {}

  async create({ body }: ICreateRequest, reply: FastifyReply): Promise<void> {
    const { dividends, results } = body;

    const formattedDividends = dividends
      ? dividends.map(dividend => ({
          payment_date: new Date(dividend.payment_date),
          reference_date: new Date(dividend.reference_date),
          value: dividend.value,
        }))
      : undefined;

    const formattedResults = results
      ? results.map(result => ({
          ...result,
          reference_date: new Date(result.reference_date),
        }))
      : undefined;

    const stock = await this.stockService.create({
      ...body,
      dividends: formattedDividends,
      results: formattedResults,
    });

    reply.status(201).send(stock);
  }
}

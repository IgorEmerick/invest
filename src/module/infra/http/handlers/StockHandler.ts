import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateStockBodyType } from '../schemas/bodies/createStockBodySchema';
import { StockService } from '../../../services/StockService';

interface ICreateRequest extends FastifyRequest {
  body: CreateStockBodyType;
}

export class StockHandler {
  constructor(private stockService: StockService) {}

  async create({ body }: ICreateRequest, reply: FastifyReply): Promise<void> {
    const stock = await this.stockService.create(body);

    reply.status(201).send(stock);
  }
}

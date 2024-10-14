import { HttpError } from '../../shared/errors/HttpError';
import { Stock } from '../infra/database/entities/Stock';
import { IStockRepository } from '../infra/database/repositories/models/IStockRepository';
import { CreateStockRequest } from '../types/CreateStockRequest';

export class StockService {
  constructor(private stockRepository: IStockRepository) {}

  async create({
    code,
    name,
    price,
    type,
  }: CreateStockRequest): Promise<Stock> {
    const stock = await this.stockRepository.findByCode(code);

    if (stock) throw new HttpError(400, 'Stock already exists');

    return this.stockRepository.create({ code, name, price, type });
  }
}

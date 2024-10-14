import { HttpError } from '../../shared/errors/HttpError';
import { IStockRepository } from '../infra/database/repositories/models/IStockRepository';
import { CreateDividendRequest } from '../types/CreateDividendRequest';
import { calculateDividendYield } from '../utils/calculateDividendYield';

export class DividendService {
  constructor(private stockRepository: IStockRepository) {}

  async create({
    payment_date,
    reference_date,
    stock_code,
    value,
  }: CreateDividendRequest): Promise<void> {
    const stock = await this.stockRepository.findByCode(stock_code);

    if (!stock) throw new HttpError(400, 'Stock not found');

    if (!stock.dividends) stock.dividends = [];

    stock.dividends.push({ payment_date, reference_date, value });

    stock.dividend_yield = await calculateDividendYield({
      dividends: stock.dividends,
      price: stock.price,
    });

    await this.stockRepository.update(stock);
  }
}

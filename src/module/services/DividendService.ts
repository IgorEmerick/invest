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

    const dividend = stock.dividends.find(
      item =>
        item.payment_date === payment_date ||
        item.reference_date === reference_date,
    );

    if (dividend)
      Object.assign(dividend, { payment_date, reference_date, value });
    else stock.dividends.push({ payment_date, reference_date, value });

    stock.dividend_yield = await calculateDividendYield({
      dividends: stock.dividends,
      price: stock.price,
    });

    await this.stockRepository.update(stock);
  }
}

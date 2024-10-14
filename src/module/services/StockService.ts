import { HttpError } from '../../shared/errors/HttpError';
import { Stock } from '../infra/database/entities/Stock';
import { IStockRepository } from '../infra/database/repositories/models/IStockRepository';
import { CreateStockRequest } from '../types/CreateStockRequest';
import { calculateDividendYield } from '../utils/calculateDividendYield';
import { calculateEfficiency } from '../utils/calculateEfficiency';

export class StockService {
  constructor(private stockRepository: IStockRepository) {}

  async create({
    code,
    name,
    price,
    type,
    dividends,
    leverage,
    results,
  }: CreateStockRequest): Promise<Stock> {
    const stock = await this.stockRepository.findByCode(code);

    if (stock) throw new HttpError(400, 'Stock already exists');

    const dividendYield = dividends
      ? await calculateDividendYield({ dividends, price })
      : undefined;

    const formattedResults = results
      ? results.map(result => ({
          ...result,
          efficiency: result.expenses / result.income,
        }))
      : undefined;

    const efficiency = results ? await calculateEfficiency(results) : undefined;

    return this.stockRepository.create({
      code,
      name,
      price,
      type,
      dividends,
      dividend_yield: dividendYield,
      leverage,
      results: formattedResults,
      efficiency,
    });
  }
}

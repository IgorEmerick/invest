import { HttpError } from '../../shared/errors/HttpError';
import { Dividend } from '../infra/database/entities/Dividend';
import { Stock } from '../infra/database/entities/Stock';
import { IStockRepository } from '../infra/database/repositories/models/IStockRepository';
import { CreateResultRequest } from '../types/CreateResultRequest';
import { calculateDividendYield } from '../utils/calculateDividendYield';
import { calculateEfficiency } from '../utils/calculateEfficiency';

interface IRequest {
  type: string;
  name: string;
  code: string;
  price: number;
  dividends?: Dividend[];
  leverage?: number;
  results?: CreateResultRequest[];
  vacancy?: number;
  asset_value: number;
}

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
    vacancy,
    asset_value,
  }: IRequest): Promise<Stock> {
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
      vacancy,
      asset_value,
    });
  }
}

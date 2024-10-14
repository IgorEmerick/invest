import { HttpError } from '../../shared/errors/HttpError';
import { IStockRepository } from '../infra/database/repositories/models/IStockRepository';
import { CreateResultRequest } from '../types/CreateResultRequest';
import { calculateEfficiency } from '../utils/calculateEfficiency';

interface IRequest extends CreateResultRequest {
  stock_code: string;
}

export class ResultService {
  constructor(private stockRepository: IStockRepository) {}

  async create({
    expenses,
    income,
    reference_date,
    stock_code,
  }: IRequest): Promise<void> {
    const stock = await this.stockRepository.findByCode(stock_code);

    if (!stock) throw new HttpError(400, 'Stock not found');

    if (!stock.results) stock.results = [];

    const result = stock.results.find(
      item => item.reference_date === reference_date,
    );

    if (result) Object.assign(result, { expenses, income });
    else
      stock.results.push({
        expenses,
        income,
        reference_date,
        efficiency: expenses / income,
      });

    const efficiency = await calculateEfficiency(stock.results);

    stock.efficiency = efficiency;

    await this.stockRepository.update(stock);
  }
}

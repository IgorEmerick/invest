import { Stock } from '../../entities/Stock';

export interface IStockRepository {
  create(request: Partial<Stock>): Promise<Stock>;
  update(request: Stock): Promise<Stock>;
  findByCode(code: string): Promise<Stock>;
}

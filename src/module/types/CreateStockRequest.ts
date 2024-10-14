import { Dividend } from '../infra/database/entities/Dividend';

export type CreateStockRequest = {
  type: string;
  name: string;
  code: string;
  price: number;
  dividends?: Dividend[];
};

import { Dividend } from '../infra/database/entities/Dividend';
import { CreateResultRequest } from './CreateResultRequest';

export type CreateStockRequest = {
  type: string;
  name: string;
  code: string;
  price: number;
  dividends?: Dividend[];
  leverage?: number;
  results?: CreateResultRequest[];
  vacancy?: number;
};

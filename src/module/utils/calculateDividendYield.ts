import { Dividend } from '../infra/database/entities/Dividend';

interface IRequest {
  dividends: Dividend[];
  price: number;
}

export async function calculateDividendYield({
  dividends,
  price,
}: IRequest): Promise<number> {
  const lastYearDividends = dividends
    .sort(
      (first, second) =>
        second.payment_date.getTime() - first.payment_date.getTime(),
    )
    .slice(-12)
    .reduce((total, current) => total + current.value, 0);

  return lastYearDividends / price;
}

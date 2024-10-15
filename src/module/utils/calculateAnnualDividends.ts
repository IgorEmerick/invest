import { Dividend } from '../infra/database/entities/Dividend';

export async function calculateAnnualDividends(
  dividends: Dividend[],
): Promise<number> {
  return dividends
    .sort(
      (first, second) =>
        second.payment_date.getTime() - first.payment_date.getTime(),
    )
    .slice(-12)
    .reduce((total, current) => total + current.value, 0);
}

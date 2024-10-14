export type CreateDividendRequest = {
  stock_code: string;
  payment_date: Date;
  value: number;
  reference_date: Date;
};

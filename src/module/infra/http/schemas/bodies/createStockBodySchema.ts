import { Static, Type } from '@sinclair/typebox';
import { dividendEntitySchema } from '../entities/dividendEntitySchema';

export const createStockBodySchema = Type.Object({
  code: Type.String(),
  name: Type.String(),
  price: Type.Number(),
  type: Type.String({ pattern: '^((AÇÃO)|(FII))$' }),
  dividends: Type.Optional(Type.Array(dividendEntitySchema)),
  leverage: Type.Number(),
  results: Type.Optional(
    Type.Array(
      Type.Object({
        reference_date: Type.String({ format: 'date-time' }),
        income: Type.Number(),
        expenses: Type.Number(),
      }),
    ),
  ),
});

export type CreateStockBodyType = Static<typeof createStockBodySchema>;

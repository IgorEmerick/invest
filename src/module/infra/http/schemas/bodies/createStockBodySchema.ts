import { Static, Type } from '@sinclair/typebox';
import { dividendEntitySchema } from '../entities/dividendEntitySchema';

export const createStockBodySchema = Type.Object({
  code: Type.String(),
  name: Type.String(),
  price: Type.Number(),
  type: Type.String({ pattern: '^((AÇÃO)|(FII))$' }),
  dividends: Type.Optional(Type.Array(dividendEntitySchema)),
  leverage: Type.Number(),
});

export type CreateStockBodyType = Static<typeof createStockBodySchema>;

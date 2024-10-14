import { Static, Type } from '@sinclair/typebox';

export const createStockBodySchema = Type.Object({
  code: Type.String(),
  name: Type.String(),
  price: Type.Number(),
  type: Type.String({ pattern: '^((AÇÃO)|(FII))$' }),
});

export type CreateStockBodyType = Static<typeof createStockBodySchema>;

import { Static, Type } from '@sinclair/typebox';

export const createDividendParamsSchema = Type.Object({
  stock_code: Type.String(),
});

export type CreateDividendParamsType = Static<
  typeof createDividendParamsSchema
>;

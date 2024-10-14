import { Static, Type } from '@sinclair/typebox';

export const createStockMetricParamsSchema = Type.Object({
  stock_code: Type.String(),
});

export type CreateStockMetricParamsType = Static<
  typeof createStockMetricParamsSchema
>;

import { Static, Type } from '@sinclair/typebox';

export const createDividendBodySchema = Type.Object({
  reference_date: Type.String({ format: 'date-time' }),
  payment_date: Type.String({ format: 'date-time' }),
  value: Type.Number(),
});

export type CreateDividendBodyType = Static<typeof createDividendBodySchema>;

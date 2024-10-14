import { Static, Type } from '@sinclair/typebox';

export const createResultBodySchema = Type.Object({
  reference_date: Type.String({ format: 'date-time' }),
  income: Type.Number(),
  expenses: Type.Number(),
});

export type CreateResultBodyType = Static<typeof createResultBodySchema>;

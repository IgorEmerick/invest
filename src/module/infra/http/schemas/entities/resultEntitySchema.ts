import { Type } from '@sinclair/typebox';

export const resultEntitySchema = Type.Object({
  reference_date: Type.String({ format: 'date-time' }),
  income: Type.Number(),
  expenses: Type.Number(),
  efficiency: Type.Number(),
});

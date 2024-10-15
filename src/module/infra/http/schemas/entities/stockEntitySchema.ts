import { Type } from '@sinclair/typebox';
import { dividendEntitySchema } from './dividendEntitySchema';
import { resultEntitySchema } from './resultEntitySchema';

export const stockEntitySchema = Type.Object({
  id: Type.String(),
  created_at: Type.String({ format: 'date-time' }),
  updated_at: Type.String({ format: 'date-time' }),
  type: Type.String(),
  name: Type.String(),
  code: Type.String(),
  price: Type.Number(),
  dividend: Type.Optional(Type.Array(dividendEntitySchema)),
  dividend_yield: Type.Optional(Type.Number()),
  leverate: Type.Number(),
  results: Type.Optional(Type.Array(resultEntitySchema)),
  efficiency: Type.Optional(Type.Number()),
  vacancy: Type.Number(),
  asset_value: Type.Number(),
});

import { Type } from '@sinclair/typebox';

export const stockEntitySchema = Type.Object({
  id: Type.String(),
  created_at: Type.String({ format: 'date-time' }),
  updated_at: Type.String({ format: 'date-time' }),
  type: Type.String(),
  name: Type.String(),
  code: Type.String(),
  price: Type.Number(),
});

import { Type } from '@sinclair/typebox';

export const userEntitySchema = Type.Object({
  id: Type.String(),
  created_at: Type.String({ format: 'date-time' }),
  updated_at: Type.String({ format: 'date-time' }),
  name: Type.String(),
  email: Type.String(),
});

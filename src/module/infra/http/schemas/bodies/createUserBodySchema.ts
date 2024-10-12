import { Static, Type } from '@sinclair/typebox';

export const createUserBodySchema = Type.Object({
  name: Type.String(),
  email: Type.String(),
  password: Type.String(),
});

export type CreateUserBodyType = Static<typeof createUserBodySchema>;

import { Static, Type } from '@sinclair/typebox';

export const authenticateUserBodySchema = Type.Object({
  email: Type.String(),
  password: Type.String(),
});

export type AuthenticateUserBodyType = Static<
  typeof authenticateUserBodySchema
>;

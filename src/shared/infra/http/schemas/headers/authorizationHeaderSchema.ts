import { Static, Type } from '@sinclair/typebox';

export const authorizationHeaderSchema = Type.Object({
  authorization: Type.Optional(Type.String()),
});

export type AuthorizationHeaderType = Static<typeof authorizationHeaderSchema>;

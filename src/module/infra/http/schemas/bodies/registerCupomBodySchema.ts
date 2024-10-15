import { Static, Type } from '@sinclair/typebox';

export const registerCupomBodySchema = Type.Object({
  cupom: Type.Number(),
});

export type RegisterCupomBodyType = Static<typeof registerCupomBodySchema>;

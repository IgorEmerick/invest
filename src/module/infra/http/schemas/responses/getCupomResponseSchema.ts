import { Type } from '@sinclair/typebox';

export const getCupomResponseSchema = {
  200: Type.Object({ cupom: Type.Number() }),
};

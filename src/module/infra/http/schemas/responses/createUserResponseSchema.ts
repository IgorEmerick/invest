import { userEntitySchema } from '../entities/userEntitySchema';

export const createUserResponseSchema = {
  201: userEntitySchema,
};

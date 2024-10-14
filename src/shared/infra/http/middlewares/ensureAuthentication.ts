import { FastifyRequest } from 'fastify';
import { AuthorizationHeaderType } from '../schemas/headers/authorizationHeaderSchema';
import { HttpError } from '../../../errors/HttpError';
import { container } from '../../containers';
import { ITokenProvider } from '../../../providers/models/ITokenProvider';
import { IUserRepository } from '../../../../module/infra/database/repositories/models/IUserRepository';

interface IRequest extends FastifyRequest {
  headers: AuthorizationHeaderType;
}

export async function ensureAuthentication({
  headers: { authorization },
}: IRequest): Promise<void> {
  if (!authorization) throw new HttpError(401, 'Unauthorized');

  const [token] = authorization.match(/(?<=(^Bearer ))(.*)$/g) ?? [];

  if (!token) throw new HttpError(401, 'Unauthorized');

  const jwtTokenProvider =
    container.resolve<ITokenProvider>('jwtTokenProvider');

  const payload = await jwtTokenProvider.decodeToken<{ id: string }>(token);

  if (!payload) throw new HttpError(401, 'Unauthorized');

  const userRepository = container.resolve<IUserRepository>('userRepository');

  const user = await userRepository.findById(payload.id);

  if (!user) throw new HttpError(401, 'Unauthorized');
}

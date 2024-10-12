import { asClass, AwilixContainer } from 'awilix';
import { UserRepository } from '../../../module/infra/database/repositories/implementations/UserRepository';

export function registerRepositories(container: AwilixContainer): void {
  container.register(
    'userRepository',
    asClass(UserRepository, { lifetime: 'SINGLETON' }),
  );
}

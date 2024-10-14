import { asClass, AwilixContainer } from 'awilix';
import { UserRepository } from '../../../module/infra/database/repositories/implementations/UserRepository';
import { StockRepository } from '../../../module/infra/database/repositories/implementations/StockRepository';

export function registerRepositories(container: AwilixContainer): void {
  container.register(
    'userRepository',
    asClass(UserRepository, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'stockRepository',
    asClass(StockRepository, { lifetime: 'SINGLETON' }),
  );
}

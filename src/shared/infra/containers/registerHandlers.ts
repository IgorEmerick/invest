import { asClass, AwilixContainer } from 'awilix';
import { UserHandler } from '../../../module/infra/http/handlers/UserHandler';
import { StockHandler } from '../../../module/infra/http/handlers/StockHandler';

export function registerHandlers(container: AwilixContainer): void {
  container.register(
    'userHandler',
    asClass(UserHandler, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'stockHandler',
    asClass(StockHandler, { lifetime: 'SINGLETON' }),
  );
}

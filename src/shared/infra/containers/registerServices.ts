import { asClass, AwilixContainer } from 'awilix';
import { UserService } from '../../../module/services/UserService';
import { StockService } from '../../../module/services/StockService';

export function registerServices(container: AwilixContainer): void {
  container.register(
    'userService',
    asClass(UserService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'stockService',
    asClass(StockService, { lifetime: 'SINGLETON' }),
  );
}

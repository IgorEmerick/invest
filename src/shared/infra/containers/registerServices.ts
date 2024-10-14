import { asClass, AwilixContainer } from 'awilix';
import { UserService } from '../../../module/services/UserService';
import { StockService } from '../../../module/services/StockService';
import { DividendService } from '../../../module/services/DividendService';

export function registerServices(container: AwilixContainer): void {
  container.register(
    'userService',
    asClass(UserService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'stockService',
    asClass(StockService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'dividendService',
    asClass(DividendService, { lifetime: 'SINGLETON' }),
  );
}

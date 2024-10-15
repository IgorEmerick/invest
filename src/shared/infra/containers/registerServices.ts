import { asClass, AwilixContainer } from 'awilix';
import { UserService } from '../../../module/services/UserService';
import { StockService } from '../../../module/services/StockService';
import { DividendService } from '../../../module/services/DividendService';
import { ResultService } from '../../../module/services/ResultService';
import { CupomService } from '../../../module/services/CupomService';

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

  container.register(
    'resultService',
    asClass(ResultService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'cupomService',
    asClass(CupomService, { lifetime: 'SINGLETON' }),
  );
}

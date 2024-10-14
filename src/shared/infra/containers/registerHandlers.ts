import { asClass, AwilixContainer } from 'awilix';
import { UserHandler } from '../../../module/infra/http/handlers/UserHandler';
import { StockHandler } from '../../../module/infra/http/handlers/StockHandler';
import { DividendHandler } from '../../../module/infra/http/handlers/DividendHandler';
import { ResultHandler } from '../../../module/infra/http/handlers/ResultHandler';

export function registerHandlers(container: AwilixContainer): void {
  container.register(
    'userHandler',
    asClass(UserHandler, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'stockHandler',
    asClass(StockHandler, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'dividendHandler',
    asClass(DividendHandler, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'resultHandler',
    asClass(ResultHandler, { lifetime: 'SINGLETON' }),
  );
}

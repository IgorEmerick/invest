import { asClass, AwilixContainer } from 'awilix';
import { UserRouter } from '../../../module/infra/http/routes/user.routes';
import { StockRouter } from '../../../module/infra/http/routes/stock.routes';

export function registerRouters(container: AwilixContainer): void {
  container.register(
    'userRouter',
    asClass(UserRouter, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'stockRouter',
    asClass(StockRouter, { lifetime: 'SINGLETON' }),
  );
}

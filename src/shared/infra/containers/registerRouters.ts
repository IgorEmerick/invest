import { asClass, AwilixContainer } from 'awilix';
import { UserRouter } from '../../../module/infra/http/routes/user.routes';
import { StockRouter } from '../../../module/infra/http/routes/stock.routes';
import { DividendRouter } from '../../../module/infra/http/routes/dividend.routes';
import { ResultRouter } from '../../../module/infra/http/routes/result.routes';

export function registerRouters(container: AwilixContainer): void {
  container.register(
    'userRouter',
    asClass(UserRouter, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'stockRouter',
    asClass(StockRouter, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'dividendRouter',
    asClass(DividendRouter, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'resultRouter',
    asClass(ResultRouter, { lifetime: 'SINGLETON' }),
  );
}

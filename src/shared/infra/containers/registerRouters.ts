import { asClass, AwilixContainer } from 'awilix';
import { UserRouter } from '../../../module/infra/http/routes/user.routes';

export function registerRouters(container: AwilixContainer): void {
  container.register(
    'userRouter',
    asClass(UserRouter, { lifetime: 'SINGLETON' }),
  );
}

import { asClass, AwilixContainer } from 'awilix';
import { UserHandler } from '../../../module/infra/http/handlers/UserHandler';

export function registerHandlers(container: AwilixContainer): void {
  container.register(
    'userHandler',
    asClass(UserHandler, { lifetime: 'SINGLETON' }),
  );
}

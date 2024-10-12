import { asClass, AwilixContainer } from 'awilix';
import { UserService } from '../../../module/services/UserService';

export function registerServices(container: AwilixContainer): void {
  container.register(
    'userService',
    asClass(UserService, { lifetime: 'SINGLETON' }),
  );
}

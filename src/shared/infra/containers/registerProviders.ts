import { asClass, AwilixContainer } from 'awilix';
import { CryptoJsCypherProvider } from '../../providers/implementations/CryptoJsCypherProvider';

export function registerProviders(container: AwilixContainer): void {
  container.register(
    'cryptoJsCypherProvider',
    asClass(CryptoJsCypherProvider, { lifetime: 'SINGLETON' }),
  );
}

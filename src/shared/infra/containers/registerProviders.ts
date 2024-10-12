import { asClass, AwilixContainer } from 'awilix';
import { CryptoJsCypherProvider } from '../../providers/implementations/CryptoJsCypherProvider';
import { JwtTokenProvider } from '../../providers/implementations/JwtTokenProvider';

export function registerProviders(container: AwilixContainer): void {
  container.register(
    'cryptoJsCypherProvider',
    asClass(CryptoJsCypherProvider, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'jwtTokenProvider',
    asClass(JwtTokenProvider, { lifetime: 'SINGLETON' }),
  );
}

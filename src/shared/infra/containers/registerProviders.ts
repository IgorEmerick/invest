import { asClass, AwilixContainer } from 'awilix';
import { CryptoJsCypherProvider } from '../../providers/implementations/CryptoJsCypherProvider';
import { JwtTokenProvider } from '../../providers/implementations/JwtTokenProvider';
import { RedisCacheProvider } from '../../providers/implementations/RedisCacheProvider';

export function registerProviders(container: AwilixContainer): void {
  container.register(
    'cryptoJsCypherProvider',
    asClass(CryptoJsCypherProvider, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'jwtTokenProvider',
    asClass(JwtTokenProvider, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'redisCacheProvider',
    asClass(RedisCacheProvider, { lifetime: 'SINGLETON' }),
  );
}

import { createContainer } from 'awilix';
import { registerDataSources } from './registerDataSources';

const container = createContainer({ injectionMode: 'CLASSIC' });

registerDataSources(container);

export { container };

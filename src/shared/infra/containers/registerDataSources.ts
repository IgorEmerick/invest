import { asValue, AwilixContainer } from 'awilix';
import { mongoDataSource } from '../database/data_sources/mongoDataSource';

export function registerDataSources(container: AwilixContainer): void {
  container.register({
    mongoDataSource: asValue(mongoDataSource),
  });
}

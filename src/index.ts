import { container } from './shared/infra/containers';
import { app } from './shared/infra/http/app';

async function start() {
  const mongoDataSource = container.resolve('mongoDataSource');

  await mongoDataSource.initialize();
}

start().then(async () => {
  app.listen({ port: Number(process.env.PORT), host: '0.0.0.0' });
});

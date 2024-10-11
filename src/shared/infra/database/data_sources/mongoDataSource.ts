import { DataSource } from 'typeorm';

export const mongoDataSource = new DataSource({
  type: 'mongodb',
  authSource: 'admin',
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  synchronize: true,
  entities:
    process.env.NODE_ENV === 'dev'
      ? ['./src/modules/**/infra/database/entities/*.ts']
      : ['./dist/modules/**/infra/database/entities/*.js'],
});

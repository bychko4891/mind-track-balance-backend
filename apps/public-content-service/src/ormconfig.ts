import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

const envFile =
  process.env.ENV_PATH ??
  (process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev');
dotenv.config({ path: envFile });

// 2) Дістаємо змінні (і одразу перевіряємо)
const must = (name: string) => {
  const v = process.env[name];
  if (!v) throw new Error(`[user-service ormconfig] ENV ${name} is missing (from ${envFile})`);
  return v;
};

const host = must('DB_HOST');
const port = Number(must('DB_PORT'));
const username = must('DB_USERNAME_PUBLIC');
const password = must('DB_PASSWORD_PUBLIC');
const database = must('DB_NAME_PUBLIC');

export default new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: [/* User, AdminUser */],
  migrations: ['apps/public-content-service/src/migrations/*.ts'],
  migrationsTableName: 'typeorm_migrations_public_content',
  synchronize: false,
});
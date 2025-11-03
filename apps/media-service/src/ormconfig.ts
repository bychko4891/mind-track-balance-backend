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
const username = must('DB_USERNAME_MEDIA');
const password = must('DB_PASSWORD_MEDIA');
const database = must('DB_NAME_MEDIA');

export default new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  // schema: 'users',      // якщо використовуєш окрему схему — розкоментуй і створюй її
  entities: [/* User, AdminUser */],
  migrations: ['apps/user-service/src/migrations/*.ts'],
  migrationsTableName: 'typeorm_migrations_users',
  synchronize: false,
});


// import 'reflect-metadata';
// import { DataSource } from 'typeorm';
// import * as dotenv from 'dotenv';
// import { User } from './users/user/user.entity';
// import { AdminUser } from './users/admin/admin-user.entity';
//
//
// // Вибір env-файлу через змінну середовища
// const envFile = process.env.ENV_PATH || '.env';
// dotenv.config({ path: envFile });
//
// export default new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT || '5432', 10),
//   username: process.env.DB_USERNAME_USER,
//   password: process.env.DB_PASSWORD_USER,
//   database: process.env.DB_NAME_USER,
//   entities: [User, AdminUser],
//   migrations: ['dist/apps/user-service/migrations/*.js'],
//   // migrations: ['apps/user-service/dist/migrations/*.js'], // для прод-запуску
//   synchronize: false,
// });

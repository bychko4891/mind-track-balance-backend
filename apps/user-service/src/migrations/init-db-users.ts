import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserInit1700000000000 implements MigrationInterface {
  name = 'UserInit1700000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // 1) Enum-и. Імена типів – унікальні в схемі.
    await queryRunner.query(`CREATE TYPE "role_enum" AS ENUM ('User', 'Admin')`);
    await queryRunner.query(`CREATE TYPE "user_gender_enum" AS ENUM ('Male', 'Female', 'Other')`);

    // 2) Таблиця users (усі поля з BaseUser + User)
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "users"
        (
            "uuid"                uuid PRIMARY KEY,
            "firstname"           varchar NULL,
            "surname"             varchar NULL,
            "email"               varchar            NOT NULL UNIQUE,
            "role"                "role_enum"        NOT NULL DEFAULT 'User',
            "active"              boolean            NOT NULL DEFAULT true,
            "login"               varchar            NOT NULL,
            "about"               varchar(300)       NOT NULL DEFAULT '',
            "vip"                 boolean            NOT NULL DEFAULT false,
            "vip_expiration_date" date               NOT NULL DEFAULT now(),
            "user_gender"         "user_gender_enum" NOT NULL DEFAULT 'Other',
            "user_ip"             varchar            NOT NULL,
            "last_visit"          timestamptz NULL,
            "create_at"           timestamptz        NOT NULL DEFAULT now()
        )
    `);

    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "admins" 
        (
            "uuid" uuid         PRIMARY KEY,
            "firstname"         varchar NULL,
            "surname"           varchar NULL,
            "email"             varchar NOT NULL UNIQUE,
            "role" "role_enum"  NOT NULL DEFAULT 'Admin',
            "active" boolean    NOT NULL DEFAULT true,
            "create_at" timestamptz NOT NULL DEFAULT now()
      )
    `);
    // 3) Індекси — якщо плануєш пошук
    await queryRunner.query(`CREATE INDEX "idx_users_email" ON "users" ("email")`);
    await queryRunner.query(`CREATE INDEX "idx_users_login" ON "users" ("login")`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS "idx_users_login"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "idx_users_email"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "users"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "admins"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "user_gender_enum"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "role_enum"`);
  }
}

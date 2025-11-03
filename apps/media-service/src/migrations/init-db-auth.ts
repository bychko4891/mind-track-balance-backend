import { MigrationInterface, QueryRunner } from 'typeorm';

export class AuthInit1700000000000 implements MigrationInterface {
  name = 'AuthInit1700000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // 1) Enum-и. Імена типів – унікальні в схемі.
    await queryRunner.query(`CREATE TYPE "role_enum" AS ENUM ('User', 'Admin')`);

    // 2) Таблиця users (усі поля з BaseUser + User)
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "auth_users"
        (
            "uuid"              uuid                 NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
            "email"             varchar(72)          NOT NULL UNIQUE,
            "password"         varchar(60)          NOT NULL,
            "active"           boolean              NOT NULL DEFAULT false,
            "service_code"      integer              NULL,
            "service_code_uuid" uuid                 NULL,
            "role"              role_enum            NOT NULL DEFAULT 'User',
            "created_at"        timestamptz          NOT NULL DEFAULT now()
        );
    `);

    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "auth_user_jwt_refresh_tokens" 
      (
        "uuid"              uuid        NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        "jwt_refresh_token" varchar     NULL,
        "device_id"         varchar(32) NULL,
        "deletion_time"     timestamp   NULL,
        "user_uuid"         uuid        NOT NULL
            constraint "fk_jwt_token_auth_user"
                references auth_users
      )
    `);
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "rsa_keys" 
      (
        "uuid"              uuid        NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        "public_key"        text        NOT NULL,
        "private_key"       text        NOT NULL,
        "revoked"           boolean     NOT NULL,
        "date_of_revoked"   timestamp   NOT NULL,
        "created_at"        timestamp   NOT NULL DEFAULT now()
      )
    `);
    // 3) Індекси — якщо плануєш пошук
    await queryRunner.query(`CREATE INDEX "idx_auth_users_email" ON "auth_users" ("email")`);
    await queryRunner.query(`CREATE INDEX "idx_auth_users_role" ON "auth_users" ("role")`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS "idx_auth_users_email"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "idx_auth_users_role"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "auth_users"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "auth_user_jwt_refresh_tokens"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "rsa_keys"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "role_enum"`);
  }
}

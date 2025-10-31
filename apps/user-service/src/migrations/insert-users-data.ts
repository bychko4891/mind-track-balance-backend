import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUsers1700000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "users" (
            uuid, firstname, surname, email, role, active,
            login, about, vip, vip_expiration_date, user_gender, user_ip, last_visit, create_at
        )
        VALUES (
                   '84f12b14-08f5-4487-a69d-00f35cdd562c', 'Jane', 'Doe', 'jane@example.com', 'User', true,
                   'jane', 'Hello there', false, now(), 'Female', '127.0.0.1', now(), now()
               );
    `);

    await queryRunner.query(`
        INSERT INTO "admins" (
            uuid, firstname, surname, email, role, active, create_at
        )
        VALUES (
                   '09350120-de75-40a2-a865-10f88efc1d60', 'System', 'Admin', 'admin@example.com', 'Admin', true, now()
               );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "users" WHERE email IN ('jane@example.com')`);
    await queryRunner.query(`DELETE FROM "admins" WHERE email IN ('admin@example.com')`);
  }
}
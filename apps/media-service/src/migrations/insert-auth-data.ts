import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertAuthUserData1700000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "auth_users" (
            uuid, email, password, active, role, created_at
        )
        VALUES (
                   '84f12b14-08f5-4487-a69d-00f35cdd562c', 'jane@example.com', 
                '$2a$12$pqZX2JYYK0WAafNqWwx2euj9KlToouWj6OyuJpC4ZgB4aIg6EW2SK', true, 'User', now()
               ),
               (
                   '09350120-de75-40a2-a865-10f88efc1d60', 'admin@example.com', 
                '$2a$12$7gKJT39yz7dnN0n6esIFBeTaWjRynbWudzyDqI7NNs6qiIDiIUVH.', true, 'Admin', now()
               );
    `);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "auth_users" WHERE email IN ('jane@example.com', 'admin@example.com')`);
  }
}
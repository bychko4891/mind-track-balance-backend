import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('rsa_keys')
export class RsaKey {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ name: 'public_key', type: 'text', nullable: false })
  publicKey!: string;

  @Column({ name: 'private_key', type: 'text', nullable: false })
  privateKey!: string;

  @Column({ type: 'boolean', default: false })
  revoked: boolean = false;

  @Column({ type: 'timestamp', name: 'date_of_revoked' })
  dateOfRevoked: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;
}

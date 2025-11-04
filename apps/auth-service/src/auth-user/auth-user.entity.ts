import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '@app/common/enums/role.enum';
import { OneToOne } from 'typeorm';
import { AuthUserJwtRefreshToken } from './auth-user-jwt-refresh-token.entity';

@Entity('auth_users')
export class AuthUser {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ type: 'varchar', unique: true })
  email!: string;

  @Column({ type: 'varchar', nullable: false, length: 60 })
  password!: string;

  @Column({ type: 'boolean', default: false })
  active: boolean = false;

  @Column({ name: 'service_code', type: 'integer', nullable: true })
  serviceCode: number | null = null;

  @Column({ name: 'service_code_uuid', type: 'uuid', nullable: true })
  serviceCodeUUID: string | null = null;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  role: Role;

  @OneToOne(
    () => AuthUserJwtRefreshToken,
    (jwtRefreshToken) => jwtRefreshToken.user,
    {
      cascade: ['insert', 'update', 'remove'],
      nullable: true,
    },
  )
  jwtRefreshToken: AuthUserJwtRefreshToken;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' }) // timestamp або 'timestamptz' для з таймзоною
  createdAt: Date;
}

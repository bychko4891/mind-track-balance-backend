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

  @Column({ type: 'integer', nullable: true })
  serviceCode: number | null = null;

  @Column({ type: 'uuid', nullable: true })
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
      onDelete: 'CASCADE',
      cascade: ['insert', 'update', 'remove'],
    },
  )
  jwtRefreshToken: AuthUserJwtRefreshToken;

  @CreateDateColumn({ type: 'timestamp' }) // timestamp або 'timestamptz' для з таймзоною
  createdAt: Date;
}

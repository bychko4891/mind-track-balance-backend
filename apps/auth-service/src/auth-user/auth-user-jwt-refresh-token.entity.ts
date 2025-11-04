import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { JoinColumn, OneToOne } from 'typeorm';
import { AuthUser } from './auth-user.entity';

@Entity('auth_user_jwt_refresh_tokens')
export class AuthUserJwtRefreshToken {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ name: 'jwt_refresh_token', nullable: true })
  jwtRefreshToken: string;

  @Column({ name: 'device_id', nullable: true })
  deviceId: string;

  @OneToOne(() => AuthUser, (user) => user.jwtRefreshToken, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_uuid', referencedColumnName: 'uuid' })
  user: AuthUser;

  @Column({ name: 'deletion_time', nullable: true, type: 'timestamp' })
  deletionTime: Date;
}

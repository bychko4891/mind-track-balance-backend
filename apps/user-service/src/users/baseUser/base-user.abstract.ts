import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { Role } from '@app/common/enums/role.enum';

export abstract class BaseUser {
  @PrimaryColumn()
  uuid: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  surname: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  role: Role;

  @Column()
  active: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}

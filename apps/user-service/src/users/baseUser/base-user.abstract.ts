import { Column, PrimaryColumn } from 'typeorm';
import { Role } from '@app/common/enums/role.enum';

export abstract class BaseUser {
  @PrimaryColumn()
  id: number;

  @Column()
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
    default: Role.USER,
  })
  role: Role;

  @Column()
  active: boolean;
}

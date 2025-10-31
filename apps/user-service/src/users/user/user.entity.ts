import { Column, Entity } from 'typeorm';
import { UserGender } from './user-gender.enum';
import { BaseUser } from '../baseUser/base-user.abstract';

@Entity('users')
export class User extends BaseUser {
  @Column()
  login: string;

  @Column({ length: 300 })
  about: string;

  @Column()
  vip: boolean;

  @Column({ name: 'vip_expiration_date', type: 'date' })
  vipExpirationDate: Date;

  @Column({
    name: 'user_gender',
    type: 'enum',
    enum: UserGender,
    default: UserGender.Other,
  })
  gender: UserGender;

  @Column({ name: 'user_ip' })
  userIp: string;

  @Column({ nullable: true, name: 'last_visit' })
  lastVisit: Date;


}

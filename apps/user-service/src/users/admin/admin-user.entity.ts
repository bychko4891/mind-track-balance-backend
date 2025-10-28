import { Entity } from 'typeorm';
import { BaseUser } from '../baseUser/base-user.abstract';

@Entity('admins')
export class AdminUser extends BaseUser {}

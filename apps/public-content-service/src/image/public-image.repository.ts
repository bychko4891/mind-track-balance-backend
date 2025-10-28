import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { PublicImage } from './image.entity';

@Injectable()
export class PublicImageRepository {
  constructor(
    @InjectRepository(PublicImage)
    private readonly repository: Repository<PublicImage>,
  ) {}

  // async findByEmail(email: string): Promise<User  | null> {
  //     return this.adminUserRepository.findOne({ where: { email } });
  // }
  //
  // async rawSQLExample(): Promise<any> {
  //     return this.authUserRepository.query('SELECT * FROM auth_users WHERE is_active = $1', [true]);
  // }
}

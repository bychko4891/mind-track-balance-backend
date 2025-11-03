import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageRepository {
  constructor(
    @InjectRepository(Image)
    private readonly repository: Repository<Image>,
  ) {}

  // async findByEmail(email: string): Promise<User  | null> {
  //     return this.adminUserRepository.findOne({ where: { email } });
  // }
  //
  // async rawSQLExample(): Promise<any> {
  //     return this.authUserRepository.query('SELECT * FROM auth_users WHERE is_active = $1', [true]);
  // }
}

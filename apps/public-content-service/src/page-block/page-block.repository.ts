import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { PageContent } from './page-content.entity';

@Injectable()
export class BlockPagesRepository {
  constructor(
    @InjectRepository(PageContent)
    private readonly repository: Repository<PageContent>,
  ) {}

  // async findByEmail(email: string): Promise<User  | null> {
  //     return this.adminUserRepository.findOne({ where: { email } });
  // }
  //
  // async rawSQLExample(): Promise<any> {
  //     return this.authUserRepository.query('SELECT * FROM auth_users WHERE is_active = $1', [true]);
  // }
}

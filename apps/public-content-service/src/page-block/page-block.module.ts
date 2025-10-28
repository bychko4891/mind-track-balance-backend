import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockPagesRepository } from './block-pages.repository';
import { BlockPagesController } from './block-pages.controller';
import { BlockPagesService } from './block-pages.service';
import { PageContent } from './page-content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PageContent])],
  providers: [BlockPagesService, BlockPagesRepository],
  controllers: [BlockPagesController],
  exports: [BlockPagesModule],
})
export class BlockPagesModule {}

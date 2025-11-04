import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageBlock } from './page-block.entity';
import { PageBlockRepository } from './page-block.repository';
import { PageBlockService } from './page-block.service';
import { PageBlockController } from './page-block.controller';
import { PageBlockTranslation } from './page-block-translation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PageBlock, PageBlockTranslation])],
  providers: [PageBlockService, PageBlockRepository],
  controllers: [PageBlockController],
  exports: [BlockPagesModule],
})
export class BlockPagesModule {}

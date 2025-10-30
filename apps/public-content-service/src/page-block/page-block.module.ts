import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageBlock } from './page-block.entity';
import { PageBlockRepository } from './page-block.repository';
import { PageBlockService } from './page-block.service';
import { PageBlockController } from './page-block.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PageBlock])],
  providers: [PageBlockService, PageBlockRepository],
  controllers: [PageBlockController],
  exports: [BlockPagesModule],
})
export class BlockPagesModule {}

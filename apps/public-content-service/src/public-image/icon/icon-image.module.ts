import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IconImage } from './icon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IconImage])],
  // providers: [PublicImageService, PublicImageRepository],
  // controllers: [CategoryController],
  exports: [IconImageModule],
})
export class IconImageModule {}

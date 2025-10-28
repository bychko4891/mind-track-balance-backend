import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicImage } from './public-image.entity';
import { PublicImageRepository } from './public-image.repository';
import { PublicImageService } from './public-image.service';

@Module({
  imports: [TypeOrmModule.forFeature([PublicImage])],
  providers: [PublicImageService, PublicImageRepository],
  // controllers: [CategoryController],
  exports: [PublicImageModule],
})
export class PublicImageModule {}

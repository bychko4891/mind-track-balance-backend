import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { ImageRepository } from './image.repository';
import { ImageService } from './image.service';
import { ImageVariant } from './image-variant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image, ImageVariant])],
  providers: [ImageService, ImageRepository],
  // controllers: [PageController],
  exports: [ImageModule],
})
export class ImageModule {}

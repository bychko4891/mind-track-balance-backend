import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { ImageRepository } from './image.repository';
import { ImageService } from './image.service';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  providers: [ImageService, ImageRepository],
  // controllers: [PageController],
  exports: [ImageModule],
})
export class ImageModule {}

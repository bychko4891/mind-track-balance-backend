import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  // providers: [PublicImageService, PublicImageRepository],
  // controllers: [CategoryController],
  exports: [ImageModule],
})
export class ImageModule {}

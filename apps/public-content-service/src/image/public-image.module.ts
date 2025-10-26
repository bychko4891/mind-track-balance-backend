import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PublicImageRepository} from "./image.repository";
import {PublicImageService} from "./image.service";
import {PublicImage} from "./image.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PublicImage])
    ],
    providers: [
        PublicImageService,
        PublicImageRepository,
    ],
    // controllers: [CategoryController],
    exports: [PublicImageModule],
})
export class PublicImageModule {}
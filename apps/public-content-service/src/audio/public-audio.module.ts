import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PublicAudio} from "./public-audio.entity";
import {PublicAudioRepository} from "./public-audio.repository";
import {PublicAudioService} from "./public-audio.service";


@Module({
    imports: [TypeOrmModule.forFeature([PublicAudio])
    ],
    providers: [
        PublicAudioService,
        PublicAudioRepository,
    ],
    // controllers: [CategoryController],
    exports: [PublicAudioModule],
})
export class PublicAudioModule {}
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {WordRepository} from "./word.repository";
import {WordController} from "./word.controller";
import {WordService} from "./word.service";
import {Word} from "./word.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Word])
    ],
    providers: [
        WordService,
        WordRepository,
    ],
    controllers: [WordController],
    exports: [WordModule],
})
export class WordModule {}
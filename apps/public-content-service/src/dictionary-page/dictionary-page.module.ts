import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DictionaryPageRepository} from "./dictionary-page.repository";
import {DictionaryPageController} from "./dictionary-page.controller";
import {DictionaryPageService} from "./dictionary-page.service";
import {DictionaryPage} from "./dictionary-page.entity";

@Module({
    imports: [TypeOrmModule.forFeature([DictionaryPage])
    ],
    providers: [
        DictionaryPageService,
        DictionaryPageRepository,
    ],
    controllers: [DictionaryPageController],
    exports: [DictionaryPageModule],
})
export class DictionaryPageModule {}
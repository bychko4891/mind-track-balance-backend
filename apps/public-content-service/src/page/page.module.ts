import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PageRepository} from "./page.repository";
import {PageController} from "./page.controller";
import {Page} from "./page.entity";
import {PageService} from "./page.service";

@Module({
    imports: [TypeOrmModule.forFeature([Page])
    ],
    providers: [
        PageService,
        PageRepository,
    ],
    controllers: [PageController],
    exports: [PageModule],
})
export class PageModule {}
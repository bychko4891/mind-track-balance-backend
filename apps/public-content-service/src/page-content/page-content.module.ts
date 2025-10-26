import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PageContentRepository} from "./page-content.repository";
import {PageContentController} from "./page-content.controller";
import {PageContentService} from "./page-content.service";
import {PageContent} from "./page-content.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PageContent])
    ],
    providers: [
        PageContentService,
        PageContentRepository,
    ],
    controllers: [PageContentController],
    exports: [PageContentModule],
})
export class PageContentModule {}
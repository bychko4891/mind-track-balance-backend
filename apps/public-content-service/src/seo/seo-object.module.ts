import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SeoObject} from "./seo-object.entity";
import {SeoObjectService} from "./seo-object.service";
import {SeoObjectRepository} from "./seo-object.repository";
import {SeoObjectController} from "./seo-object.controller";

@Module({
    imports: [TypeOrmModule.forFeature([SeoObject])
    ],
    providers: [
        SeoObjectService,
        SeoObjectRepository,
    ],
    controllers: [SeoObjectController],
    exports: [SeoObjectModule],
})
export class SeoObjectModule {}
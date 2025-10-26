import { Module } from '@nestjs/common';
import {ArticleController} from "./article.controller";
import {ArticleService} from "./article.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticleRepository} from "./article.repository";
import {Article} from "./article.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Article])
    ],
    providers: [
        ArticleService,
        ArticleRepository,
    ],
    controllers: [ArticleController],
    exports: [ArticleModule],
})
export class ArticleModule {}
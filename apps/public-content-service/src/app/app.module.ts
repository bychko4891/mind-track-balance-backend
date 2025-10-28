import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/category.entity';
import { CommonModule } from '@app/common';
import { JwtStrategyModule } from '@app/common/strategy/jwt-stratedy.module';
import { PassportModule } from '@nestjs/passport';
import { Article } from '../article/article.entity';
import { SeoObject } from '../seo/seo-object.entity';
import { PublicImage } from '../image/public-image.entity';
import { PublicAudio } from '../audio/public-audio.entity';
import { DictionaryPage } from '../dictionary-page/dictionary-page.entity';
import { Word } from '../word/word.entity';
import { Page } from '../page/page.entity';
import { PageContent } from '../page-content/page-content.entity';

@Module({
  imports: [
    PassportModule,
    // HttpModule, // Надає HttpService для ін'єкції
    CommonModule,
    JwtStrategyModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? 'apps/public-content-service/.env.prod'
          : 'apps/public-content-service/.env.dev',
      // envFilePath: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USERNAME_PUBLIC'),
          password: config.get<string>('DB_PASSWORD_PUBLIC'), // саме тут проблема
          database: config.get<string>('DB_NAME_PUBLIC'),
          entities: [
            Category,
            Article,
            SeoObject,
            PublicImage,
            PublicAudio,
            Word,
            DictionaryPage,
            Page,
            PageContent,
          ],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}

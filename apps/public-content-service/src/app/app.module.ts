import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '@app/common';
import { JwtStrategyModule } from '@app/common/strategy/jwt-stratedy.module';
import { PassportModule } from '@nestjs/passport';
import { Page } from '../page/page.entity';
import { PublicImage } from '../image/public-image.entity';
import { SeoObject } from '../seo/seo-object.entity';
import { PageBlock } from '../page-block/page-block.entity';
import { PageBlockTranslation } from '../page-block/page-block-translation.entity';

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
          password: config.get<string>('DB_PASSWORD_PUBLIC'),
          database: config.get<string>('DB_NAME_PUBLIC'),
          entities: [
            Page,
            PageBlock,
            PageBlockTranslation,
            SeoObject,
            PublicImage,
          ],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}

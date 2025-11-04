import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3StorageModule } from '../s3-storage/s3-storage.module';
import { ImageModule } from '../image/image.module';
import { Image } from '../image/image.entity';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { ImageVariant } from '../image/image-variant.entity';

@Module({
  imports: [
    S3StorageModule,
    ImageModule,
    PassportModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME_MEDIA'),
        password: config.get<string>('DB_PASSWORD_MEDIA'),
        database: config.get<string>('DB_NAME_MEDIA'),
        entities: [Image, ImageVariant],
        // entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        migrations: ['dist/migrations/*.js'],
        cli: {
          migrationsDir: 'src/migrations',
        },
        synchronize: true,
        // synchronize: false,
      }),
      inject: [ConfigService],
    }),
    MulterModule.register({
      limits: { fileSize: 10 * 1024 * 1024, files: 1 },
    }),
  ],
})
export class AppModule {}

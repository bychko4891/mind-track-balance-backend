import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
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
        username: config.get<string>('DB_USERNAME_MIND_TRACK'),
        password: config.get<string>('DB_PASSWORD_MIND_TRACK'),
        database: config.get<string>('DB_NAME_MIND_TRACK'),
        entities: [],
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
  ],
})
export class AppModule {}

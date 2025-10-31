import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from '../auth/auth.module';
import { AuthUser } from '../auth-user/auth-user.entity';
import { AuthUserJwtRefreshToken } from '../auth-user/auth-user-jwt-refresh-token.entity';
import { AuthUserModule } from '../auth-user/auth-user.module';
import { RsaKeyModule } from '../rsa-key/rsa-key.module';
import { RsaKey } from '../rsa-key/rsa-key.entity';

// const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';
// console.log("dkflgkfd dflgk;fdgl fdg^ -->> " + envFile)
// console.log("dirname: --> " + __dirname)
// const envPath = resolve(__dirname, envFile); // зміни шлях під свою структуру
//
// if (!existsSync(envPath)) {
//     throw new Error(`❌ ENV файл ${envFile} не знайдено за шляхом: ${envPath}`);
// }

@Module({
  imports: [
    AuthModule,
    RsaKeyModule,
    AuthUserModule,
    PassportModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? 'apps/auth-service/.env.prod'
          : 'apps/auth-service/.env.dev',
      // envFilePath: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        console.log(
          '🧪 config.get(DB_PASSWORD_AUTH):',
          config.get('DB_PASSWORD_AUTH'),
        );
        console.log('🧪 typeof:', typeof config.get('DB_PASSWORD_AUTH'));

        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USERNAME_AUTH'),
          password: config.get<string>('DB_PASSWORD_AUTH'), // саме тут проблема
          database: config.get<string>('DB_NAME_AUTH'),
          entities: [RsaKey, AuthUser, AuthUserJwtRefreshToken],
          synchronize: false,
          // synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}

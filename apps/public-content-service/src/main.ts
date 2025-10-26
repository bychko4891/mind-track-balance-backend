import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

process.env.TZ = process.env.TZ || 'Europe/Kiev';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);
    const port = configService.get<number>('PORT_PUBLIC') || 3000;

    await app.listen(port);
}
bootstrap();
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app/app.module';
import { S3StorageService } from './s3-storage/s3-storage.service';

process.env.TZ = process.env.TZ || 'Europe/Kiev';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT_MEDIA') || 3007;

  await app.get(S3StorageService).waitUntilReady();
  // app.useGlobalFilters(new AllExceptionsFilter());
  // await app.listen(port);
  // console.log("date now -->" + new Date())
  await app.listen(port, () => {
    console.log(`✅ Сервер успішно запущено на порту: ${port}`);
    console.log(
      `🕒 Поточний час сервера: ${new Date().toLocaleString('uk-UA')}`,
    );
  });
}
bootstrap().catch((e) => {
  // якщо onModuleInit зафейлиться — прийдеш сюди
  console.error('❌ Startup failed:', e);
  process.exit(1);
});

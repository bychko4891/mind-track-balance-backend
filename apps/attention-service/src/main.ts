import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
// import {AllExceptionsFilter} from "./common/filters/all-exceptions.filter";

process.env.TZ = process.env.TZ || 'Europe/Kiev';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT_NOTIFICATION') || 3005;
  // app.useGlobalFilters(new AllExceptionsFilter());
  // Підключаємо мікросервіс Kafka
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: configService.getOrThrow<string>('KAFKA_BROKERS').split(','),
        retry: {
          initialRetryTime: 300,
          retries: 8,
        },
      },
      consumer: {
        groupId: 'notification-service-consumer',
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(port);
}
bootstrap();

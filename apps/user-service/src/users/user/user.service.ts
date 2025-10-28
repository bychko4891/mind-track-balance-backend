import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';
import { UserCreatedEvent } from './events/user-create.event';
import { KAFKA_SERVICE } from '../../kafka/user-kafka.module';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    @Inject(KAFKA_SERVICE) private readonly kafkaClient: ClientKafka,
  ) {}

  @EventPattern('user_created')
  async handleUserCreated(@Payload() data: UserCreatedEvent) {
    console.log(
      '!!!!!!!!!!!!!!!!!!!!!!!!! ------ Received a new user_created event:',
      data,
    );

    // Тут ваша логіка:
    // - Створити профіль для нового користувача
    // - Записати дані в свою базу
    // - тощо

    this.kafkaClient.emit('send_welcome_mail', {
      to: data.email,
      email: data.email,
      serviceCodeUUID: data.serviceCodeUUID,
    });
  }

  // async someMethod(email: string) {
  //     const user = await this.repository.findByEmail(email);
  //     // ... якась логіка
  //     return user;
  // }
}

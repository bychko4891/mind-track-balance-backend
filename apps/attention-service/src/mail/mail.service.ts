import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SendUserEmailEvent } from './events/send-user-email.event';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  @EventPattern('send_welcome_mail')
  async sendWelcomeEmail(@Payload() event: SendUserEmailEvent) {
    await this.mailerService.sendMail({
      to: event.to,
      subject: 'Реєстрація на E-Learn!',
      template: 'welcome',
      context: {
        name: event.name,
        code: event.code,
      },
    });
  }

  async sendRawHtml(to: string, subject: string, html: string) {
    await this.mailerService.sendMail({
      to,
      subject,
      html,
    });
  }
}

import { Module } from '@nestjs/common';
import { join } from 'path';
import {MailService} from "./mail.service";
import { MailerModule } from '@nestjs-modules/mailer';
import {HandlebarsAdapter} from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: true,
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD,
                },
            },
            defaults: {
                from: `"MyApp" <${process.env.MAIL_USER}>`,
            },
            template: {
                dir: join(__dirname, 'templates'),
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
    ],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule {}

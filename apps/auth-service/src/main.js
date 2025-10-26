"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const config_1 = require("@nestjs/config");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
process.env.TZ = process.env.TZ || 'Europe/Kiev';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT_AUTH') || 3000;
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter());
    await app.listen(port, () => {
        console.log(`✅ Сервер успішно запущено на порту: ${port}`);
        console.log(`🕒 Поточний час сервера: ${new Date().toLocaleString('uk-UA')}`);
        console.log('BROKERS from env:', process.env.KAFKA_BROKERS);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
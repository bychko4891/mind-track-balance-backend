"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const auth_module_1 = require("../auth/auth.module");
const auth_user_entity_1 = require("../auth-user/auth-user.entity");
const auth_user_jwt_refresh_token_entity_1 = require("../auth-user/auth-user-jwt-refresh-token.entity");
const auth_user_module_1 = require("../auth-user/auth-user.module");
const rsa_key_module_1 = require("../rsa-key/rsa-key.module");
const rsa_key_entity_1 = require("../rsa-key/rsa-key.entity");
const path_1 = require("path");
const fs_1 = require("fs");
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';
console.log("dkflgkfd dflgk;fdgl fdg^ -->> " + envFile);
console.log("dirname: --> " + __dirname);
const envPath = (0, path_1.resolve)(__dirname, envFile);
if (!(0, fs_1.existsSync)(envPath)) {
    throw new Error(`❌ ENV файл ${envFile} не знайдено за шляхом: ${envPath}`);
}
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            rsa_key_module_1.RsaKeyModule,
            auth_user_module_1.AuthUserModule,
            passport_1.PassportModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: envPath,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (config) => {
                    console.log('🧪 config.get(DB_PASSWORD_AUTH):', config.get('DB_PASSWORD_AUTH'));
                    console.log('🧪 typeof:', typeof config.get('DB_PASSWORD_AUTH'));
                    return {
                        type: 'postgres',
                        host: config.get('DB_HOST'),
                        port: config.get('DB_PORT'),
                        username: config.get('DB_USERNAME_AUTH'),
                        password: config.get('DB_PASSWORD_AUTH'),
                        database: config.get('DB_NAME_AUTH'),
                        entities: [rsa_key_entity_1.RsaKey, auth_user_entity_1.AuthUser, auth_user_jwt_refresh_token_entity_1.AuthUserJwtRefreshToken],
                        synchronize: true,
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const jwtAuth_startegy_1 = require("../strategy/jwtAuth.startegy");
const rsa_key_module_1 = require("../rsa-key/rsa-key.module");
const auth_user_module_1 = require("../auth-user/auth-user.module");
const rsa_key_service_1 = require("../rsa-key/rsa-key.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            rsa_key_module_1.RsaKeyModule,
            auth_user_module_1.AuthUserModule,
            jwt_1.JwtModule.registerAsync({
                imports: [rsa_key_module_1.RsaKeyModule],
                inject: [rsa_key_service_1.RsaKeyService, config_1.ConfigService],
                useFactory: async (keyService, configService) => {
                    await keyService.onModuleInit();
                    return {
                        privateKey: keyService.getPrivateKey(),
                        publicKey: keyService.getPublicKey(),
                        signOptions: {
                            algorithm: 'RS256',
                            expiresIn: configService.get('JWT_ACCESS_EXPIRATION', '15m'),
                        },
                    };
                },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwtAuth_startegy_1.JwtAuthStrategy,],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map
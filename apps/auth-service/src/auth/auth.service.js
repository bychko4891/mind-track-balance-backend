"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcryptjs");
const auth_user_service_1 = require("../auth-user/auth-user.service");
const jwt_tokens_dto_1 = require("./dto/jwt-tokens.dto");
let AuthService = class AuthService {
    authUserService;
    jwtService;
    configService;
    saltRounds = 12;
    constructor(authUserService, jwtService, configService) {
        this.authUserService = authUserService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async login(loginDto) {
        const user = await this.authUserService.validateUser(loginDto.email, loginDto.password);
        const deletionTime = new Date();
        deletionTime.setDate(deletionTime.getDate() + 7);
        const tokens = await this._createTokens(user);
        user.jwtRefreshToken.deletionTime = deletionTime;
        user.jwtRefreshToken.deviceFingerprinting = loginDto.deviceFingerprinting;
        user.jwtRefreshToken.jwtRefreshToken = await this._hashJwtRefreshToken(tokens.refreshToken);
        await this.authUserService.saveUser(user);
        return tokens;
    }
    async _createTokens(user) {
        const payload = {
            sub: user.id,
            role: user.role,
        };
        const refreshTokenSecret = this.configService.get('JWT_REFRESH_SECRET');
        if (!refreshTokenSecret) {
            throw new Error('JWT_REFRESH_SECRET is missing in the environment configuration!');
        }
        const expiration = this.configService.get('JWT_REFRESH_EXPIRATION', '7d');
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                algorithm: 'RS256',
                expiresIn: expiration,
                audience: ['user-service', 'notification-service'],
                issuer: 'auth-service',
            }),
            this.jwtService.signAsync({ sub: user.id }, {
                secret: refreshTokenSecret,
                algorithm: 'HS256',
                expiresIn: expiration,
            }),
        ]);
        return (new jwt_tokens_dto_1.JwtTokensDto(accessToken, refreshToken));
    }
    async _hashJwtRefreshToken(refreshToken) {
        return await bcrypt.hash(refreshToken, this.saltRounds);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_user_service_1.AuthUserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
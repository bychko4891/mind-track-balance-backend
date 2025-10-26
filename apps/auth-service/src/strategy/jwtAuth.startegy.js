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
exports.JwtAuthStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const rsa_key_service_1 = require("../rsa-key/rsa-key.service");
let JwtAuthStrategy = class JwtAuthStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    rsaKeyService;
    constructor(rsaKeyService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKeyProvider: (request, rawJwtToken, done) => {
                const publicKey = this.rsaKeyService.getPublicKey();
                done(null, publicKey);
            },
        });
        this.rsaKeyService = rsaKeyService;
    }
    async validate(payload) {
        return { userId: payload.sub, role: payload.role };
    }
};
exports.JwtAuthStrategy = JwtAuthStrategy;
exports.JwtAuthStrategy = JwtAuthStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rsa_key_service_1.RsaKeyService])
], JwtAuthStrategy);
//# sourceMappingURL=jwtAuth.startegy.js.map
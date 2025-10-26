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
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const config_1 = require("@nestjs/config");
const jwks_rsa_1 = require("jwks-rsa");
const jwt = require("jsonwebtoken");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    configService;
    constructor(configService) {
        const jwksClient = new jwks_rsa_1.JwksClient({
            jwksUri: configService.getOrThrow('JWKS_URI'),
            cache: true,
            cacheMaxEntries: 5,
            cacheMaxAge: 86400000,
        });
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            algorithms: ['RS256'],
            secretOrKeyProvider: (request, rawJwtToken, done) => {
                const decodedToken = jwt.decode(rawJwtToken, { complete: true });
                if (!decodedToken || typeof decodedToken !== 'object') {
                    return done(new Error('Invalid token format'), "null");
                }
                const kid = decodedToken.header.kid;
                if (!kid) {
                    return done(new Error('Invalid token: missing key ID (kid) in header'), "null");
                }
                jwksClient.getSigningKey(kid, (err, key) => {
                    if (err) {
                        return done(err);
                    }
                    const signingKey = key?.getPublicKey();
                    done(null, signingKey);
                });
            },
        });
        this.configService = configService;
    }
    async validate(payload) {
        const expectedIssuer = this.configService.get('JWT_ISSUER');
        const expectedAudiences = (this.configService.get('JWT_AUDIENCE') || '')
            .split(',')
            .map(aud => aud.trim());
        if (payload.iss !== expectedIssuer) {
            throw new common_1.UnauthorizedException('Invalid token issuer');
        }
        const tokenAud = payload.aud;
        const isAudienceValid = Array.isArray(tokenAud)
            ? tokenAud.some(a => expectedAudiences.includes(a))
            : expectedAudiences.includes(tokenAud);
        if (!isAudienceValid) {
            throw new common_1.UnauthorizedException('Invalid token audience');
        }
        return {
            id: payload.sub,
            role: payload.role,
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], JwtStrategy);
//# sourceMappingURL=jwt.strategy.js.map
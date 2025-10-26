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
exports.AuthUserJwtRefreshToken = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const auth_user_entity_1 = require("./auth-user.entity");
let AuthUserJwtRefreshToken = class AuthUserJwtRefreshToken {
    id;
    jwtRefreshToken;
    deviceFingerprinting;
    user;
    deletionTime;
};
exports.AuthUserJwtRefreshToken = AuthUserJwtRefreshToken;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AuthUserJwtRefreshToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AuthUserJwtRefreshToken.prototype, "jwtRefreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AuthUserJwtRefreshToken.prototype, "deviceFingerprinting", void 0);
__decorate([
    (0, typeorm_2.OneToOne)(() => auth_user_entity_1.AuthUser, user => user.jwtRefreshToken),
    (0, typeorm_2.JoinColumn)(),
    __metadata("design:type", auth_user_entity_1.AuthUser)
], AuthUserJwtRefreshToken.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'timestamp' }),
    __metadata("design:type", Date)
], AuthUserJwtRefreshToken.prototype, "deletionTime", void 0);
exports.AuthUserJwtRefreshToken = AuthUserJwtRefreshToken = __decorate([
    (0, typeorm_1.Entity)("auth_user_jwt_refresh_tokens")
], AuthUserJwtRefreshToken);
//# sourceMappingURL=auth-user-jwt-refresh-token.entity.js.map
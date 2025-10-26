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
exports.AuthUser = void 0;
const typeorm_1 = require("typeorm");
const role_enum_1 = require("../../../../libs/common/src/enums/role.enum");
const typeorm_2 = require("typeorm");
const auth_user_jwt_refresh_token_entity_1 = require("./auth-user-jwt-refresh-token.entity");
let AuthUser = class AuthUser {
    id;
    uuid;
    email;
    password;
    active;
    serviceCode;
    serviceCodeUUID;
    role;
    jwtRefreshToken;
    createdAt;
};
exports.AuthUser = AuthUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AuthUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], AuthUser.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthUser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthUser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], AuthUser.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AuthUser.prototype, "serviceCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthUser.prototype, "serviceCodeUUID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: role_enum_1.Role,
        default: role_enum_1.Role.USER,
    }),
    __metadata("design:type", String)
], AuthUser.prototype, "role", void 0);
__decorate([
    (0, typeorm_2.OneToOne)(() => auth_user_jwt_refresh_token_entity_1.AuthUserJwtRefreshToken, jwtRefreshToken => jwtRefreshToken.user, {
        onDelete: "CASCADE",
        cascade: ["insert", "update", "remove"]
    }),
    __metadata("design:type", auth_user_jwt_refresh_token_entity_1.AuthUserJwtRefreshToken)
], AuthUser.prototype, "jwtRefreshToken", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], AuthUser.prototype, "createdAt", void 0);
exports.AuthUser = AuthUser = __decorate([
    (0, typeorm_1.Entity)("auth_users")
], AuthUser);
//# sourceMappingURL=auth-user.entity.js.map
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
exports.AuthUserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const uuid_1 = require("uuid");
const role_enum_1 = require("../../../../libs/common/src/enums/role.enum");
const auth_user_repository_1 = require("./auth-user.repository");
const auth_user_jwt_refresh_token_entity_1 = require("./auth-user-jwt-refresh-token.entity");
let AuthUserService = class AuthUserService {
    repository;
    saltRounds = 12;
    constructor(repository) {
        this.repository = repository;
    }
    async sighup(signupDto) {
        const hashPassword = await this._hashPassword(signupDto.password);
        const serviceCodeUUID = (0, uuid_1.v4)();
        const userUUID = (0, uuid_1.v4)();
        const user = await this.repository.createUser(userUUID, signupDto.email, hashPassword, false, serviceCodeUUID, role_enum_1.Role.USER);
        user.jwtRefreshToken = new auth_user_jwt_refresh_token_entity_1.AuthUserJwtRefreshToken();
        user.jwtRefreshToken.user = user;
        await this.repository.saveUser(user);
    }
    async validateUser(email, password) {
        const user = await this.repository.findOneByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        throw new common_1.UnauthorizedException("Не вірний логін або пароль");
    }
    async saveUser(user) {
        return await this.repository.saveUser(user);
    }
    async _hashPassword(password) {
        return await bcrypt.hash(password, this.saltRounds);
    }
};
exports.AuthUserService = AuthUserService;
exports.AuthUserService = AuthUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_user_repository_1.AuthUserRepository])
], AuthUserService);
//# sourceMappingURL=auth-user.service.js.map
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
exports.LoginDto = void 0;
const class_validator_1 = require("class-validator");
class LoginDto {
    email;
    password;
    deviceFingerprinting;
    constructor(email, password, deviceFingerprinting) {
        this.email = email;
        this.password = password;
        this.deviceFingerprinting = deviceFingerprinting;
    }
    toString() {
        return `LoginDto(email=${this.email}, password=${this.password}, deviceFingerprinting=${this.deviceFingerprinting})`;
    }
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email address required' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password must be a string' }),
    (0, class_validator_1.Length)(8, 72, { message: 'Password must be between 8 and 72 characters' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password must be a string' }),
    (0, class_validator_1.Length)(32, 32, { message: 'Device Fingerprinting must be between 32 characters' }),
    __metadata("design:type", String)
], LoginDto.prototype, "deviceFingerprinting", void 0);
//# sourceMappingURL=login.dto.js.map
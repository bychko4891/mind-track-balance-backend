"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsaKeyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rsa_key_entity_1 = require("./rsa-key.entity");
const rsa_key_service_1 = require("./rsa-key.service");
const rsa_key_repository_1 = require("./rsa-key.repository");
const well_known_controller_1 = require("./well-known.controller");
let RsaKeyModule = class RsaKeyModule {
};
exports.RsaKeyModule = RsaKeyModule;
exports.RsaKeyModule = RsaKeyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([rsa_key_entity_1.RsaKey])
        ],
        providers: [
            rsa_key_service_1.RsaKeyService,
            rsa_key_repository_1.RsaKeyRepository
        ],
        controllers: [well_known_controller_1.WellKnownController],
        exports: [rsa_key_service_1.RsaKeyService],
    })
], RsaKeyModule);
//# sourceMappingURL=rsa-key.module.js.map
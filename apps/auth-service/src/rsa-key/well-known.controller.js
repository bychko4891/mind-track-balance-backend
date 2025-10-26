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
exports.WellKnownController = void 0;
const common_1 = require("@nestjs/common");
const jose = require("jose");
const rsa_key_service_1 = require("./rsa-key.service");
let WellKnownController = class WellKnownController {
    rsaKeyService;
    constructor(rsaKeyService) {
        this.rsaKeyService = rsaKeyService;
    }
    async getJwks() {
        const currentKey = await this.rsaKeyService.getActiveKey();
        const publicKeyObject = await jose.importSPKI(currentKey.publicKey, 'RS256');
        const jwk = await jose.exportJWK(publicKeyObject);
        return {
            keys: [
                {
                    ...jwk,
                    kid: currentKey.id.toString(),
                    use: 'sig',
                    alg: 'RS256',
                },
            ],
        };
    }
};
exports.WellKnownController = WellKnownController;
__decorate([
    (0, common_1.Get)('jwks.json'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WellKnownController.prototype, "getJwks", null);
exports.WellKnownController = WellKnownController = __decorate([
    (0, common_1.Controller)('api/v1/jwks/.well-known'),
    __metadata("design:paramtypes", [rsa_key_service_1.RsaKeyService])
], WellKnownController);
//# sourceMappingURL=well-known.controller.js.map
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
var RsaKeyService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsaKeyService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const rsa_key_repository_1 = require("./rsa-key.repository");
let RsaKeyService = RsaKeyService_1 = class RsaKeyService {
    repository;
    logger = new common_1.Logger(RsaKeyService_1.name);
    publicKey;
    privateKey;
    constructor(repository) {
        this.repository = repository;
    }
    async getActiveKey() {
        const rsaKey = await this.repository.findLastRsaKey();
        if (rsaKey)
            return rsaKey;
        return await this._generateAndSaveKeys();
    }
    async onModuleInit() {
        this.logger.log('Initializing keys...');
        const keyFromDb = await this.repository.findLastRsaKey();
        if (keyFromDb) {
            this.logger.log('RSA keys found in database.');
            this.publicKey = keyFromDb.publicKey;
            this.privateKey = keyFromDb.privateKey;
        }
        else {
            this.logger.log('No RSA keys found. Generating a new pair...');
            await this._generateAndSaveKeys();
        }
    }
    async _generateAndSaveKeys() {
        const { publicKey, privateKey } = (0, crypto_1.generateKeyPairSync)('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        });
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        const dateOfRevoked = new Date();
        dateOfRevoked.setFullYear(dateOfRevoked.getFullYear() + 1);
        const newKey = await this.repository.createNewRsaKey(publicKey, privateKey, false, dateOfRevoked);
        this.logger.log('New RSA key pair has been generated and saved.');
        return await this.repository.saveRsaKey(newKey);
    }
    getPublicKey() {
        return this.publicKey;
    }
    getPrivateKey() {
        return this.privateKey;
    }
};
exports.RsaKeyService = RsaKeyService;
exports.RsaKeyService = RsaKeyService = RsaKeyService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rsa_key_repository_1.RsaKeyRepository])
], RsaKeyService);
//# sourceMappingURL=rsa-key.service.js.map
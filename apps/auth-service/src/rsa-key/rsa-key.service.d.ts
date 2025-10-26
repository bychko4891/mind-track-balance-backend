import { OnModuleInit } from '@nestjs/common';
import { RsaKeyRepository } from "./rsa-key.repository";
import { RsaKey } from "./rsa-key.entity";
export declare class RsaKeyService implements OnModuleInit {
    private readonly repository;
    private readonly logger;
    private publicKey;
    private privateKey;
    constructor(repository: RsaKeyRepository);
    getActiveKey(): Promise<RsaKey>;
    onModuleInit(): Promise<void>;
    private _generateAndSaveKeys;
    getPublicKey(): string;
    getPrivateKey(): string;
}

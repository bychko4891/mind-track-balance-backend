import { Repository } from "typeorm";
import { RsaKey } from "./rsa-key.entity";
export declare class RsaKeyRepository {
    private readonly rsaKeyRepository;
    constructor(rsaKeyRepository: Repository<RsaKey>);
    findLastRsaKey(): Promise<RsaKey | null>;
    createNewRsaKey(publicKey: string, privateKey: string, revoked: boolean, dateOfRevoked: Date): Promise<RsaKey>;
    saveRsaKey(rsaKey: RsaKey): Promise<RsaKey>;
}

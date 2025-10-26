import { RsaKeyService } from "./rsa-key.service";
export declare class WellKnownController {
    private readonly rsaKeyService;
    constructor(rsaKeyService: RsaKeyService);
    getJwks(): Promise<{
        keys: {
            kid: string;
            use: string;
            alg: string;
            crv?: string;
            d?: string;
            dp?: string;
            dq?: string;
            e?: string;
            ext?: boolean;
            k?: string;
            key_ops?: string[];
            kty?: string;
            n?: string;
            oth?: Array<{
                d?: string;
                r?: string;
                t?: string;
            }>;
            p?: string;
            q?: string;
            qi?: string;
            x?: string;
            y?: string;
            x5c?: string[];
            x5t?: string;
            'x5t#S256'?: string;
            x5u?: string;
        }[];
    }>;
}

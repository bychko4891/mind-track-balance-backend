import { AuthUser } from "./auth-user.entity";
export declare class AuthUserJwtRefreshToken {
    id: number;
    jwtRefreshToken: string;
    deviceFingerprinting: string;
    user: AuthUser;
    deletionTime: Date;
}

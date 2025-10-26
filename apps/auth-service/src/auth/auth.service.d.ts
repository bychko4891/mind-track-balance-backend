import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthUserService } from "../auth-user/auth-user.service";
import { LoginDto } from "./dto/login.dto";
import { JwtTokensDto } from "./dto/jwt-tokens.dto";
export interface TokenPayload {
    sub: number;
    role: string;
}
export declare class AuthService {
    private readonly authUserService;
    private readonly jwtService;
    private readonly configService;
    private readonly saltRounds;
    constructor(authUserService: AuthUserService, jwtService: JwtService, configService: ConfigService);
    login(loginDto: LoginDto): Promise<JwtTokensDto>;
    private _createTokens;
    private _hashJwtRefreshToken;
}

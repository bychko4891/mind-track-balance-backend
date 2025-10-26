export declare class JwtTokensDto {
    readonly accessToken: string;
    readonly refreshToken: string;
    constructor(accessToken: string, refreshTokens: string);
    toString(): string;
}

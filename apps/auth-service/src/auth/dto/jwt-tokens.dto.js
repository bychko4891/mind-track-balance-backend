"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokensDto = void 0;
class JwtTokensDto {
    accessToken;
    refreshToken;
    constructor(accessToken, refreshTokens) {
        this.accessToken = accessToken;
        this.refreshToken = refreshTokens;
        Object.freeze(this);
    }
    toString() {
        return `JwtTokensDto(accessToken=${this.accessToken}, refreshTokens=${this.refreshToken})`;
    }
}
exports.JwtTokensDto = JwtTokensDto;
//# sourceMappingURL=jwt-tokens.dto.js.map
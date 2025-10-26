"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialsException = void 0;
const common_1 = require("@nestjs/common");
class InvalidCredentialsException extends common_1.HttpException {
    constructor(errorMessage) {
        super(errorMessage, common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.InvalidCredentialsException = InvalidCredentialsException;
//# sourceMappingURL=invalid-credentials.exception.js.map
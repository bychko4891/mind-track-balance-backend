import { AuthUserRepository } from "./auth-user.repository";
import { SignupDto } from "./dto/signup.dto";
import { AuthUser } from "./auth-user.entity";
export declare class AuthUserService {
    private readonly repository;
    private readonly saltRounds;
    constructor(repository: AuthUserRepository);
    sighup(signupDto: SignupDto): Promise<void>;
    validateUser(email: string, password: string): Promise<AuthUser>;
    saveUser(user: AuthUser): Promise<AuthUser>;
    private _hashPassword;
}

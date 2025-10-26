import { Repository } from "typeorm";
import { Role } from "@app/common/enums/role.enum";
import { AuthUser } from "./auth-user.entity";
export declare class AuthUserRepository {
    private readonly authUserRepository;
    constructor(authUserRepository: Repository<AuthUser>);
    createUser(uuid: string, email: string, password: string, active: boolean, serviceCodeUUID: string, role: Role): Promise<AuthUser>;
    findOneByEmail(email: string): Promise<AuthUser | null>;
    saveUser(user: AuthUser): Promise<AuthUser>;
}

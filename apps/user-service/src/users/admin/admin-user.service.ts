import {Injectable} from "@nestjs/common";
import {AdminUserRepository} from "./admin-user.repository";


@Injectable()
export class AdminUserService {

    constructor(
        private readonly repository: AdminUserRepository
    ) {}

    async someMethod(email: string) {
        const user = await this.repository.findByEmail(email);
        // ... якась логіка
        return user;
    }
}
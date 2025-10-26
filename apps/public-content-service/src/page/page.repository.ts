import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {Page} from "./page.entity";


@Injectable()
export class PageRepository {
    constructor(
        @InjectRepository(Page)
        private readonly repository: Repository<Page>,
    ) {}

    // async findByEmail(email: string): Promise<User  | null> {
    //     return this.adminUserRepository.findOne({ where: { email } });
    // }
    //
    // async rawSQLExample(): Promise<any> {
    //     return this.authUserRepository.query('SELECT * FROM auth_users WHERE is_active = $1', [true]);
    // }
}
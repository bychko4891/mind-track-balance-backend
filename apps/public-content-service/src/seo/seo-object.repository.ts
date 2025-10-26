import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {SeoObject} from "./seo-object.entity";


@Injectable()
export class SeoObjectRepository {
    constructor(
        @InjectRepository(SeoObject)
        private readonly repository: Repository<SeoObject>,
    ) {}

    // async findByEmail(email: string): Promise<User  | null> {
    //     return this.adminUserRepository.findOne({ where: { email } });
    // }
    //
    // async rawSQLExample(): Promise<any> {
    //     return this.authUserRepository.query('SELECT * FROM auth_users WHERE is_active = $1', [true]);
    // }
}
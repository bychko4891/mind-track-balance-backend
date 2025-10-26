import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {PublicAudio} from "./public-audio.entity";


@Injectable()
export class PublicAudioRepository {
    constructor(
        @InjectRepository(PublicAudio)
        private readonly repository: Repository<PublicAudio>,
    ) {}

    // async findByEmail(email: string): Promise<User  | null> {
    //     return this.adminUserRepository.findOne({ where: { email } });
    // }
    //
    // async rawSQLExample(): Promise<any> {
    //     return this.authUserRepository.query('SELECT * FROM auth_users WHERE is_active = $1', [true]);
    // }
}
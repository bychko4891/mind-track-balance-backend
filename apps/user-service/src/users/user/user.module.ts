import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {UserService} from "./user.service";
import {UserRepository} from "./user.repository";
import {UserController} from "./user.controller";
import {UserKafkaModule} from "../../kafka/user-kafka.module";


@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        UserKafkaModule
    ],
    providers: [
        UserService,
        UserRepository
    ],
    controllers: [UserController],
    exports: [UserModule],
})
export class UserModule {}
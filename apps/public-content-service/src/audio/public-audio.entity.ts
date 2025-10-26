import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('public_audios')
export class PublicAudio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brAudioName: string;

    @Column()
    usaAudioName: string;

    @Column({nullable: false})
    storageId: number;

}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seo_objects")
export class SeoObject {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    h1: string;

    @Column()
    htmlTagTitle: string;

    @Column({ length: 360 })
    htmlTagDescription: string;
}
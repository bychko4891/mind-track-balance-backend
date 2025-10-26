import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category.entity";

@Entity('count_lessons')
export class CountLessons {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    wordsCount: number;

    @Column()
    lessonsCount: number;

    @OneToOne(() => Category, { eager: true, nullable: true })
    @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
    category!: Category | null;

}
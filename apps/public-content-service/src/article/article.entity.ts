/**
 * @author Anatolii Bychko
 * @application Learn English
 * @description My Description
 * @source https://github.com/bychko4891/learnenglish
 * @copyright 2025
 */

import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {PublicImage} from "../image/public-image.entity";
import {SeoObject} from "../seo/seo-object.entity";
import {Category} from "../category/category.entity";

@Entity("articles")
export class Article {
    @PrimaryGeneratedColumn('increment') // JPA GenerationType.IDENTITY
    id!: number;

    // Якщо у БД є тип uuid — можна: @Column({ type: 'uuid', unique: true })
    @Column({ type: "varchar", length: 255, nullable: true })
    uuid!: string;

    @Column({ type: 'text', nullable: true })
    description!: string | null;

    @OneToOne(() => SeoObject, { nullable: true })
    @JoinColumn({ name: 'seo_object_id', referencedColumnName: 'id' })
    seoObject!: SeoObject | null;

    @Column({ type: 'boolean', default: false })
    published!: boolean;

    @OneToOne(() => PublicImage, {
        cascade: true,
        eager: true,
        nullable: true,
    })
    @JoinColumn({ name: 'image_id', referencedColumnName: 'id' })
    image: PublicImage | null;

    @ManyToOne(() => Category, (category) => category.articles, {
        cascade: ['insert', 'update'],
        nullable: true,
    })
    @JoinColumn({ name: 'category_uuid', referencedColumnName: 'uuid' })
    category!: Category | null;
}
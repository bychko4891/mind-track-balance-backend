import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {CategoryPage} from "@app/common/enums/category-page.enum";
import {LessonWordsPageType} from "@app/common/enums/lesson-words-page-type.enum";
import {SeoObject} from "../seo/seo-object.entity";
import {PublicImage} from "../image/public-image.entity";
import {CountLessons} from "./count-lessons.entity";

@Entity({ name: 'categories' })
export class Category {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Index({ unique: true })
    @Column({ type: 'varchar', length: 255, nullable: false })
    uuid!: string;

    @Column({ type: 'varchar', length: 80, nullable: false })
    name!: string;

    @Index({ unique: true })
    @Column({ type: 'varchar', length: 36, nullable: false })
    url!: string;

    @Column({ type: 'int', default: 1000 })
    sortOrder!: number;

    @Column({ type: 'text', nullable: true })
    description!: string | null;

    @Column({ type: 'varchar', length: 1000, nullable: true })
    shortDescription!: string | null;

    @Column({ name: 'attention', type: 'varchar', length: 255, nullable: true })
    attentionText!: string | null;

    @OneToOne(() => SeoObject, { cascade: true, nullable: true })
    @JoinColumn({ name: 'seo_object_id', referencedColumnName: 'id' })
    seoObject!: SeoObject | null;

    @Column({ type: 'boolean', default: false })
    mainCategory!: boolean;

    @Column({ type: 'boolean', default: false })
    inMenu!: boolean;

    @Column({ type: 'boolean', default: false })
    subCategoryInMenu!: boolean;

    @Column({ type: 'boolean', default: false })
    activeCountLessons!: boolean;

    @OneToOne(() => PublicImage, { cascade: true, nullable: true })
    @JoinColumn({ name: 'image_id', referencedColumnName: 'id' })
    image!: PublicImage | null;

    @Column({ name: 'show_description_in_page', type: 'boolean', default: true })
    showDescriptionInPage!: boolean;

    // @JdbcTypeCode(SqlTypes.NAMED_ENUM) + @Enumerated(EnumType.STRING)
    @Column({
        name: 'category_pages',
        type: 'enum',
        enum: CategoryPage,
        enumName: 'category_page_enum', // Postgres: створить іменований тип
        nullable: false,
    })
    categoryPage!: CategoryPage;

    @Column({
        name: 'lesson_words_page_type',
        type: 'enum',
        enum: LessonWordsPageType,
        enumName: 'lesson_words_page_type_enum',
        nullable: true,
    })
    lessonWordsPageType!: LessonWordsPageType | null;

    @ManyToOne(() => Category, (c) => c.subcategories, {
        cascade: true,    // JPA: CascadeType.ALL
        eager: true,      // FetchType.EAGER
        nullable: true,
    })
    @JoinColumn({ name: 'parent_category_id', referencedColumnName: 'id' })
    parentCategory!: Category | null;

    @OneToMany(() => Category, (c) => c.parentCategory, {
        cascade: true,
        eager: true,                   // FetchType.EAGER
        orphanedRowAction: 'delete',   // аналог orphanRemoval = true (TypeORM ≥0.3)
    })
    subcategories!: Category[];

    @OneToOne(() => CountLessons, (cl) => cl.category, {
        cascade: true,
        eager: true,
        nullable: true,
    })
    countLessons!: CountLessons | null;

}
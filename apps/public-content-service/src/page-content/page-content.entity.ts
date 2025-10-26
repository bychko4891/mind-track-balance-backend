import {Column, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";
import {SeoObject} from "../seo/seo-object.entity";
import {PageType} from "@app/common/enums/page-type.enum";

@Entity("page_content")
export class PageContent {

    @Exclude() // аналог @JsonIgnore
    @PrimaryGeneratedColumn('increment') // GenerationType.IDENTITY
    id!: number;

    @Index({ unique: true })
    @Column({ type: 'varchar', length: 255, nullable: false })
    uuid!: string;

    @Column({ type: 'varchar', length: 1024, nullable: false })
    url!: string;

    @Column({ type: 'boolean', default: false })
    inMenu!: boolean;

    @OneToOne(() => SeoObject, { cascade: true, nullable: true })
    @JoinColumn({ name: 'seo_object_id', referencedColumnName: 'id' })
    seoObject!: SeoObject | null;

    // Postgres: enum з іменем (аналог "named enum")
    @Column({
        type: 'enum',
        enum: PageType,
        enumName: 'page_type', // створить тип "page_type"
        default: PageType.SIMPLE,
    })
    pageType!: PageType;

    @Exclude() // аналог @JsonIgnore (EAGER як у JPA)
    @OneToMany(
        () => PageContent,
        (content) => content.applicationPage,
        { eager: true },
    )
    appPageContents!: PageContent[];
}
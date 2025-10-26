import {Column, Entity, Index, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";
import {SeoObject} from "../seo/seo-object.entity";
import {Word} from "../word/word.entity";


@Entity({ name: 'dictionary_pages' })
export class DictionaryPage {
    @Exclude() // аналог @JsonIgnore
    @PrimaryGeneratedColumn('increment') // GenerationType.IDENTITY
    id!: number;

    // за потреби можна зробити тип uuid
    @Index()
    @Column({ type: 'varchar', length: 255, nullable: true })
    uuid!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name!: string | null;

    @Column({ type: 'text', nullable: true })
    description!: string | null;

    @Column({ type: 'text', nullable: true })
    partOfSpeech!: string | null;

    @Column({ type: 'boolean', default: false })
    published!: boolean;

    @Column({ name: 'category_uuid', type: 'varchar', length: 255, nullable: false })
    categoryUUID!: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    categoryName!: string;

    @OneToOne(() => Word, { nullable: true })
    @JoinColumn({ name: 'word_id', referencedColumnName: 'id' })
    word!: Word | null;

    @OneToOne(() => SeoObject, { cascade: true, nullable: true })
    @JoinColumn({ name: 'seo_object_id', referencedColumnName: 'id' })
    seoObject!: SeoObject| null;

//     @ManyToMany(
//         () => PhraseApplication,
//         (phrase) => phrase.dictionaryPages,
//         {
//             cascade: ['insert', 'update'], // JPA: PERSIST, MERGE
//         },
//     )
//     @JoinTable({
//         name: 'phrase_examples',
//         joinColumn: { name: 'dictionary_page_id', referencedColumnName: 'id' },
//         inverseJoinColumn: { name: 'phrase_application_id', referencedColumnName: 'id' },
//     })
//     phraseExamples!: PhraseApplication[];
}
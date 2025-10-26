import {Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";
import {WordFilter} from "@app/common/enums/word-enums/word-filter.enum";
import {WordType} from "@app/common/enums/word-enums/word-type.enum";
import {WordGroup} from "@app/common/enums/word-enums/word-group.enum";
import {WordLevel} from "@app/common/enums/word-enums/word-level.enum";
import {PublicImage} from "../image/public-image.entity";
import {PublicAudio} from "../audio/public-audio.entity";

@Entity({ name: 'words' })
export class Word {

    @Exclude() // аналог @JsonIgnore
    @PrimaryGeneratedColumn('increment') // GenerationType.IDENTITY
    id!: number;

    // Якщо у БД є тип uuid — можна: { type: 'uuid', default: () => 'uuid_generate_v4()' }
    @Index({ unique: false })
    @Column({ type: 'varchar', length: 255, nullable: true })
    uuid!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name!: string | null;

    @Column({ type: 'varchar', length: 250, nullable: true })
    translate!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    brTranscription!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    usaTranscription!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    irregularVerbPt!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    irregularVerbPp!: string | null;

    @Column({ type: 'boolean', default: true })
    activeURL!: boolean;

    @Column({ type: 'boolean', default: true })
    correctVerb!: boolean;

    @Column({
        type: 'enum',
        enum: WordType,
        enumName: 'word_type_enum',
        nullable: true,
    })
    wordType!: WordType | null;

    @Column({
        type: 'enum',
        enum: WordLevel,
        enumName: 'word_level_enum',
        nullable: true,
    })
    wordLevel!: WordLevel | null;

    @Column({
        type: 'enum',
        enum: WordFilter,
        enumName: 'word_filter_enum',
        nullable: true,
    })
    wordFilter!: WordFilter | null;

    @Column({
        type: 'enum',
        enum: WordGroup,
        enumName: 'word_group_enum',
        nullable: true,
    })
    wordGroup!: WordGroup | null;

    @OneToOne(() => PublicImage, { cascade: true, nullable: true })
    @JoinColumn({ name: 'image_id', referencedColumnName: 'id' })
    image!: PublicImage | null;

    @OneToOne(() => PublicAudio, { cascade: true, nullable: true })
    @JoinColumn({ name: 'audio_id', referencedColumnName: 'id' })
    audio!: PublicAudio | null;
}
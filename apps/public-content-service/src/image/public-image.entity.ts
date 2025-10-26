import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {CategoryPage} from "@app/common/enums/category-page.enum";
import {LessonWordsPageType} from "@app/common/enums/lesson-words-page-type.enum";
import {ImagePosition} from "@app/common/enums/image-position.enum";
import {Role} from "@app/common/enums/role.enum";

@Entity('public_images')
export class PublicImage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imageName: string;

    @Column()
    imageIconName: string;

    @Column({nullable: false})
    storageId: number;

    @Column()
    width: string;

    @Column()
    height: string;

    @Column({
        type: 'enum',
        enum: ImagePosition,
        default: ImagePosition.CENTER,
    })
     position: ImagePosition;

}
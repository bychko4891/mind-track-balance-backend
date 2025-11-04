import {
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ImageVariant } from './image-variant.entity';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @OneToMany(() => ImageVariant, (v) => v.image, {
    cascade: ['insert', 'update'],
    orphanedRowAction: 'delete',
    eager: true,
  })
  variants!: ImageVariant[];

  @CreateDateColumn()
  createdAt!: Date;
}

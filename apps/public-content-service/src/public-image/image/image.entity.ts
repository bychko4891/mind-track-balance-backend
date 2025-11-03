import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { BaseImage } from '../base-image/base-image.abstract';
import { PageBlock } from '../../page-block/page-block.entity';

@Entity('images')
export class Image extends BaseImage {
  @PrimaryColumn()
  uuid!: string;

  @Column({ nullable: false })
  imageName!: string;

  @Column({ nullable: false })
  bucket!: string;

  @ManyToOne(() => PageBlock, (b) => b.images, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'block_id', referencedColumnName: 'uuid' })
  block!: PageBlock;
}

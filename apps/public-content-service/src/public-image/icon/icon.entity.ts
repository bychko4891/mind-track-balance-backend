import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IconKey } from './icon-key.enum';
import { BaseImage } from '../base-image/base-image.abstract';
import { PageBlock } from '../../page-block/page-block.entity';

@Entity('icon_images')
export class IconImage extends BaseImage {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({
    type: 'enum',
    enum: IconKey,
    name: 'icon_key',
    nullable: false,
  })
  iconKey!: IconKey;

  @OneToOne(() => PageBlock, (b) => b.iconImage, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'block_id', referencedColumnName: 'uuid' }) // FK зберігається в icon_images
  block!: PageBlock;
}

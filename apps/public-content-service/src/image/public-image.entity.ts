import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MotionVariant } from '@app/common/enums/motion-variant.enum';
import { UiColorToken } from '@app/common/enums/ui-color-token.enum';
import { Position } from '@app/common/enums/position.enum';
import { PageBlock } from '../page-block/page-block.entity';

@Entity('public_images')
export class PublicImage {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  imageName!: string;

  @Column({ nullable: true })
  imageIconName: string | null = null;

  @Column({ nullable: false })
  storageId!: number;

  @Column({ type: 'int', default: 0 })
  widthPx: number;

  @Column({ type: 'int', default: 0 })
  heightPx: number;

  @Column({
    type: 'enum',
    enum: MotionVariant,
    default: MotionVariant.None,
  })
  motionVariant: MotionVariant = MotionVariant.None;

  @Column({
    type: 'enum',
    enum: Position,
    default: Position.Main,
  })
  position: Position = Position.Main;

  @Column({
    type: 'enum',
    enum: UiColorToken,
    enumName: 'ui_color_token',
    default: UiColorToken.Default,
  })
  color: UiColorToken = UiColorToken.Default;

  @ManyToOne(() => PageBlock, (b) => b.images, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'block_id', referencedColumnName: 'uuid' })
  block!: PageBlock;
}

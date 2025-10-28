import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UiColorToken } from '@app/common/enums/ui-color-token.enum';
import { PublicImage } from '../image/public-image.entity';
import { Page } from '../page/page.entity';
import { Orientation } from '@app/common/enums/orientation.enum';
import { MotionVariant } from '@app/common/enums/motion-variant.enum';
import { PageSection } from '@app/common/enums/page-section.enum';
import { SlotArea } from '@app/common/enums/slot-area.enum';
import { PageBlockTranslation } from './page-block-translation.entity';

@Index('idx_page_section_area_sort', ['page', 'section', 'area', 'sortOrder'])
@Entity('page_blocks')
export class PageBlock {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Index()
  @Column({ type: 'int', default: 0 })
  sortOrder: number = 0;

  @OneToMany(() => PageBlock, (b) => b.parent, {
    cascade: ['insert', 'update'],
    orphanedRowAction: 'delete',
  })
  children: PageBlock[] = [];

  @Index()
  @ManyToOne(() => PageBlock, (b) => b.children, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'uuid' })
  parent: PageBlock | null = null;

  @Index()
  @ManyToOne(() => Page, (p) => p.blocks, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'page_id', referencedColumnName: 'uuid' })
  page!: Page;

  @OneToMany(() => PublicImage, (image) => image.block, {
    cascade: ['insert', 'update'],
    orphanedRowAction: 'delete',
  })
  images: PublicImage[] = [];

  @Column({
    type: 'enum',
    enum: Orientation,
    enumName: 'orientation',
    default: Orientation.Horizontal,
  })
  orientation: Orientation = Orientation.Horizontal;

  @Column({
    type: 'enum',
    enum: MotionVariant,
    default: MotionVariant.None,
  })
  motionVariant: MotionVariant = MotionVariant.None;

  @Column({
    type: 'enum',
    enum: UiColorToken,
    default: UiColorToken.Default,
  })
  color: UiColorToken = UiColorToken.Default;

  @Column({
    type: 'enum',
    enum: PageSection,
    enumName: 'page_section',
    nullable: true,
  })
  section: PageSection | null = null;

  @Column({
    type: 'enum',
    enum: SlotArea,
    enumName: 'slot_area',
    nullable: true,
  })
  area: SlotArea | null = null;

  @OneToMany(() => PageBlockTranslation, (t) => t.block, {
    cascade: true,
  })
  translations: PageBlockTranslation[] = [];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;

  get slot(): string | null {
    return this.section && this.area ? `${this.section}.${this.area}` : null;
  }
}

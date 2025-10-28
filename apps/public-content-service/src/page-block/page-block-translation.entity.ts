import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PageBlock } from './page-block.entity';
import { Locale } from '@app/common/enums/locale.enum';

@Entity('page_block_translations')
@Index(['block', 'locale'], { unique: true })
export class PageBlockTranslation {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => PageBlock, (b) => b.translations, {
    onDelete: 'CASCADE',
  })
  block!: PageBlock;

  @Column({
    type: 'enum',
    enum: Locale,
  })
  locale!: Locale;

  @Column({ type: 'varchar', length: 80, nullable: true })
  name: string | null = null;

  @Column({ type: 'varchar', length: 400, nullable: true })
  shortDescription: string | null = null;

  @Column({ type: 'text', nullable: true })
  description: string | null = null;
}

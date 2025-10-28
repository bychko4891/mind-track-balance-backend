import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Page } from '../page/page.entity';
import { Locale } from '@app/common/enums/locale.enum';

@Entity('seo_objects')
@Index('uniq_seo_page_locale', ['page', 'locale'], { unique: true })
export class SeoObject {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column()
  h1: string;

  @Column()
  htmlTagTitle: string;

  @Column({ length: 360 })
  htmlTagDescription: string;

  @Index()
  @ManyToOne(() => Page, (p) => p.seoObjectTranslation, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'page_url', referencedColumnName: 'url' })
  page: Page;

  @Column({
    type: 'enum',
    enum: Locale,
  })
  locale!: Locale;
}

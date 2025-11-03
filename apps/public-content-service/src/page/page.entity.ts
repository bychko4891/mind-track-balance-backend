import {
  Column,
  CreateDateColumn,
  Entity, Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SeoObject } from '../seo/seo-object.entity';
import { PageBlock } from '../page-block/page-block.entity';

@Entity('pages')
@Index('idx_pages_in_menu', ['inMenu'])
@Index('idx_pages_in_header_menu', ['inHeaderMenu'])
export class Page {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string | null = null;

  @Column({ type: 'varchar', nullable: false, unique: true })
  url!: string;

  @Column({ type: 'boolean', default: false })
  inMenu: boolean = false;

  @Column({ type: 'boolean', default: false })
  inHeaderMenu: boolean = false;

  @OneToMany(() => SeoObject, (seo) => seo.page, {
    cascade: true,
  })
  seoObjectTranslation: SeoObject[];

  @OneToMany(() => PageBlock, (b) => b.page, {
    eager: true,
    cascade: true,
    // cascade: ['insert', 'update'],
  })
  blocks: PageBlock[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;
}

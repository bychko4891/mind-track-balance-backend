import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Image } from './image.entity';
import { ImageVariantKind } from './enum/image-variant-kind.enum';
import { ImageFormat } from './enum/image-format.enum';

@Entity('image_variants')
@Unique('uniq_bucket_key', ['bucket', 'imageName']) // один і той самий об’єкт у S3 має бути унікальним
@Index('idx_variant_kind', ['kind'])
@Index('idx_variant_image', ['image'])
export class ImageVariant {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @ManyToOne(() => Image, (img) => img.variants, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  image!: Image;

  // Де лежить файл
  @Column({ type: 'varchar', length: 128 })
  bucket!: string;

  // Повний ключ (з “псевдо-папками”): напр. 'pages/home/orig/uuid.jpg'
  @Column({ name: 'image_name', type: 'varchar', length: 512 })
  imageName!: string;

  // Корисно тримати і префікс, якщо часто фільтруєш за ним
  @Column({ type: 'varchar', length: 256, nullable: true })
  prefix: string | null = null;

  // Тип рендішну (для запитів типу “дай мені THUMB 640”)
  @Column({ type: 'enum', enum: ImageVariantKind })
  kind!: ImageVariantKind;

  // Формат і mime
  @Column({ type: 'enum', enum: ImageFormat })
  format!: ImageFormat;

  @Column({ name: 'mime_type', type: 'varchar', length: 64 })
  mimeType!: string; // напр. 'image/webp'

  // Габарити й “профіль” (для thumbs — ширина зазвичай ключова)
  @Column({ type: 'int', nullable: true })
  width: number | null = null;

  @Column({ type: 'int', nullable: true })
  height: number | null = null;

  // Для швидкої валідації/кешу
  @Column({ name: 'size_bytes', type: 'bigint', nullable: true })
  sizeBytes: number | null = null;

  // Опційні атрибути з S3/MinIO
  @Column({ type: 'varchar', length: 128, nullable: true })
  etag: string | null = null;

  // Напр., 'w640' / 'w1280' / '2x' — для семантики
  @Column({ type: 'varchar', length: 64, nullable: true })
  profile: string | null = null;
}

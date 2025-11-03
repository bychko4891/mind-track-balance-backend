import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ type: 'varchar', length: 80, name: 'image_name', nullable: false })
  imageName!: string;

  @Column({ type: 'varchar', length: 80, name: 'preview_image_name' })
  previewImageName: string;

  @Column({ type: 'varchar', nullable: false })
  bucket!: string;
}

import { Photo } from 'src/photo/photo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Photo, (photo) => photo.information, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  photo: Photo;
  @Column()
  photoId: number;
}

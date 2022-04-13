import { Photo } from 'src/photo/photo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Photo, (photo) => photo.likes, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn()
  photo: Photo;
  @Column()
  photoId: number;
}

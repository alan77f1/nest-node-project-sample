import { Information } from 'src/information/information.entity';
import { Like } from 'src/like/like.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Like, (like) => like.photo)
  likes: Like[];

  @OneToOne(() => Information, (information) => information.photo, {
    cascade: ['insert'],
  })
  information: Information;
}

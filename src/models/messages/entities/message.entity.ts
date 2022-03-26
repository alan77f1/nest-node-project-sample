import { IMessage } from '../interfaces/message.interface';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'messages' })
export class Message implements IMessage {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'conversation_id', nullable: true })
  conversation_id: number;

  @Column({ name: 'user_id', nullable: true })
  user_id: number;

  @Column({ default: false })
  status: boolean;

  @Column({ name: 'message', length: 255 })
  message: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date;
}

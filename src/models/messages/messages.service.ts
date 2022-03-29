import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessagesRepository } from './messages.repository';
import { MessageEntity } from './serializers/message.serializer';
import { Message } from './entities/message.entity';
import { CreateMessage } from './interfaces/message.interface';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessagesRepository)
    private messagesRepository: MessagesRepository,
  ) {}

  async findAll(
    relations: string[] = [],
    throwsException = false,
  ): Promise<MessageEntity[]> {
    return await this.messagesRepository.getAllEntity(
      relations,
      throwsException,
    );
  }

  async create(inputs: CreateMessage): Promise<MessageEntity> {
    return await this.messagesRepository.createEntity(inputs);
  }

  async findById(
    id: number,
    relations: string[] = [],
    throwsException = false,
  ): Promise<MessageEntity> {
    return await this.messagesRepository.getEntityById(
      id,
      relations,
      throwsException,
    );
  }

  async update(
    message: MessageEntity,
    inputs: Message,
  ): Promise<MessageEntity> {
    return await this.messagesRepository.updateEntity(message, inputs);
  }

  async deleteById(id: number): Promise<boolean> {
    return await this.messagesRepository.deleteEntityById(id);
  }
}

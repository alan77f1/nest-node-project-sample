import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Like } from './like.entity';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepo: Repository<Like>,
  ) {}

  async findAll(): Promise<Like[]> {
    return await this.likeRepo.find();
  }

  async findOne(id: number): Promise<Like> {
    return await this.likeRepo.findOne(id);
  }

  async create(like: Like): Promise<Like> {
    return await this.likeRepo.save(like);
  }

  async update(like: Like): Promise<UpdateResult> {
    return await this.likeRepo.update(like.id, like);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.likeRepo.delete(id);
  }
}

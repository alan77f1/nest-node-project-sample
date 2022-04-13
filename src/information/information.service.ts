import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Information } from './information.entity';

@Injectable()
export class InformationService {
  constructor(
    @InjectRepository(Information)
    private readonly informationRepo: Repository<Information>,
  ) {}

  async findAll(): Promise<Information[]> {
    return await this.informationRepo.find();
  }

  async findOne(id: number): Promise<Information> {
    return await this.informationRepo.findOne(id);
  }

  async create(information: Information): Promise<Information> {
    return await this.informationRepo.save(information);
  }

  async update(information: Information): Promise<UpdateResult> {
    return await this.informationRepo.update(information.id, information);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.informationRepo.delete(id);
  }
}

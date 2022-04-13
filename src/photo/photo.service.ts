import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepo: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepo.find();
  }

  async findOne(id: number): Promise<Photo> {
    return await this.photoRepo.findOne(id);
  }

  async create(Photo: Photo): Promise<Photo> {
    return await this.photoRepo.save(Photo);
  }

  async update(Photo: Photo): Promise<UpdateResult> {
    return await this.photoRepo.update(Photo.id, Photo);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.photoRepo.delete(id);
  }
}

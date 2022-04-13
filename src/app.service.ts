import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Information } from './information/information.entity';
import { Like } from './like/like.entity';
import { Photo } from './photo/photo.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Photo) private photoRepo: Repository<Photo>, // @InjectRepository(Information) private inforRepo: Repository<Information>,
  ) // @InjectRepository(Like) private likeRepo: Repository<Like>,
  {}

  async createData() {
    // const like1 = this.likeRepo.create({ nameLike: 'like 1', photoId: 1 });
    // const like2 = this.likeRepo.create({ nameLike: 'like 2', photoId: 1 });
    // const like3 = this.likeRepo.create({ nameLike: 'like 3', photoId: 2 });
    // const photo1 = this.photoRepo.create({ namePhoto: 'photo 1' });
    // const photo2 = this.photoRepo.create({ namePhoto: 'photo 2' });
    // const photo3 = this.photoRepo.create({ namePhoto: 'photo 3' });
    // const infor1 = this.inforRepo.create({
    //   nameInfo: 'information 1',
    //   photoId: 1,
    // });
    // const infor2 = this.inforRepo.create({
    //   nameInfo: 'information 2',
    //   photoId: 2,
    // });
    // const infor3 = this.inforRepo.create({
    //   nameInfo: 'information 3',
    //   photoId: 3,
    // });
    // infor1.photo = photo1;
    // infor2.photo = photo2;
    // infor3.photo = photo3;
    // like1.photo = photo1;
    // like2.photo = photo1;
    // like3.photo = photo2;
    // await this.photoRepo.save(photo1);
    // await this.photoRepo.save(photo2);
    // await this.photoRepo.save(photo3);
    // await this.inforRepo.save(infor1);
    // await this.inforRepo.save(infor2);
    // await this.inforRepo.save(infor3);
    // await this.likeRepo.save(like1);
    // await this.likeRepo.save(like2);
    // await this.likeRepo.save(like3);
    // return 'create database successly';
  }

  async getAllPhoto() {
    const result = await this.photoRepo
      .createQueryBuilder('photo')
      .leftJoinAndSelect('photo.information', 'information')
      .leftJoinAndSelect('photo.likes', 'likes')
      .getMany();
    return result;
  }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Like } from './like.entity';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get()
  findAll(): Promise<Like[]> {
    return this.likeService.findAll();
  }

  @Get(':id')
  get(@Param() params) {
    return this.likeService.findOne(params.id);
  }

  @Post()
  create(@Body() like: Like) {
    return this.likeService.create(like);
  }

  @Put()
  update(@Body() like: Like) {
    return this.likeService.update(like);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.likeService.delete(params.id);
  }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { Like } from './like.entity';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @ApiOkResponse({ type: Like, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  findAll(): Promise<Like[]> {
    return this.likeService.findAll();
  }

  @ApiOkResponse({ type: Like, description: 'the Like' })
  @ApiNotFoundResponse()
  @Get(':id')
  get(@Param() params) {
    return this.likeService.findOne(params.id);
  }

  @ApiCreatedResponse({ type: Like })
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

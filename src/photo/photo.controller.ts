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
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}
  @ApiOkResponse({ type: Photo, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @ApiOkResponse({ type: Photo, description: 'the photo' })
  @ApiNotFoundResponse()
  @Get(':id')
  get(@Param() params) {
    return this.photoService.findOne(params.id);
  }

  @ApiCreatedResponse({ type: Photo })
  @Post()
  create(@Body() photo: Photo) {
    return this.photoService.create(photo);
  }

  @Put()
  update(@Body() photo: Photo) {
    return this.photoService.update(photo);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.photoService.delete(params.id);
  }
}

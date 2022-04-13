import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Information } from './information.entity';
import { InformationService } from './information.service';

@Controller('information')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Get()
  findAll(): Promise<Information[]> {
    return this.informationService.findAll();
  }

  @Get(':id')
  get(@Param() params) {
    return this.informationService.findOne(params.id);
  }

  @Post()
  create(@Body() information: Information) {
    return this.informationService.create(information);
  }

  @Put()
  update(@Body() information: Information) {
    return this.informationService.update(information);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.informationService.delete(params.id);
  }
}

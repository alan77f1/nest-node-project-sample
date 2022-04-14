import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { Information } from './information.entity';
import { InformationService } from './information.service';

@Controller('information')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}
  @ApiOkResponse({ type: Information, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  findAll(): Promise<Information[]> {
    return this.informationService.findAll();
  }

  @ApiOkResponse({ type: Information, description: 'the Information' })
  @ApiNotFoundResponse()
  @Get(':id')
  get(@Param() params) {
    return this.informationService.findOne(params.id);
  }

  @ApiCreatedResponse({ type: Information })
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

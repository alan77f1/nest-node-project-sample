import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('create')
  // generate() {
  //   return this.appService.createData();
  // }

  @Get()
  getPhoto() {
    return this.appService.getAllPhoto();
  }
}

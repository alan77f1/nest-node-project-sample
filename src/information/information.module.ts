import { Module } from '@nestjs/common';
import { InformationService } from './information.service';
import { InformationController } from './information.controller';
import { Information } from './information.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Information])],
  providers: [InformationService],
  controllers: [InformationController],
  exports: [TypeOrmModule],
})
export class InformationModule {}

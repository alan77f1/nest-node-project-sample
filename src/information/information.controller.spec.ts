import { Test, TestingModule } from '@nestjs/testing';
import { InformationController } from './information.controller';
import { InformationService } from './information.service';

describe('InformationController', () => {
  let controller: InformationController;

  const mockInformationService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InformationController],
    })
      .overrideProvider(InformationService)
      .useValue(mockInformationService)
      .compile();

    controller = module.get<InformationController>(InformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

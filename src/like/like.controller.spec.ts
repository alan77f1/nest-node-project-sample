import { Test, TestingModule } from '@nestjs/testing';
import { PhotoService } from 'src/photo/photo.service';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';

describe('LikeController', () => {
  let controller: LikeController;

  const mockLikeService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikeController],
    })
      .overrideProvider(LikeService)
      .useValue(mockLikeService)
      .compile();

    controller = module.get<LikeController>(LikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PostResolvers } from './post.resolvers';

describe('PostResolver', () => {
  let resolver: PostResolvers;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostResolvers],
    }).compile();

    resolver = module.get<PostResolvers>(PostResolvers);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

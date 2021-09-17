import { Module } from '@nestjs/common';
import { PostResolvers } from "./resolvers/post.resolvers";
import { PostService } from './services/post.service';
import { PrismaService } from './services/prisma.service';

@Module({
  providers: [PostResolvers, PostService, PrismaService],
})
export class PostModule {}
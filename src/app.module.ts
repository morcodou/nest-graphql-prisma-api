import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { PostsService } from './services/posts.service';
import { PostResolvers } from './resolvers/post.resolvers';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, PostsService, PostResolvers],
})
export class AppModule {}

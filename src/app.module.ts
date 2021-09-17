import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/posts.module';

@Module({
  imports: [
    PostModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule { }

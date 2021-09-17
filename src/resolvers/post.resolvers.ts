import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { NewPost, UpdatePost } from 'src/graphql';
import { PostsService } from 'src/services/posts.service';

@Resolver('Post')
export class PostResolvers {
    constructor(private readonly postService: PostsService) {
    }

    @Query('post')
    async post(@Args('id') args: string) {
        this.postService.post(args);
    }

    @Query('posts')
    async posts() {
        this.postService.posts();
    }

    @Mutation('createPost')
    async create(@Args('input') args: NewPost) {
        this.postService.createPost(args);
    }

    @Mutation('updatePost')
    async update(@Args('input') args: UpdatePost) {
        this.postService.updatePost(args);
    }

    @Mutation('deletePost')
    async delete(@Args('id') args: string) {
        this.postService.delete(args);
    }
}

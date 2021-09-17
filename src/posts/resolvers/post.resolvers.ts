import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { NewPost, UpdatePost } from 'src/graphql';
import { PostService } from 'src/posts/services/post.service';

@Resolver('Post')
export class PostResolvers {
    constructor(private readonly postService: PostService) {
    }

    @Query('post')
    async post(@Args('id') args: string) {
        return this.postService.post(args);
    }

    @Query('posts')
    async posts() {
        return this.postService.posts();
    }

    @Mutation('createPost')
    async create(@Args('input') args: NewPost) {
        return this.postService.createPost(args);
    }

    @Mutation('updatePost')
    async update(@Args('input') args: UpdatePost) {
        return this.postService.updatePost(args);
    }

    @Mutation('deletePost')
    async delete(@Args('id') args: string) {
        return this.postService.delete(args);
    }
}

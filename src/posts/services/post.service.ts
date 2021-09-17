import { Post } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { NewPost, UpdatePost } from 'src/graphql';
import { PrismaService } from './prisma.service';

@Injectable()
export class PostService {

    constructor(private prisma: PrismaService) {
    }

    // Get a single post
    async post(id: string): Promise<Post | null> {
        return this.prisma.post.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    }

    // Get all posts
    async posts(): Promise<Post[]> {
        return this.prisma.post.findMany({});
    }

    // Create a post
    async createPost(input: NewPost): Promise<Post> {
        return this.prisma.post.create({
            data: input
        });
    }

    // update a post
    async updatePost(params: UpdatePost): Promise<Post> {
        const { id, title, content, published } = params;

        return this.prisma.post.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...(published && { published }),
                ...(title && { title }),
                ...(content && { content }),
            }
        });
    }


    // delete a post
    async delete(id: string): Promise<Post> {
        return this.prisma.post.delete({
            where: {
                id: parseInt(id)
            }
        });
    }
}

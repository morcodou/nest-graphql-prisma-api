
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewPost {
    title: string;
    content: string;
}

export class UpdatePost {
    id: string;
    title: string;
    content: string;
    published: boolean;
}

export class Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: string;
}

export abstract class IQuery {
    abstract posts(): Post[] | Promise<Post[]>;

    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

export abstract class IMutation {
    abstract createPost(post?: Nullable<NewPost>): Post | Promise<Post>;

    abstract UpdatePost(post?: Nullable<UpdatePost>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract deletePost(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

type Nullable<T> = T | null;

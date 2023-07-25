export const repostSchema = `
@public
collection Repost {
	id: string;
	author: User;
	post: Post;
	createdAt: number;
	body?: string;

	constructor(id: string, author: User, post: Post, createdAt: number, body?: string){
		this.id = id;
		this.author = author;
		this.post = post;
		this.createdAt = createdAt;
		this.body = body;
	}

	setBody(b: string) {
		this.body = b;
	}

	del() {
		selfdestruct();
	}
}

`

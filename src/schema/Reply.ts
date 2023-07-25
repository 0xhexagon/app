export const replySchema = `
@public
collection Reply {
	id: string;
	author: User;
	post: Post;
	body: string;
	createdAt: number;
	assets?: string[];

	constructor(id: string, author: User, post: Post, body: number, createdAt: number, assets?: string[]){
		this.id = id;
		this.author = author;
		this.post = post;
		this.body = body;
		this.createdAt = createdAt;
		this.assets = assets;
	}

	del() {
		selfdestruct();
	}
}

`

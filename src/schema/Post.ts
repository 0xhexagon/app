export const postSchema = `
@public
collection Post {
	id: string;
	author: User;
	createdAt: number;
	body: string;
	community?: Community;
	type: string;
	nsfw: boolean;
	assets?: string[];

	@index(createdAt, author);

	constructor(id: string, author: User, createdAt: number, body: string, type: string, nsfw?: boolean, assets?: string[], community?: Community){
		this.id = id;
		this.author = author;
		this.createdAt = createdAt;
		this.body = body;
		this.community = community;
		this.type = type || 'public';
		this.nsfw = nsfw || false;
		this.assets = assets;
	}

	setBody(b: string) {
		this.body = b;
	}
	setNsfw(value: boolean) {
		this.nsfw = value;
	}
	del() {
		selfdestruct();
	}
}

`

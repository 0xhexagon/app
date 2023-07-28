export class User {
	id: string
	publicKey: string
	name: string
	username: string
	bio?: string
	profileNft?: string
	poaps?: string[]

	constructor() {
		this.id = ''
		this.publicKey = ''
		this.name = ''
		this.username = ''
	}
}

export interface IPost {
	id: string;
	author: any;
	createdAt: number;
	body: string;
	community?: any;
	type: string;
	nsfw: boolean;
	assets?: string[];
}

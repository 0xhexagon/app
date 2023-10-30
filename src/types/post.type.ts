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

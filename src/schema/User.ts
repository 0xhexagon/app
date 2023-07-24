export const userSchema = `
@public
collection User {
	id: string;
	publicKey: PublicKey;
	name: string;
	username: string;
	profileNft?: string;
	poaps?: string[];

	constructor(name: string, username: string, profileNft?: string) {
		this.id = ctx.publicKey.toHex();
		this.publicKey = ctx.publicKey;
		this.name = name;
		this.username = username;
		this.profileNft = profileNft || [];
		this.poaps = [];
		this.following = [];
	}

	setName (name: string) {
		this.name = name;
	}

	setUsername (username: string) {
		this.username = username;
	}

	setProfileNft (cid: string) {
		this.profileNft = cid;
	}

	setPoaps (poaps: string[]) {
		this.poaps = poaps;
	}
}

`

export const userSchema = `
@public
collection User {
	id: string;
	publicKey: PublicKey;
	name: string;
	username: string;
	profileNft?: string;
	poaps?: string[];

	@index(name, username);

	constructor(id: string, name: string, username: string, profileNft?: string) {
		this.id = id;
		this.publicKey = ctx.publicKey;
		this.name = name;
		this.username = username;
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

	del () {
		selfdestruct();
	}
}

`

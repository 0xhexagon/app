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

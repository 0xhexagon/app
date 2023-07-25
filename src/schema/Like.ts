export const likeSchema = `
@public
collection Like {
	id: string;
	user: User;
	target: string;

	constructor(user: User, target: string) {
		this.user = user;
		this.target = target;
	}

	del () {
		selfdestruct();	
	}
}

`

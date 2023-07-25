export const reportSchema = `
@public
collection Report {
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

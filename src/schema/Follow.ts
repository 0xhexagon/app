export const followSchema = `
@public
collection Follow {
	id: string;
	follower: User;
	followee: User;

	constructor(follower: User, followee: User) {
		this.follower = follower;
		this.followee = followee;
	}

	del () {
		selfdestruct();	
	}
}

`

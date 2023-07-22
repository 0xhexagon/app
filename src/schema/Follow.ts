export const followSchema = `
collection Follow {
	id: string;
	follower: string;
	followee: string;

	constructor(follower: string, followee: string) {
		this.follower = follower;
		this.followee = followee;
	}

	del () {
		selfdestruct();	
	}
}

`

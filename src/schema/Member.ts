export const memberSchema = `
@public
collection Member {
	id: string;
	community: Community;
	member: User;
	role: string;
	accepted?: boolean;

	constructor(id: string, community: Community, member: User, accepted?: boolean) {
		this.id = id;
		this.community = community;
		this.member = member;
		this.accepted = accepted;
		this.role = 'member';
	}

	setRole(role: string) {
		this.role = role;	
	}
	accept() {
		this.accepted = true;
	}

	del () {
		selfdestruct();	
	}
}

`

export const communitySchema = `
@public
collection Community {
	id: string;
	name: string;
	username: string;
	profilePhoto?: string;
	description: string;
	type: string;

	constructor(name: string, username: string, type: string, description: string, profilePhoto?: string) {
		this.id = id;
		this.name = name;
		this.username = username;
		this.profilePhoto = profilePhoto;
		this.description = description;
		this.type = type || 'public';
	}

	setName(name: string) {
		this.name = name;
	}
	setUsername(username: string) {
		this.username = username;
	}
	setProfilePhoto(photo: string) {
		this.profilePhoto = photo;
	}
	setDescription(description: string) {
		this.description = description;
	}
	setType(t: string) {
		if(t != 'public' && t != 'restricted' && t != 'private') {
			throw error('Error: ' + t + 'is not a valid community type');
		}
		this.type = t;
	}

	del() {
		selfdestruct();
	}
}

`

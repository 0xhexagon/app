import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, SearchbarCustomEvent } from '@ionic/react';
import { useState } from 'react';

const Search: React.FC = () => {

	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])
	const [communities, setCommunities] = useState([])
	const [posts, setPosts] = useState([])

	const getUsers = async (query: string) => {

	}

	const getCommunities = async (query: string) => {

	}

	const getPosts = async (query: string) => {

	}

	const search = async ({ target }: SearchbarCustomEvent) => {
		const { value } = target
		if (!value) return
		setLoading(true)

		console.log(value)
		// query users, communities and posts
		const [foundUsers, foundCommunities, foundPosts] = await Promise.all([
			getUsers(value),
			getCommunities(value),
			getPosts(value)
		])

		setLoading(false)
		setUsers([...foundUsers])
		setCommunities([...foundCommunities])
		setPosts([...foundPosts])

		console.log({ foundUsers, foundCommunities, foundPosts })
	}
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonTitle>Discover</IonTitle>
				</IonToolbar>
				<IonToolbar style={{ padding: '0 10px' }}>
					<IonSearchbar animated debounce={100} enterkeyhint='search' onInput={() => setLoading(true)} onIonInput={search} ></IonSearchbar>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				{loading
					? <>
						<h1>loading results...</h1>
					</>
					: users.length || communities.length || posts.length 
					? <IonList>
						{users.length ?
							<>
								<IonListHeader>Users</IonListHeader>
								{users.map((user, index) => (
									<IonItem routerLink={`/user/${user.data.id}`} key={index}>
										<IonAvatar className='ion-margin-end'>
											<img alt={`${user.data.name} profile picture`} src="https://ionicframework.com/docs/img/demos/avatar.svg" />
										</IonAvatar>
										{/*Add username*/}
										<IonLabel>{user.data.name}</IonLabel>
									</IonItem>
								))}
							</> : ''
						}
						{communities.length ?
							<>
								<IonListHeader>Communities</IonListHeader>
								{communities.map((community, index) => (
									<IonItem key={index}>
										<IonLabel key={index}>{community.data.name}</IonLabel>
									</IonItem>
								))}
							</> : ''
						}
						{posts.length ?
							<>
								<IonListHeader>Posts</IonListHeader>
								{posts.map((post, index) => (
									<IonItem key={index}>
										<IonLabel key={index}>{post.data.body}</IonLabel>
									</IonItem>
								))}
							</> : ''
						}
					</IonList>
					: <h1 className='ion-padding'>* discover component *</h1>

				}
			</IonContent>

		</IonPage>
	);
};

export default Search

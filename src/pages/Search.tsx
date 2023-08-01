import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, SearchbarCustomEvent } from '@ionic/react';
import { CollectionRecordResponse } from '@polybase/client';
import { usePolybase } from '@polybase/react';
import { FormEvent, useState } from 'react';

const Search: React.FC = () => {
	const polybase = usePolybase()

	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState<CollectionRecordResponse<any, any>[]>([])
	const [communities, setCommunities] = useState<CollectionRecordResponse<any, any>[]>([])
	const [posts, setPosts] = useState<CollectionRecordResponse<any, any>[]>([])

	const getUsers = async (query: string) => {
		const { data: byNameResults } = await polybase
			.collection('User')
			.where('name', '>=', query)
			.get()

		const { data: byUsernameResults } = await polybase
			.collection('User')
			.where('username', '>=', query)
			.get()

		return [...byNameResults, ...byUsernameResults]
	}

	const getCommunities = async (query: string) => {
		const { data } = await polybase
			.collection('Community')
			.where('name', '>=', query)
			.get()

		return data
	}

	const getPosts = async (query: string) => {
		const { data } = await polybase
			.collection('Post')
			.where('body', '>=', query)
			.get()

		return data
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
					<IonSearchbar animated debounce={2000} enterkeyhint='search' onInput={() => setLoading(true)} onIonInput={search} ></IonSearchbar>
				</IonToolbar>
			</IonHeader>

			<IonContent className='ion-padding'>
				{loading
					? <>
						<h1>loading results...</h1>
					</>
					:
					<IonList>
						<IonListHeader>Users</IonListHeader>
						{users.map((user, index) => (
							<IonItem key={index}>
								<IonAvatar>
									<img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
								</IonAvatar>
								<IonLabel key={index}>{user.data.name}</IonLabel>
							</IonItem>
						))}
						<IonListHeader>Communities</IonListHeader>
						{communities.map((community, index) => (
							<IonItem key={index}>
								<IonLabel key={index}>{community.data.name}</IonLabel>
							</IonItem>
						))}
						<IonListHeader>Posts</IonListHeader>
						{posts.map((post, index) => (
							<IonItem key={index}>
								<IonLabel key={index}>{post.data.body}</IonLabel>
							</IonItem>
						))}
					</IonList>

				}
			</IonContent>

		</IonPage>
	);
};

export default Search

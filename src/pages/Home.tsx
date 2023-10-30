import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PostList from '../components/PostList';

const Home: React.FC = () => {
	// get all posts

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Feed</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<PostList query={query} />
			</IonContent>
		</IonPage>
	);
};

export default Home

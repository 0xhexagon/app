import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PostList from '../components/PostList';
import { usePolybase } from '@polybase/react';

const Home: React.FC = () => {
	const polybase = usePolybase()
	const query = polybase.collection('Post').sort('createdAt', 'desc')

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

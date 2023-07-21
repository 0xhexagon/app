import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Post from '../components/Post';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Feed</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<Post id='1' commented/>
				<Post id='2'/>
				<Post id='3'/>
				<Post id='4'/>
				<Post id='5'/>
			</IonContent>
		</IonPage>
	);
};

export default Home

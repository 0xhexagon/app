import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Thread from '../components/Thread';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Feed</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<Thread />
			</IonContent>
		</IonPage>
	);
};

export default Home

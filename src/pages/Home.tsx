import { IonCard, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
				<Thread id='1'/>
				<Thread id='2'/>
				<Thread id='3'/>
				<Thread id='4'/>
				<Thread id='5'/>
			</IonContent>
		</IonPage>
	);
};

export default Home

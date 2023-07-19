import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

const Search: React.FC = () => {
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonTitle>Discover</IonTitle>
				</IonToolbar>
				<IonToolbar style={{ padding: '0 10px' }}>
					<IonSearchbar></IonSearchbar>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				
			</IonContent>

		</IonPage>
	);
};

export default Search

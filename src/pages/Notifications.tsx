import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const sampleNotifications = ['sample', 'hello', 'test']

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
		<IonList>
			<IonListHeader>Today</IonListHeader>
			{sampleNotifications.map(element => (
				<IonItem>
					<IonAvatar slot="start">
						<img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
					</IonAvatar>
					<IonLabel>{element}</IonLabel>
				</IonItem>
			))}
			<IonListHeader>Yesterday</IonListHeader>
			{sampleNotifications.map(element => (
				<IonItem>
					<IonAvatar slot="start">
						<img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
					</IonAvatar>
					<IonLabel>{element}</IonLabel>
				</IonItem>
			))}
		</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notifications

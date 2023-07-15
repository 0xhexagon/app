import { IonContent, IonHeader, IonInput, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';

const Create: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>

        <IonItem>
			<IonTextarea placeholder="What's on your mind?"></IonTextarea>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Create;

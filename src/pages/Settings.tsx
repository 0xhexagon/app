import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'
import React from 'react'

const Settings: React.FC = () => {
	const router = useIonRouter()

	const goBack = () => {
		router.goBack() 
	}
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
					<IonButton onClick={goBack} slot='start' fill='clear' size='small'>
						<IonIcon slot='icon-only' icon={arrowBackOutline} />
					</IonButton>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<h1>hola</h1>
			</IonContent>
		</IonPage>
	)
}

export default Settings

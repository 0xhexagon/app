import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Settings: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/app' />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<h1>Incluir...</h1>
				<ul>
					<li>Tema de la app?</li>
					<li>Privacidad</li>
					<li>Logout</li>
				</ul>
			</IonContent>
		</IonPage>
	)
}

export default Settings

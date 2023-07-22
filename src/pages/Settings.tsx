import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useAuth } from '@polybase/react'
import React, { useEffect } from 'react'

const Settings: React.FC = () => {
	const {auth, state} = useAuth()

	useEffect(() => {
		console.log({state})
	}, [state])

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
				<IonButton onClick={() => auth.signOut()}>Logout</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Settings

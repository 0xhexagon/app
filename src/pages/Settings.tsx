import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useAuth, usePolybase } from '@polybase/react'
import React from 'react'
import Schema from '../schema'

const Settings: React.FC = () => {
	const { auth } = useAuth()
	const polybase = usePolybase()

	const applySchema = async () => {
		polybase.applySchema(Schema)
			.then(console.log)
			.catch(console.error)
	}

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
				<IonButton expand='full' onClick={() => auth.signOut()}>Logout</IonButton>
				<IonButton expand='full' onClick={applySchema}>Apply schema</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Settings

import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useUser } from '../context/user'

const Settings: React.FC = () => {
	const { user, setUser } = useUser()

	const deleteUser = () => {
		// not sure if I need this...
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
				<IonItem>{user?.username}</IonItem>
				<h1>Incluir...</h1>
				<ul>
					<li>Tema de la app?</li>
					<li>Privacidad</li>
					<li>Logout</li>
				</ul>
				<IonButton expand='full' onClick={() => auth.signOut()}>Logout</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Settings

import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useAuth, usePolybase } from '@polybase/react'
import React from 'react'
import Schema from '../schema'
import { useUser } from '../context/user'

const Settings: React.FC = () => {
	const { auth } = useAuth()
	const polybase = usePolybase()
	const {user, setUser} = useUser()

	const applySchema = async () => {
		polybase.applySchema(Schema)
			.then(console.log)
			.catch(console.error)
	}
	const deleteUser = () => {
		polybase.collection('User')
			.record(user?.id!)
			.call('del')
			.then(() => {
				setUser(null)
				return auth.signOut()
			})
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
				<IonItem>{user?.username}</IonItem>
				<h1>Incluir...</h1>
				<ul>
					<li>Tema de la app?</li>
					<li>Privacidad</li>
					<li>Logout</li>
				</ul>
				<IonButton expand='full' onClick={() => auth.signOut()}>Logout</IonButton>
				<IonButton expand='full' onClick={applySchema}>Apply schema</IonButton>
				<IonButton expand='full' color='danger' onClick={deleteUser}>Delete user</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Settings

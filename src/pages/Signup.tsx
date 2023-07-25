import { IonButton, IonContent, IonHeader, IonInput, IonPage } from "@ionic/react"
import { useState } from "react"
import { User, useUser } from "../context/user"
import { useAuth, usePolybase } from "@polybase/react"

const Signup: React.FC = () => {
	const { setUser } = useUser()
	const { state } = useAuth()
	const polybase = usePolybase()

	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [loading, setLoading] = useState(false)

	const registerUser = async () => {
		try {
			setLoading(true)
			// Validate inputs 
			if (!name) throw new Error('name field cannot be empty')
			if (!username) throw new Error('username field cannot be empty')

			// verify username don't exists already
			const result = await polybase.collection<User>('User')
				.where('username', '==', username)
				.get()

			if (result.data.length > 0) throw new Error('The username is already taken')

			// create the record
			const userResponse = await polybase.collection<User>('User').create([
				state?.userId!,
				name,
				username
			])

			if (userResponse.data) setUser(userResponse.data)
		} catch (err) {
			alert(err)
		}
		setLoading(false)
	}


	return (
		<IonPage>
			<IonHeader>
				<div className="ion-padding">
					<h1>Signup page</h1>
				</div>
			</IonHeader>
			<IonContent className="ion-padding">
				{loading && <h1>Loading</h1>}
				<IonInput label="Name" onIonChange={(e) => setName(e.target.value!.toString())} labelPlacement="floating" />
				<IonInput label="Username" onIonChange={(e) => setUsername(e.target.value!.toString())} labelPlacement="floating" />
				<IonButton expand="full" onClick={registerUser}>Register</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Signup

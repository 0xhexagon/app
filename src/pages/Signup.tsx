import { IonButton, IonContent, IonHeader, IonInput, IonPage } from "@ionic/react"
import { useState } from "react"
import { useUser } from "../context/user"
import { useCanister } from "@connect2ic/react"
import { User } from "../types/user.class"
import { hexagon } from "../../canisters/src/declarations/hexagon"

const Signup: React.FC = () => {
	const { setUser } = useUser()

	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [loading, setLoading] = useState(false)

	const [canister, {error}] = useCanister('hexagon')

	const registerUser = async () => {

		try {
			setLoading(true)


			// Validate inputs 
			if (!name) throw new Error('name field cannot be empty')
			if (!username) throw new Error('username field cannot be empty')

			// create the record
			// const result = await canister.createUser(name, username) as User
			const [result] = await hexagon.createUser(name, username)

			console.log({result})

			if (result) setUser(result)
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
				<IonInput label="Name" onIonInput={(e) => setName(e.target.value!.toString())} labelPlacement="floating" />
				<IonInput label="Username" onIonInput={(e) => setUsername(e.target.value!.toString())} labelPlacement="floating" />
				<IonButton expand="full" onClick={registerUser}>Register</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Signup

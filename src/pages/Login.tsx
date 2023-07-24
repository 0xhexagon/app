import { IonButton, IonPage } from "@ionic/react"

import "./Login.css"
import { useAuth, usePolybase } from "@polybase/react"
import { AuthState } from "@polybase/auth"
import { User, useUser } from "../context/user"
import { CollectionRecordResponse } from "@polybase/client"

const Login: React.FC = () => {
	const { auth, loading } = useAuth()
	const polybase = usePolybase()
	const { setUser } = useUser()

	const getUser = async (state: AuthState | null) => {
		if (!state) throw new Error('No AuthState received')
		if (!state.userId) throw new Error('No userId found in AuthState')

		return polybase.collection<User>('User').record(state.userId).get()
	}

	const setUserToContext = (userResponse: CollectionRecordResponse<User, User | null>) => {
		if (userResponse.data) setUser(userResponse.data)
	}

	const signIn = () => {
		auth.signIn()
			.then(getUser)
			.then(setUserToContext)
			.catch(console.error)
	}
	return (
		<IonPage>
			<div id="login-container">

				<img id="login-logo" src="src/assets/png/logo.png" />
				{
					!loading &&
					<IonButton onClick={signIn} shape="round" color='light'>
						Connect wallet
					</IonButton>
				}
			</div>
		</IonPage>
	)
}

export default Login

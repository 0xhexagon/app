import { IonButton, IonPage } from "@ionic/react"

import "./Login.css"
import { useAuth } from "@polybase/react"

const Login: React.FC = () => {
	const {auth} = useAuth()
	return (
		<IonPage>
			<div id="login-container">

				<img id="login-logo" src="src/assets/png/logo.png"/>
				<IonButton onClick={() => auth.signIn()} shape="round" color='light'>
					Connect wallet
				</IonButton>

			</div>
		</IonPage>
	)
}

export default Login

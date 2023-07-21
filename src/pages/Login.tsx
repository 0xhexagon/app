import { IonButton, IonPage } from "@ionic/react"

import "./Login.css"

const Login: React.FC = () => {
	return (
		<IonPage>
			<div id="login-container">

				<img id="login-logo" src="src/assets/png/logo.png"/>
				<IonButton shape="round" color='light'>
					Connect wallet
				</IonButton>

			</div>
		</IonPage>
	)
}

export default Login

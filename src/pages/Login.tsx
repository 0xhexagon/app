import { IonButton, IonPage } from "@ionic/react"

import "./Login.css"
import { ConnectButton, ConnectDialog } from "@connect2ic/react"

const Login: React.FC = () => {

	return (
		<IonPage>
			<div id="login-container">

				<img id="login-logo" src="src/assets/png/logo.png" />
				{/*
					!loading &&
					<IonButton onClick={connectWallet} shape="round" color='light'>
						Connect wallet
					</IonButton>
					*/
				}
				<ConnectButton>Connect wallet</ConnectButton>
				<ConnectDialog />
			</div>
		</IonPage>
	)
}

export default Login

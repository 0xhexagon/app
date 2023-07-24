import { IonContent, IonHeader, IonPage } from "@ionic/react"

const Signup: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<h1>Signup page</h1>
			</IonHeader>
			<IonContent>
				<ul>
					<li>name</li>
					<li>username</li>
					<li>profile nft photo?</li>
				</ul>
			</IonContent>
		</IonPage>
	)
}

export default Signup

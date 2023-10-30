import { IonBackButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router"

interface UserPageProps extends RouteComponentProps<{
	userId: string
}> { }
const UserPage: React.FC<UserPageProps> = ({ match }) => {
	// load user page from the chain
	if (loading) return <h1>loading...</h1>
	if (!data) return <h1>no user found...</h1>

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>{data.data.name}</IonTitle>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/app' />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
		</IonPage>
	)
}

export default UserPage

import { RouteComponentProps } from "react-router"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useDocument, usePolybase } from "@polybase/react"
import { IPost } from "../types/Schemas"
import Post from "../components/Post"

interface PostPageProps extends RouteComponentProps<{
	postId: string
}> { }
const PostPage: React.FC<PostPageProps> = ({ match }) => {
	const polybase = usePolybase()
	const {data, loading } = useDocument(polybase.collection<IPost>('Post').record(match.params.postId))

	if(loading) return <h1>loading...</h1>
	if(!data) return <h1>not post found...</h1>

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Post</IonTitle>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/app' />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<Post post={data.data} />
			</IonContent>
		</IonPage>
	)
}

export default PostPage

import { RouteComponentProps } from "react-router"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { IPost } from "../types/post.type"
import Post from "../components/Post"

interface PostPageProps extends RouteComponentProps<{
	postId: string
}> { }
const PostPage: React.FC<PostPageProps> = ({ match }) => {
	// match.params.postId

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

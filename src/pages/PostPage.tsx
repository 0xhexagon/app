import { RouteComponentProps } from "react-router"

interface PostPageProps extends RouteComponentProps <{
	postId: string
}> {}
const PostPage: React.FC<PostPageProps> = ({match}) => {
	return (
		<h1>Post id: {match.params.postId}</h1>
	)
}

export default PostPage

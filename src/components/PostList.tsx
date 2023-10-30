import Post from "./Post"

interface Props {
	query: string
}
const PostList: React.FC<Props> = ({ query }) => {
	if (loading) return <h1>Loading posts...</h1>
	if (!data) return <h1>No data</h1>

	return (
		<>
			{data.data.map((postData: any, index: number) => (
				<Post key={index} post={postData.data} />
			))}
		</>
	)
}

export default PostList

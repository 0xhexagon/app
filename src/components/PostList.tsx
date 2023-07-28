import { useCollection, usePolybase } from "@polybase/react"
import Post from "./Post"
import { Collection, Query } from "@polybase/client"
import { IPost } from "../types/Schemas"

interface Props {
	query: Collection<IPost> | Query<IPost> | null | undefined
}
const PostList: React.FC<Props> = ({query}) => {
	const { data, loading } = useCollection(query)

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

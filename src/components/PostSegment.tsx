import React from 'react'
import PostList from './PostList'

const PostSegment: React.FC = () => {
	// query is the list of posts

	return (
		<PostList query={query} />
	)
}

export default PostSegment

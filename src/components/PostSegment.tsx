import React from 'react'
import PostList from './PostList'
import { usePolybase } from '@polybase/react'

const PostSegment: React.FC = () => {
	const polybase = usePolybase()
	const query = polybase.collection('Post').sort('createdAt', 'desc')

	return (
		<PostList query={query} />
	)
}

export default PostSegment

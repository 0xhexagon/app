import { usePolybase } from "@polybase/react"

export const useFeed = () => {
	// Fetch new posts from following users and communities	
	const polybase = usePolybase()

	// required: following users
	// 1. get all the following users (maybe save it in a global scope or something)
	// 2. fetch new posts from each of the following users: calculate how many users should
	// be fetched in order to achieve 100 posts as initial request(?)
	// 3. promise.all those posts
	
	// return posts, loading state, next() and prev() 
}

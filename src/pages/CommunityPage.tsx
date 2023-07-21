import { RouteComponentProps } from "react-router"

interface CommunityPageProps extends RouteComponentProps <{
	communityId: string
}> {}
const CommunityPage: React.FC<CommunityPageProps> = ({match}) => {
	return (
		<h1>Community id: {match.params.communityId}</h1>
	)
}

export default CommunityPage

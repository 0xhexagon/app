import { RouteComponentProps } from "react-router"

interface UserPageProps extends RouteComponentProps <{
	userId: string
}> {}
const UserPage: React.FC<UserPageProps> = ({match}) => {
	return (
		<h1>User id: {match.params.userId}</h1>
	)
}

export default UserPage

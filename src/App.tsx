import './styles'
import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tabs from './pages/Tabs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useUser } from './context/user';
import { useEffect } from 'react';
import PostPage from './pages/PostPage.js';
import UserPage from './pages/UserPage';
import { useCanister, useConnect } from '@connect2ic/react';
import { User } from './types/user.class';

setupIonicReact();

const App: React.FC = () => {

	const { user, setUser } = useUser()
	const { isConnected, principal } = useConnect()
	const [canister, { loading }] = useCanister("hexagon")

	if (loading) return <h1>loading</h1>

	useEffect(() => {
		if (isConnected) {
			getUserFromCanister()
		}
	}, [isConnected])

	const getUserFromCanister = async () => {
		try {
			const [result] = await canister.readUser() as User[]
			console.log({result})
			if (result) setUser(result)
		} catch(err) {
			console.error(`No user found for ${principal}`)
			console.error(err)
		}
	}

	return (
		<IonApp>
			<IonReactRouter>
				{
					isConnected && user
						? <>
							{/* Normal app usage */}
							<Route path='/app' render={(props) => <Tabs {...props} />} />
							<Route path='/post/:postId' render={(props) => <PostPage {...props} />} />
							<Route path='/user/:userId' render={(props) => <UserPage {...props} />} />

							<Route exact path='/'><Redirect to='/app' /></Route>
							<Route exact path='/login'><Redirect to='/app' /></Route>
							<Route exact path='/signup'><Redirect to='/app' /></Route>
						</>
						: isConnected
							? <>
								{/* Signup process (user registration) */}
								<Route exact path='/signup' render={() => <Signup />} />
								<Route><Redirect to='/signup' /></Route>
							</>
							: <>
								{/* Login process (connect wallet) */}
								<Route exact path='/login' render={() => <Login />} />
								<Route><Redirect to='/login' /></Route>
							</>
				}
			</IonReactRouter>
		</IonApp>
	)
}

export default App

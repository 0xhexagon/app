import './styles.ts'
import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tabs from './pages/Tabs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useIsAuthenticated } from '@polybase/react';
import { useUser } from './context/user';

setupIonicReact();


const App: React.FC = () => {
	const [isLoggedIn] = useIsAuthenticated()
	const { user } = useUser()

	return (
		<IonApp>
			<IonReactRouter>
				{
					isLoggedIn && !user
						? <>
							{/* Normal app usage */}
							<Route path='/app' render={(props) => <Tabs {...props} />} />

							<Route exact path='/'><Redirect to='/app' /></Route>
							<Route exact path='/login'><Redirect to='/app' /></Route>
							<Route exact path='/signup'><Redirect to='/app' /></Route>
						</>
						: isLoggedIn
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

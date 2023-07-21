import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Custom
import './assets/style/global.css';

import Tabs from './pages/Tabs';
import Login from './pages/Login';
import Signup from './pages/Signup';

setupIonicReact();

const isAuth = false

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				{isAuth 
					? <>
						<Route path='/app' render={(props) => <Tabs {...props} />} />

						<Route exact path='/'><Redirect to='/app' /></Route>
						<Route exact path='/login'><Redirect to='/app' /></Route>
						<Route exact path='/signup'><Redirect to='/app' /></Route>
					</>
					: <>
						<Route exact path='/login' render={() => <Login />} />
						<Route exact path='/signup' render={() => <Signup />} />
						<Route><Redirect to='/login' /></Route>
					</>
				}
			</IonReactRouter>
		</IonApp>
	)
}

export default App

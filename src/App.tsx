import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { create, person, home, search, heart } from 'ionicons/icons';
import Home from './pages/Home';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

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

setupIonicReact();

const App: React.FC = () => {
	return (
		<IonApp>

			<IonReactRouter>

				<IonTabs>

					<IonRouterOutlet>
						<Route exact path="/home" render={() => <Home />}/>
						<Route path="/search" render={() => <Search />}/>
						<Route exact path="/create" render={() => <Create />}/>
						<Route exact path="/notifications" render={() => <Notifications />}/>

						<Route exact path="/profile" render={() => <Profile />}/>
						<Route exact path="/profile/settings" render={() => <Settings />}/>

						<Route exact path="/"><Redirect to="/home" /></Route>
					</IonRouterOutlet>

					<IonTabBar slot="bottom">
						<IonTabButton tab="home" href="/home"> <IonIcon aria-hidden="true" icon={home} /> </IonTabButton>
						<IonTabButton tab="search" href="/search"> <IonIcon aria-hidden="true" icon={search} /> </IonTabButton>
						<IonTabButton tab="create" href="/create"> <IonIcon aria-hidden="true" icon={create} /> </IonTabButton>
						<IonTabButton tab="notifications" href="/notifications"> <IonIcon aria-hidden="true" icon={heart} /> </IonTabButton>
						<IonTabButton tab="profile" href='/profile'> <IonIcon aria-hidden="true" icon={person} /> </IonTabButton>
					</IonTabBar>

				</IonTabs>

			</IonReactRouter>
		</IonApp>
	)
}

export default App

import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { Redirect, Route, RouteComponentProps } from "react-router"
import Home from "./Home"
import Search from "./Search"
import Create from "./Create"
import Notifications from "./Notifications"
import Profile from "./Profile"
import Settings from "./Settings"
import { home, search, create, heart, person } from "ionicons/icons"

const Tabs: React.FC<RouteComponentProps> = ({ match }) => {
	return (
		<IonTabs>

			<IonRouterOutlet>
				<Route exact path={`${match.url}/home`} render={() => <Home />} />
				<Route path={`${match.url}/search`} render={() => <Search />} />
				<Route exact path={`${match.url}/create`} render={() => <Create />} />
				<Route exact path={`${match.url}/notifications`} render={() => <Notifications />} />

				<Route exact path={`${match.url}/profile`} render={() => <Profile />} />
				<Route exact path={`${match.url}/profile/settings`} render={() => <Settings />} />

				<Route exact path={`${match.url}`}><Redirect to={`${match.url}/home`} /></Route>
			</IonRouterOutlet>

			<IonTabBar slot="bottom">
				<IonTabButton tab="home" href={`${match.url}/home`}> <IonIcon aria-hidden="true" icon={home} /> </IonTabButton>
				<IonTabButton tab="search" href={`${match.url}/search`}> <IonIcon aria-hidden="true" icon={search} /> </IonTabButton>
				<IonTabButton tab="create" href={`${match.url}/create`}> <IonIcon aria-hidden="true" icon={create} /> </IonTabButton>
				<IonTabButton tab="notifications" href={`${match.url}/notifications`}> <IonIcon aria-hidden="true" icon={heart} /> </IonTabButton>
				<IonTabButton tab="profile" href={`${match.url}/profile`}> <IonIcon aria-hidden="true" icon={person} /> </IonTabButton>
			</IonTabBar>
		</IonTabs>
	)
}

export default Tabs

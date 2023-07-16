import { IonAvatar } from "@ionic/react";
import './Avatar.css'

const Avatar: React.FC = () => {
	return (
		<IonAvatar>
			<img alt="Default avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
		</IonAvatar>
	);
}

export default Avatar;

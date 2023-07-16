import { IonAvatar } from "@ionic/react";

const Avatar: React.FC = () => {
	return (
		<IonAvatar>
			<img className="hexagon" alt="Default avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
		</IonAvatar>
	);
}

export default Avatar;

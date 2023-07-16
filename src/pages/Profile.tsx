import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import Avatar from '../components/Avatar';
import { settingsOutline } from 'ionicons/icons';

const Profile: React.FC = () => {
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonTitle>Profile</IonTitle>
					<IonButton slot='end' fill='clear' size='small'>
						<IonIcon slot='icon-only' icon={settingsOutline} />
					</IonButton>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonGrid>

					<IonRow className='ion-padding'>
						{/* Profile and photo */}
						<IonCol size='auto'>
							<p>Pato Purific</p>
							<p>@patopurific</p>
						</IonCol>
						<IonCol>
							<Avatar />
						</IonCol>
					</IonRow>

					<IonRow>
						{/* Buttons (edit, share) */}
						<div style={{ display: 'flex', justifyContent: 'space-around' }}>
							<IonButton fill='outline' size='small'>Edit</IonButton>
							<IonButton fill='outline' size='small'>Share</IonButton>
						</div>
					</IonRow>

					<IonRow>
						{/* poaps */}
						<IonCol>
							<IonAvatar>
								<img style={{ height: '50px', width: '50px' }} alt="Default avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
							</IonAvatar>
						</IonCol>
					</IonRow>

					<IonRow>
						{/* segments */}
						<IonSegment value='threads'>
							<IonSegmentButton value='threads'>
								<IonLabel>Threads</IonLabel>
							</IonSegmentButton>
							<IonSegmentButton value='mentions'>
								<IonLabel>Mentions</IonLabel>
							</IonSegmentButton>
						</IonSegment>
					</IonRow>

				</IonGrid>
			</IonContent>

		</IonPage>
	);
};

export default Profile;

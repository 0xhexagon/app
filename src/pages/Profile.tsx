import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import Avatar from '../components/Avatar';
import { settingsOutline } from 'ionicons/icons';
import './Profile.css'
import { useState } from 'react';

const Profile: React.FC = () => {
	const [threadsSegment, setThreadsSegment] = useState<boolean>(true)
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

					<IonRow id='profile-first-row' className='ion-padding'>
						{/* Profile and photo */}
						<IonCol>
							<p>Pato Purific</p>
							<p>@patopurific</p>
						</IonCol>
						<IonCol>
							<Avatar />
						</IonCol>
					</IonRow>

					<IonRow className='ion-padding-horizontal'>
						{/* Buttons (edit, share) */}
						{/* <div style={{ display: 'flex', justifyContent: 'space-around' }}> */}
						<IonCol>
							<IonButton className='w-100' color='medium' fill='outline' size='small'>Edit</IonButton>
						</IonCol>
						<IonCol>
							<IonButton className='w-100' color='medium' fill='outline' size='small'>Share</IonButton>
						</IonCol>
						{/* </div> */}
					</IonRow>

					<IonRow className='ion-padding'>
						{/* poaps */}
						<IonCol>
							<IonAvatar>
								<img style={{ height: '50px', width: '50px' }} alt="Default avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
							</IonAvatar>
						</IonCol>
					</IonRow>

					<IonRow>
						{/* segments */}
						<IonSegment value={threadsSegment ? 'threads' : 'mentions'}>
							<IonSegmentButton onClick={() => setThreadsSegment(true)} value='threads'>
								<IonLabel>Threads</IonLabel>
							</IonSegmentButton>
							<IonSegmentButton onClick={() => setThreadsSegment(false)} value='mentions'>
								<IonLabel>Mentions</IonLabel>
							</IonSegmentButton>
						</IonSegment>
						{
							threadsSegment
								? <h1>threads</h1>
								: <h1>mentions</h1>
						}
					</IonRow>

				</IonGrid>
			</IonContent>

		</IonPage>
	);
};

export default Profile;

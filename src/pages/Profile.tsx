import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import Avatar from '../components/Avatar';
import ThreadsSegment from '../components/ThreadsSegment';
import { useState } from 'react';
import { settingsOutline } from 'ionicons/icons';
import './Profile.css'

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
							<IonButton className='w-100' color='light' size='small'>Edit</IonButton>
						</IonCol>
						<IonCol>
							<IonButton className='w-100' color='light' size='small'>Share</IonButton>
						</IonCol>
						{/* </div> */}
					</IonRow>

					<IonRow className='ion-padding'>
						{/* poaps */}
						<div className='d-flex'>
							<IonAvatar>
								<img style={{ height: '50px', width: '50px' }} alt="Default avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
							</IonAvatar>
							<IonAvatar>
								<img style={{ height: '50px', width: '50px' }} alt="Default avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
							</IonAvatar>
						</div>
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
					</IonRow>
				</IonGrid>
			</IonHeader>

			<IonContent>
				{
					threadsSegment
						? <ThreadsSegment />
						: <h1>mentions</h1>
				}
			</IonContent>

		</IonPage>
	);
};

export default Profile;

import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import Avatar from '../components/Avatar';
import PostSegment from '../components/PostSegment';
import { useState } from 'react';
import { settingsOutline } from 'ionicons/icons';
import './Profile.css'
import { useUser } from '../context/user';

const Profile: React.FC = () => {
	const [postSegment, setPostSegment] = useState<boolean>(true)
	const { user } = useUser()
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonTitle>Profile</IonTitle>
					<IonButton routerLink='/app/profile/settings' slot='end' fill='clear' size='small'>
						<IonIcon slot='icon-only' icon={settingsOutline} />
					</IonButton>
				</IonToolbar>
				<IonGrid>
					<IonRow id='profile-first-row' className='ion-padding'>
						{/* Profile and photo */}
						<IonCol>
							<p>{user?.name}</p>
							<p>{user?.username}</p>
							<p>{user?.bio}</p>
						</IonCol>
						<IonCol>
							<Avatar />
						</IonCol>
					</IonRow>

					<IonRow className='ion-padding-horizontal'>
						{/* Buttons (edit, share) */}
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
						<IonSegment value={postSegment ? 'posts' : 'mentions'}>
							<IonSegmentButton onClick={() => setPostSegment(true)} value='posts'>
								<IonLabel>Posts</IonLabel>
							</IonSegmentButton>
							<IonSegmentButton onClick={() => setPostSegment(false)} value='mentions'>
								<IonLabel>Mentions</IonLabel>
							</IonSegmentButton>
						</IonSegment>
					</IonRow>
				</IonGrid>
			</IonHeader>

			<IonContent>
				{
					postSegment
						? <PostSegment />
						: <h1>mentions</h1>
				}
			</IonContent>

		</IonPage>
	);
};

export default Profile;

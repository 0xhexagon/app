import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonPopover, IonRow } from '@ionic/react';
import Avatar from './Avatar';
import './Post.css'
import { chatbubbleOutline, ellipsisHorizontal, heartOutline, repeatOutline } from 'ionicons/icons';
import { useDocument, usePolybase } from '@polybase/react';
import { IPost } from '../types/Schemas';

interface Props {
	post: IPost,
}
const Post: React.FC<Props> = ({ post }) => {
	const polybase = usePolybase()
	const {data: authorData, loading } = useDocument(polybase.collection('User').record(post.author.id))
	// fetch likes, reposts and replies
		
	if(loading) return <h1>loading...</h1>

	return (
		<div className='thread'>
			<IonGrid className='thread-header'>
				<IonRow>
					<IonCol size='auto' className='thread-header-col'>
						<Avatar />
					</IonCol>
					<IonCol className='thread-header-col'>
						<p>{authorData?.data.name}</p>
						<p className='thread-username'>{authorData?.data.username}</p>
						{/* <p className='thread-time'>{new Date(postData.data.createdAt).toString()}</p> */}
					</IonCol>
					<IonCol size='auto' className='thread-header-col'>
						<IonButton fill='clear' size='small' id={`thread-options-${post.id}`}>
							<IonIcon slot='icon-only' icon={ellipsisHorizontal} />
						</IonButton>
						<IonPopover trigger={`thread-options-${post.id}`}>
							<IonContent>
								<IonItem button={true} detail={false}>Share...</IonItem>
								<IonItem button={true} detail={false}>Report</IonItem>
							</IonContent>
						</IonPopover>
					</IonCol>
				</IonRow>
			</IonGrid>
			<div className={`thread-content ${false ? 'thread-content-commented' : 'thread-content-empty'}`}>
				<p className='thread-body'>{post.body}</p>
				<div className="thread-imgs">
					{/* <img src="https://picsum.photos/300/200" alt="sample"/> */}
				</div>
				<div className="thread-content-buttons">
					<IonButton fill='clear' size='small'>
						<IonIcon slot='icon-only' icon={heartOutline} />
					</IonButton>
					<IonButton fill='clear' size='small'>
						<IonIcon slot='icon-only' icon={repeatOutline} />
					</IonButton>
					<IonButton fill='clear' size='small'>
						<IonIcon slot='icon-only' icon={chatbubbleOutline} />
					</IonButton>
				</div>
			</div>
			<div className='thread-footer'>
			</div>
		</div>
	);
};

export default Post;

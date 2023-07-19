import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonPopover, IonRow } from '@ionic/react';
import Avatar from './Avatar';
import './Post.css'
import { chatbubbleOutline, ellipsisHorizontal, heartOutline, repeatOutline } from 'ionicons/icons';

interface IProps {
	id: string
}
const Post: React.FC<IProps> = ({ id }) => {
	return (
		<div className='thread'>
			<IonGrid className='thread-header'>
				<IonRow>
					<IonCol size='auto' className='thread-header-col'>
						<Avatar />
					</IonCol>
					<IonCol className='thread-header-col'>
						<p>Pato Purific</p>
						<p className='thread-username'>@patopurific</p>
					</IonCol>
					<IonCol size='auto' className='thread-header-col'>
						<IonButton fill='clear' size='small' id={`thread-options-${id}`}>
							<IonIcon slot='icon-only' icon={ellipsisHorizontal} />
						</IonButton>
						<IonPopover trigger={`thread-options-${id}`}>
							<IonContent>
								<IonItem button={true} detail={false}>Share...</IonItem>
								<IonItem button={true} detail={false}>Report</IonItem>
							</IonContent>
						</IonPopover>
					</IonCol>
				</IonRow>
			</IonGrid>
			<div className='thread-content'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<div className="thread-imgs">
					<img src="https://picsum.photos/300/200" alt="sample"/>
					<img src="https://picsum.photos/300/200" alt="sample"/>
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
		</div>
	);
};

export default Post;

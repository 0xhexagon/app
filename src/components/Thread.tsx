import { IonButton, IonChip, IonContent, IonIcon, IonItem, IonLabel, IonPopover } from '@ionic/react';
import Avatar from './Avatar';
import './Thread.css'
import { chatbubbleOutline, ellipsisHorizontal, heartOutline, repeatOutline } from 'ionicons/icons';

interface IProps {
	id: string
}
const Thread: React.FC<IProps> = ({id}) => {
	return (
		<div className='thread'>
			<div className='thread-header'>
				{/* Grid */}
				<Avatar />
				<div className='thread-header-user'>
					{/* Flex */}
					<p>Pato Purific</p>
					<p className='thread-header-user-username'>@patopurific</p>
				</div>
				<div>
					<IonButton fill='clear' size='small' id={`thread-options-${id}`}>
						<IonIcon slot='icon-only' icon={ellipsisHorizontal} />
					</IonButton>
					<IonPopover trigger={`thread-options-${id}`}>
						<IonContent>
							<IonItem button={true} detail={false}>Share...</IonItem>
							<IonItem button={true} detail={false}>Report</IonItem>
						</IonContent>
					</IonPopover>
				</div>
			</div>
			<div className='thread-content'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

export default Thread;

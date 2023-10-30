import { IonButton, IonContent, IonHeader, IonPage, IonTextarea, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useUser } from '../context/user';
import { useState } from 'react';
import { v4 as uuid } from 'uuid'

const Create: React.FC = () => {
	const router = useIonRouter()
	const { user } = useUser()

	const [input, setInput] = useState('')

	const createPost = async () => {
		try {
			// create the post
			setInput('')

			router.push(`/post/${inserted_obj_id_replace_pls}`)
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Create</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>

				<IonTextarea onInput={(e) => setInput(e.currentTarget.value!)} value={input} counter maxlength={500} style={{ height: '100px' }} placeholder="What's on your mind?"></IonTextarea>
				<IonButton onClick={createPost}>Create</IonButton>

			</IonContent>
		</IonPage>
	);
};

export default Create;

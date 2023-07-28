import { IonButton, IonContent, IonHeader, IonPage, IonTextarea, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { usePolybase } from '@polybase/react';
import { useUser } from '../context/user';
import { useState } from 'react';
import { v4 as uuid } from 'uuid'

const Create: React.FC = () => {
	const router = useIonRouter()
	const polybase = usePolybase()
	const { user } = useUser()

	const [input, setInput] = useState('')

	const createPost = async () => {
		try {
			// constructor de Post
			// constructor(id: string, author: User, createdAt: number, body: string, type: string, nsfw?: boolean, assets?: string[], community?: Community)
			const { data } = await polybase.collection('Post').create([
				uuid(),
				polybase.collection('User').record(user!.id),
				Date.now(),
				input,
				'public',
			])
			console.log({ data })
			setInput('')

			router.push(`/post/${data.id}`)
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

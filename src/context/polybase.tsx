import { Auth } from "@polybase/auth";
import { Polybase } from "@polybase/client";
import { AuthProvider, PolybaseProvider } from "@polybase/react";
import Schema from "../schema";

const auth = new Auth()
const polybase = new Polybase({
	defaultNamespace: 'temporal-namespace',
	signer: async (data) => {
		return {
			h: 'eth-personal-sign',
			sig: await auth.ethPersonalSign(data)
		}
	}
})

polybase.applySchema(Schema)
	.then(res => console.log(res))
	.catch(err => console.error(err))

interface Props {
	children: React.ReactNode
}

const PolybaseProviders: React.FC<Props> = ({ children }) => {
	return (
		<PolybaseProvider polybase={polybase}>
			<AuthProvider polybase={polybase} auth={auth}>
				{children}
			</AuthProvider>
		</PolybaseProvider>
	)
}

export default PolybaseProviders

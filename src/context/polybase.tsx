import { Auth } from "@polybase/auth";
import { Polybase } from "@polybase/client";
import { AuthProvider, PolybaseProvider } from "@polybase/react";

const auth = new Auth()
const polybase = new Polybase({
	defaultNamespace: import.meta.env.VITE_POLYBASE_NAMESPACE,
	signer: async (data) => {
		return {
			h: 'eth-personal-sign',
			sig: await auth.ethPersonalSign(data)
		}
	}
})

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

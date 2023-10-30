import { Connect2ICProvider } from '@connect2ic/react';
import { createClient } from '@connect2ic/core';
import { InternetIdentity } from '@connect2ic/core/providers/internet-identity';
import { PlugWallet } from '@connect2ic/core/providers/plug-wallet';
import * as hexagon from '../../canisters/src/declarations/hexagon'

const internetIdentityCanisterId = process.env.INTERNET_IDENTITY_CANISTER_ID

const internetIdentityProvider = new InternetIdentity({
	// providerUrl: "https://identity.ic0.app",
	providerUrl: `http://192.168.1.140:8000/?canisterId=${internetIdentityCanisterId}`,
	host: window.location.origin
})

const plugProvider = new PlugWallet({
	host: window.location.origin
})

const client = createClient({
	canisters: {
		hexagon
	},
	providers: [
		internetIdentityProvider,
		plugProvider
	],
	globalProviderConfig: {
		dev: true,
	},
})

interface Props {
	children: React.ReactNode
}

export const ICPProvider: React.FC<Props> = ({ children }) => {
	return (
		<Connect2ICProvider client={client}>
			{children}
		</Connect2ICProvider>
	)
}

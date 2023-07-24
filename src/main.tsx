import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import PolybaseProviders from './context/polybase';
import UserProvider from './context/user';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<PolybaseProviders>
			<UserProvider>
				<App />
			</UserProvider>
		</PolybaseProviders>
	</React.StrictMode>
);

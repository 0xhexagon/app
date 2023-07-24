import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import PolybaseProviders from './context/polybase';
import UserProvider from './context/user';
import StorageProvider from './context/storage';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<PolybaseProviders>
			<StorageProvider>
				<UserProvider>
					<App />
				</UserProvider>
			</StorageProvider>
		</PolybaseProviders>
	</React.StrictMode>
);

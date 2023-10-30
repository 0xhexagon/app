import './init.ts'
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserProvider from './context/user';
import StorageProvider from './context/storage';
import { ICPProvider } from './context/connect2ic';
import "@connect2ic/core/style.css"

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<ICPProvider>
			<StorageProvider>
				<UserProvider>
					<App />
				</UserProvider>
			</StorageProvider>
		</ICPProvider>
	</React.StrictMode>
);

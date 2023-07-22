import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import PolybaseProviders from './context/polybase';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<PolybaseProviders>
			<App />
		</PolybaseProviders>
	</React.StrictMode>
);

import App from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeContextProvider } from '@/app/providers/ThemeProvider';
import '@/shared/config/i18n/i18n';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

if (!container) {
	throw new Error('mount container not found');
}

const root = createRoot(container);

root.render(
	<ErrorBoundary>
		<BrowserRouter>
			<StoreProvider>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</StoreProvider>
		</BrowserRouter>
	</ErrorBoundary>,
);

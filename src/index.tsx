import App from 'app/App';
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(
	<BrowserRouter>
		<ErrorBoundary>
			<StoreProvider>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</StoreProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById('root'),
);

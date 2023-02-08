import App from 'app/App';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(
	<BrowserRouter>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</BrowserRouter>,
	document.getElementById('root'),
);

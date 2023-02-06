import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "app/App";
import { ThemeContextProvider } from "app/providers/ThemeProvider";

render(
	<BrowserRouter>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
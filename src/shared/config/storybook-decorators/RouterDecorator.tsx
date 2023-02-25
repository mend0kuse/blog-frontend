import { BrowserRouter } from 'react-router-dom';

import { type Story } from '@storybook/react';

export const RouterDecorator = (Story: Story) => {
	return (
		<BrowserRouter>
			<Story />
		</BrowserRouter>
	);
};

import { StoreProvider } from 'app/providers/StoreProvider';

import { type Story } from '@storybook/react';

export const StoreDecorator = (Story: Story) => {
	return (
		<StoreProvider>
			<Story />
		</StoreProvider>
	);
};

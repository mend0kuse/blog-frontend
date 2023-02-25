import { withThemes } from 'storybook-addon-themes/react';

import { addDecorator } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook-decorators/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook-decorators/StyleDecorator';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	themes: {
		default: 'LIGHT',
		list: [
			{ name: 'LIGHT', class: ['light', 'app'], color: 'white' },
			{ name: 'DARK', class: ['dark', 'app'], color: 'black' },
		],
	},
};

addDecorator(withThemes);
addDecorator(StyleDecorator);
addDecorator(RouterDecorator);

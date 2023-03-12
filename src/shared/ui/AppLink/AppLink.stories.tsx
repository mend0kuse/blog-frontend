import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/',
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'text',
	theme: AppLinkTheme.PRIMARY,
};

export const SECONDARY = Template.bind({});
SECONDARY.args = {
	children: 'text',
	theme: AppLinkTheme.SECONDARY,
};

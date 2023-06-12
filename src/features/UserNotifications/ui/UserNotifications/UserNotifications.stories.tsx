import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { UserNotifications } from './UserNotifications';

export default {
	title: 'features/UserNotifications',
	component: UserNotifications,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof UserNotifications>;

const Template: ComponentStory<typeof UserNotifications> = (args) => <UserNotifications {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

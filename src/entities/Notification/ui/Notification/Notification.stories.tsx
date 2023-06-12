import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { NotificationItem } from './Notification';

export default {
	title: 'entities/Notification',
	component: NotificationItem,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

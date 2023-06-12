import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Dropdown } from './Dropdown';

export default {
	title: 'shared/Dropdown',
	component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	items: [
		{
			text: 'asd',
			href: 'asd',
		},
		{
			text: 'asd',
			onClick: () => {},
		},
	],
};

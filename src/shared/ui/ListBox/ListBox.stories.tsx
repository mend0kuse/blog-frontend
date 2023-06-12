import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Listbox } from './ListBox';

export default {
	title: 'shared/ListBox',
	component: Listbox,
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	value: '123',
	holder: 'random holder',
	label: 'random Label',
	items: [
		{
			content: '123',
			value: '123',
		},
		{
			content: 'asddsa',
			value: 'asddsa',
		},
		{
			content: 'asddsa',
			value: 'asddsa',
		},
		{
			content: 'asddsa',
			value: 'asddsa',
		},
	],
};

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
	title: 'shared/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Open = Template.bind({});
Open.args = {
	label: 'Выберите значение',
	value: 'zxc',
	options: [
		{ value: 'asd', content: 'asd' },
		{ value: 'zxc', content: 'zxc' },
		{ value: 'qwe', content: 'qwe' },
	],
};

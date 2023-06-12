import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { UserActions } from './UserActions';

export default {
	title: 'features/UserActions',
	component: UserActions,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof UserActions>;

const Template: ComponentStory<typeof UserActions> = (args) => <UserActions {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

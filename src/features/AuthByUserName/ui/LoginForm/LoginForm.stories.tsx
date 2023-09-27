import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import LoginForm from './LoginForm';

export default {
	title: 'features/LoginForm',
	component: LoginForm,
	args: {
		to: '/',
	},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Form = Template.bind({});
Form.args = {};

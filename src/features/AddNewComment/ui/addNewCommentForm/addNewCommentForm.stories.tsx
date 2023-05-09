import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import AddNewCommentForm from './addNewCommentForm';

export default {
	title: 'features/AddNewCommentForm',
	component: AddNewCommentForm,
} as ComponentMeta<typeof AddNewCommentForm>;

const Template: ComponentStory<typeof AddNewCommentForm> = (args) => <AddNewCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

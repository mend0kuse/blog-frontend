import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { CreateArticle } from './CreateArticle';

export default {
	title: 'features/CreateArticle',
	component: CreateArticle,
} as ComponentMeta<typeof CreateArticle>;

const Template: ComponentStory<typeof CreateArticle> = (args) => <CreateArticle {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

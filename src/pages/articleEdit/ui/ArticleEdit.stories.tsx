import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import ArticleEdit from './ArticleEdit';

export default {
	title: 'pages/ArticleEdit',
	component: ArticleEdit,
} as ComponentMeta<typeof ArticleEdit>;

const Template: ComponentStory<typeof ArticleEdit> = (args) => <ArticleEdit {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

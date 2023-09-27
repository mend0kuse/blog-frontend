import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import ArticlePage from './ArticlesPage';

export default {
	title: 'pages/ArticlePage',
	component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = () => <ArticlePage />;

export const Normal = Template.bind({});
Normal.args = {};

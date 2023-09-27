import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { mockArticle } from '../Article/mockArticle';
import { ArticleList } from './ArticleList';

export default {
	title: 'entities/ArticleList',
	component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

const mock = new Array(16).fill(mockArticle);

export const Normal = Template.bind({});
Normal.args = {
	articles: mock,
};

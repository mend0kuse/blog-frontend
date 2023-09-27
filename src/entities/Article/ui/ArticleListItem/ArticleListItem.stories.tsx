import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { mockArticle } from '../Article/mockArticle';
import { ArticleListItem } from './ArticleListItem';

export default {
	title: 'entities/ArticleListItem',
	component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	article: mockArticle,
};

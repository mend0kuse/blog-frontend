import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';

export default {
	title: 'shared/ArticleListItem',
	component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

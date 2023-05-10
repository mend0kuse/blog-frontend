import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleList } from './ArticleList';

export default {
	title: 'shared/ArticleList',
	component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

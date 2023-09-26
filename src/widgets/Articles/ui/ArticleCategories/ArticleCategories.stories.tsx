import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleCategories } from './ArticleCategories';

export default {
	title: 'features/ArticleCategories',
	component: ArticleCategories,
} as ComponentMeta<typeof ArticleCategories>;

const Template: ComponentStory<typeof ArticleCategories> = (args) => <ArticleCategories {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

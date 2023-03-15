import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
	title: 'shared/ArticleDetailsPage',
	component: ArticleDetailsPage,
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

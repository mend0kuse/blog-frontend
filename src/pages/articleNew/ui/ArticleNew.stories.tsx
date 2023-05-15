import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import ArticleNew from './ArticleNew';

export default {
	title: 'shared/ArticleNew',
	component: ArticleNew,
} as ComponentMeta<typeof ArticleNew>;

const Template: ComponentStory<typeof ArticleNew> = (args) => <ArticleNew {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleComments } from './ArticleComments';

export default {
	title: 'pages/ArticleComments',
	component: ArticleComments,
} as ComponentMeta<typeof ArticleComments>;

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

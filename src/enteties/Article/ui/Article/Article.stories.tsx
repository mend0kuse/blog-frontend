import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleDetails } from './Article';

export default {
   title: 'shared/Article',
   component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

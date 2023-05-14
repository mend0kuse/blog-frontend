import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleSortFields } from './ArticleSortFields';

export default {
	title: 'features/ArticleSortFields',
	component: ArticleSortFields,
} as ComponentMeta<typeof ArticleSortFields>;

const Template: ComponentStory<typeof ArticleSortFields> = (args) => <ArticleSortFields {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

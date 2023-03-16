import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleSkeleton } from './ArticleSkeleton';

export default {
	title: 'entities/ArticleSkeleton',
	component: ArticleSkeleton,
} as ComponentMeta<typeof ArticleSkeleton>;

const Template: ComponentStory<typeof ArticleSkeleton> = (args) => <ArticleSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

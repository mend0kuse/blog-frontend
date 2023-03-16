import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleSkeleton } from './ArticleSkeleton';

export default {
	title: 'shared/ArticleSkeleton',
	component: ArticleSkeleton,
} as ComponentMeta<typeof ArticleSkeleton>;

const Template: ComponentStory<typeof ArticleSkeleton> = (args) => <ArticleSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

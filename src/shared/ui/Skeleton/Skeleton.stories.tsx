import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Skeleton } from './Skeleton';

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	height: 200,
	width: 200,
};

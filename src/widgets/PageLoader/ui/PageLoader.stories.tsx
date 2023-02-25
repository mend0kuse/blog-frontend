import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { PageLoader } from './PageLoader';

export default {
	title: 'widget/PageLoader',
	component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => (
	<PageLoader {...args} />
);

export const PageLoad = Template.bind({});

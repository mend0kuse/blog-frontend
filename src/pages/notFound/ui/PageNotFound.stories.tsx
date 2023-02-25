import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { PageNotFound } from './PageNotFound';

export default {
	title: 'pages/PageNotFound',
	component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = (args) => (
	<PageNotFound {...args} />
);

export const Page = Template.bind({});

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { PageNotFound } from './PageNotFound';

export default {
	title: 'pages/PageNotFound',
	component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = () => <PageNotFound />;

export const Page = Template.bind({});

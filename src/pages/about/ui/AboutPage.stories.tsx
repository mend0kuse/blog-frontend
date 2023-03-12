import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import AboutPage from './AboutPage';

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Page = Template.bind({});

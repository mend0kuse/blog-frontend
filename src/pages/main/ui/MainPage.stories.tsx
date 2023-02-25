import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import MainPage from './MainPage';

export default {
	title: 'pages/MainPage',
	component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
	<MainPage {...args} />
);

export const Page = Template.bind({});

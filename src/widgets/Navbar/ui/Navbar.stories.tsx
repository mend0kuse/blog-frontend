import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
	title: 'widget/Navbar',
	component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Bar = Template.bind({});

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
	title: 'widget/Sidebar',
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Bar = Template.bind({});

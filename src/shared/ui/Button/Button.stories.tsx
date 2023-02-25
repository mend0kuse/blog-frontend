import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Button, ThemeButton } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'text',
	theme: ThemeButton.PRIMARY,
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'text',
	theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'text',
	theme: ThemeButton.OUTLINE,
};

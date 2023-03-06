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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
	children: 'text',
	theme: ThemeButton.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'text',
	theme: ThemeButton.OUTLINE,
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'text',
	disabled: true,
	theme: ThemeButton.OUTLINE,
};

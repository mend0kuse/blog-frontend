import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Card } from './Card';

export default {
	title: 'shared/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

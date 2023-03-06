import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Text } from './Text';

export default {
	title: 'shared/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Full = Template.bind({});
Full.args = {
	title: 'Asd asd asd',
	text: 'Lorem ipsum dolor sit amet consectetur.',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
	title: 'Asd asd asd',
};

export const OnlyDesc = Template.bind({});
OnlyDesc.args = {
	text: 'Asd asd asd',
};

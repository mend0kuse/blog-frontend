import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
	title: 'shared/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K56z5fN_PGl1UwuI0ttN4ssneC6jSx9CRaUfrUfb&s',
};

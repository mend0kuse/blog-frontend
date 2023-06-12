import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
	title: 'entities/CommentList',
	component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const mock = new Array(5).fill({
	id: '1',
	text: '123123',
	user: {
		id: '1',
		role: ['Admin'],
		username: 'admin',
		avatar: 'https://i.pinimg.com/564x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
	},
});

export const Normal = Template.bind({});
Normal.args = {
	comments: mock,
};

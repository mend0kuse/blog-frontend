import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
	title: 'entities/CommentCard',
	component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	comment: {
		id: 1,
		articleId: 1,
		text: '123123',
		user: {
			id: '1',
			role: 'admin',
			profile: {},
			email: 'admin',
			avatar: 'https://i.pinimg.com/564x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
		},
	},
};

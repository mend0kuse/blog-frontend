import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Rating } from './Rating';

export default {
	title: 'entities/Rating',
	component: Rating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	title: 'Оцените статью',
	hasFeedback: true,
	feedbackTitle: 'Оставьте комментарий!',
};

export const Disabled = Template.bind({});
Disabled.args = {
	title: 'Спасибо за отзыв',
	initialRating: 4,
	hasFeedback: true,
	feedbackTitle: 'Оставьте комментарий!',
};

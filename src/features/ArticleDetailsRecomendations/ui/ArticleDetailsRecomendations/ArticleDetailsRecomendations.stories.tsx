import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleDetailsRecomendations } from './ArticleDetailsRecomendations';

export default {
	title: 'features/ArticleDetailsRecomendations',
	component: ArticleDetailsRecomendations,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleDetailsRecomendations>;

const Template: ComponentStory<typeof ArticleDetailsRecomendations> = (args) => (
	<ArticleDetailsRecomendations {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

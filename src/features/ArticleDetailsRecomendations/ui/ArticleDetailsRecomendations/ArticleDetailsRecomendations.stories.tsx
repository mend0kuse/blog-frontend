import { mockArticle } from '@/entities/Article';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleDetailsRecomendations } from './ArticleDetailsRecomendations';

const mock = new Array(3).fill(mockArticle);

export default {
	title: 'features/ArticleDetailsRecomendations',
	component: ArticleDetailsRecomendations,
	parameters: {
		mockData: [
			{
				url: 'http://localhost:8000/articles?_limit=3',
				method: 'GET',
				status: 200,
				response: mock,
			},
		],
	},
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleDetailsRecomendations>;

const Template: ComponentStory<typeof ArticleDetailsRecomendations> = (args) => (
	<ArticleDetailsRecomendations {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

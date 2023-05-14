import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticlesSearch } from './ArticlesSearch';

export default {
	title: 'features/ArticlesSearch',
	component: ArticlesSearch,
} as ComponentMeta<typeof ArticlesSearch>;

const Template: ComponentStory<typeof ArticlesSearch> = (args) => <ArticlesSearch {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

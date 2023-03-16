import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCodeBlock } from './ArticleCodeBlock';

export default {
	title: 'shared/ArticleCodeBlock',
	component: ArticleCodeBlock,
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <ArticleCodeBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

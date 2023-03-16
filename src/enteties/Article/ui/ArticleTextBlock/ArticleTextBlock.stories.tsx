import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTextBlock } from './ArticleTextBlock';

export default {
	title: 'shared/ArticleTextBlock',
	component: ArticleTextBlock,
} as ComponentMeta<typeof ArticleTextBlock>;

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => <ArticleTextBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

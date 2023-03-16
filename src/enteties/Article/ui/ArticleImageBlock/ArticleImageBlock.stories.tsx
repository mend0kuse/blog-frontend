import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleImageBlock } from './ArticleImageBlock';

export default {
	title: 'shared/ArticleImageBlock',
	component: ArticleImageBlock,
} as ComponentMeta<typeof ArticleImageBlock>;

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => <ArticleImageBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

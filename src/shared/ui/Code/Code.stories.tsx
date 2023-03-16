import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Code } from './Code';

export default {
	title: 'shared/Code',
	component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	text: `import { type ComponentMeta, type ComponentStory } from '@storybook/react';

	import { Code } from './Code';
	
	export default {
		title: 'shared/Code',
		component: Code,
	} as ComponentMeta<typeof Code>;
	
	const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
	
	export const Primary = Template.bind({});
	Primary.args = {
		children: 'text',
	};
	`,
};

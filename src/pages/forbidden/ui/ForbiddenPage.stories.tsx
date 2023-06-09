import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import ForbiddenPage from './ForbiddenPage';

export default {
	title: 'pages/ForbiddenPage',
	component: ForbiddenPage,
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const Page = Template.bind({});

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';

export default {
	title: 'pages/AdminPanelPage',
	component: AdminPanelPage,
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />;

export const Page = Template.bind({});

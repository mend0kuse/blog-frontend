import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

export default {
	title: 'features/EditableProfileCard',
	component: EditableProfileCard,
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = () => <EditableProfileCard />;

export const Page = Template.bind({});

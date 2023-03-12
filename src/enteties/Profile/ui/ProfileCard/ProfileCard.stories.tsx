import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

export default {
	title: 'enetities/ProfileCard',
	component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = () => <ProfileCard />;

export const Card = Template.bind({});

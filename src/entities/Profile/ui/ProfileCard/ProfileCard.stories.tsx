import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Card = Template.bind({});
Card.args = {
	readOnly: true,
	data: {
		first: 'Семён',
		lastname: 'Васильев',
		age: 1,
		currency: Currency.RUB,
		country: Country.Russia,
		city: 'Irkutsk',
		username: 'admin',
		avatar: 'https://i.pinimg.com/564x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
	},
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};

export const Error = Template.bind({});
Error.args = {};

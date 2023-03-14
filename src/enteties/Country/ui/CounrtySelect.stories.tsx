import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Country } from '../types/Country';
import { CountrySelect } from './CountrySelect';

export default {
	title: 'entities/Country',
	component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Select = Template.bind({});
Select.args = {
	value: Country.Armenia,
};

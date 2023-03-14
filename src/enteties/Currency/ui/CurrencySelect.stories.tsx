import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Currency } from '../types/Currency';
import { CurrencySelect } from './CurrencySelect';

export default {
	title: 'entities/Currency',
	component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Select = Template.bind({});
Select.args = {
	value: Currency.EUR,
};
